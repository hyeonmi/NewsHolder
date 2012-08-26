Ext.define('NewsHolder.controller.ArticleController', {
    extend: 'Ext.app.Controller',
    
    requires:[
  	  		'NewsHolder.util.TagExtractor',
  	],
  	
  	launch: function () {

        this.getArticle().on('swipe', this.onSwipe);
        console.log("swipe이벤트 등록");
  	},

    config: {
        models: [
            
        ],
        views: [
            
        ],

        refs: {
        	list : '#articleList',
        	articleList : '#articlePanel',
        	backButton : "#prevButton",
        	articleScrapButton : "#articleScrapButton",
        	article: "article",
        	Feed: "#Feed"
        },
        
        control: {
			"#articleList" : {
				itemtap : 'onArticleTap'
			},
        },
  
    },
    
    onSwipe:function(event){
    	console.log("swipe");
    },
    
    refreshArticleList : function(record){
    	var store = Ext.getStore("Feed");
		store.getProxy().setUrl("http://iamapark.cafe24.com/fullrss/makefulltextfeed.php?url=" + record.data.url + "&format=json");
		store.load({
			callback : function(records, operation, success) {
				var extractor = Ext.create("NewsHolder.util.TagExtractor");
				this.getList().refresh();
				
				for ( var i = 0; i < records.length; i++) {
					records[i].data.description = extractor.removeATag(records[i].data.description);
				}
				extractor.extractTag("img src", store, this, record);
			},
			scope : this
		});
    },
    
	/** 기사 리스트에서 기사를 눌렀을 때 */
	onArticleTap : function(dataview, index, target, record, e, options) {

		console.log(Ext.getStore("Feed"));
		
		var MainController = this.getApplication().getController("MainController");

		MainController.getMain().animateActiveItem(MainController.getArticle(), {
			type : "slide",
			direction : "left"
		});
		this.getArticleList().setData(record.data);
		this.getBackButton().show();

		localStorage.flag = index;
		this.getArticleScrapButton().show();
	},
	
	onArticleImageTextTap : function(nth){
		var MainController = this.getApplication().getController("MainController");

		console.log(Ext.getStore("Feed").getAt(nth));
		console.log("onArticleImageTextTap called!!");
		this.getArticleList().setData(Ext.getStore("Feed").getAt(nth).data);
		MainController.getMain().animateActiveItem(MainController.getArticle(), {
			type : "slide",
			direction : "left"
		});
		this.getBackButton().show();
		localStorage.flag = nth;
		this.getArticleScrapButton().show();
	},
});