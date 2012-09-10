/**
 * 기사 본문
 * 
 * */
Ext.define("NewsHolder.view.ArticlePanel",{
	extend:"Ext.Panel",
	xtype:"articlepanel",
	id:'articlePanel',
	requires:['Ext.Anim'],
	
	config:{
		layout:"fit",
		items:[{
			xtype:"panel",
			layout:"vbox",
			items:[
			       
			   {
				   xtype:"panel",
				   cls:'panel-content',
					id:"articleContent",
					showAnimation:'slide',
					tpl:[
						"<div id='mainArticleTitle'>",
							"<div id='title'>{title}</div>",
	            			'<div><hr></div>',
						" </div>",
//						"<div id='fontSize'>",
//							"<span id='font_size_down_button'>A</span>",
//							"<span id='font_size_up_button'>A</span>",
//						"</div>",
						"<div id='mainArticle' style='font-size:20px;'>{description}</div>",
						
					],
					items : [
								{
									   xtype : 'button',
									   id : 'font_size_down_button',
									   text : 'A',
								},
								{
									   xtype : 'button',
									   id : 'font_size_up_button',
									   text : 'A'
								},  
					         ],
					styleHtmlContent:true,
					scrollable:true,
					flex:1,
					listeners:{
						swipe:{
							fn:function(event){
								var articleController = NewsHolder.app.getController("ArticleController");
								articleController.swipeEventHandler(event.direction);
							},
							element:"element"
						}
					}
			   },
			   {
				   xtype:"panel",
					id:"articleContent2",
					cls:'panel-content',
					showAnimation:'slide',
					tpl:[
						"<div id='mainArticleTitle'>",
							"<div id='title'>{title}</div>",
	            			'<div><hr></div>',
						" </div>",
//						"<div id='fontSize'>",
//							"<span onclick='this.font_size_buttonClick(\"smaller\");' id='font_size_down_button'>A</span>",
//							"<span onclick='this.font_size_buttonClick(\"bigger\");' id='font_size_up_button'>A</span>",
//						"</div>",
						"<div id='mainArticle2' style='font-size:20px;'>{description}</div>",
					],
					items : [
								{
									   xtype : 'button',
									   id : 'font_size_down_button',
									   text : 'A',
								},
								{
									   xtype : 'button',
									   id : 'font_size_up_button',
									   text : 'A'
								},  
					         ],					
					styleHtmlContent:true,
					scrollable:true,
					hidden:true,
					flex:1,
					listeners:{
						swipe:{
							fn:function(event){
								var articleController = NewsHolder.app.getController("ArticleController");
								articleController.swipeEventHandler(event.direction);
							},
							element:"element"
						}
					}
			   },
			],
		}],
		
		
		
	},

	
	
});

