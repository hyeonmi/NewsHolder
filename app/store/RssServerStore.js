Ext.define('NewsHolder.store.RssServerStore', {
	extend : 'Ext.data.Store',

	requires : [ 'NewsHolder.model.RssModel' ],

	config : {
		model : 'NewsHolder.model.RssModel',
		storeId : 'rssServerStore',
		proxy : {
			type : 'jsonp',
			id : 'rssServerProxy',
			url : 'http://iamapark.cafe24.com/rssList/rssList.jsp',
			reader : {
				type : 'json',
				rootProperty : 'rss'
			}
		}
	},

});