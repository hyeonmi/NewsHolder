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
            url:'http://iamapark.cafe24.com/rssList/rssList.jsp', //수정해야됨
            reader: {
                type: 'json',
                rootProperty: 'rss.channel.item'
            }
        }
    }
});