Ext.define('NewsHolder.store.SearchResultStore', {
    extend: 'Ext.data.Store',

    requires: [
        'NewsHolder.model.SearchResult'
    ],

    config: {
        model: 'NewsHolder.model.SearchResult',
        storeId: 'searchResultStore',
        proxy: {
            type: 'jsonp',
            url:'http://localhost',
            reader: {
                type: 'json',
                rootProperty: 'rss.channel.item'
            }
        }
    }
});