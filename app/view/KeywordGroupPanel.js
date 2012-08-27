Ext.define('NewsHolder.view.KeywordGroupPanel',{
	extend : 'Ext.Panel',
	xtype : 'keywordGroupPanel',
	
	config : {
		layout : {
			type : 'fit'
			
		},
		items : [
		            {
		                xtype: 'dataview',
		                id: 'keywordGroupList',
		                itemId: 'keywordItem',
		                itemTpl: [
		                    '<div class="group-feed-widget">',
		                    	'<div class="widget">',
		                    		'<img src="{keywordImage}" class="x-icon-mask">',
		                    	'</div>',
		                    '</div>',
		                    '<div class="widget-title">ddddddddd{keywordName}</div>',
		                    
		                    
		                ],
		                store: ''
		            },
		         ]
	},
	
});