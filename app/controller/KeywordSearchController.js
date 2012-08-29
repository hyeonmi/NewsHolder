Ext
		.define(
				'NewsHolder.controller.KeywordSearchController',
				{
					extend : 'Ext.app.Controller',
					require : [ 'NewsHolder.util.ListPaging' ],
					config : {
						refs : {
							searchButton : '#searchButton',
							searchStore : '#searchResultStore',
							searchField : '#searchField',
							searchList : '#searchList',
							searchMain : '#searchMain',
							searchBackButton : '#searchBackButton',
							articleScrapButton : '#articleScrapButton',
							searchHomeButton : '#homeButton',
							articlePanel : "#articlePanel",
							articleContent : "#articleContent",
							mainPanel : '#mainPanel',
							rankList : '#rankList'
						},

						control : {
							searchButton : {
								tap : 'onSearchButtonTap'
							},
							rankList : {
								itemtap : 'onRankListItemTap'
							},
							searchBackButton : {
								tap : 'onSearchBackButtonTap'
							},
							searchList : {
								itemtap : 'onSearchListItemTap'
							}
						}
					},

					// 검색을 하고나서, 다시 메인에서 검색 버튼을 눌렀을 때 모든 것을 초기화한다.
					setRankStore : function() {
						this.getRankList().setHidden(false);
						this.getSearchList().setHidden(true);
						Ext.getStore('searchResultStore').removeAll();
						this.getSearchField().setValue("");
					},

					onSearchBackButtonTap : function(button, e, options) {
						this.getMainPanel().animateActiveItem(6, {
							type : "slide",
							direction : "right"
						});

						this.getApplication().getController('MainController')
								.getTitlebar().setTitle("키워드 검색");
						button.hide();
						this.getSearchHomeButton().show();
						this.getArticleScrapButton().hide();
					},

					onSearchButtonTap : function(button, e, options) {
						var searchList = this.getSearchList();
						var rankList = this.getRankList();
						var searchResultStore = Ext
								.getStore('searchResultStore');

						rankList.setHidden(true);
						searchList.setHidden(false);
						searchList.setMasked({
							xtype : 'loadmask',
							centered : true
						});

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
						searchResultStore.getProxy().setUrl(feedUrl);

						// 그림 빼기(작업 중)
						// store.getData().items[i].data.description.match(tag);

						searchResultStore.load({
							callback : function() {
								searchList.setMasked(false);
							}
						});

						searchList.setStore(searchResultStore);
						searchList.refresh();
					},

					onRankListItemTap : function(dataview, index, target,
							record, e, options) {
						var rankData = Ext.getStore("rankStore").getAt(index)
								.getData();
						this.getSearchField().setValue(rankData.keyword);
						this.onSearchButtonTap();
					},

					onSearchListItemTap : function(dataview, index, target,
							record, e, options) {
						var extractor = Ext
								.create('NewsHolder.util.TagExtractor');

						this.getMainPanel().animateActiveItem(2, {
							type : "slide",
							direction : "left"
						});

						this.getSearchBackButton().show();
						this.getArticleScrapButton().show();
						this.getSearchHomeButton().hide();

						record.data.description = extractor
								.removeButtonTag(record.data.description);
						record.data.description = extractor
								.removeATag(record.data.description);
						record.data.description = record.data.description
								.replace("[이 시각 많이 본 뉴스]", "");
						this.getArticleContent().setData(record.data);
					}
				});