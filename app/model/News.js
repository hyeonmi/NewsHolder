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
            	mapping:'media_content.\attributes.url',   //@attribute에서 골뱅이 때문에 에러남!!
            	name: 'url',
            },
        ]
    }
});