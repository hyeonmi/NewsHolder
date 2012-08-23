Ext.define('NewsHolder.util.TagExtractor', {
	constructor : function(config) {
		existTag = false;
		tagNumber = 0;
	},

	extractTag : function(tag, store, controller, record) {	
		if (tag == null) {
			console.log("태그를 지정해주세요.");
			return;
		}

		//파라미터 값 tag가 description에 들어있는지를 검색
		//태그가 있으면 existTag를 true로 설정하고, 이미지가 있는 마지막 기사의 index를 tagNumber에 할당.
		for ( var i = 0; i < store.getData().length; i++) {
			if (store.getData().items[i].data.description.match(tag)) {
				existTag = true;
				tagNumber = i;
			}
		}
		
		if (tag == "img" && existTag) {

			var news = store.getData().items[tagNumber].data;
			var data = {
				url : news.description.split('img src="')[1].split('"')[0],
				title : news.title,
			};
			controller.getNewsListTopImage().setData(data);
		} else {
			console.log("이미지가 포함된 기사가 없으빈다...");
			data = {
				url : record.data.image_url,
				title : store.getData().items[tagNumber].data.title,
			};
			controller.getNewsListTopImage().setData(data);
		}
	},
	
	//모든 a태그를 삭제하는 부분.
	removeATag:function(store){
		var aTagRE = "/<[aA][^>]*>.*</[aA]>/";
		//var removeTagContent=content.replace(aTagRE,"");
		
		for(var i=0; i<store.getData().items.length; i++){
			store.getData().items[i].data.description=store.getData().items[i].data.description.replace(aTagRE,"");
		}
		//return removeTagContent;
	}
	
	
/*	//모든 a태그를 삭제하는 부분.
	removeATag:function(content){
		var aTagRE = "/<[aA][^>]*>.*</[aA]>/";
		var removeTagContent=content.replace(aTagRE,"");
		
		for(var i=0; i<store.length; i++){
			var mDesc=extractor.removeATag(store.getData().items[i].description);
				this.getList().setData()
			}
		//return removeTagContent;
	}*/

});