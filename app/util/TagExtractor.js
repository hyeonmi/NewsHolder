Ext.define('NewsHolder.util.TagExtractor', {
	
	requires:[
	    "Ext.carousel.Carousel",
	],
	
	constructor : function(config) {
		console.log("initialize()");
		existTag = false;
		flag = false;
		tagCount = -1;
		corouselArray = Ext.create("Ext.carousel.Carousel",{
			cls:"newsTop",
			//id:"newsListTopImage",
			flex:1,
			styleHtmlContent:true,
		});
		array = new Array();
	},

	extractTag : function(tag, store, controller, record) {
		if (tag == null) {
			console.log("태그를 지정해주세요.");
			return;
		}

		for ( var i = 0; i < store.getData().length; i++) {
			// console.log(store.getData().items[i].data.description);
			if (store.getData().items[i].data.description.match(tag)) {
				existTag = true;
				flag = true;
				tagCount++;
				
				var news = store.getData().items[i].data;
				console.log(news);
				url = news.description.split('img src="')[1].split('"')[0];
				title = news.title;
			}
			
			if(existTag){
				
				array[tagCount] = {
						html:[
							    "<div id='articleImageText'></br>" + title + "</div>" + 
							    "<img src='" + url + "'/>"
						]
				};
				
				existTag = false;
				
			}else{
				
			}
		}
		
		
		if (flag) {
			console.log("이미지가 포함된 기사 리스트입니다.");
			//controller.getNewsListTopImage().setData(data);
		} else {
			console.log("이미지가 포함된 기사가 없으빈다...");

			url = record.data.image_url,
			title = store.getData().items[0].data.title,
			
			array[0] = {
					html:[
						    "<div id='articleImageText'></br>" + title + "</div>" + 
						    "<img src='" + url + "'/>"
					]
			};
		}
		
		corouselArray.setItems(array);
		Ext.getCmp("articleListTopCarousel").add(corouselArray);
	}

});