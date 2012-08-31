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
				itemtap : "onKeywordGroupListItemTap"
					
			},
		
		}
	},
	
	
	init : function(){
		var store = Ext.getStore("keywordGroupStore");
		store.load({callback : function() {
				if (store.data.length > 0) {
					//this.getCmp('keywordGroupList').setItemTpl('등록된 키워드가 없습니다.');
				}
			}
		});				
	},

	onKeywordGroupListItemTap : function(list, index, item, record, e) {
		animation.onMoveSlideLeft(record.data.keywordName, 'kgDetailPanel',
				[ 'homeButton' ], [ 'kgDetailBackButton', 'kgDetailAlarmButton' ]);

		localStorage.History_navigator = "Search";
		this.setSelectedKeyword(record.data.keywordName);
		this.getApplication().getController("KGDetailController")
				.initKeywordArticleList();
	}
});