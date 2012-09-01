/**
 * 기사 본문
 * 
 * */
Ext.define("NewsHolder.view.ArticlePanel",{
	extend:"Ext.Panel",
	xtype:"articlepanel",
	id:'articlePanel',
	
	config:{
		layout:"fit",
		cls:"article",
		items:[{
			xtype:"panel",
			layout:"vbox",
			items:[
			   {
				   xtype:"panel",
					id:"articleContent",
					tpl:[
					   /*"<div id='articleWrapper>",*/
						   "<div id='mainArticleTitle'>",
						   		"{title}",
						   "</div>",
						   "<div onclick='font_size_buttonClick(&quot;bigger&quot;);' id='font_size_up_button'>크게+</div>", "<div onclick='font_size_buttonClick(&quot;smaller&quot;);' id='font_size_down_button'>작게-</div></br>",
						   "<div id='mainArticle' style='font-size:20px;'>{description}</div>",
					   /*"</div>"*/
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
					}else if(navi=="Keyword"){
						console.log("키워드에서 검색합니다.");
						data = Ext.getStore("kgResultStore").data;
					}
					
					var count = data.length;  //전체 기사가 총 몇 개인지 알려주는 변수
					var panel = Ext.getCmp("articleContent");        //기사 전문 패널을 가져옵니다.
				
					
					
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

function font_size_buttonClick(size){
	var article = Ext.getDom("mainArticle");
	var current = parseInt(article.style.fontSize);
	if(size=="bigger"){
		current++;
	}else{
		current--;
	}
	article.style.fontSize = current + "px";
};