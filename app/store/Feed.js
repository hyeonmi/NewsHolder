Ext.define('NewsHolder.store.Feed', {
    extend: 'Ext.data.Store',

    requires: [
        'NewsHolder.model.News'
    ],

    config: {
        autoLoad: true,
        model: 'NewsHolder.model.News',
        storeId: 'Feed',
        proxy: {
            type: 'jsonp',
            url: 'http://localhost',
            reader: {
                type: 'json',
                rootProperty: 'rss.channel.item'
            }
        }
    }
});