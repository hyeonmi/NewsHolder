Ext.define('NewsHolder.view.MainPanel', {
	extend:'Ext.Panel',
	xtype:'mainpanel',
	id:'mainPanel',
	
	 requires: [
	            'Ext.TitleBar',
	            'Ext.dataview.List',
	            'Ext.Img'
 	 ],
	
	config:{
		layout:{
			type:'card'
		},
		
		items:[
		{
			xtype:'titlebar',
			title:'SMART NEWS',
			docked:'top',
			id:'titlebar',
			ui : 'mainbar',
			items:[{
            	xtype:'button',
            	id:'alBackButton',
            	text:'뒤로 가기',
            	action:'back',
            	ui:'back',
            	hidden:true,
            	iconAlign:'right',
            },
			{
            	xtype:'button',
            	id:'searchBackButton',
            	text:'뒤로 가기',
            	action:'back',
            	ui:'back',
            	hidden:true,
            	iconAlign:'right',
            },{
            	xtype:'button',
            	id:'scrapBackButton',
            	text:'뒤로 가기',
            	action:'back',
            	ui:'back',
            	hidden:true,
            	iconAlign:'right',
            },
            {
            	xtype:'button',
            	id:'kgDetailBackButton',
            	text:'뒤로 가기',
            	action:'back',
            	ui:'back',
            	hidden:true,
            	iconAlign:'right',
            },
            {
            	xtype:'button',
            	id:'kgArticleBackButton',
            	text:'뒤로 가기',
            	action:'back',
            	ui:'back',
            	hidden:true,
            	iconAlign:'right',
            },
			{
            	xtype:'button',
            	id:'homeButton',
            	iconCls:'home',
            	iconMask:true,
            	ui:'action-round',
            	hidden:true,
            	iconAlign:'right',
            },
            {
            	xtype:'button',
            	id:'articleScrapButton',
            	ui : 'action-round',
            	iconCls:'star',
            	iconMask:true,
            	iconAlign:'right',
            	align:'right',
            	hidden:true,
            },
            {
            	xtype:'button',
            	id:'registerKeywordButton',
            	ui : 'action-round',
            	iconCls:'bookmarks',
            	iconMask:true,
            	iconAlign:'right',
            	align:'right',
            	hidden:true,
            },{
            	xtype:'button',
            	id:'kgDetailAlarmButton',
            	ui : 'action-round',
            	iconCls:'time',
            	iconMask:true,
            	iconAlign:'right',
            	align:'right',
            	hidden:true,
            }]
		},
		{
			xtype : 'panel',
			id:'rssMainPanel',
        	layout: {
			    type: 'vbox',
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
										id : 'testButton',
										html : '테스',
										cls:'btnSearch',
										src : ''
									},	
									{
										xtype : 'image',
										id : 'mainSearchButton',
										html : '검색',
										cls:'btnSearch',
										src : ''
									},	
									{
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
													 
													 
													 items : [
																{
																	xtype : 'image',
																	id : 'mainKeywordGroupBtn',
																	html : '키워드 모음',
																	cls:'btnKeyword',
																	src : ''
																},
																	{
																	xtype : 'image',
																	id : 'mainScrapBtn',
																	html : '스크랩 모음',
																	cls:'btnScrap',
																	src : ''
																} 
													          ]
													
												},
								  			 		{
														xtype : 'image',
														id : 'mainRssAddBtn',
														html : 'RSS 추가',
														cls:'btnRss',
														src : ''
													}
										         ]
									},
			        	 ]
			         },
			         
			         {
							xtype:'list',
							id:'mainRssList',
							flex : 2,
							itemTpl : new Ext.XTemplate(
							        '<div class="main-list-item">'+
							        '<img src="{mainRssImage}" class="main-list-img" />'+
									'<span class="main-list-text">{mainRssName}</span>'+
									'<span class="main-list-badge">{numOfEntry}</span>'+
									'</div>'
					    	),						
						    	store:'mainStore',
					 }		         
			]
		},
		
		{
			xtype:"articlelist",   // 기사 리스트(1)
		},{
			xtype:"articlepanel",      // 기사 리스트에서 항목을 누르면 해당 기사 전문이 나오는 패널(2)
		},{
			xtype:"keywordGroupPanel",   // 메인화면에서 '키워드 모음' 아이콘을 누르면 나오는 패널(3)
		},{
			xtype:"scrapPanel",     // 메인화면에서 '스크랩 모음' 아이콘을 누르면 나오는 패널
		},{
			xtype:"rsspanel",       // 메인화면에서 'RSS 추가' 아이콘을 누르면 나오는 패널
		},{
			xtype:'keywordpanel',	// 메인화면에서 검색 버튼 눌렀을 때 나오는 패널
		},{
			xtype:'kgdetailpanel'	,	// 키워드 모음에서 하나 선택했을 때 나오는 패널(7)
		}]
	}
});