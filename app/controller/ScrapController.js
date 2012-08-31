Ext.define('NewsHolder.controller.ScrapController', {
	extend : 'Ext.app.Controller',

	config : {
		refs : {
			scrapList : "#scrapList",
			scrapBackButton : '#scrapBackButton',
			articleContent : "#articleContent"
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
		if (!list.lastTapHold || (new Date() - list.lastTapHold > 1000)) {
			console.log('ahahah');
			this.getArticleContent().setData(record.data);
			localStorage.flag = index;

			animation.onMoveSlideLeft(null, 'articlePanel', [ 'homeButton' ], [
					'scrapBackButton', 'articleScrapButton' ]);
		}
	},

	scrapBackButtonTap : function(button, e, options) {
		animation.onMoveSlideRight(null, 'scrapPanel', [ 'scrapBackButton',
				'articleScrapButton' ], [ 'homeButton' ]);
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