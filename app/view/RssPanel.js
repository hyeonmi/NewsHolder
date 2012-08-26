Ext.define('NewsHolder.view.RssPanel', {
    extend: 'Ext.Panel',
    xtype : 'rsspanel',
    id : 'rssPanel',
    requires : [
                'Ext.dataview.DataView',
                ],
    	
    config: {
        layout: {
            type: 'fit'
        },
        items: [
			{
			    xtype: 'panel',
			    docked: 'top',
			    layout: {
			        type: 'hbox',
			    },
			    items: [
			            {
			            	xtype : 'panel',
			            	flex : 9 ,
			            	layout: {
			    			    type: 'vbox',
			    			},
			    			
			    			items : [
			    				        {
			    				            xtype: 'textfield',
			    				            id: 'rssNameText',
			    				            label: 'RSS 명',
			    				            	
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
			    			         
			    			         ]
			            },
			            {
				            xtype: 'button',
				            flex : 1,
				            id: 'rssAddButton',
				            ui: 'confirm',
				            iconCls: 'add',
				            iconMask: true,
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
                store: 'rssStore'
            },
            
        ]
    }

});