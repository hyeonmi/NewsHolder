Ext.define('NewsHolder.store.RssStore', {
    extend: 'Ext.data.Store',

    requires: [
        'NewsHolder.model.RssModel'
    ],

    config: {
        autoLoad: true,
        model: 'NewsHolder.model.RssModel',
        storeId: 'rssStore',
        proxy: {
            type: 'jsonp',
            url: 'http://iamapark.cafe24.com/rssList/rssList.jsp',
            reader: {
                type: 'json',
                rootProperty: 'rss'
            }
        }
    }
});