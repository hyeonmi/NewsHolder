Ext.define('NewsHolder.view.KeywordGroupPanel',{
	extend : 'Ext.Panel',
	xtype : 'keywordGroupPanel',
	id : 'keywordGroupPanelId',
	
	config : {
		layout : {
			type : 'fit'
			
		},
		items : [
/*		         	{
		         		xtype:'panel',
		         		docked:'top',
		         		items:[{
		         			xtype:'button',
		         			text:'button',
		         			id:'keywordGroupId'
		         			
		         		},{
		         			xtype:'textfield',
		         			id:'keywordGroupText',
		         			label:'text',
		         		}]
		         	},*/
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
		                    '<div class="widget-title">{keywordName}</div>',
		                ],
		                store: 'keywordGroupStore',
		            },
		         ]
	},
	
});