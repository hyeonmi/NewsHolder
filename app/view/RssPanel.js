Ext.define('NewsHolder.view.RssPanel', {
    extend: 'Ext.Panel',
    xtype : 'rsspanel',
    
    config: {
        layout: {
            type: 'fit'
        },
        items: [
            {
                xtype: 'dataview',
                id: 'RssList',
                itemId: 'mydataview',
                itemTpl: [
                    '<div style="width: 100px; height: 100px; float:left">',
                    '<img src="{rssImage}"><br>',
                    '{rssName}',
                    '</div>'
                ],
                store: 'rssStore'
            },
            {
                xtype: 'fieldset',
                docked: 'top',
                id: 'rssFieldSet',
                layout: {
                    align: 'stretchmax',
                    type: 'hbox'
                },
                items: [
                    {
                        xtype: 'textfield',
                        id: 'rssAddressText',
                        width: '85%',
                        label: 'RSS'
                    },
                    {
                        xtype: 'button',
                        id: 'rssAddButton',
                        ui: 'action',
                        width: '15%',
                        iconCls: 'add',
                        iconMask: true
                    }
                ]
            }
        ]
    }

});