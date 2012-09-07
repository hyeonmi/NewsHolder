Ext
		.define(
				'NewsHolder.view.KeywordPanel',
				{
					extend : 'Ext.Panel',
					xtype : 'keywordpanel',
					id : 'keywordPanel',
					cls : 'panel-content',

					requires : [ 'NewsHolder.view.ArticlePanel',
							'Ext.plugin.ListPaging' ,
'Ext.field.Search'],

					config : {
						xtype : 'panel',
						layout : {
							type : 'vbox'
						},
						items : [
								{
									xtype : 'panel',
									id : 'searchDummyPanel',
									cls : 'dummyPanel'
								},
								{
									xtype : 'panel',
									cls : 'searchPanel',
									layout : {
										type : 'hbox'
									},
									items : [ {
										xtype : 'searchfield',
										id : 'searchField',
										cls : 'roundSearchField',
										placeHolder : '검색어를 입력하세요',
									}, {
										xtype : 'image',
										id : 'searchButton',
										ui : 'action',
										cls : 'searchIcon',
									} ]
								},
								{
									xtype : 'panel',
									html : '<div class="content">실시간 인기 검색어</div>',
									id : 'realtimePanel',
									cls : 'realtimePanel'
								},
								{
									xtype : 'panel',
									id : 'listDummyPanel',
									cls : 'listDummyPanel',
									hidden : true
								},
								{
									xtype : 'list',
									flex : 1,
									cls : 'rankListCSS',
									id : 'rankList',
									/*
									 * itemTpl : [ '<div>', '<tpl
									 * if="placing==&quot;+&quot;">', '<div>{xindex}.
									 * {keyword}&nbsp;&nbsp;&nbsp;<img
									 * src="./resources/images/keyword_search/ic_up.png"/><span
									 * class="rankvalue">{value}</span></div>', '<tpl
									 * elseif="placing==&quot;-&quot;">', '<div>{xindex}.
									 * {keyword}&nbsp;&nbsp;&nbsp;<img
									 * src="./resources/images/keyword_search/ic_down.png"/><span
									 * class="rankvalue">{value}</span></div>', '<tpl
									 * elseif="placing==&quot;new&quot;">', '<div>{xindex}.
									 * {keyword}&nbsp;&nbsp;&nbsp;<img
									 * src="./resources/images/keyword_search/ic_new.png"/></div>', '</tpl>', '</div>' ],
									 */

									itemTpl : new Ext.XTemplate(
											'<table width=424px><tr>'
													+ '<td width=30px></td>'
													+ '<td width=323px align="left">{xindex}. {keyword}</td>'
													+ '<td width=40px align="right">'
													+ '<tpl if="placing==&quot;+&quot;"><div><span class="rankvalue">{value}</span> <img src="./resources/images/keyword_search/ic_up.png"/></div>'
													+ '<tpl elseif="placing==&quot;-&quot;"><div><span class="rankvalue">{value}</span> <img src="./resources/images/keyword_search/ic_down.png"/></div>'
													+ '<tpl elseif="placing==&quot;new&quot;"><div><img src="./resources/images/keyword_search/ic_new.png"/></div>'
													+ '</tpl>' + '</td>'
													+ '<td width=30px></td>'
													+ '</tr></table>'),
									store : 'rankStore',
								},
								{
									xtype : 'list',
									flex : 1,
									id : 'searchList',
									cls : 'newsList',
									itemTpl : [
											'<div class="articleListCSS">',
											'<tpl if="titleImage!=&quot;none&quot;">',
											'<div><img class="articleListImage" src="{titleImage}"/></div>',
											'</tpl>',
											'<div class="articleListTitle">{title}</div>',
											'<div class="articleListSummary">{summary}</div>',
											'</div>' ],
									hidden : true,
									store : 'searchResultStore',
									plugins : [ {
										xclass : 'Ext.plugin.ListPaging',
										loadMoreText : '더 보기',
										autoPaging : true
									} ]
								} ]
					}
				});
