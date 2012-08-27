
Ext.define('NewsHolder.model.KeywordGroupModel', {
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
	                name: 'keywordName'
	            }
        ]   
    }
});