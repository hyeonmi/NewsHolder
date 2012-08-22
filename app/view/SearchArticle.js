Ext.define('NewsHolder.view.SearchArticle',{
	extend:'NewsHolder.view.Article',
	xtype:'searcharticle',
	id:'selectedArticle',
	
	config:{
		items:[
		       {tpl:['{description}']}
		
		]
	}
});