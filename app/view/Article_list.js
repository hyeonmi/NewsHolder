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
			html:[
			    "<div id='articleImage'></br>기사 제목이 들어갈 자리입니다.</div>",
			    "<img src='http://static.news.zum.com/images/1/2012/07/29/l_2012072902001116500297551.jpg'/>",
			].join(""),
			tpl:"{url} - {title}",
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
		}],
	},
	
});