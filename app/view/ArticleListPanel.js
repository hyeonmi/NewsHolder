Ext
		.define(
				"NewsHolder.view.ArticleListPanel",
				{
					extend : "Ext.Panel",
					xtype : "articlelist",
					
					id : 'articleListId',

					config : {
						cls:'panel-content',
						layout : {
							type : "vbox",
						},
						items : [ {
							xtype : "list",
							cls : "newsList",
							id : "articleList",
							itemTpl : [
									'<div class="articleListCSS">',
									'<tpl if="titleImage!=&quot;none&quot;">',
									'<div><img class="articleListImage" src="{titleImage}"/></div>',
									'</tpl>',
									'<div class="articleListTitle">{title}',
									'<tpl if="badge==&quot;new&quot;">',
										'<img src="./resources/images/keyword_search/ic_new.png"/>',
									'</tpl>',
									'</div>',
									'<div class="articleListSummary">{summary}</div>',
									'</div>' ],
							store : 'Feed',
							flex : 1,
							plugins : [ {
								xclass : 'Ext.plugin.ListPaging',
								loadMoreText : '더 보기',
								autoPaging : true
							} ]
						} ],
					},

				});