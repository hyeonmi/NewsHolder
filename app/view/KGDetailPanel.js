Ext.define('NewsHolder.view.KGDetailPanel', {
	extend : 'Ext.Panel',
	xtype : 'kgdetailpanel',

	config : {
		layout : {
			type : 'fit'
		},
		id : 'kgDetailPanel',
		items : [ {
			xtype : 'list',
			id : 'kgDetailList',
			cls : "newsList",
			itemTpl : [ '<div class="articleListCSS">',
						'<tpl if="titleImage!=&quot;none&quot;">',
						'<div><img class="articleListImage" src="{titleImage}"/></div>',
						'</tpl>',
						'<div class="articleListTitle">{title}</div>',
						'<div class="articleListSummary">{summary}</div>',
						'</div>' ],
			store : 'kgResultStore',
			plugins : [ {
				xclass : 'Ext.plugin.ListPaging',
				loadMoreText : '더 보기',
				autoPaging : true
			} ]
		} ],
	}
});
