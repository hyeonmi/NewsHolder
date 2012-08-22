Ext
		.define(
				'NewsHolder.controller.KeywordSearchController',
				{
					extend : 'Ext.app.Controller',

					config : {
						refs : {
							searchButton : '#searchButton',
							searchStore : '#searchResultStore',
							searchField : '#searchField',
							searchList : '#searchList',
							searchMain : '#searchMain',
							articlePanel : '#selectedArticle',
							searchBackButton : '#prevButton',

						},

						control : {
							searchButton : {
								tap : 'onSearchButtonTap'
							},
							searchList : {
								itemtap : 'onSearchListItemTap'
							},
							searchBackButton : {
								tap : 'onSearchBackButtonTap'
							}
						}
					},

					onSearchBackButtonTap : function(button, e, options) {
						this.getSearchMain().animateActiveItem(
								this.getSearchMain(), {
									type : "slide",
									direction : "right"
								});
						this.getApplication().getController('Main')
								.getTitlebar().setTitle("키워드 모음");
						searchBackButton.hide();
					},

					onSearchButtonTap : function(button, e, options) {
						console.log("키워드 컨트롤러 검색버튼 탭");
						// 검색어를 입력하는 필드에서 값을 얻어온다.
						var input = this.getSearchField().getValue();

						// 얻어온 값 중에 한글을 네이버 검색 API query형식에 맞게 utf-8로 인코딩한다.
						var encodedInput = encodeURIComponent(input);

						// 인코딩된 한글을 url에 합치고 이것을 또다시 인코딩해서 fullrss 서버로 보낸다.
						var naverUrl = "http://openapi.naver.com/search?key=907ed5cd8ab441dc61ffb0016280e906&query="
								+ encodedInput + "&target=news";
						var encodedNaverUrl = encodeURIComponent(naverUrl);
						var feedUrl = "http://iamapark.cafe24.com/fullrss/makefulltextfeed.php?url="
								+ encodedNaverUrl + "&format=json";

						// 검색결과 store의 proxy를 얻어서 데이터를 읽어오는 url을 feedUrl로 설정한다.
						// 그리고 나서 스토어를 load시켜 fullrss 서버에서 json값을 읽어온다.
						var store = Ext.getStore("searchResultStore");
						store.getProxy().setUrl(feedUrl);
						store.load();

						var searchTpl = new Ext.XTemplate('<div>{title}</div>');

						// list를 읽어와서 변경된 store를 지정해주고 list를 보여주는 Template도
						// 새로 설정하고 나서 리스트를 갱신한다.
						var list = this.getSearchList();
						list.setStore(store);
						list.setItemTpl(searchTpl);
						list.refresh();
					},

					onSearchListItemTap : function(dataview, index, target,
							record, e, options) {
						/**
						 * list 하나로 두 개의 store가 같이 사용하고 있다. 그러므로 store가 실시간 검색어
						 * 순위 store일 때와검색결과 store일 때 tap 이벤트를 다르게 처리해야 한다. if문에는
						 * 검색결과 store와 현재 리스트에 연결되어있는 store가 같은 지를 판별하는 문장이다.
						 * 같으면 데이터를 연결해주고 기사를 보여준다. else문에는 검색결과 store와 현재 리스트에
						 * 연결되어있는 store가 다른 경우이다. 다른 경우에는 list에서 선택된 검색어로 네이버 뉴스
						 * 검색을 하여 list에 나타낸다.
						 */
						if (this.getSearchList().getStore().getId() == Ext
								.getStore("searchResultStore").getId()) {

							var mainController = this.getApplication()
									.getController('Main');
							this.getSearchMain().animateActiveItem(
									this.getArticlePanel(), {
										type : "slide",
										direction : "left"
									});
							this.getArticlePanel().setData(record.data);
							mainController.getTitlebar().setTitle(
									record.data.title);
							//searchBackButton.show();

							localStorage.flag = index;
							Ext.getCmp("articleScrapButton").show();
						} else {
							var rankData = Ext.getStore("rankStore").getAt(
									index).getData();
							this.getSearchField().setValue(rankData.keyword);
							this.onSearchButtonTap();
						}
					}

				});