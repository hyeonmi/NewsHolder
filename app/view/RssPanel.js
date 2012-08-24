Ext.define('NewsHolder.view.RssPanel', {
    extend: 'Ext.Panel',
    xtype : 'rsspanel',
    id : 'rssPanel',
    
    config: {
        layout: {
            type: 'fit'
        },
        items: [
			{
			    xtype: 'fieldset',
			    docked: 'top',
			    id: 'rssFieldSet',
			    layout: {
			        align: 'stretchmax',
			        type: 'vbox'
			    },
			    items: [
			        {
			            xtype: 'textfield',
			            id: 'rssNameText',
			            label: 'RSS 명'
			        },
			        {
			        	xtype: 'textfield',
			        	id: 'rssUrlText',
			        	label: 'RSS 주소'
			        },
			        {
			        	xtype: 'textfield',
			        	id: 'rssImageText',
			        	label: 'RSS 이미지 주소'
			        },
			        {
			            xtype: 'button',
			            id: 'rssAddButton',
			            ui: 'confirm',
			            iconCls: 'add',
			            iconMask: true
			        }
			    ]
			},                
            {
                xtype: 'dataview',
                id: 'rssList',
                itemId: 'mydataview',
                itemTpl: [
                    //'<div style="width: 100px; height: 100px; float:left">',
                    '<div class="group-feed-widget">',
                    	'<div class="widget">',
                    		'<img src="{rssImage}" class="x-icon-mask">',
                    	'</div>',
                    '</div>',
                    '<div class="widget-title">{rssName}</div>',
                    
                    
                ],
                store: 'rssServerStore'
            },
            
        ]
    }

});