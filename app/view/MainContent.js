Ext.define('NewsHolder.view.MainContent', {
	extend : 'Ext.Panel',
	xtype : 'maincotnent',
	id : 'mainContentId',
	ui : 'maincnt',
    requires : [
              
                ],
    	
    config: {	
	
	layout : {
		type : 'vbox',
	},
	items : [
			{
				xtype : 'panel',
				layout : {
					type : 'hbox'
				},

				items : [
				// {
				// xtype : 'image',
				// id : 'testButton',
				// html : 'test',
				// cls:'btnSearch',
				// src : ''
				// },
				{
					xtype : 'image',
					id : 'mainSearchButton',
					cls : 'btnSearch',
				}, {
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
							xtype : 'image',
							id : 'mainScrapBtn',
							cls : 'btnScrap',
						}, {
							xtype : 'image',
							id : 'mainKeywordGroupBtn',
							cls : 'btnKeyword',
						}

						]

					}, {
						xtype : 'image',
						id : 'mainRssAddBtn',
						cls : 'btnRss',
					} ]
				}, ]
			},

			{
				xtype : 'list',
				id : 'mainRssList',
				height : '200px',
				cls : '',
				itemTpl : new Ext.XTemplate('<div class="main-list-item">'
						+ '<img src="{mainRssImage}" class="main-list-img" />'
						+ '<div class="main-list-text">{mainRssName}</div>'
						+ '<div class="main-list-badge">{numOfEntry}</div>'
						+ '</div>'),
				store : 'mainStore',
			} ]
    }
});