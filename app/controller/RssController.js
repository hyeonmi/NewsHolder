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
            rssItems: '#rssList',
            	
        },
        
        control: {
            'addButton': {
                tap: 'onRssAddButtonTap'
            },
            'rssItems': {
                itemtap: 'onRssListItemTap'
            }
        },
  
    },
    
    
    //sever->local
    init : function(){
    	var serverstore = Ext.getStore('rssServerStore');    	
    	serverstore.load(
    				{
    					callback : function(){
    						success : {
    						var localstore = Ext.getStore('rssStore');
	    				    	if(localstore.data.length <= 0){
	    				    		for(var i=0; i < serverstore.data.length; i++){

	    				    			localstore.add({ rssName : serverstore.data.items[i].get('rssName'),
	    				    	        	rssUrl : serverstore.data.items[i].get('rssUrl') ,
	    				    	        	rssImage : serverstore.data.items[i].get('rssImage') });
	    				    	             			
	    				    		}
	    				    		localstore.sync();
	    				    		
	    				    	}    
    						}
    					
    					}
    				}
    		); 
    	
    },
    
    //rss add
    onRssAddButtonTap: function(button, e, options) {
        var store = Ext.data.StoreManager.lookup('mainStore');
        console.log(Ext.getCmp('rssNameText').getValue());
        var rssname = JSON.stringify(Ext.getCmp('rssNameText').getValue());
        var rssurl = Ext.JSON.encode(Ext.getCmp('rssUrlText').getValue());
        var rssimg = Ext.JSON.encode(Ext.getCmp('rssImageText').getValue());
        
        store.add({ mainRssName : rssname,
        	mainRssUrl : rssurl ,
        	mainRssImage : rssimg });
        
        store.sync();
    },

    //news rss add
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