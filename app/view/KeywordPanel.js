Ext
		.define(
				'NewsHolder.view.KeywordPanel',
				{
					extend : 'Ext.Panel',
					xtype : 'keywordpanel',
					id : 'keywordPanel',

					requires : [ 'NewsHolder.view.ArticlePanel',
							'Ext.plugin.ListPaging' ],

					config : {
						xtype : 'panel',
						layout : {
							type : 'vbox'
						},
						items : [
								{
									xtype : 'panel',
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
										/*flex : 1,*/
										id : 'searchField',
										placeHolder : '검색어를 입력하세요',
									}, {
										xtype : 'image',
										id : 'searchButton',
										ui : 'action',
										cls : 'searchIcon',
										html:[
											'<div class="searchIcon"><img src="./resources/images/keyword_search/ic_go.png"/></div>',
										]
									} ]
								},
								{
									xtype : 'panel',
									html : '<div class="content">실시간 인기 검색어</div>',
									cls : 'realtimePanel'
								},
								{
									xtype : 'list',
									flex : 1,
									cls : 'rankListCSS',
									id : 'rankList',
									itemTpl : [
											'<div>',
											'<tpl if="placing==&quot;+&quot;">',
											'<div>{xindex}. {keyword}&nbsp;&nbsp;&nbsp;<img src="./resources/images/keyword_search/ic_up.png"/><span class="rankvalue">{value}</span></div>',
											'<tpl elseif="placing==&quot;-&quot;">',
											'<div>{xindex}. {keyword}&nbsp;&nbsp;&nbsp;<img src="./resources/images/keyword_search/ic_down.png"/><span class="rankvalue">{value}</span></div>',
											'<tpl elseif="placing==&quot;new&quot;">',
											'<div>{xindex}. {keyword}&nbsp;&nbsp;&nbsp;<img src="./resources/images/keyword_search/ic_new.png"/></div>',
											'</tpl>', '</div>' ],
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
