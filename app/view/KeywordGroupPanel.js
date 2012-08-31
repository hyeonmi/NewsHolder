Ext.define('NewsHolder.view.KeywordGroupPanel',{
	extend : 'Ext.Panel',
	xtype : 'keywordGroupPanel',
	id : 'keywordGroupPanelId',
	
	config : {
		layout : {
			type : 'fit'
		},
		items : [
		            {
		                xtype: 'dataview',
		                id: 'keywordGroupList',
		                itemTpl: [
		                    '<div class="group-feed-widget" id="keywordItemId">',
		                    	'<div class="widget">',
		                    		'<img src="{keywordImage}" class="x-icon-mask">',
		                    	'</div>',
		                    '</div>',
		                    '<div class="widget-title">{keywordName}</div>',
		                ],
		                store: 'keywordGroupStore',
		            },
		         ]
	},
	
});