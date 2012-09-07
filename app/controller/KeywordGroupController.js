Ext.define('NewsHolder.controller.KeywordGroupController', {
	extend : 'Ext.app.Controller',
	constructor : function(config) {
		this.initConfig(config);

	},

	config : {
		selectedKeyword : null,
		refs : {
			keywordGroupList : "#keywordGroupList",
		},

		control : {
			keywordGroupList : {

				itemtap : "onKeywordGroupListItemTap",
				itemtaphold : 'onKeywordGroupListItemTapHold',
					
			},

		}
	},

	init : function() {
		var store = Ext.getStore("keywordGroupStore");
		store.load({
			callback : function() {
				if (store.data.length > 0) {
					// this.getCmp('keywordGroupList').setItemTpl('등록된 키워드가
					// 없습니다.');
				}
			}
		});
	},

	onKeywordGroupListItemTap : function(list, index, item, record, e) {
		if (!list.lastTapHold || (new Date() - list.lastTapHold > 1000)) {
			animation.onMoveSlideLeft(record.data.keywordName, 'kgDetailPanel',
					[ 'homeButton' ],
					[ 'kgDetailBackButton', 'kgDetailAlarmButton' ]);
	
			this.setSelectedKeyword(record.data.keywordName);
			this.getApplication().getController("KGDetailController")
					.initKeywordArticleList();
		}
	},
	
	onKeywordGroupListItemTapHold : function(list, index, item, record, e) {

		list.lastTapHold = new Date();
		Ext.Msg.confirm("알림", "해당 키워드을 삭제하시겠습니까",
				function(buttonId, value, opt) {
					if (buttonId == "yes") {
						var store = Ext.getStore('keywordGroupStore');
						store.remove(record);
						store.sync();
					}
				}, this);
	},
});