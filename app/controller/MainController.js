Ext.define('NewsHolder.controller.MainController', {
	extend : 'Ext.app.Controller',

	config : {
		refs : {
			mainPanel : 'mainpanel',
			article : 'article',
			articleList : '#articlePanel',
			titlebar : '#titlebar',
			detailArticle : '#detailArticle',
			newsListTopImage : '#newsListTopImage',
			feedIcon : "#feedIcon",
			main : "#main",
			homeButton : "#homeButton",
			mainSearchButton:"#mainSearchButton",
			RssList : "#rssList",
			keywordpanel : "keywordpanel",
			scrapPanel : "scrapPanel",
		},

		control : {
			feedIcon : {
				itemtap : 'feedIconTap',
			},
		}
	},

	/** 메인 화면에서 feed 아이콘을 눌렀을 때 */
	feedIconTap : function(list, index, item, record, e) {

		if (index == "0") {// 'RSS 추가' 아이콘 클릭 (분리 완료)
			this.getTitlebar().setTitle("RSS 추가");
			this.getMainSearchButton().hide();
			this.getMain().animateActiveItem(5, {
				type : "slide",
				direction : "left"
			});

		} else if (index == "1") { // '키워드 모음' 아이콘 클릭 (Controller 파일 생성해야 함)
			this.getTitlebar().setTitle("키워드 모음");
			// this.getMain().animateActiveItem(3, {type:"slide",
			// direction:"left"});
			this.getMainSearchButton().hide();

		} else if (index == "2") { // '스크랩 모음' 아이콘 클릭 (분리 완료)
			this.getTitlebar().setTitle("스크랩 모음");
			this.getMainSearchButton().hide();
			this.getMain().animateActiveItem(this.getScrapPanel(), {
				type : "slide",
				direction : "left"
			});
			this.getHomeButton().show();
			// 스크랩 리스트를 refresh하는 함수 호출
			var ScrapController = this.getApplication().getController(
					"ScrapController");
			console.log(ScrapController);
			ScrapController.refreshScrapList();

		} else { // 각 신문사 아이콘 클릭
			this.getTitlebar().setTitle(record.data.name);
			this.getMainSearchButton().hide();
			this.getMain().animateActiveItem(1, {
				type : "slide",
				direction : "left"
			});
			var ArticleController = this.getApplication().getController("ArticleController");
			ArticleController.refreshArticleList(record);
		}
		this.getHomeButton().show();
	},
});