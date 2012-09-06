Ext.define('NewsHolder.controller.ScrapController', {
	extend : 'Ext.app.Controller',

	config : {
		refs : {
			scrapList : "#scrapList",
			scrapBackButton : '#scrapBackButton',
			articleContent : "#articleContent",
			articleContentOther : "#articleContent2",
		},

		control : {
			scrapBackButton : {
				tap : 'scrapBackButtonTap'
			},
			scrapList : {
				itemtaphold : "scrapListTapHold",
				itemtap : "scrapListTap",
			},
		},

	},

	init : function() {
		var store = Ext.getStore("Scraps");
		store.load();
	},

	/** 스크랩 리스트에서 기사 제목을 탭했을 때 실행 */
	scrapListTap : function(list, index, item, record, e) {
		var panelFlag = localStorage.panelFlag;
		
		if (!list.lastTapHold || (new Date() - list.lastTapHold > 1000)) {
			localStorage.flag = index;
			if(panelFlag=="articleContent"){
				
				animation.onMoveSlideLeft(null, 'articlePanel', [ 'homeButton', 'articleContent2' ], [
				                                		                           'articleContent', 'alBackButton' ]);
				this.getArticleContent().setData(record.data);
				console.log("articleContent");
			}else{
				
				animation.onMoveSlideLeft(null, 'articlePanel', [ 'homeButton', 'articleContent' ], [
				                                		                           'articleContent2', 'alBackButton' ]);
				this.getArticleContentOther().setData(record.data);
				console.log("articleContent2");
				console.log(this.getArticleContentOther());
			}
		}
	},

	scrapBackButtonTap : function(button, e, options) {
		console.log("scrapBackButtonTap!!");
		/*animation.onMoveSlideRight(null, 'scrapPanel', [ 'scrapBackButton',
				'articleContent', 'articleContent2' ], [ 'homeButton' ]);*/
		animation.onMoveSlideLeft('스크랩 모음', 'scrapPanel', ['mainSearchButton'], ['homeButton']);
	},

	scrapListTapHold : function(list, index, item, record, e) {
		this.getScrapList().deselectAll();
		list.lastTapHold = new Date();
		Ext.Msg.confirm("알림", "해당 스크랩을 삭제하시겠습니까",
				function(buttonId, value, opt) {
					if (buttonId == "yes") {
						var store = Ext.getStore('Scraps');
						store.remove(record);
						store.sync();
					}
				}, this);
	},
});