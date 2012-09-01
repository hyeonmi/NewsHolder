Ext
		.define(
				'NewsHolder.controller.KeywordSearchController',
				{
					extend : 'Ext.app.Controller',
					require : [ 'NewsHolder.util.ListPaging'],
					config : {
						startIndex : 1,
						refs : {
							searchButton : '#searchButton',
							searchStore : '#searchResultStore',
							searchField : '#searchField',
							searchList : '#searchList',
							searchBackButton : '#searchBackButton',
							articleContent : "#articleContent",
							rankList : '#rankList',
							registerKeywordButton : '#registerKeywordButton'
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
							},
							registerKeywordButton : {
								tap : 'onRegisterKeywordButtonTap'
							}
						}
					},

					// 검색을 하고나서, 다시 메인에서 검색 버튼을 눌렀을 때 모든 것을 초기화한다.
					resetModifiedComponent : function() {
						this.getRankList().setHidden(false);
						this.getSearchList().setHidden(true);
						this.setStartIndex(1);
						Ext.getStore('searchResultStore').removeAll();
						this.getSearchField().setValue("");
					},

					onSearchBackButtonTap : function(button, e, options) {
						animation.onMoveSlideRight('키워드 검색', 'keywordPanel', [
								'searchBackButton', 'articleScrapButton' ], [
								'homeButton', 'registerKeywordButton' ]);
					},

					onRegisterKeywordButtonTap : function(button, e, options) {
						var searchText = this.getSearchField().getValue();
						var kgStore = Ext.getStore("keywordGroupStore");

						Ext.Msg.confirm('확인', '"' + searchText + '"'
								+ '를 키워드 모음에 등록하시겠습니까?',
								function(buttonId, value, opt) {
									if (buttonId == 'yes') {
										if (kgStore.find('keywordName',
												searchText) > -1) { // 중복확인
											Ext.Msg.alert('알림',
													'해당 키워드가 이미 등록되어있습니다.',
													Ext.emptyFn);
										} else {
											kgStore.add({
												keywordName : searchText
											});
											kgStore.sync();
											Ext.Msg.alert('알림', '"'
													+ searchText + '"'
													+ '가 키워드 모음에 등록되었습니다.',
													Ext.emptyFn);
										}
									}
								}, this);
					},

					// searchResultStore에 beforeload 이벤트를 listener로 지정해놨다.
					// beforeload 이벤트가 발생하면 이 메소드를 수행하게 했다.
					changeProxyUrl : function() {
						var searchResultStore = Ext
								.getStore('searchResultStore');

						// 검색어를 입력하는 필드에서 값을 얻어온다.
						var input = this.getSearchField().getValue();

						// 얻어온 값 중에 한글을 네이버 검색 API query형식에 맞게 utf-8로 인코딩한다.
						var encodedInput = encodeURIComponent(input);

						// 인코딩된 한글을 url에 합치고 이것을 또다시 인코딩해서 fullrss 서버로 보낸다.
						var naverUrl = "http://openapi.naver.com/search?key=907ed5cd8ab441dc61ffb0016280e906&query="
								+ encodedInput
								+ "&target=news&start="
								+ this.getStartIndex();
						console.log(naverUrl);
						var encodedNaverUrl = encodeURIComponent(naverUrl);
						var feedUrl = "http://iamapark.cafe24.com/fullrss/makefulltextfeed.php?url="
								+ encodedNaverUrl + "&format=json";

						// 검색결과 store의 proxy를 얻어서 데이터를 읽어오는 url을 feedUrl로 설정한다.
						// 그리고 나서 스토어를 load시켜 fullrss 서버에서 json값을 읽어온다.
						searchResultStore.getProxy().setUrl(feedUrl);
						this.setStartIndex(this.getStartIndex() + 10);
					},

					onSearchButtonTap : function(button, e, options) {
						var searchList = this.getSearchList();
						var searchResultStore = Ext
								.getStore('searchResultStore');

						this.getRankList().setHidden(true);
						searchList.setHidden(false);
						this.getRegisterKeywordButton().show();

						// 센차터치 ListPaging 플러그인에 존재하는 버그로 인해 수동으로 마스크를 해줘야 한다.
						searchList.setMasked({
							xtype : 'loadmask',
							centered : true
						});
						
						searchResultStore.load({
							callback : function() {
								searchList.setMasked(false);
							}
						});
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
						animation.onMoveSlideLeft('키워드 검색', 'articlePanel', [
								'homeButton', 'registerKeywordButton' ], [
								'searchBackButton', 'articleScrapButton' ]);

						console.log(record.data.description);
						this.getArticleContent().setData(record.data);
					}
				});