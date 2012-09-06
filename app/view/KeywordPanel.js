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
									layout : {
										type : 'hbox'
									},
									items : [ {
										xtype : 'searchfield',
										flex : 1,
										id : 'searchField',
										placeHolder : '검색어를 입력하세요',
										height : '70px',
										margin : '5 5 5 5',
										border : '3px'
									}, {
										xtype : 'button',
										id : 'searchButton',
										ui : 'action',
										iconCls : 'search',
										iconMask : true
									} ]
								},
								{
									xtype : 'panel',
									html : '실시간 검색어 순위',
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
