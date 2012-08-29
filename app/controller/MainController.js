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
	
	
	onAnimateView : function(title, objId){
		this.getTitlebar().setTitle(title);
		this.getMainPanel().animateActiveItem(objId, {
			type : 'slide',
			direction : 'left'
		});
		this.getMainSearchButton().hide();
		this.getHomeButton().show();		
	},
	
	//tap function(Ext.Button this, Ext.EventObject e, Object eOpts)
	// RSS추가 Tap
	onMainRssAddTap : function(obj) {
		this.onAnimateView('RSS 추가', Ext.getCmp('rssPanelId'));

	},
	// 키워드 그룹 Tap
	onMainKeywordGroupTap : function() {
		this.onAnimateView('키워드 모음', Ext.getCmp('keywordGroupPanelId'));
	},
	
	// 스크랩 Tap
	onMainScrapTap : function() {
		this.onAnimateView('스크랩 모음', Ext.getCmp('scrapPanel'));
	},

	// 신문사 아이콘 Tap
	mainRssListTap : function(list, index, item, record, e) {
		this.onAnimateView(record.data.name, Ext.getCmp('articleListId'));

		var ArticleController = this.getApplication().getController(
				'ArticleController');
		ArticleController.refreshArticleList(record);

	},
});