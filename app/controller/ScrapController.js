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
          articleScrapButton:"#articleScrapButton"
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
    
    init:function(){
    	var store = Ext.getStore("Scraps");
    	store.load();
    },
    
    /** 스크랩 리스트에서 기사 제목을 탭했을 때 실행 */// /////////////////////////////////////
    scrapListTap:function(list, index, item, record, e){
    	if (!list.lastTapHold || (new Date() - list.lastTapHold  > 1000)) {
            console.log('ahahah');
            var Maincontroller = this.getApplication().getController("MainController");
        	Maincontroller.getMain().animateActiveItem(
        			this.getArticle(), {
        				type:"slide",
        				direction : "left"
        			});
        	Maincontroller.getArticleList().setData(record.data);
        	this.getScrapBackButton().show();
        	this.getScrapHomeButton().hide();
        	
        	localStorage.flag = index;
        	Ext.getCmp("articleScrapButton").show();
        }
    },
    
    scrapBackButtonTap:function(button, e, options){
    	this.getMainPanel().animateActiveItem(
				4, {
					type : "slide",
					direction : "right"
				});
		this.getApplication().getController('MainController')
				.getTitlebar().setTitle("스크랩 모음");
		this.getScrapHomeButton().show();
		this.getScrapBackButton().hide();
		this.getArticleScrapButton().hide();
    },
    
    scrapListTapHold:function(list, item, index, e, eOpts){
    	this.getScrapList().deselectAll();
    	list.lastTapHold = new Date();
    	Ext.Msg.confirm("알림", "해당 스크랩을 삭제하시겠습니까", function(buttonId, value, opt){
    		if(buttonId=="yes"){
        		var store = Ext.getStore('Scraps');
        		store.remove(record);
        		store.sync();
    		}
    	}, this);
    },
});