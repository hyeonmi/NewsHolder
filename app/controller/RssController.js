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


    onRssAddButtonTap: function(button, e, options) {
        //console.log("Rss Add Button tap!");
        
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
        //console.log("rssList Item tap");    	
    	
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