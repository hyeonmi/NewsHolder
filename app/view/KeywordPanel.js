Ext.define('NewsHolder.view.KeywordPanel', {
	extend : 'Ext.Panel',
	xtype : 'keywordpanel',
	id:"keywordpanel",
	
	requires : [ 'NewsHolder.view.Article' ],

	config : {
		xtype:'panel',
		layout:{
			type:'card'
		},
		id : 'searchMain',
		items:[{
			xtype : 'panel',
			
			layout : {
				type : 'vbox'
			},
			items : [ {
				xtype : 'panel',
				layout : {
					type : 'hbox'
				},
				items : [ {
					xtype : 'textfield',
					flex : 1,
					id : 'searchField',
					placeHolder : '검색어를 입력하세요'
				}, {
					xtype : 'button',
					id : 'searchButton',
					ui : 'action',
					iconCls : 'search',
					iconMask : true
				} ]
			}, {
				xtype : 'list',
				flex : 1,
				id : 'searchList',
				itemTpl : [ '<div>{xindex}. {keyword}</div>' ],
				store : 'rankStore'
			} ]
		}, {
            xtype: 'panel',
            id: 'selectedArticle',
             styleHtmlContent: true,
               tpl: [
                 '{description}'
                ],
               layout: {
                   type: 'fit'
                }
           }]
	}
                

});
