Ext.define('NewsHolder.controller.RssController', {
    extend: 'Ext.app.Controller',

    config: {
        models: [
            'RssModel'
        ],
        views: [
            'RssPanel'
        ],

        refs: {
            addButton: '#rssAddButton',
            rssItem: '#rssList',
            	
        },
        
        control: {
            'addButton': {
                tap: 'onRssAddButtonTap'
            },
            'rssItem': {
                itemtap: 'onRssListItemTap'
            }
        }
        

        
    },
    
    
//    //server
//    onLoadRssServerStore : function(){
//    	console.log('onLoadRssServerStore');
//    },
//    
//    //local
//    init : function(){
//    	console.log('onLoadRssLocalStore');
//    	var localstore = Ext.getStore('rssStore');
//    	
//    		localstore.load(
//    				{
//    					callback : function(records, operation,
//								success){
//    						
//    						var serverstore = Ext.getStore('rssServerStore');
//    				    	if(localstore.data.length <= 0){
//    				    		console.log(serverstore.data.length);
//    				    		for(var i=0; i < serverstore.data.length; i++){
//    				    			var record = serverstore.data.items[i].data;
//    				    			console.log(record);
//    				    	        localstore.add({ mainRssName : record.get('rssName'),
//    				    	        	mainRssUrl : record.get('rssUrl') ,
//    				    	        	mainRssImage : record.get('rssImage') });
//    				    	             			
//    				    		}
//    				    		
//    				    	}    						
//    					
//    					}
//    				}
//    		); 
//    		
////    		console.log("null");
//    	
//    	
//    },
//    
    onRssAddButtonTap: function(button, e, options) {
        var store = Ext.data.StoreManager.lookup('mainStore');
        var rssname = Ext.getCmp('rssNameText').getValue();
        var rssurl = Ext.getCmp('rssUrlText').getValue();
        var rssimg = Ext.getCmp('rssImageText').getValue();
        
        store.add({ mainRssName : rssname,
        	mainRssUrl : rssurl ,
        	mainRssImage : rssimg });
        
        store.sync();
    },

    onRssListItemTap: function(dataview, index, target, record, e, options) {
        var store = Ext.data.StoreManager.lookup('mainStore');
        var rssname = record.get('rssName');
        var rssurl = record.get('rssUrl');
        var rssimg = record.get('rssImage');
        
        store.add({ mainRssName : rssname,
        	mainRssUrl : rssurl ,
        	mainRssImage : rssimg });
        store.sync();    	
    }

});