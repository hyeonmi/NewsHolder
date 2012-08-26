Ext.define('NewsHolder.controller.ButtonController', {
	extend : 'Ext.app.Controller',

	config : {

		controllers : [],

		refs : {
			feedIcon : "#feedIcon",
			homeButton : "#homeButton",
			articleScrapButton : "#articleScrapButton",
			mainSearchButton : "#mainSearchButton",
			backButton : "#prevButton",
			main:"#main"
		},

		control : {
			backButton : {
				tap : 'onBackButtonTap'
			},
			'#article_font_size_up' : {
				tap : 'font_size_up'
			},
			'#article_font_size_down' : {
				tap : 'font_size_down'
			},
			homeButton : {
				tap : "homeButtonTap",
			},
			articleScrapButton : {
				tap : "articleScrapButtonTap",
			},
			mainSearchButton : {
				tap : "mainSearchButtonTap",
			},
		}
	},

	/** 뒤로가기 버튼을 눌렀을 때 */
	onBackButtonTap : function(button, event) {
		var mainController = this.getApplication().getController("MainController");
		var ArticleController = this.getApplication().getController("ArticleController");

		// Back 버튼을 눌렀을 때 바로 뒤 화면으로 이동하는 기능을 구현해야 합니다.
		mainController.getMain().setActiveItem(1);
		ArticleController.getList().deselectAll();
		mainController.getTitlebar().setTitle("News");
		this.getBackButton().show();
	},

	/** 기사 화면에서 글자 키우기 버튼을 눌렀을 때 */
	font_size_up : function(button, event) {
		var current = parseInt($("#mainArticle").css("font-size"));
		console.log(current);
		$("#mainArticle").css("font-size", (++current) + "px");
	},

	/** 기사 화면에서 글자 줄이기 버튼을 눌렀을 때 */
	font_size_down : function(button, event) {
		var current = parseInt($("#mainArticle").css("font-size"));
		console.log(current);
		$("#mainArticle").css("font-size", (--current) + "px");
	},

	/** 왼쪽 상단의 홈 버튼을 눌렀을 때 */
	homeButtonTap : function(button, event) {
		var mainController = this.getApplication().getController("MainController");
		var ArticleController = this.getApplication().getController("ArticleController");
		mainController.getMain().animateActiveItem(0, {
			type : "slide",
			direction : "left"
		});
		this.getHomeButton().hide();
		this.getArticleScrapButton().hide();
		ArticleController.getList().deselectAll();
		mainController.getTitlebar().setTitle("SMART NEWS");
		this.getMainSearchButton().show();
		this.getBackButton().hide();
	},

	/** 기사 화면에서 오른쪽 상단의 스크랩 버튼을 눌렀을 때 */
	// ///////////////////////
	articleScrapButtonTap : function(button, event) {
		
		var mainController = this.getApplication().getController("MainController");
		var news = mainController.getArticle().items.items[0].items.items[1];
		
		console.log(news);
		
		/**var store = Ext.data.StoreManager.lookup('Scraps');
        var title = record.get('rssName');
        var description = record.get('rssUrl');
        var pubDate = record.get('rssImage');
        var scrapDate = 
        var link = 
        	
        store.add({ 
        	title : title,
        	description : description ,
        	pubDate : pubDate,
        	scrapDate: scrapDate,
        	link: link
        });
        store.sync();
        */ 
	},

	/** 오른쪽 상단의 검색 버튼을 눌렀을 때 */
	// //////////////////////////////////////////////
	mainSearchButtonTap : function(button, event) {
		console.log("검색 버튼 탭!!");
		var mainController = this.getApplication().getController(
				"MainController");
		mainController.getMain().animateActiveItem(
				mainController.getKeywordpanel(), {
					type : "slide",
					direction : "left"
				});
		mainController.getTitlebar().setTitle("키워드 검색");
		Ext.getCmp("homeButton").show();
		this.getMainSearchButton().hide();
	},

});