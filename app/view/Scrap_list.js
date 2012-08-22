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
	        itemTpl: [
	            '<div>',
	            	'{title}<br>',
	            '</div>',
	        ],
	        store: 'Scraps',
		}],
	},
	
});