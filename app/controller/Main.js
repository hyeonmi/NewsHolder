Ext.define('NewsHolder.controller.Main', {
    extend: 'Ext.app.Controller',
    requires: [
               	'Ext.data.proxy.JsonP',
               	'Ext.data.proxy.LocalStorage',
               	'Ext.TitleBar',
               	'Ext.dataview.DataView',
               	'Ext.dataview.List',
               	'Ext.field.Search',
               	'Ext.form.FieldSet'
           ],
    
    config: {
        refs: {
            mainPanel: 'mainpanel',
            article: 'article',
            list:'#articleList',
            articleList:'#articlePanel',
            titlebar:'#titlebar',
            backButton:'#prevButton',
            detailArticle:'#detailArticle',
            newsListTopImage:'#newsListTopImage',
            feedIcon:"#feedIcon",
            main:"#main",
            homeButton:"#homeButton",
            mainSearchButton:"#mainSearchButton",
            articleScrapButton:"#articleScrapButton",
            scrapList:"#scrapList",
            RssList:"#rssList",
        },

        control: {
            "#articleList" :{
            	itemtap: 'onArticleTap'
            },
            '[action=back]':{
            	tap: 'onBackButtonTap'
            },
            '#article_font_size_up':{
            	tap:'font_size_up'
            },
            '#article_font_size_down':{
            	tap:'font_size_down'
            },
            feedIcon:{
            	itemtap:'feedIconTap',
            },
            homeButton:{
            	tap:"homeButtonTap",
            },
            mainSearchButton:{
            	tap:"mainSearchButtonTap",
            },
            articleScrapButton:{
            	tap:"articleScrapButtonTap",
            }
        }
    },
    
    /**기사 화면에서 오른쪽 상단의 스크랩 버튼을 눌렀을 때*/
    articleScrapButtonTap:function(button, event){
    	var id = 1;
    	var thirdString = "";
    	//현재 화면에 띄워진 기사에 관한 정보를 얻어서 로컬 스토리지에 저장
    	
    	if(localStorage.getItem("scrap-counter")==null){  //스크랩을 처음으로 저정할 때,
    		window.localStorage.setItem("scrap-counter", id);
    		thirdString = "1";
    	}else{
    		id = parseInt(localStorage.getItem("scrap-counter")) + 1;
    		thirdString = localStorage.getItem("scrap") + "," + id;
    	}

    	var data = {
			'id' : id,
			'title' : this.getArticle().items.items[0].items.items[1]._data.title,
			'content' : this.getArticle().items.items[0].items.items[1]._data.content,
			'pubDate' : this.getArticle().items.items[0].items.items[1]._data.publishedDate,
		};
    	
    	localStorage.setItem("scrap-" + id,JSON.stringify(data));
    	localStorage.setItem("scrap-counter", id);
    	localStorage.setItem("scrap", thirdString);
    },
    
    /**오른쪽 상단의 검색 버튼을 눌렀을 때*/
    mainSearchButtonTap:function(button, event){
    	console.log("검색 버튼 탭!!");
    	this.getMain().animateActiveItem(3, {type:"slide", direction:"left"});
    	this.getTitlebar().setTitle("키워드 검색");
    	Ext.getCmp("homeButton").show();
		this.getMainSearchButton().hide();
    },
    
    /**왼쪽 상단의 홈 버튼을 눌렀을 때*/
    homeButtonTap:function(button, event){
    	this.getMain().setActiveItem(0);
    	Ext.getCmp("homeButton").hide();
    	Ext.getCmp("articleScrapButton").hide();
    	this.getList().deselectAll();
    	this.getTitlebar().setTitle("SMART NEWS");
		this.getMainSearchButton().show();
		this.getBackButton().hide();
    },
    
    /**메인 화면에서 feed 아이콘을 눌렀을 때*/
    feedIconTap:function(list, index, item, record, e){
    	
    	if(index=="0"){//'RSS 추가' 아이콘 클릭
    		this.getTitlebar().setTitle("RSS 추가");
    		this.getMain().animateActiveItem(5, {type:"slide", direction:"left"});
    		
    		var rssStore = Ext.getStore("rssStore");
    		rssStore.load();
    		console.log(rssStore.getData());
    		this.getRssList().setStore(rssStore);
    		
    	}else if(index=="1"){ //'키워드 모음' 아이콘 클릭
    		this.getTitlebar().setTitle("키워드 모음");
    		this.getMain().animateActiveItem(3, {type:"slide", direction:"left"});
    	}else if(index=="2"){ //'스크랩 모음' 아이콘 클릭
    		this.getTitlebar().setTitle("스크랩 모음");
    		this.getMain().animateActiveItem(4, {type:"slide", direction:"left"});
    		this.getHomeButton().show();
    		var scrapStore = Ext.getStore("Scraps");
    		scrapStore.load();
    		this.getScrapList().setStore(scrapStore);
    		
    	}else{ //각 신문사 아이콘 클릭
    		this.getTitlebar().setTitle(record.data.name);
    		this.getMain().animateActiveItem(1, {type:"slide", direction:"left"});
    		var store = Ext.getStore("Feed");
        	store.getProxy().setUrl("https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=http://iamapark.cafe24.com/fullrss/makefulltextfeed.php?url=" + record.data.url + "&num=100");
        	store.load({
        		callback:function(records, operation, success){
        			//console.log(records);
        			//this.getList().setData(records);
        			this.getList().refresh();
        			this.getNewsListTopImage().removeAll(true);
        	    	flag = false;
        	    	count = 0;
        	    	
        	    	for(var i=0; i<store.getData().length; i++){
        	    		//console.log(store.getData().items[i].data.content);
        	    		if(store.getData().items[i].data.content.match("img")){
        	    			flag = true;
        	    			count = i;
        	    		}
        	    	}
        	    	
        	    	if(flag){
        	    		var data = {
        	    				url : store.getData().items[count].data.content.split('img src="')[1].split('"')[0],
        	    				title : store.getData().items[count].data.title,
        	    		};
        	    		this.getNewsListTopImage().setData(data);
        	    	}else{
        	    		console.log("이미지가 포함된 기사가 없으빈다...");
        	    		data = {
        	    				url : record.data.image_url,
        	    				title : store.getData().items[count].data.title,
        	    		};
        	    		this.getNewsListTopImage().setData(data);
        	    	}
        		},
        		scope:this
        	});
        	
        	//console.log(Ext.getStore("Feed"));
    	}
    	Ext.getCmp("homeButton").show();
    },
    
    launch: function(app) {
    	//console.log(Ext.getStore("Feed").data.keys.length);
        test = {url:"이미지 주소", title:"타이틀"};
        //this.getNewsListTopImage().setData(test);
    },
    
    /**기사 리스트에서 기사를 눌렀을 때*/
    onArticleTap: function(dataview, index, target, record, e, options){
    	this.getMain().animateActiveItem(2, { type: "slide", direction: "left" });
    	this.getArticleList().setData(record.data);
    	this.getTitlebar().setTitle(record.data.title);
    	Ext.getCmp("prevButton").show();
    	
    	localStorage.flag = index;
    	Ext.getCmp("articleScrapButton").show();
    },
    
    /**뒤로가기 버튼을 눌렀을 때*/
    onBackButtonTap: function(button, event){
    	this.getMain().setActiveItem(1);
    	this.getList().deselectAll();
    	this.getTitlebar().setTitle("News");
    	Ext.getCmp("prevButton").hide();
    },
    
    /**기사 화면에서 글자 키우기 버튼을 눌렀을 때*/
    font_size_up: function(button, event){
    	var current = parseInt($("#mainArticle").css("font-size"));
    	console.log(current);
    	$("#mainArticle").css("font-size", (++current) + "px");
    },
    
    /**기사 화면에서 글자 줄이기 버튼을 눌렀을 때*/
    font_size_down: function(button, event){
    	var current = parseInt($("#mainArticle").css("font-size"));
    	console.log(current);
    	$("#mainArticle").css("font-size", (--current) + "px");
    }
});