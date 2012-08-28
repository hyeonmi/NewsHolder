Ext.define('NewsHolder.controller.KeywordGroupController', {
	extend : 'Ext.app.Controller',

	config : {

		refs : {
			keywordGroupId : "#keywordGroupId",
			keywordGroupText : "#keywordGroupText",
			keywordGroupList : "#keywordGroupList",
			keywordpanel:"#keywordpanel",
		},

		control : {
			keywordGroupId : {
				tap : "onKeywordGroupIdTap"
			},
			keywordGroupList : {
				itemtap : "onKeywordGroupListItemTap"
			}
		}
	},

	onKeywordGroupIdTap : function(event, button) {
		var text = this.getKeywordGroupText().getValue();
		var store = Ext.getStore("keywordGroupStore");

		store.add({
			keywordName : text
		});
		store.sync();
	},

	init : function() {
		var store = Ext.getStore("keywordGroupStore");

		store.load({
			callback : function() {
				console.log(store.data.length);
				if (store.data.length <= 0) {
					console.log("데이터가 없습니다.");
				} else {
					console.log("데이터가 있습니다.");
				}

			}
		});
	},

	onKeywordGroupListItemTap : function(list, index, item, record, e) {
		console.log("aa");
		var mainController = this.getApplication().getController("MainController");
		var buttonController = this.getApplication().getController("ButtonController");
		var keywordSearchController = this.getApplication().getController("KeywordSearchController");
		mainController.getMainPanel().animateActiveItem(6, {
					type : "slide",
					direction : "left"
				});
		mainController.getTitlebar().setTitle(record.data.keywordName);
		buttonController.getHomeButton().show();
		buttonController.getMainSearchButton().hide();
		localStorage.History_navigator = "Search";
		
		keywordSearchController.getSearchField().setValue(record.data.keywordName);
		keywordSearchController.onSearchButtonTap();
	}

});