Ext.define('NewsHolder.model.Scrap', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            {
            	name:'id'
            },
            {
                name: 'title'
            },
            {
                name: 'content'
            },
            {
            	name:'pubDate'
            }
        ]
    }
});