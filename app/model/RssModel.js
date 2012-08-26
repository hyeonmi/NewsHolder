
Ext.define('NewsHolder.model.RssModel', {
    extend: 'Ext.data.Model',

    config: {
 	
    	identifier : {
    		type : 'uuid' 
    	},
    	
        fields: [
                 {
                	 name : 'id'
                 },
	            {
	                name: 'rssName'
	            },
	            {
	                name: 'rssUrl'
	            },
	            {
	                name: 'rssImage'
	            }
        ]   
    }
});