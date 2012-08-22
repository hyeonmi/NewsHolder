Ext.define('NewsHolder.view.KeywordPanel', {
    extend: 'Ext.Panel',
    xtype:'keywordpanel',

    requires:['NewsHolder.view.Article'],
    
    config: {
        id: 'searchMain',
        layout: {
            type: 'card'
        },
        items: [
            {
                xtype: 'panel',
                layout: {
                    type: 'vbox'
                },
                items: [
                    {
                        xtype: 'panel',
                        layout: {
                            type: 'hbox'
                        },
                        items: [
                            {
                                xtype: 'textfield',
                                flex: 1,
                                id: 'searchField'
                            },
                            {
                                xtype: 'button',
                                id: 'searchButton',
                                ui: 'action',
                                iconCls: 'search',
                                iconMask: true
                            }
                        ]
                    },
                    {
                        xtype: 'list',
                        flex: 1,
                        id: 'searchList',
                        itemTpl: [
                            '<div>{xindex}. {keyword}</div>'
                        ],
                        store: 'rankStore'
                    }
                ]
            },
            {
                xtype: 'panel',
                layout: {
                    type: 'vbox'
                },
                items: [
                    {
                        xtype: 'panel',
                        id: 'selectedArticle',
                        styleHtmlContent: true,
                        tpl: [
                            '{description}'
                        ],
                        layout: {
                            type: 'fit'
                        }
                    }
                ]
            }
        ]
    }

});