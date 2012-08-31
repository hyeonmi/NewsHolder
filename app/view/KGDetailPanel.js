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
			itemTpl : [ '<div class="articleTitle"/> </div>',
					'<img src="{url}"/> {title}<br>' ],
			store : 'kgResultStore',
			plugins : [ {
				xclass : 'Ext.plugin.ListPaging',
				loadMoreText : '더 보기',
				autoPaging : true
			} ]
		} ],
	}
});
