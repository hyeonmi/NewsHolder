Ext.define('NewsHolder.model.News', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            {
                name: 'pubDate',
            },
            {
                name: 'title'
            },
            {
                name: 'description'
            },
            {
                name: 'link'
            },
            {
            	name: 'media:content url',
            },
        ]
    }
});