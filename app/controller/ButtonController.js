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
		var id = 1;
		var thirdString = "";
		var mainController = this.getApplication().getController(
				"MainController");
		var news = mainController.getArticle().items.items[0].items.items[1]

		// 현재 화면에 띄워진 기사에 관한 정보를 얻어서 로컬 스토리지에 저장

		if (localStorage.getItem("scrap-counter") == null) { // 스크랩을 처음으로 저정할
																// 때,
			window.localStorage.setItem("scrap-counter", id);
			thirdString = "1";
		} else {
			id = parseInt(localStorage.getItem("scrap-counter")) + 1;
			thirdString = localStorage.getItem("scrap") + "," + id;
		}

		var data = {
			'id' : id,
			'title' : news._data.title,
			'description' : news._data.description,
			'pubDate' : news._data.pubDate,
		// link: this.getArticle().items.items[0].items.items[1]._data.link,
		// scrapDate: 스크랩한 시간,
		};

		localStorage.setItem("scrap-" + id, JSON.stringify(data));
		localStorage.setItem("scrap-counter", id);
		localStorage.setItem("scrap", thirdString);
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