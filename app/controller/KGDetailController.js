Ext
		.define(
				'NewsHolder.controller.KGDetailController',
				{
					extend : 'Ext.app.Controller',

					config : {
						startIndex : 1,
						refs : {
							kgDetailList : '#kgDetailList',
							kgDetailBackButton : '#kgDetailBackButton',
							kgArticleBackButton : '#kgArticleBackButton',
							articleContent : "#articleContent",
							articleContentOther : "#articleContent2",
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

					changeProxyUrl : function() {
						var kgResultStore = Ext.getStore('kgResultStore');

						var input = this.getApplication().getController(
								"KeywordGroupController").getSelectedKeyword();

						// 얻어온 값 중에 한글을 네이버 검색 API query형식에 맞게 utf-8로 인코딩한다.
						var encodedInput = encodeURIComponent(input);

						// 인코딩된 한글을 url에 합치고 이것을 또다시 인코딩해서 fullrss 서버로 보낸다.
						var naverUrl = "http://openapi.naver.com/search?key=907ed5cd8ab441dc61ffb0016280e906&query="
								+ encodedInput
								+ "&target=news&start="
								+ this.getStartIndex();
						var encodedNaverUrl = encodeURIComponent(naverUrl);
						var feedUrl = "http://iamapark.cafe24.com/fullrss/makefulltextfeed.php?url="
								+ encodedNaverUrl + "&format=json";

						// 검색결과 store의 proxy를 얻어서 데이터를 읽어오는 url을 feedUrl로 설정한다.
						// 그리고 나서 스토어를 load시켜 fullrss 서버에서 json값을 읽어온다.
						kgResultStore.getProxy().setUrl(feedUrl);
						this.setStartIndex(this.getStartIndex() + 10);
					},

					initKeywordArticleList : function() {
						var kgResultStore = Ext.getStore('kgResultStore');
						var kgDetailList = this.getKgDetailList();

						kgDetailList.setMasked({
							xtype : 'loadmask',
							centered : true,
							message: '로딩 중...',
						    indicator: false
						});

						kgResultStore.load({
							callback : function() {
								kgDetailList.setMasked(false);
							}
						});
					},

					resetModifiedComponent : function() {
						Ext.getStore('kgResultStore').removeAll();
						this.setStartIndex(1);
					},

					onKgDetailBackButtonTap : function(button, e, options) {
						this.resetModifiedComponent();

						animation.onMoveSlideRight(null, 'keywordGroupPanelId',
								[ 'kgDetailBackButton' ], [ 'homeButton' ]);
					},

					onKgArticleBackButtonTap : function(button, e, options) {
						animation.onMoveSlideRight(null, 'kgDetailPanel', [
								'articleScrapButton', 'kgArticleBackButton' ],
								[ 'kgDetailBackButton' ]);
					},

					onKGDetailListItemTap : function(dataview, index, target,
							record, e, options) {
						localStorage.flag = index;
						console.log("onKGDetailListItemTap");

						var panelFlag = localStorage.panelFlag;

						if (panelFlag == "articleContent") {
							animation.onMoveSlideLeft(null, 'articlePanel', [
									'articleContent2', 'kgDetailBackButton', ],
									[ 'articleContent', 'kgArticleBackButton',
											'articleScrapButton' ]);
							this.getArticleContent().setData(record.data);
						} else {
							animation.onMoveSlideLeft(null, 'articlePanel', [
									'articleContent', 'kgDetailBackButton', ],
									[ 'articleContent2', 'kgArticleBackButton',
											'articleScrapButton' ]);
							this.getArticleContentOther().setData(record.data);
						}

						console.log("original:\n" + record.data.originDesc);
						console.log("modified:\n" + record.data.description);
					}
				});