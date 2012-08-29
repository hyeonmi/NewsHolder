Ext.define('NewsHolder.view.KeywordPanel', {
	extend : 'Ext.Panel',
	xtype : 'keywordpanel',

	requires : [ 'NewsHolder.view.ArticlePanel' ],

	config : {
		xtype : 'panel',
		layout : {
			type : 'card'
		},
		autoDestroy : true,
		id : 'searchMain',
		items : [ {
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
					},
					{
						xtype : 'list',
						flex : 1,
						id : 'rankList',
						itemTpl : [ '<div>{xindex}. {keyword}</div>' ],
						store : 'rankStore',
					},
					{
						xtype : 'list',
						flex : 1,
						id : 'searchList',
						cls : 'newsList',
						itemTpl : [ '<div class="articleTitle"/> </div>',
								'<img src="{url}"/> {title}<br>' ],
						hidden : true,
						store : 'searchResultStore',
						plugins : [ {
							xclass : 'Ext.plugin.ListPaging',
							loadMoreText : '더 보기',
							autoPaging : true
						} ]
					} ]
		} ]
	}
});
