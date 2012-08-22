Ext.define('NewsHolder.controller.RssController', {
    extend: 'Ext.app.Controller',

    config: {
        models: [
            'RssModel'
        ],
        views: [
            'RssPanel'
        ],

        refs: {
            addButton: '#rssAddButton',
            rssAddress : '#rssAddressText',
            rssItem: '#RssList',
            	
        },

        control: {
            'addButton': {
                tap: 'onRssAddButtonTap'
            },
            'rssItem': {
                itemtap: 'onRssListItemTap'
            }
        }
    },


    onRssAddButtonTap: function(button, e, options) {
        console.log("Rss Add Button tap!");

        var store = Ext.data.StoreManager.lookup('mainStore');
        store.add({ mainRssName : '경향신문',
        	mainRssUrl : 'http://www.khan.co.kr/rss/rssdata/total_news.xml',
        	mainRssImage : 'http://www.tstore.co.kr/images/IF1423549615420111214150946/0000270186/thumbnail/0000270186_180_180_0_68.PNG' });
        store.sync();
    },

    onRssListItemTap: function(dataview, index, target, record, e, options) {
        console.log("rssList Item tap");
    }

});