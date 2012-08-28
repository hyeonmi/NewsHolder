Ext.define('NewsHolder.controller.ArticleController', {
    extend: 'Ext.app.Controller',
    
    requires:[
  	  		'NewsHolder.util.TagExtractor',
  	],
  	
  	launch: function () {
        this.getArticleContent().on('swipe', this.onSwipe);
        console.log("swipe이벤트 등록");
  	},

    config: {
        models: [
            
        ],
        views: [
            
        ],

        refs: {
        	list : '#articleList',
        	articleContent : '#articleContent',
        	articleBackButton : "#alBackButton",
        	articleScrapButton : "#articleScrapButton",
        	articleHomeButton:'#homeButton',
        	articlePanel: '#articlePanel',
        },
        
        control: {
			"#articleList" : {
				itemtap : 'onArticleTap'
			},
			articleBackButton:{
				tap:'onArticleBackButtonTap'
			}
        }
  
    },
    
    onSwipe:function(event){
    	console.log("swipe");
    },
    
    onArticleBackButtonTap:function(button, e, options){
		var mainController = this.getApplication().getController("MainController");

		// Back 버튼을 눌렀을 때 바로 뒤 화면으로 이동하는 기능을 구현해야 합니다.
		mainController.getMain().animateActiveItem(1, {
			type : "slide",
			direction : "right"
		});
		
		this.getList().deselectAll();
		mainController.getTitlebar().setTitle(mainController.getNewsPaperTitle());
		this.getArticleBackButton().hide();
		this.getArticleScrapButton().hide();
		this.getArticleHomeButton().show();
    },
    
    refreshArticleList : function(record){
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
		var mainController = this.getApplication().getController("MainController");

		mainController.getMain().animateActiveItem(2, {
			type : "slide",
			direction : "left"
		});
		this.getArticleContent().setData(record.data);
		this.getArticleBackButton().show();
		this.getArticleHomeButton().hide();

		localStorage.flag = index;
		this.getArticleScrapButton().show();
	},
	
	onArticleImageTextTap : function(nth){
		var MainController = this.getApplication().getController("MainController");

		console.log(Ext.getStore("Feed").getAt(nth));
		console.log("onArticleImageTextTap called!!");
		this.getArticleContent().setData(Ext.getStore("Feed").getAt(nth).data);
		MainController.getMain().animateActiveItem(2, {
			type : "slide",
			direction : "left"
		});
		this.getArticleBackButton().show();
		localStorage.flag = nth;
		this.getArticleScrapButton().show();
	},
});