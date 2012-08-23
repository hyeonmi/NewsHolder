Ext.define('NewsHolder.model.MainModel', {
    extend: 'Ext.data.Model',
    requires : [
                'Ext.data.identifier.Sequential'
                ,'Ext.data.identifier.Uuid'
                ],

    config: {
    	//idProperty: 'id',
    	identifier : {
    		//type : 'sequential'
    		type : 'uuid' 
    	},
    	
        fields: [
                 {
                	 name : 'id'
                 },
	            {
	                name: 'mainRssName', type : 'string'
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