Ext.define('NewsHolder.model.SearchResult', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            {
                name: 'title'
            },
            {
                name: 'description'
            },
            {
                name: 'pubDate'
            },
            {
                name: 'link'
            },
            {
            	name:'titleImage'
            }
        ]
    }
});