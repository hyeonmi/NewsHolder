Ext.define('NewsHolder.util.TagExtractor', {

	requires : [ "Ext.carousel.Carousel", ],

	constructor : function(config) {
		existTag = false;
		flag = false;
		tagCount = -1;

		corouselArray = Ext.create("Ext.carousel.Carousel",{
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
			if (store.getData().items[i].data.description.match(tag)) {
				existTag = true;
				flag = true;
				tagCount++;

				var news = store.getData().items[i].data;
				console.log(news);
				console.log(i);
				url = news.description.split('img src="')[1].split('"')[0];
				title = news.title;
			}
			
			if(existTag){

				array[tagCount] = {
						xtype:"panel",
						cls:"newsTop",
						html:[
						    "<div id='articleImageText'></br>" + title + "</div>", 
						    "<img src='" + url + "'/>"
						],
				};

				existTag = false;
			}
		}
		
		if (flag) {
			console.log("이미지가 포함된 기사 리스트입니다.");
			// controller.getNewsListTopImage().setData(data);
		} else {
			console.log("이미지가 포함된 기사가 없으빈다...");

			url = record.data.image_url,
					title = store.getData().items[0].data.title,

					array[0] = {
						html : [ "<div id='articleImageText'></br>" + title
								+ "</div>" + "<img src='" + url + "'/>" ]
					};
		}
		corouselArray.setItems(array);
		Ext.getCmp("articleListTopCarousel").add(corouselArray);
	},

	// 모든 a태그를 삭제하는 부분.
	removeATag : function(content) {
		// aTagRE 정규표현식이다. 끝에 g를 붙이는 이유는 global 옵션으로 반복해서 수행하기 위한 것이다.
		var aTagRE = /<[aA][^>]*>.*<\/[aA]>/g;
		var aTagREwithoutCloseTag = /<[aA][^>]*>/g;
		var removeTagContent = content.replace(aTagRE, "");
		return removeTagContent;
	},

	//네이버 뉴스에 나오는 버튼 제거
	removeButtonTag : function(content) {
		// <button class="fs_big" title="확대"><span>본문 텍스트
		// 크게</span></button><button class="fs_small" title="축소"><span>본문 텍스트
		// 작게</span></button>
		var buttonTagRE = /<button .*<\/button>/g;
		var removeTagContent=content.replace(buttonTagRE, "");
		return removeTagContent;
	},

});