Ext.define('NewsHolder.store.RankStore', {
    extend: 'Ext.data.Store',

    requires: [
        'NewsHolder.model.Rank'
    ],

    config: {
        autoLoad: true,
        model: 'NewsHolder.model.Rank',
        storeId: 'rankStore',
        proxy: {
            type: 'jsonp',
            url: 'http://iamapark.cafe24.com/rss2json/WebContent/rss2json.jsp',
            reader: {
                type: 'json'
            }
        }
    }
});