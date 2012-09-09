Ext.define('NewsHolder.store.ReadArticle', {
	extend : 'Ext.data.Store',
	id : 'ReadArticleStore',
	requires : [ 'NewsHolder.model.MainModel', 'Ext.data.proxy.LocalStorage' ],

	config : {
		model : 'NewsHolder.model.ReadArticle',
		storeId : 'ReadArticleStore',
		autoLoad:true,
		proxy : {
			type : 'localstorage',
			id : 'readArticleProxy'
		},

	}
});