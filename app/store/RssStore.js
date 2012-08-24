Ext.define('NewsHolder.store.RssStore', {
    extend: 'Ext.data.Store',

    requires: [
        'NewsHolder.model.RssModel'
    ],

    config: {
        //autoLoad: true,
        model: 'NewsHolder.model.RssModel',
        storeId: 'rssStore',
        autoSave : true,
        
        proxy: {
            type: 'localstorage',
            id : 'rssLocalProxy'
            }
        }
});