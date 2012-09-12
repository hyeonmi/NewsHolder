Ext
		.define(
				'NewsHolder.view.MainContent',
				{
					extend : 'Ext.Panel',
					xtype : 'maincotnent',
					id : 'mainContentId',
					
					requires : [
					            'Ext.plugin.PullRefresh'
					],

					config : {
						cls : 'panel-content',
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
									emptyText : 'RSS를 추가해 주세요.',
									flex : 1,
									itemTpl : new Ext.XTemplate(
											'<table class="main-list-item"><tr>'
													+ '<td class="main-list-img-td"><img src="{mainRssImage}"/></td>'
													+ '<td class="main-list-text">{mainRssName}</td>'
													+ '<td class="main-new-text">New</td>'
													+ '<td class="main-list-badge-div"><div class="main-list-badge">{numOfEntry}</div></td>'
													+ '</tr></table>'),
									store : 'mainStore',
									plugins : [ {
										xclass : 'Ext.plugin.PullRefresh',
										pullRefreshText : '새로고침하려면 아래로 내리세요',
										releaseRefreshText: '새로고침하려면 놓으세요.',
										loadingText : '로딩 중...',
										refreshFn : function(plugin) {
											var buttonController = NewsHolder.app
													.getController('ButtonController');
											buttonController.refreshButtonTap();
										}
									} ]
								} ]
					}
				});