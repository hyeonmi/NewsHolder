Ext.define('NewsHolder.view.RssPanel', {
    extend: 'Ext.Panel',
    xtype : 'rsspanel',
    id : 'rssPanelId',
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
			    				        	id: 'rssUrlText',
			    				        	placeHolder : '추가하고 싶은 RSS를 입력하세요.'
			    				        },
		    			         			    			         
			    			         ]
			            },
			            {
				            xtype: 'button',
				            flex : 1,
				            id: 'rssAddButton',
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
                    '<div class="icon-item" style="background-image: url({rssImage});">',
                    '<div class="icon-text-box">',
                    '<div class="icon-text-rss">{rssName}</div>',
                    '</div>',
                    '</div>',
                    
                    
                ],
                store: 'rssStore'
            },
            
        ]
    }

});