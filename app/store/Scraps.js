Ext.define('NewsHolder.store.Scraps', {
    extend: 'Ext.data.Store',
    requires: [
        'NewsHolder.model.Scrap'
    ],

    config: {
        model: 'NewsHolder.model.Scrap',
        storeId: 'Scraps',
        proxy:new Ext.data.LocalStorageProxy({
        	id:"scrap"
        }),
    }
});