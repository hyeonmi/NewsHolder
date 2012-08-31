Ext.define('NewsHolder.store.KGResultStore', {
	extend : 'Ext.data.Store',

	requires : [ 'NewsHolder.model.SearchResult' ],

	config : {
		model : 'NewsHolder.model.SearchResult',
		storeId : 'kgResultStore',
		proxy : {
			type : 'jsonp',
			url : 'http://iamapark.cafe24.com/rssList/rssList.jsp', // 수정해야됨
			reader : {
				type : 'json',
				rootProperty : 'rss.channel.item'
			}
		},
		listeners : {
			beforeload : function() {
				var kgDetailController = NewsHolder.app
						.getController('KGDetailController');
				kgDetailController.changeProxyUrl();
			}
		} 
	}
});