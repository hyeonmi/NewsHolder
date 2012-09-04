Ext.define('NewsHolder.controller.ArticleController', {
	extend : 'Ext.app.Controller',

	requires : [ 'NewsHolder.util.TagExtractor', ],

	config : {
		startIndex : 0,
		tapModel:null,
		refs : {
			list : '#articleList',
			articleContent : '#articleContent',
			articleBackButton : "#alBackButton",
		},

		control : {
			list : {
				itemtap : 'onArticleTap',
			},
			articleBackButton : {
				tap : 'onArticleBackButtonTap'
			}, 
		}

	},

	onArticleBackButtonTap : function(button, e, options) {
		animation.onMoveSlideRight(null, 'articleListId', [ 'alBackButton',
				'articleScrapButton' ], [ 'homeButton' ]);
	},

	refreshArticleList : function(record) {
		/*var store = Ext.getStore('Feed');
		store.getProxy().setUrl(
				"http://iamapark.cafe24.com/fullrss/makefulltextfeed.php?url="
						+ record.data.mainRssUrl + "&format=json");
		
		store.load({
			callback : function(records, operation, success) {
				var extractor = Ext.create("NewsHolder.util.TagExtractor");
				this.getList().refresh();

				for ( var i = 0; i < records.length; i++) {
					records[i].data.description = extractor
							.removeATag(records[i].data.description);
				}
			},
			scope : this
		});*/
		
		this.setStartIndex(0);
		this.setTapModel(record);
		var store = Ext.getStore('Feed');
		console.log("dd");
		store.load({
			callback: function(records, operation, success) {
				store.add(records);
				console.log("load");
			}
		});
	},

	/** 기사 리스트에서 기사를 눌렀을 때 */
	onArticleTap : function(dataview, index, target, record, e, options) {
		animation.onMoveSlideLeft(null, 'articlePanel', [ 'homeButton' ], [
				'alBackButton', 'articleScrapButton' ]);

		this.getArticleContent().setData(record.data);
		console.log("original:\n"+record.data.originDesc);
		console.log("modified:\n"+record.data.description);
		localStorage.flag = index;
	},

	onArticleImageTextTap : function(nth) {
		animation.onMoveSlideLeft(null, 'articlePanel', [ 'homeButton' ], [
				'alBackButton', 'articleScrapButton' ]);

		console.log(Ext.getStore("Feed").getAt(nth));
		console.log("onArticleImageTextTap called!!");
		this.getArticleContent().setData(Ext.getStore("Feed").getAt(nth).data);

		localStorage.flag = nth;
	},
	
	changeProxyUrl: function(){
		var store = Ext.getStore("Feed");
		var url = "http://iamapark.cafe24.com/fullrss/makefulltextfeed.php?url=" + 
				 this.getTapModel().data.mainRssUrl + "&format=json"
		         +"&start=" + this.getStartIndex();
		store.getProxy().setUrl(url);
		console.log(url);
		this.setStartIndex(this.getStartIndex() + 10);
		console.log(this.getStartIndex());
	},
});