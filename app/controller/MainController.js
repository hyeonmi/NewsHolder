Ext.define('NewsHolder.controller.MainController', {
	extend : 'Ext.app.Controller',

	config : {
		refs : {
			mainPanel : '#mainPanel',
			articlePanel : '#articlePanel',
			articleContent : '#articleContent',
			titlebar : '#titlebar',
			detailArticle : '#detailArticle',
			newsListTopImage : '#newsListTopImage',
			mainRssList : "#mainRssList",
			homeButton : "#homeButton",
			mainSearchButton : "#mainSearchButton",
			alBackButton : "#alBackButton",
			mainRssAddBtn : '#mainRssAddBtn',
			mainKeywordGroupBtn : '#mainKeywordGroupBtn',
			mainScrapBtn : '#mainScrapBtn',
	
				
		},
		control : {
			mainRssList : {
				itemtap : 'mainRssListTap',
			},

			mainRssAddBtn : {
				tap : 'onMainRssAddTap',
			},
			mainKeywordGroupBtn : {
				tap : 'onMainKeywordGroupTap',
			},
			mainScrapBtn : {
				tap : 'onMainScrapTap',
			},

		}
	},
	//tap function(Ext.Button this, Ext.EventObject e, Object eOpts)
	// RSS추가 Tap
	onMainRssAddTap : function(obj) {
		this.getTitlebar().setTitle('RSS 추가');
		this.getMainSearchButton().hide();
		this.getMainPanel().animateActiveItem(Ext.getCmp('rssPanelId'), {
			type : 'slide',
			direction : 'left'
		});
		this.getHomeButton().show();

	},
	// 키워드 그룹 Tap
	onMainKeywordGroupTap : function() {
		this.getTitlebar().setTitle('키워드 모음');
		this.getMainPanel().animateActiveItem(Ext.getCmp('keywordGroupPanelId'), {
			type : 'slide',
			direction : 'left'
		});
		this.getMainSearchButton().hide();
		this.getHomeButton().show();

	},
	// 스크랩 Tap
	onMainScrapTap : function() {
		this.getTitlebar().setTitle('스크랩 모음');
		this.getMainSearchButton().hide();
		this.getMainPanel().animateActiveItem(Ext.getCmp('scrapPanel'), {
			type : 'slide',
			direction : 'left'
		});
		this.getHomeButton().show();
		localStorage.History_navigator = 'Scrap';
	},

	// 신문사 아이콘 Tap
	mainRssListTap : function(list, index, item, record, e) {
		// 각 신문사 아이콘 클릭
		this.getTitlebar().setTitle(record.data.name);
		this.getMainSearchButton().hide();
		this.getMainPanel().animateActiveItem(1, {
			type : 'slide',
			direction : 'left'
		});
		var ArticleController = this.getApplication().getController(
				'ArticleController');
		ArticleController.refreshArticleList(record);

		localStorage.History_navigator = "News";
		this.getAlBackButton().hide();
		this.getHomeButton().show();
	},
});