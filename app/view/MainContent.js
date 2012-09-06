Ext.define('NewsHolder.view.MainContent', {
	extend : 'Ext.Panel',
	xtype : 'maincotnent',
	id : 'mainContentId',
	ui : 'maincnt',
	cls : 'mainContent',
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
				xtype : 'panel',
				cls : 'listTitle',
				html : 'RSS List',
			},
			{
				xtype : 'list',
				id : 'mainRssList',
				cls : 'mainList',
				itemTpl : new Ext.XTemplate('<table class="main-list-item"><tr>'+
						'<td width="100px"><img src="{mainRssImage}" class="main-list-img" /></td>'+
						'<td class="main-list-text">{mainRssName}</td>'+
						'<td width="60px" class="text-red">New</td>'+
						'<td width="60px"><div class="main-list-badge">{numOfEntry}</div></td>'+
						'</tr></table>'),
				store : 'mainStore',
			} ]
    }
});