Ext.define('NewsHolder.store.NewsPaperStore', {
    extend: 'Ext.data.Store',

    requires: [
        'NewsHolder.model.NewsPaperModel'
    ],

    config: {
        autoLoad: true,
        model: 'NewsHolder.model.NewsPaperModel',
        storeId: 'newsPaperStore',
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