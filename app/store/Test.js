Ext.define('NewsHolder.store.Test', {
    extend: 'Ext.data.Store',

    requires: [
        'NewsHolder.model.MainModel'
    ],

    config: {
        //autoLoad: true,
        model: 'NewsHolder.model.MainModel',
        storeId: 'Test',
        proxy: {
            type: 'jsonp',
            url: 'http://iamapark.cafe24.com/rssList/rssList.jsp', //수정해야됨
            reader: {
                type: 'json',
                rootProperty: 'rss.channel'
            }
        }
    }
});