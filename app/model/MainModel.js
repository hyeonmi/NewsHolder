Ext.define('NewsHolder.model.MainModel', {
    extend: 'Ext.data.Model',

    config: {
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