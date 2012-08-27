/**
 * 기사 본문
 * 
 * */
Ext.define("NewsHolder.view.Article",{
	extend:"Ext.Panel",
	xtype:"article",
	id:"article",
	
	config:{
		layout:"fit",
		cls:"article",
		id:"detailArticle",
		items:[{
			xtype:"panel",
			layout:"vbox",
			items:[
			   {
				   xtype:"panel",
				   layout:"hbox",
				   items:[
				     {
				    	 xtype:"button",
				    	 text:"글자(+)",
				    	 id:"article_font_size_up"
				     },
				     {
				    	 xtype:"button",
				    	 text:"글자(-)",
				    	 id:"article_font_size_down"
				     }
				   ],
				   flex:0.1,
			   },
			   {
				   xtype:"panel",
					id:"articlePanel",
					tpl:[
					   "<div id='mainArticleTitle'>{title}</div>",
					   "<div id='mainArticle'>{description}</div>",
					],
					styleHtmlContent:true,
					scrollable:true,
					flex:1,
			   }
			]
		}],
		
		listeners:{
			swipe:{
				fn:function(event){
					var navi = localStorage.History_navigator;
					var flag = localStorage.flag;  //현재 보고 있는 기사가 전체 기사 중 몇번째인지 알려주는 변수
					var data = null;
					
					if(navi=="News"){
						console.log("뉴스에서 검색합니다.");
						data = Ext.getStore("Feed").data;
					}else if(navi=="Search"){
						console.log("검색에서 검색합니다.");
						data = Ext.getStore("searchResultStore").data;
					}else if(navi=="Scrap"){
						data = Ext.getStore("Scraps").data;
					}
					
					var count = data.length;  //전체 기사가 총 몇 개인지 알려주는 변수
					var panel = Ext.getCmp("articlePanel");        //기사 전문 패널을 가져옵니다.
				
					
					
					console.log(data);
					console.log(count);
					
					if(event.direction == "left"){ //다음 기사로 이동
						if(flag==count-1){
							Ext.Msg.alert("알림", "다음 기사가 없습니다.");
						}else{
							panel.setData(data.items[++flag].data);
							localStorage.flag = flag;
						}
					}else if(event.direction = "right"){  //이전 기사로 이동
						if(flag==0){
							Ext.Msg.alert("알림", "이전 기사가 없습니다.");
						}else{
							panel.setData(data.items[--flag].data);
							localStorage.flag = flag;
						}
					}
				},
				element:"element"
			}
		}
		
	},
	
	
});