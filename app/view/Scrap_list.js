Ext.define("NewsHolder.view.Scrap_list",{
	extend:"Ext.Panel",
	xtype:"scrapPanel",
	
	config:{
		
		layout:{
			type:"card",
		},
		items:[
		{
			xtype:"list",
			cls:"scrapList",
	        id:"scrapList",
	        html:"스크랩 모음",
	        itemTpl: [
	            '<div>',
	            	'{title}<br>',
	            '</div>',
	        ],
	        store: 'Scraps',
		}],
	},
	
});