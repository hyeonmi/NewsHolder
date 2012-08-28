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
			cls:"newsList",
			itemTpl : [ '<div class="articleTitle"/> </div>',
					'<img src="{url}"/> {title}<br>' ],
			store : 'searchResultStore'
		} ],
/*		listeners : {
			initialize : function() {
				this.getApplication().getController("KGDetailController").setKeywordArticleList();
			}
		}*/
	}
});
