Ext.define('NewsHolder.controller.MainController', {
	extend : 'Ext.app.Controller',
	
	config : {
		newsPaperTitle:null,
		
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
			alBackButton:"#alBackButton",
			RssList : "#rssList",
			keywordGroupPanel : "keywordGroupPanel",
			scrapPanel : "scrapPanel",
		},

		control : {
			feedIcon : {
				itemtap : 'feedIconTap',
			},
			keywordGroupPanel : {
				itemtap : 'keywordItemTap'
				
			}
			
		}
	},
	
	//키워드 그룹으로 이동
	keywordItemTap :function(list, index, item, record, e){
		this.getTitlebar().setTitle("키워드 모음");
		this.getMainSearchButton().hide();
		this.getMain().animateActiveItem(this.getKeywordGroupPanel(), {
			type : "slide",
			direction : "left"
		});		
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
			ScrapController.refreshScrapList();
			localStorage.History_navigator = "Scrap";

		} else { // 각 신문사 아이콘 클릭
			this.setNewsPaperTitle(record.data.name);
			this.getTitlebar().setTitle(this.getNewsPaperTitle());
			this.getMainSearchButton().hide();
			this.getMain().animateActiveItem(1, {
				type : "slide",
				direction : "left"
			});
			var ArticleController = this.getApplication().getController("ArticleController");
			ArticleController.refreshArticleList(record);
			localStorage.History_navigator = "News";
			this.getAlBackButton().hide();
		}
		this.getHomeButton().show();
	},
});