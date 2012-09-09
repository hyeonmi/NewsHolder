Ext.define('NewsHolder.controller.ButtonController', {
	extend : 'Ext.app.Controller',

	config : {
		refs : {
			feedIcon : "#feedIcon",
			homeButton : "#homeButton",
			articleScrapButton : "#articleScrapButton",
			mainSearchButton : "#mainSearchButton",
			mainPanel: "#mainPanel",
		},
		
		constructor:{
			
		},

		control : {

			homeButton : {
				tap : "homeButtonTap",
			},
			articleScrapButton : {
				tap : "articleScrapButtonTap",
			},
			mainSearchButton : {
				tap : "mainSearchButtonTap",
			},
		}
	},
	

	
	refreshButtonTap : function(button, event){
		var testStore = Ext.getStore('Test');
		var mainStore = Ext.getStore("mainStore");
		var mainData = mainStore.getData();
		
		for(var i=0; i<mainData.items.length; i++){
			testStore.getProxy().setUrl(
					"http://iamapark.cafe24.com/fullrss/makefulltextfeed.php?url="
							+ mainData.items[i].data.mainRssUrl + "&format=json&lastAccessDate=" + mainData.items[i].data.lastAccessDate + "&id=" + mainData.items[i].data.id); 
			
			testStore.load({
				callback : function(records, operation, success) {
					
					var proxy = mainStore.getProxy();
					
					var item = mainStore.findRecord('id', records[0].data.proxyId);
					console.log(item);
					item.data.lastAccessDate = records[0].data.lastAccessDate;
					item.data.numOfEntry = records[0].data.numOfEntry;
					item.data.proxyId = records[0].data.proxyId;
					item.setProxy(proxy);
					item.phantom = false;
					item.setDirty();
					item.save();
					var json = JSON.parse(localStorage["mainProxy-"+records[0].data.proxyId]);
					console.log(json);
				},
				scope : this
			});
		}
	},

	/** 왼쪽 상단의 홈 버튼을 눌렀을 때 */
	homeButtonTap : function(button, event) {
		var ArticleController = this.getApplication().getController(
				"ArticleController");
		ArticleController.getList().deselectAll();
		
		animation.onMoveSlideRight('NewsHolder', 'mainContentId', [ 'homeButton',
				'articleScrapButton', 'registerKeywordButton' ],
				[ 'mainSearchButton' ]);
	},

	/** 기사 화면에서 오른쪽 상단의 스크랩 버튼을 눌렀을 때 */
	articleScrapButtonTap : function(button, event) {

		var data = null;
		if(localStorage.panelFlag=="articleContent"){
			data = Ext.getCmp("articleContent")._data;
		}else{
			data = Ext.getCmp("articleContent2")._data;
		}

		var scrapDate = Date();
		var scrapStore = Ext.getStore('Scraps');

		Ext.Msg.confirm('확인', '이 기사를 스크랩 하시겠습니까?', function(buttonId, value,
				opt) {
			if (buttonId == 'yes') {
				if (scrapStore.find('title', data.title) > -1) { // 중복확인
					Ext.Msg.alert('알림', '해당 기사가 이미 등록되어있습니다.', Ext.emptyFn);
				} else {
					scrapStore.add({
						title : data.title,
						description : data.description,
						pubDate : data.pubDate,
						scrapDate : scrapDate,
						link : data.link,
						titleImage:data.titleImage,
						summary:data.summary,
						badge:data.badge,
					});
					scrapStore.sync();
					Ext.Msg.alert('알림', '스크랩이 완료되었습니다.', Ext.emptyFn);
				}
			}
		}, this);
	},

	/** 오른쪽 상단의 검색 버튼을 눌렀을 때 */
	mainSearchButtonTap : function(button, event) {
		animation.onMoveSlideLeft('키워드 검색', 'keywordPanel',
				[ 'mainSearchButton' ], [ 'homeButton' ]);
		this.getApplication().getController("KeywordSearchController")
				.resetModifiedComponent();

		localStorage.History_navigator = "Search";
	},
});