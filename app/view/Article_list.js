Ext.define("NewsHolder.view.Article_list",{
	extend:"Ext.Panel",
	xtype:"articlelist",
	
	config:{
		
		layout:{
			type:"vbox",
		},
		items:[
		{
			xtype:"panel",
			cls:"newsTop",
			id:"newsListTopImage",
			flex:1,
			scrollable:true,
			styleHtmlContent:true,
			tpl:[
			    "<div id='articleImageText'></br>{title}</div>",
			    "<img src='{url}'/>",
			],
		},
		{
			xtype:"list",
			cls:"newsList",
	        id:"articleList",
	        itemTpl: [
	            '<div>',
	            	'<img src="{url}"/> <{title}><br>',
	            '</div>',
	        ],
	        store: 'Feed',
	        flex:1,
	        listeners:{
	        	afterrender:function(){
	        		console.log("afterrender");
	        	}
	        }
		}],
	},
	
});