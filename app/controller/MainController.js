Ext.define('NewsHolder.controller.MainController', {
    extend: 'Ext.app.Controller',
    
    requires: [
               	'Ext.data.proxy.JsonP',
               	'Ext.data.proxy.LocalStorage',
               	'Ext.TitleBar',
               	'Ext.dataview.DataView',
               	'Ext.dataview.List',
               	'Ext.field.Search',
               	'Ext.form.FieldSet',
               	'NewsHolder.util.TagExtractor'
           ],
    
    config: {
        refs: {
            mainPanel: 'mainpanel',
            article: 'article',
            list:'#articleList',
            articleList:'#articlePanel',
            titlebar:'#titlebar',
            detailArticle:'#detailArticle',
            newsListTopImage:'#newsListTopImage',
            feedIcon:"#feedIcon",
            main:"#main",
            homeButton:"#homeButton",
            RssList:"#rssList",
            keywordpanel:"keywordpanel",
            scrapPanel:"scrapPanel",
        },

        control: {
            "#articleList" :{
            	itemtap: 'onArticleTap'
            },
            feedIcon:{
            	itemtap:'feedIconTap',
            },
        }
    },
    
    /** 메인 화면에서 feed 아이콘을 눌렀을 때 *////////////////////////////////////////
    feedIconTap:function(list, index, item, record, e){
    	
    	if(index=="0"){// 'RSS 추가' 아이콘 클릭 (분리 완료)
    		this.getTitlebar().setTitle("RSS 추가");
    		this.getMain().animateActiveItem(5, {type:"slide", direction:"left"});
    		 
    	}else if(index=="1"){ // '키워드 모음' 아이콘 클릭 (Controller 파일 생성해야 함)
    		this.getTitlebar().setTitle("키워드 모음");
    		// this.getMain().animateActiveItem(3, {type:"slide",
			// direction:"left"});
    		console.log("키워드 모음 아이콘 탭!!");
    		
    	}else if(index=="2"){ // '스크랩 모음' 아이콘 클릭 (분리 완료)
    		this.getTitlebar().setTitle("스크랩 모음");
    		this.getMain().animateActiveItem(this.getScrapPanel(), {type:"slide", direction:"left"});
    		this.getHomeButton().show();
    		//스크랩 리스트를 refresh하는 함수 호출
    		var ScrapController = this.getApplication().getController("ScrapController");
    		console.log(ScrapController);
    		ScrapController.refreshScrapList();
    		
    	}else{ // 각 신문사 아이콘 클릭
    		this.getTitlebar().setTitle(record.data.name);
			this.getMain().animateActiveItem(1, {
				type : "slide",
				direction : "left"
			});
			var store = Ext.getStore("Feed");
			store.getProxy().setUrl(
					"http://iamapark.cafe24.com/fullrss/makefulltextfeed.php?url="
							+ record.data.url + "&format=json");
			store
					.load({
						callback : function(records, operation,
								success) {
							var extractor = Ext
									.create("NewsHolder.util.TagExtractor");

							this.getList().refresh();
							for ( var i = 0; i < records.length; i++) {
								records[i].data.description = extractor
										.removeATag(records[i].data.description);

							}
							// extractor.removeATag(store);
							extractor.extractTag("img src",
									store, this, record);
						},
						scope : this
					});
    	}
    	Ext.getCmp("homeButton").show();
    },
    
    /** 기사 리스트에서 기사를 눌렀을 때 *//////////////////////////////////////////////////////////
    onArticleTap: function(dataview, index, target, record, e, options){
    	
    	console.log(Ext.getStore("Feed"));
    	
    	this.getMain().animateActiveItem(this.getArticle(), { type: "slide", direction: "left" });
    	this.getArticleList().setData(record.data);
    	this.getTitlebar().setTitle(record.data.title);
    	Ext.getCmp("prevButton").show();
    	
    	localStorage.flag = index;
    	Ext.getCmp("articleScrapButton").show();
    },
});