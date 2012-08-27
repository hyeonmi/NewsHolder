Ext.define("NewsHolder.view.ScrapPanel",{
	extend:"Ext.Panel",
	xtype:"scrapPanel",
	id:'scrapPanel',
	
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