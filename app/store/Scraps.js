Ext.define('NewsHolder.store.Scraps', {
    extend: 'Ext.data.Store',
    
    requires: [
        'NewsHolder.model.Scrap'
    ],

    config: {
    	autoLoad:true,
        model: 'NewsHolder.model.Scrap',
        storeId: 'Scraps',
        proxy:{
        	type:"localstorage",
        	id:"scrap"
        } 
    }
});