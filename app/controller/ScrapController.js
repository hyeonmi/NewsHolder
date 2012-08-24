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
        },
        
        control: {
           '#scrapList':{
            	itemtap:"scrapListTap"
            },
        },
        
    },
    /** 스크랩 리스트에서 기사 제목을 탭했을 때 실행 *////////////////////////////////////////
    scrapListTap:function(list, index, item, record, e){
    	
    	var Maincontroller = this.getApplication().getController("MainController");
    	Maincontroller.getMain().setActiveItem(this.getArticle());
    	Maincontroller.getArticleList().setData(record.data);
    	Maincontroller.getTitlebar().setTitle(record.data.title);
    	Ext.getCmp("prevButton").show();
    	
    	localStorage.flag = index;
    	Ext.getCmp("articleScrapButton").show();
    	// this.getArticleList().setData(record.data);
    },
    
    refreshScrapList:function(){
    	var scrapStore = Ext.getStore("Scraps");
		scrapStore.load();
		this.getScrapList().setStore(scrapStore);
    },
});