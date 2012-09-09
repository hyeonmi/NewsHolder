Ext
		.define(
				'NewsHolder.view.MainContent',
				{
					extend : 'Ext.Panel',
					xtype : 'maincotnent',
					id : 'mainContentId',
					// ui : 'maincnt',
					cls : 'panel-content',
					requires : [

					],

					config : {

						layout : {
							type : 'vbox',
							cls : 'mainPanel',
						},
						items : [
								{
									xtype : 'panel',
									cls : 'mainIconPanel',
									layout : {
										type : 'hbox'
									},

									items : [

									{
										xtype : 'button',
										id : 'mainSearchButton',
										cls : 'btnSearch',
									}, {
										xtype : 'panel',
										cls : 'mainIconPanel2',
										layout : {
											type : 'vbox'
										},

										items : [ {
											xtype : 'panel',
											flex : 7,
											cls : 'scrapKeywordPanel',
											layout : {
												type : 'hbox'
											},

											items : [ {
												xtype : 'button',
												id : 'mainScrapBtn',
												cls : 'btnScrap',
											}, {
												xtype : 'button',
												id : 'mainKeywordGroupBtn',
												cls : 'btnKeyword',
											}

											]

										}, {
											xtype : 'button',
											id : 'mainRssAddBtn',
											cls : 'btnRss',
											flex : 1,
										} ]
									}, ]
								},
								{
									xtype : 'panel',
									cls : 'list-title',
									html : '<div class="list-title-text">RSS List</div>',
								},

								{
									xtype : 'list',
									id : 'mainRssList',
									cls : 'main-list',
									flex : 1,
									itemTpl : new Ext.XTemplate(
											'<table class="main-list-item"><tr>'
													+ '<td width="72px"><img src="{mainRssImage}" class="main-list-img" /></td>'
													+ '<td class="main-list-text">{mainRssName}</td>'
													+ '<td width="60px" class="main-new-text">New</td>'
													+ '<td width="33px" class="main-list-badge-div"><div class="main-list-badge">{numOfEntry}</div></td>'
													+ '</tr></table>'),
									store : 'mainStore',
									plugins : [ {
										xclass : 'Ext.plugin.PullRefresh',
										pullRefreshText : 'Refresh',
										refreshFn : function(plugin) {
											var buttonController = NewsHolder.app
													.getController('ButtonController');
											buttonController.refreshButtonTap();
										}
									} ]
								} ]
					}
				});