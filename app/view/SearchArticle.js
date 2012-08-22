Ext.define('NewsHolder.view.SearchArticle',{
	//extend:'NewsHolder.view.Article',
	extend:"Ext.Panel",
	xtype:'searcharticle',
	id:'selectedArticle',
	
	config:{
		items:[
		       {tpl:['{description}']}
		
		]
	}
});