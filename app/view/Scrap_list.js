Ext.define("NewsHolder.view.Scrap_list",{
	extend:"Ext.Panel",
	xtype:"scrapPanel",
	
	config:{
		
		layout:{
			type:"vbox",
		},
		items:[
		{
			xtype:"panel",
			html:"스크랩 모음이 들어갈 자리입니다.",
		}],
	},
	
});