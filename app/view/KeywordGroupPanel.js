Ext.define('NewsHolder.view.KeywordGroupPanel',{
	extend : 'Ext.Panel',
	xtype : 'keywordGroupPanel',
	id : 'keywordGroupPanelId',
	
	config : {
		cls : 'panel-content',
		layout : {
			type : 'vbox'
		},
		items : [
		         	{
		         		xtype : 'panel',
		         		html : '<div class="keyword-title-line">'+
		         		'<div class="keyword-title">키워드 목록</div>'+
		         		'</div>'
		         	},
		            {
		                xtype: 'list',
		                id: 'keywordGroupList',
		                cls : 'keyword-list',
		                emptyText : '등록된 키워드가 없습니다.',
		                flex : 1,
		                itemTpl: [
		                    '<div class="keyword-item">{keywordName}</div>',
		                ],
		                store: 'keywordGroupStore',
		            },
		         ]
	},
	
});