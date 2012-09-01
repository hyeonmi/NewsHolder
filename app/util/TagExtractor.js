Ext.define('NewsHolder.util.TagExtractor', {

	config : {
		existTag : false
	},
	// 모든 a태그를 삭제하는 부분.
	removeATag : function(content) {
		// aTagRE 정규표현식이다. 끝에 g를 붙이는 이유는 global 옵션으로 반복해서 수행하기 위한 것이다.
		var aTagRE = /<[aA][^>]*>.*<\/[aA]>/g;
		var aTagREwithoutCloseTag = /<[aA][^>]*>/g;
		var removeTagContent = content.replace(aTagRE, "");
		return removeTagContent;
	},

	extractImageTag : function(content) {
		// 파라미터 값 tag가 description에 들어있는지를 검색
		// 태그가 있으면 existTag를 true로 설정하고, 이미지가 있는 마지막 기사의 index를 tagNumber에 할당.
		/*
		 * for ( var i = 0; i < store.getData().length; i++) { if
		 * (store.getData().items[i].data.description.match(tag)) { existTag =
		 * true; tagNumber = i; } }
		 * 
		 * if (tag == "img" && existTag) {
		 * 
		 * var news = store.getData().items[tagNumber].data; var data = { url :
		 * news.description.split('img src="')[1].split('"')[0], title :
		 * news.title, }; controller.getNewsListTopImage().setData(data); } else {
		 * console.log("이미지가 포함된 기사가 없으빈다..."); data = { url :
		 * record.data.image_url, title :
		 * store.getData().items[tagNumber].data.title, };
		 * controller.getNewsListTopImage().setData(data); }
		 */
		var url=null;
		if (content.match("img")!=null) {
				 url=content.split('img src="')[1].split('"')[0];
		} 
		return url;
	},

	// 네이버 뉴스에 나오는 버튼 제거
	removeButtonTag : function(content) {
		// <button class="fs_big" title="확대"><span>본문 텍스트
		// 크게</span></button><button class="fs_small" title="축소"><span>본문 텍스트
		// 작게</span></button>
		var buttonTagRE = /<button .*<\/button>/g;
		var removeTagContent = content.replace(buttonTagRE, "");
		return removeTagContent;
	},

});