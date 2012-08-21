Ext.define("NewsHolder.view.keyword_list",{
	extend:"Ext.Panel",
	xtype:"keywordPanel",
	
	config:{
		lyaou:{
			type:"vbox"
		},
		
		items:[{
                xtype: 'searchfield',
                flex: 1,
                height: '30%',
                id: 'searchField',
                itemId: 'mysearchfield',
                placeHolder: '검색어를 입력하세요'
            },
            {
                xtype: 'list',
                flex: 10,
                id: 'searchList',
                itemId: 'mylist',
                itemTpl: [
                    '<div>{xindex}. {keyword}</div>'
                ],
                store: 'RanksStore'
            }]
		
	},
	
});