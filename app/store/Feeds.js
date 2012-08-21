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
            url: './default.json',
            reader: {
                type: 'json',
                rootProperty: 'addresses'
            }
        }
    }
});