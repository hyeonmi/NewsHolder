Ext.define('NewsHolder.view.MainPanel', {
	extend : 'Ext.Panel',
	xtype : 'mainpanel',
	id : 'mainPanel',

	requires : [ 'Ext.TitleBar', 'Ext.dataview.List', 'Ext.Img' ],

	config : {
		layout : {
			type : 'card'
		},
		
		items:[
		{
			xtype:'titlebar',
			title:'News <b>Holder</b>',
			docked:'top',
			id:'titlebar',
			ui : 'mainbar',
			cls : 'mainTitle',
			items : [ {
				xtype : 'image',
				id : 'alBackButton',
				cls : 'backButtonCls',
				iconMask:true,
				/*
				 * text:'뒤로 가기', action:'back', ui:'back',
				 */
				hidden : true,
				iconAlign : 'right',
			}, {
				xtype : 'image',
				id : 'searchBackButton',
				text : '뒤로 가기',
				hidden : true,
				cls:'backButtonCls',
				iconAlign : 'right',
				iconMask:true
			}, {
				xtype : 'image',
				id : 'scrapBackButton',
				text : '뒤로 가기',
				cls : 'backButtonCls',
				hidden : true,
				iconAlign : 'right',
				iconMask:true
			}, {
				xtype : 'image',
				id : 'kgDetailBackButton',
				text : '뒤로 가기',
				cls : 'backButtonCls',
				hidden : true,
				iconAlign : 'right',
				iconMask:true
			}, {
				xtype : 'image',
				id : 'kgArticleBackButton',
				text : '뒤로 가기',
				hidden : true,
				cls : 'backButtonCls',
				iconAlign : 'right',
				iconMask:true
			}, {
				xtype : 'image',
				id : 'homeButton',
				cls : 'homeButtonCls',
				hidden : true,
			}, {
				xtype : 'image',
				id : 'articleScrapButton',
				cls : 'scrapButtonCls',
				hidden : true,
				align : 'right',
				iconMask:true
			}, {
				xtype : 'image',
				cls : 'bookmarkButtonCls',
				id : 'registerKeywordButton',
				align : 'right',
				hidden : true,
				iconMask:true
			}]
		}, {
			xtype : 'maincotnent'
		},

		{
			xtype : "articlelist", // 기사 리스트(1)
		}, {
			xtype : "articlepanel", // 기사 리스트에서 항목을 누르면 해당 기사 전문이 나오는 패널(2)
		}, {
			xtype : "keywordGroupPanel", // 메인화면에서 '키워드 모음' 아이콘을 누르면 나오는
		// 패널(3)
		}, {
			xtype : "scrapPanel", // 메인화면에서 '스크랩 모음' 아이콘을 누르면 나오는 패널
		}, {
			xtype : "rsspanel", // 메인화면에서 'RSS 추가' 아이콘을 누르면 나오는 패널
		}, {
			xtype : 'keywordpanel', // 메인화면에서 검색 버튼 눌렀을 때 나오는 패널
		}, {
			xtype : 'kgdetailpanel', // 키워드 모음에서 하나 선택했을 때 나오는 패널(7)
		} ]
	}
});