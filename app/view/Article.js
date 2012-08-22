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
			/**id:"articlePanel",
			tpl:[
			   "{content}",
			],
			
			styleHtmlContent:true,
			scrollable:true,*/
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
				   flex:0.05,
			   },
			   {
				   xtype:"panel",
					id:"articlePanel",
					tpl:[
					   "<div id='mainArticle'>{content}</div>",
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
					console.log(Ext.getStore("Feed").data);
					var flag = localStorage.flag;  //현재 보고 있는 기사가 전체 기사 중 몇번째인지 알려주는 변수
					var count = Ext.getStore("Feed").data.length;  //전체 기사가 총 몇 개인지 알려주는 변수
					var panel = Ext.getCmp("articlePanel");        //기사 전문 패널을 가져옵니다.
					var titlebar = Ext.getCmp("titlebar");         //기사 타이틀바를 가져옵니다.
					
					if(event.direction == "left"){ //다음 기사로 이동
						if(flag==count){
							Ext.Msg.alert("알림", "다음 기사가 없습니다.");
						}else{
							panel.setData(Ext.getStore("Feed").data.items[++flag].data);
							titlebar.setTitle(Ext.getStore("Feed").data.items[flag].data.title);
							localStorage.flag = flag;
						}
					}else if(event.direction = "right"){  //이전 기사로 이동
						console.log("이전 기사");
						
						if(flag==0){
							Ext.Msg.alert("알림", "이전 기사가 없습니다.");
						}else{
							panel.setData(Ext.getStore("Feed").data.items[--flag].data);
							titlebar.setTitle(Ext.getStore("Feed").data.items[flag].data.title);
							localStorage.flag = flag;
						}
					}
				},
				element:"element"
			}
		}
	},
	
	
});