Ext.define('NewsHolder.view.RssPanel', {
    extend: 'Ext.Panel',
    xtype : 'rsspanel',
    id : 'rssPanelId',
    requires : [
                'Ext.dataview.DataView',
                ],
    	
    config: {
    	cls : 'panel-content2',
        layout: {
            type: 'vbox'
        },
        items: [

			{
			    xtype: 'panel',
			    layout: {
			        type: 'hbox',
			    },
			    items: [
			            {
			            	xtype : 'panel',
			            	cls : 'rss-add-panel',
			            	layout: {
			    			    type: 'hbox',
			    			},
			    			
			    			items : [
			    				        {
			    				        	xtype: 'textfield',
			    				        	id: 'rssUrlText',
			    				        	cls : 'rss-add-text',
			    				        	placeHolder : '추가하고 싶은 RSS를 입력하세요.'
			    				        },
			    			            {
			    				            xtype: 'image',
			    				            id: 'rssAddButton',
			    				            cls : 'rss-add-botton',
			    			            }			    				        
		    			         			    			         
			    			         ]
			            },

			    ]
			},                
            {
                xtype: 'dataview',                
                id: 'rssList',
                itemId: 'mydataview',
                cls : 'rss-list',
                flex : 1,
                itemTpl: [
                    '<div class="rss-item-img" style="background-image: url({rssImage});">',
	                    '<div class="rss-text-box">{rssName}',
	                    '<div class="rss-text-box-img"><img src="./resources/images/ic_add.png"></div>',
	                    '</div>',
                    '</div>',
                    
                    
                ],
                store: 'rssStore'
            },
            
        ]
    }

});