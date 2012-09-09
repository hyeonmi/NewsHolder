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
				itemtap : 'onMainRssListTap',
				itemtaphold : 'onMainRssListTapHold',
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
		animation.onMoveSlideLeft('Add RSS', 'rssPanelId', ['mainSearchButton'], ['homeButton']);
	},
	
	// 키워드 그룹 Tap
	onMainKeywordGroupTap : function() {
		animation.onMoveSlideLeft('My Keyword', 'keywordGroupPanelId', ['mainSearchButton'], ['homeButton']);
		localStorage.History_navigator = "Keyword";
	},
	
	// 스크랩 Tap
	onMainScrapTap : function() {
		animation.onMoveSlideLeft('My Scrap', 'scrapPanel', ['mainSearchButton'], ['homeButton']);
		localStorage.History_navigator = "Scrap";
		NewsHolder.util.PushNotification.push();
	},

	// 신문사 아이콘 Tap
	onMainRssListTap : function(list, index, item, record, e) {
		if (!list.lastTapHold || (new Date() - list.lastTapHold > 1000)) {
			animation.onMoveSlideLeft(record.data.mainRssName, 'articleListId', ['mainSearchButton'], ['homeButton']);
	
			var ArticleController = this.getApplication().getController(
					'ArticleController');
			ArticleController.refreshArticleList(record, index);
			localStorage.History_navigator = "News";
		}
	},
	
	//신문사 아이콘 TapHold
	onMainRssListTapHold : function(list, index, item, record, e) {

		list.lastTapHold = new Date();
		Ext.Msg.confirm("알림", "해당 RSS을 삭제하시겠습니까",
				function(buttonId, value, opt) {
					if (buttonId == "yes") {
						var store = Ext.getStore('mainStore');
						store.remove(record);
						store.sync();
					}
				}, this);
	},
	
	init : function(){
		var mainstore = Ext.getStore('mainStore');
		mainstore.load();
	}
});