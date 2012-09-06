Ext.define('NewsHolder.controller.ArticleController', {
	extend : 'Ext.app.Controller',

	requires : [ 'NewsHolder.util.TagExtractor', ],

	config : {
		startIndex : 0,
		tapModel:null,
		refs : {
			list : '#articleList',
			articleContent : '#articleContent',
			articleContentOther : "#articleContent2",
			articleBackButton : "#alBackButton",
		},

		control : {
			list : {
				itemtap : 'onArticleTap',
			},
			articleBackButton : {
				tap : 'onArticleBackButtonTap'
			}, 
		}

	},

	onArticleBackButtonTap : function(button, e, options) {
		var navigator = localStorage.History_navigator;
		if(navigator=="Scrap"){
			animation.onMoveSlideLeft('스크랩 모음', 'scrapPanel', ['mainSearchButton', 'alBackButton'], ['homeButton']);
		}else if(navigator=="News"){
			animation.onMoveSlideRight(null, 'articleListId', [ 'alBackButton',
			                                    				'articleScrapButton', 'articleContent', 'articleContent2' ], [ 'homeButton' ]);
		}
		
		console.log("onArticleBackBurronTap");
	},

	refreshArticleList : function(record) {
		var articleList = this.getList();
		this.setStartIndex(0);
		this.setTapModel(record);
		
		articleList.setMasked({
			xtype : 'loadmask',
			centered : true
		});
		
		var store = Ext.getStore('Feed');
		store.load({
			callback: function(records, operation, success) {
				store.add(records);
				console.log("load");
				articleList.setMasked(false);
			}
		});
	},

	/** 기사 리스트에서 기사를 눌렀을 때 */
	onArticleTap : function(dataview, index, target, record, e, options) {

		var panelFlag = localStorage.panelFlag;
		console.log("플래그 = " + panelFlag);
		
		if(panelFlag=="articleContent"){
			
			animation.onMoveSlideLeft(null, 'articlePanel', [ 'homeButton', 'articleContent2' ], [
			                                		                           'articleContent', 'alBackButton', 'articleScrapButton' ]);
			this.getArticleContent().setData(record.data);
			console.log("articleContent");
		}else{
			
			animation.onMoveSlideLeft(null, 'articlePanel', [ 'homeButton', 'articleContent' ], [
			                                		                           'articleContent2', 'alBackButton', 'articleScrapButton' ]);
			this.getArticleContentOther().setData(record.data);
			console.log("articleContent2");
			console.log(this.getArticleContentOther());
		}

		//console.log("original:\n"+record.data.originDesc);
		//console.log("modified:\n"+record.data.description);
		localStorage.flag = index;
	},

	changeProxyUrl: function(){
		var store = Ext.getStore("Feed");
		var url = "http://iamapark.cafe24.com/fullrss/makefulltextfeed.php?url=" + 
				 this.getTapModel().data.mainRssUrl + "&format=json"
		         +"&startIndex=" + this.getStartIndex();
		store.getProxy().setUrl(url);
		console.log(url);
		this.setStartIndex(this.getStartIndex() + 10);
		console.log(this.getStartIndex());
	},
	
	swipeEventHandler:function(direction){
		var navi = localStorage.History_navigator;
		var flag = localStorage.flag;  //현재 보고 있는 기사가 전체 기사 중 몇번째인지 알려주는 변수
		var panelFlag = null;
		var animation = Ext.create("NewsHolder.util.ManagerController");
		var panel = null;
		
		if(localStorage.panelFlag == null){
			localStorage.panelFlag = "articleContent";
		}else{
			panelFlag = localStorage.panelFlag;
		}
		
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
		        //기사 전문 패널을 가져옵니다.					
		
		//console.log(data);
		//console.log(flag);
		
		if(direction == "left"){ //다음 기사로 이동
			if(flag==count-1){
				Ext.Msg.alert("알림", "다음 기사가 없습니다.");
			}else{
				
				
				if(panelFlag=="articleContent"){
					panel = Ext.getCmp("articleContent2");
					panel.setData(data.items[++flag].data);
					localStorage.flag = flag;
					animation.onMoveSlideLeft(null, "articleContent2", ["articleContent"], ["articleContent2"]);
					localStorage.panelFlag = "articleContent2";
				}else{
					panel = Ext.getCmp("articleContent");
					panel.setData(data.items[++flag].data);
					localStorage.flag = flag;
					animation.onMoveSlideLeft(null, "articleContent", ["articleContent2"], ["articleContent"]);
					localStorage.panelFlag = "articleContent";
				}
			}
		}else if(direction = "right"){  //이전 기사로 이동
			if(flag==0){
				Ext.Msg.alert("알림", "이전 기사가 없습니다.");
			}else{
				
				
				if(panelFlag=="articleContent"){
					panel = Ext.getCmp("articleContent2");
					panel.setData(data.items[--flag].data);
					localStorage.flag = flag;
					animation.onMoveSlideLeft(null, "articleContent2", ["articleContent"], ["articleContent2"]);
					localStorage.panelFlag = "articleContent2";
				}else{
					panel = Ext.getCmp("articleContent");
					panel.setData(data.items[--flag].data);
					localStorage.flag = flag;
					animation.onMoveSlideLeft(null, "articleContent", ["articleContent2"], ["articleContent"]);
					localStorage.panelFlag = "articleContent";
				}
			}
		}
	}
});