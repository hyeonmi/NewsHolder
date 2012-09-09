Ext.define("NewsHolder.view.ScrapPanel", {
	extend : "Ext.Panel",
	xtype : "scrapPanel",
	id : 'scrapPanel',
	
	config : {
		cls:'panel-content',
		layout : {
			type : "card",
		},
		items : [ {
			xtype : "list",
			cls : "newsList",
			id : "scrapList",
			emptyText : '스크랩한 기사가 없습니다.',
			itemTpl : [ 
		            '<div class="articleListCSS">',
	            	'<tpl if="titleImage!=&quot;none&quot;">',
	            		'<div><img class="articleListImage" src="{titleImage}"/></div>',
	            	'</tpl>',
	            	'<div class="articleListTitle">{title}</div>',
	            	'<div class="articleListSummary">{summary}</div>',
	            '</div>' 
			],
			store : 'Scraps',
		} ],
	},

});