Ext.define('NewsHolder.store.MainStore', {
    extend: 'Ext.data.Store',
    
    requires: [
        'NewsHolder.model.MainModel'
    ],

    config: {
        model: 'NewsHolder.model.MainModel',
        storeId: 'mainStore',
        autoSave : true,
        
        proxy: {
            type: 'localstorage',
            id: 'mainProxy'
        }
    }
});