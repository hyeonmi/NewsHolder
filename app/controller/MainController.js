Ext.define('NewsHolder.controller.MainController', {
	extend : 'Ext.app.Controller',
	constructor : function (config){
		this.initConfig(config);
		animation = Ext.create('NewsHolder.util.ManagerController');
	},
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
		animation.onMoveSlideLeft('RSS 추가', 'rssPanelId', ['mainSearchButton'], ['homeButton']);
	},
	// 키워드 그룹 Tap
	onMainKeywordGroupTap : function() {
		animation.onMoveSlideLeft('키워드 모음', 'keywordGroupPanelId', ['mainSearchButton'], ['homeButton']);
	},
	
	// 스크랩 Tap
	onMainScrapTap : function() {
		animation.onMoveSlideLeft('스크랩 모음', 'scrapPanel', ['mainSearchButton'], ['homeButton']);
		localStorage.History_navigator = "Scrap";
	},

	// 신문사 아이콘 Tap
	mainRssListTap : function(list, index, item, record, e) {
		animation.onMoveSlideLeft(record.data.mainRssName, 'articleListId', ['mainSearchButton'], ['homeButton']);

		var ArticleController = this.getApplication().getController(
				'ArticleController');
		ArticleController.refreshArticleList(record);
	},
});