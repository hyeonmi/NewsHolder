Ext.define('NewsHolder.store.Feeds', {
    extend: 'Ext.data.Store',

    requires: [
        'NewsHolder.model.Feed'
    ],

    config: {
        autoLoad: true,
        model: 'NewsHolder.model.Feed',
        storeId: 'Feeds',
        proxy: {
            type: 'jsonp',
            url: 'http://iamapark.cafe24.com/rssList/default.jsp',
            reader: {
                type: 'json',
                rootProperty: 'addresses'
            }
        }
    }
});