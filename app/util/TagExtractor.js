Ext.define('NewsHolder.util.TagExtractor', {
	constructor : function(config) {
		console.log("initialize()");
		existTag = false;
		tagCount = 0;
	},

	extractTag : function(tag, store, controller, record) {
		if (tag == null) {
			console.log("태그를 지정해주세요.");
			return;
		}

		console.log(tagCount);

		// for(var i=0; i<store.getData().length; i++){
		// //console.log(store.getData().items[i].data.content);
		// if(store.getData().items[i].data.content.match("img")){
		// flag = true;
		// count = i;
		// }
		// }

		for ( var i = 0; i < store.getData().length; i++) {
			// console.log(store.getData().items[i].data.content);
			if (store.getData().items[i].data.content.match(tag)) {
				existTag = true;
				tagCount++;
			}
		}

		/*
		 * if(existTag=="img"){ var data = { url :
		 * store.getData().items[count].data.content.split('img
		 * src="')[1].split('"')[0], title :
		 * store.getData().items[count].data.title, };
		 * this.getNewsListTopImage().setData(data); }else{ console.log("이미지가
		 * 포함된 기사가 없으빈다..."); data = { url : record.data.image_url, title :
		 * store.getData().items[count].data.title, };
		 * this.getNewsListTopImage().setData(data); }
		 */

		if (tag == "img" && existTag) {
			var data = {
				url : store.getData().items[tagCount].data.content
						.split('img src="')[1].split('"')[0],
				title : store.getData().items[tagCount].data.title,
			};
			controller.getNewsListTopImage().setData(data);
		} else {
			console.log("이미지가 포함된 기사가 없으빈다...");
			data = {
				url : record.data.image_url,
				title : store.getData().items[tagCount].data.title,
			};
			controller.getNewsListTopImage().setData(data);
		}
	}

});