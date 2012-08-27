Ext.define('NewsHolder.controller.ScrapController', {
    extend: 'Ext.app.Controller',

    config: {
        models: [
            
        ],
        views: [
            
        ],

        refs: {
          scrapList:"#scrapList",
          article: 'article',
          scrapBackButton : '#scrapBackButton',
          scrapHomeButton : '#homeButton',
          scrapPanel:'#scrapPanel',
          mainPanel:'#main',
        },
        
        control: {
            scrapBackButton:{
            	tap:'scrapBackButtonTap'
            },
            scrapList:{
            	itemtaphold:"scrapListTapHold",
        		itemtap:"scrapListTap",
            },
        },
        
    },
    /** 스크랩 리스트에서 기사 제목을 탭했을 때 실행 */// /////////////////////////////////////
    scrapListTap:function(list, index, item, record, e){
    	console.log("list item tap");
    	var Maincontroller = this.getApplication().getController("MainController");
    	Maincontroller.getMain().animateActiveItem(
    			this.getArtice(), {
    				type:"slide",
    				direction : "left"
    			});
    	//Maincontroller.getMain().setActiveItem(this.getArticle());
    	Maincontroller.getArticleList().setData(record.data);
    	Maincontroller.getTitlebar().setTitle(record.data.title);
    	this.getScrapBackButton().show();
    	this.getScrapHomeButton().hide();
    	
    	localStorage.flag = index;
    	Ext.getCmp("articleScrapButton").show();
    	// this.getArticleList().setData(record.data);
    },
    
    scrapBackButtonTap:function(button, e, options){
    	console.log("scrapBackButtonTap");
    	this.getMainPanel().animateActiveItem(
				4, {
					type : "slide",
					direction : "right"
				});
		this.getApplication().getController('MainController')
				.getTitlebar().setTitle("스크랩 모음");
		this.getScrapHomeButton().show();
		this.getScrapBackButton().hide();
    },
    
    refreshScrapList:function(){
    	var scrapStore = Ext.getStore("Scraps");
		scrapStore.load();
		this.getScrapList().setStore(scrapStore);
    },
    
    scrapListTapHold:function(dataview, index, target, record, e, eOpts){
    	console.log("scrapListTapHold!!");
    	Ext.Msg.confirm("알림", "해당 스크랩을 삭제하시겠습니까", function(buttonId, value, opt){
    		console.log(record.internalId);
    		var store = Ext.getStore('Scraps');
    		store.remove(record);
    		store.sync();
    	}, this);
    }
});