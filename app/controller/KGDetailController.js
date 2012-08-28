Ext
		.define(
				'NewsHolder.controller.KGDetailController',
				{
					extend : 'Ext.app.Controller',

					config : {
						refs : {
							kgDetailList : '#kgDetailList',
							kgDetailPanel : '#kgDetailPanel',
							searchBackButton : '#searchBackButton',
							articleScrapButton : '#articleScrapButton',
							kgDetailBackButton : '#kgDetailBackButton',
							kgDetailHomeButton : '#homeButton',
							kgDetailAlarmButton : '#kgDetailAlarmButton',
							kgArticleBackButton : '#kgArticleBackButton',
							articlePanel : "#articlePanel",
							articleContent : "#articleContent",
							mainPanel : "#mainPanel"
						},

						control : {
							kgDetailList : {
								itemtap : 'onKGDetailListItemTap'
							},
							kgDetailBackButton : {
								tap : 'onKgDetailBackButtonTap'
							},
							kgArticleBackButton : {
								tap : 'onKgArticleBackButtonTap'
							}
						}
					},

					setKeywordArticleList : function() {
						console.log('setKeywordList');
						// 검색어를 입력하는 필드에서 값을 얻어온다.
						var input = this.getApplication().getController(
								"KeywordGroupController").getSelectedKeyword();

						console.log(this.getApplication().getController(
								"KeywordGroupController").getSelectedKeyword());

						// 얻어온 값 중에 한글을 네이버 검색 API query형식에 맞게 utf-8로 인코딩한다.
						var encodedInput = encodeURIComponent(input);

						// 인코딩된 한글을 url에 합치고 이것을 또다시 인코딩해서 fullrss 서버로 보낸다.
						var naverUrl = "http://openapi.naver.com/search?key=907ed5cd8ab441dc61ffb0016280e906&query="
								+ encodedInput + "&target=news";
						var encodedNaverUrl = encodeURIComponent(naverUrl);
						var feedUrl = "http://iamapark.cafe24.com/fullrss/makefulltextfeed.php?url="
								+ encodedNaverUrl + "&format=json";

						var store = Ext.getStore("searchResultStore");
						store.getProxy().setUrl(feedUrl);
						store.load();
						var list = this.getKgDetailList();
						list.setStore(store);
						list.refresh();
					},

					initKGDetailList : function() {
						Ext.getStore('searchResultStore').removeAll();
						var list = this.getKgDetailList();
						list.refresh();
					},

					onKgDetailBackButtonTap : function(button, e, options) {
						this.initKGDetailList();

						this.getMainPanel().animateActiveItem(3, {
							type : "slide",
							direction : "right"
						});
						button.hide();
						this.getKgDetailAlarmButton().hide();
						this.getKgDetailHomeButton().show();
					},

					onKgArticleBackButtonTap : function(button, e, options) {
						this.getMainPanel().animateActiveItem(7, {
							type : 'slide',
							direction : 'right'
						});
						this.getKgArticleBackButton().hide();
						this.getArticleScrapButton().hide();
						this.getKgDetailBackButton().show();
						this.getKgDetailAlarmButton().show();
					},

					onKGDetailListItemTap : function(dataview, index, target,
							record, e, options) {
						var extractor = Ext
								.create('NewsHolder.util.TagExtractor');

						this.getMainPanel().animateActiveItem(2, {
							type : "slide",
							direction : "left"
						});

						record.data.description = extractor
								.removeButtonTag(record.data.description);
						record.data.description = extractor
								.removeATag(record.data.description);
						record.data.description = record.data.description
								.replace("[이 시각 많이 본 뉴스]", "");
						this.getArticleContent().setData(record.data);

						this.getKgArticleBackButton().show();
						this.getArticleScrapButton().show();
						this.getKgDetailBackButton().hide();
						this.getKgDetailAlarmButton().hide();
					}
				});