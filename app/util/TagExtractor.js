Ext.define('NewsHolder.util.TagExtractor', {

	requires : [ "Ext.carousel.Carousel", ],

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