Ext
		.define(
				'NewsHolder.util.ListPaging',
				{
					extend : 'Ext.plugin.ListPaging',

					config : {
						autoPaging : true,
						loadMoreText : '더 보기',
						startIndex : 1
					},

					loadNextPage : function() {
						var KSController = NewsHolder.app
								.getController('KeywordSearchController');
						var searchResultStore = Ext
								.getStore('searchResultStore');
						this.setStartIndex(this.getStartIndex()+10);

						var savedURL = KSController.getSaveURL();
						savedURL = savedURL + "&start="+this.getStartIndex();
						console.log(savedURL);

						var encodedNaverUrl = encodeURIComponent(savedURL);
						var feedUrl = "http://iamapark.cafe24.com/fullrss/makefulltextfeed.php?url="
								+ encodedNaverUrl + "&format=json";

						searchResultStore.getProxy().setUrl(feedUrl);
						searchResultStore.load({});

						// searchList.setStore(searchResultStore);
					}
				});