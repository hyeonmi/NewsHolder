Ext.define('NewsHolder.model.MainModel', {
    extend: 'Ext.data.Model',

    config: {
    	idProperty: 'id',
    	identifier : 'sequential',
        fields: [
                 {
                	 name : 'id', type: 'auto'
                 },
	            {
	                name: 'mainRssName'
	            },
	            {
	                name: 'mainRssUrl'
	            },
	            {
	                name: 'mainRssImage'
	            }
        ]
    }
});