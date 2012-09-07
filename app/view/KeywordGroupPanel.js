Ext.define('NewsHolder.view.KeywordGroupPanel',{
	extend : 'Ext.Panel',
	xtype : 'keywordGroupPanel',
	id : 'keywordGroupPanelId',
	
	config : {
		layout : {
			type : 'vbox'
		},
		items : [
		         	{
		         		xtype : 'panel',
		         		cls : 'keyword-title',
		         		html : 'Keyword List'
		         	},
		            {
		                xtype: 'list',
		                id: 'keywordGroupList',
		                cls : 'keyword-list',
		                itemTpl: [
		                    '<div class="keyword-item">{keywordName}</div>',
		                ],
		                store: 'keywordGroupStore',
		            },
		         ]
	},
	
});