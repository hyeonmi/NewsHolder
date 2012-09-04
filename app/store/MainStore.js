Ext.define('NewsHolder.store.MainStore', {
    extend: 'Ext.data.Store',
    
    requires: [
        'NewsHolder.model.MainModel',
        'Ext.data.proxy.LocalStorage'
    ],

    config: {
        model: 'NewsHolder.model.MainModel',
        storeId: 'mainStore',
        //autoSave : true,
        //autoLoad : true,
        
        proxy: {
            type: 'localstorage',
            id: 'mainProxy'
        }, 
        
        listeners:{
        	updaterecord:{
        		fn:function(store, record, newIndex, oldIndex, names, values, eOpts){
        		},
        		
        		element:"element"
        	}
        }
    }
});