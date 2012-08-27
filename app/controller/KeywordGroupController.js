Ext.define('NewsHolder.controller.KeywordGroupController', {
	extend : 'Ext.app.Controller',
	
	config : {
			
		refs : {
			keywordGroupId:"#keywordGroupId",
			keywordGroupText:"#keywordGroupText"
		},

		control : {
			keywordGroupId:{
				tap:"onKeywordGroupIdTap"
			}
		}
	},
	
	onKeywordGroupIdTap:function(event, button){
		var text = this.getKeywordGroupText().getValue();
		var store = Ext.getStore("keywordGroupStore");
		
		store.add({
			keywordName:text
		});
		store.sync();
	},
	
});