Ext.define('NewsHolder.store.KeywordGroupStore', {
    extend: 'Ext.data.Store',
    
    requires: [
        'NewsHolder.model.KeywordGroupModel',
        'Ext.data.proxy.LocalStorage'
    ],

    config: {
        model: 'NewsHolder.model.KeywordGroupModel',
        storeId: 'keywordGroupStore',
        autoSave : true,
        
        proxy: {
            type: 'localstorage',
            id: 'keywordGroupProxy'
        }
    }
});