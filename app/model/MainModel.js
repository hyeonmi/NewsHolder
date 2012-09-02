Ext.define('NewsHolder.model.MainModel', {
    extend: 'Ext.data.Model',
    requires : [
                'Ext.data.identifier.Uuid'
                ],

    config: {
    	identifier : {
    		type : 'uuid' 
    	},
    	
        fields: [
                {
                	name: 'id'
                },
	            {
	                name: 'mainRssName'
	            },
	            {
	                name: 'mainRssUrl'
	            },
	            {
	                name: 'mainRssImage'
	            },
	            {
	            	name: 'lastAccessDate'
	            },
	            {
	            	name: 'numOfEntry'
	            },
	            {
	            	name: 'proxyId'
	            }
        ]
    }
});