Ext.define('NewsHolder.controller.ScrapController', {
	extend : 'Ext.app.Controller',

	config : {
		models : [

		],
		views : [

		],

		refs : {
			scrapList : "#scrapList",
			article : 'article',
			scrapBackButton : '#scrapBackButton',
			scrapHomeButton : '#homeButton',
			scrapPanel : '#scrapPanel',
			mainPanel : '#main'
		},

		control : {
			'#scrapList' : {
				itemtap : "scrapListTap"
			},
			scrapBackButton : {
				tap : 'scrapBackButtonTap'
			}
		},

	},
	/** 스크랩 리스트에서 기사 제목을 탭했을 때 실행 */
	// /////////////////////////////////////
	scrapListTap : function(list, index, item, record, e) {
		var Maincontroller = this.getApplication().getController(
				"MainController");
		this.getMainPanel().animateActiveItem(2, {
			type : "slide",
			direction : "left"
		});
		Maincontroller.getArticleList().setData(record.data);
		Maincontroller.getTitlebar().setTitle(record.data.title);
		this.getScrapBackButton().show();
		this.getScrapHomeButton().hide();

		localStorage.flag = index;
		Ext.getCmp("articleScrapButton").show();
		// this.getArticleList().setData(record.data);
	},

	scrapBackButtonTap : function(button, e, options) {
		console.log("scrapBackButtonTap");
		this.getMainPanel().animateActiveItem(4, {
			type : "slide",
			direction : "right"
		});
		this.getApplication().getController('MainController').getTitlebar()
				.setTitle("스크랩 모음");
		this.getScrapHomeButton().show();
		this.getScrapBackButton().hide();
	},

	refreshScrapList : function() {
		var scrapStore = Ext.getStore("Scraps");
		scrapStore.load();
		this.getScrapList().setStore(scrapStore);
	},
});