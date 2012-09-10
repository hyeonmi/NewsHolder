Ext.define('NewsHolder.controller.ArticleController', {
	extend : 'Ext.app.Controller',

	requires : [ 'NewsHolder.util.TagExtractor', ],

	config : {
		startIndex : 0,
		tapModel:null,
		lastAccessDate : 0,
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
			'#font_size_down_button' : {
				tap : 'font_size_down'
			},
			'#font_size_up_button' : {
				tap : 'font_size_up'
			},			
		}

	},
	
	//font size ++
	font_size_up : function(){
		
		var panelFlag = localStorage.panelFlag;
		var article = null;
		
		if(panelFlag=="articleContent"){
			article = Ext.getDom("mainArticle");
		}else{
			article = Ext.getDom("mainArticle2");
		}
		
		var current = parseInt(article.style.fontSize);
		current++;
		article.style.fontSize = current + "px";		
	},
	
	//font size --
	font_size_down : function(){
		var panelFlag = localStorage.panelFlag;
		var article = null;
		
		if(panelFlag=="articleContent"){
			article = Ext.getDom("mainArticle");
		}else{
			article = Ext.getDom("mainArticle2");
		}
		
		var current = parseInt(article.style.fontSize);
		current--;
		article.style.fontSize = current + "px";			
	},

	onArticleBackButtonTap : function(button, e, options) {
		var navigator = localStorage.History_navigator;
		if(navigator=="Scrap"){
			animation.onMoveSlideRight(null, 'scrapPanel', [ 'scrapBackButton', 'alBackButton',
			'articleContent', 'articleContent2' ], [ 'homeButton' ]);
		}else if(navigator=="News"){
			animation.onMoveSlideRight(null, 'articleListId', [ 'alBackButton',
			                                    				'articleScrapButton', 'articleContent', 'articleContent2' ], [ 'homeButton' ]);
		}
	},

	refreshArticleList : function(record, index) {
		
		var mainStore = Ext.getStore("mainStore");
		var mainData = mainStore.getData();
		var readArticleStore = Ext.getStore("ReadArticleStore");
		
		this.setLastAccessDate(mainData.items[index].data.lastAccessDate);
		
		var articleList = this.getList();
		Ext.getStore("Feed").removeAll();
		this.setStartIndex(0);
		this.setTapModel(record);
		
		articleList.setMasked({
			xtype : 'loadmask',
			centered : true,
			message: '로딩 중...',
		    indicator: false
		});
		
		var store = Ext.getStore('Feed');
		store.load({
			callback: function(records, operation, success) {
				store.add(records);
				articleList.unmask();
				console.log(records.length);
				
				for(var i=0; i<records.length; i++){
					//if(records[i].data.dc_identifier==)
					
					/*if(readArticleStore.find('dc_identifier', records[i].data.dc_identifier)){
						console.log(i);
					}*/
					
					console.log(i + "::" + readArticleStore.find('dc_identifier', records[i].data.dc_identifier));
					
					//if(readArticleStore.find('dc_identifier', records[i].data.dc_identifier)>-1){
						
						var item = readArticleStore.findRecord('dc_identifier', records[i].data.dc_identifier);
						console.log(item);
						if(item!=null){item.data.badge = 'old';
						item.setProxy(readArticleStore.getProxy());
						item.phantom = false;
						item.setDirty();
						item.save();
						}
											//}
				}
			}
		});
	},

	/** 기사 리스트에서 기사를 눌렀을 때 */
	onArticleTap : function(dataview, index, target, record, e, options) {

		var panelFlag = localStorage.panelFlag;
		
		if(panelFlag=="articleContent"){
			animation.onMoveSlideLeft(null, 'articlePanel', [ 'homeButton', 'articleContent2' ], [
			                                		                           'articleContent', 'alBackButton', 'articleScrapButton' ]);
			this.getArticleContent().setData(record.data);
		}else{
			animation.onMoveSlideLeft(null, 'articlePanel', [ 'homeButton', 'articleContent' ], [
			                                		                           'articleContent2', 'alBackButton', 'articleScrapButton' ]);
			this.getArticleContentOther().setData(record.data);
		}

		//console.log("original:\n"+record.data.originDesc);
		//console.log("modified:\n"+record.data.description);
		console.log(record.data);
		localStorage.flag = index;
		
		
		//기사를 눌렀을 때 해당 기사의 id, badge를 로컬스토리지에 저장한다.
		
		var readArticleStore = Ext.getStore("ReadArticleStore");
		console.log(readArticleStore);
		readArticleStore.add({
			dc_identifier : record.data.dc_identifier,
			badge: 'old'
		});
		readArticleStore.sync();
		
	},

	changeProxyUrl: function(){
		var store = Ext.getStore("Feed");
		var lastAccessDate = this.getLastAccessDate();
		
		var url = "http://iamapark.cafe24.com/fullrss/makefulltextfeed.php?url=" + 
				 this.getTapModel().data.mainRssUrl + "&format=json"
		         +"&startIndex=" + this.getStartIndex() + "&lastAccessDate=" + lastAccessDate;
		
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