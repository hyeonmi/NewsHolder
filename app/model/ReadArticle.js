Ext.define('NewsHolder.model.ReadArticle', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
           {
        	   name:'id'
           },
             {
            	 name:'dc_identifier'
             },
             {
            	 name:'badge'
             }
        ]
    }
});