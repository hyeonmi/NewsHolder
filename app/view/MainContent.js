Ext.define('NewsHolder.view.MainContent', {
	extend : 'Ext.Panel',
	xtype : 'maincotnent',
	id : 'mainContentId',
	ui : 'maincnt',
	cls : 'panel-content',
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
				cls : 'list-title',
				html : '<div class="list-title-text">RSS List</div>',
				items : [
						 {
							 xtype : 'image',
							 id : 'refreshButton',
							 cls:'btnRefresh'
							 }
						 ]
			},
		
			{
				xtype : 'list',
				id : 'mainRssList',
				cls : 'main-list',
				itemTpl : new Ext.XTemplate('<table class="main-list-item"><tr>'+
						'<td width="72px"><img src="{mainRssImage}" class="main-list-img" /></td>'+
						'<td class="main-list-text">{mainRssName}</td>'+
						'<td width="60px" class="main-new-text">New</td>'+
						'<td width="33px" class="main-list-badge-div"><div class="main-list-badge">{numOfEntry}</div></td>'+
						'</tr></table>'),
				store : 'mainStore',
			} ]
    }
});