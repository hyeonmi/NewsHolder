Ext.define('NewsHolder.store.RssStore', {
    extend: 'Ext.data.Store',

    requires: [
        'NewsHolder.model.RssModel'
    ],

    config: {
        model: 'NewsHolder.model.RssModel',
        storeId: 'rssStore',
        
        proxy: {
            type: 'localstorage',
            id : 'rssLocalProxy'
       	
            }
        },

});