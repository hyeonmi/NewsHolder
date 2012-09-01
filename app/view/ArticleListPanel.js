Ext.define("NewsHolder.view.ArticleListPanel",{
	extend:"Ext.Panel",
	xtype:"articlelist",
	id : 'articleListId',
	
	config:{
		layout:{
			type:"vbox",
		},
		items:[
	       {
				xtype:"list",
				cls:"newsList",
		        id:"articleList",
		        itemTpl: [
		            '<div class="articleListCSS">',
		            	'<div><img class="articleListImage" src="http://cfile23.uf.tistory.com/image/165DBA3C4D4D7A8131A3CB"/></div>',
		            	'<div class="articleListTitle">{title}</div>',
		            	'<div class="articleListSummary">{summary}</div>',
		            '</div>'
		        ],
		        store: 'Feed',
		        flex:1,
			}
		],
	},
	
});