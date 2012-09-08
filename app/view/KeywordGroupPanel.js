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
		         		html : '<div class="keyword-title-line">'+
		         		'<div class="keyword-title">Keyword List</div>'+
		         		'</div>'
		         	},
		            {
		                xtype: 'list',
		                id: 'keywordGroupList',
		                cls : 'keyword-list',
		                flex : 1,
		                itemTpl: [
		                    '<div class="keyword-item">{keywordName}</div>',
		                ],
		                store: 'keywordGroupStore',
		            },
		         ]
	},
	
});