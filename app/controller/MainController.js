Ext.define('NewsHolder.controller.MainController', {
	extend : 'Ext.app.Controller',

	config : {
		refs : {
			mainPanel : '#mainPanel',
			articlePanel : '#articlePanel',
			articleContent : '#articleContent',
			titlebar : '#titlebar',
			detailArticle : '#detailArticle',
			newsListTopImage : '#newsListTopImage',
			feedIcon : "#feedIcon",
			homeButton : "#homeButton",
			mainSearchButton : "#mainSearchButton",
			alBackButton : "#alBackButton",
			RssList : "#rssList",
			scrapPanel : "scrapPanel",
		},
		control : {
			feedIcon : {
				itemtap : 'feedIconTap',
			},

		}
	},

	// 키워드 그룹으로 이동
	keywordItemTap : function(list, index, item, record, e) {
		this.getTitlebar().setTitle('키워드 모음');
		this.getMainSearchButton().hide();
		console.log('hello');
		this.getMainPanel().animateActiveItem(3, {
			type : 'slide',
			direction : 'left'
		});
	},

	/** 메인 화면에서 feed 아이콘을 눌렀을 때 */
	feedIconTap : function(list, index, item, record, e) {
		if (index == '0') {// 'RSS 추가' 아이콘 클릭 (분리 완료)
			this.getTitlebar().setTitle('RSS 추가');
			this.getMainSearchButton().hide();
			this.getMainPanel().animateActiveItem(5, {
				type : 'slide',
				direction : 'left'
			});

		} else if (index == '1') { // '키워드 모음' 아이콘 클릭 (Controller 파일 생성해야 함)
			this.getTitlebar().setTitle('키워드 모음');
			this.getMainPanel().animateActiveItem(3, {
				type : 'slide',
				direction : 'left'
			});
			this.getMainSearchButton().hide();

		} else if (index == '2') { // '스크랩 모음' 아이콘 클릭 (분리 완료)
			this.getTitlebar().setTitle('스크랩 모음');
			this.getMainSearchButton().hide();
			this.getMainPanel().animateActiveItem(this.getScrapPanel(), {
				type : 'slide',
				direction : 'left'
			});
			this.getHomeButton().show();
			localStorage.History_navigator = 'Scrap';

		} else { // 각 신문사 아이콘 클릭
			this.getTitlebar().setTitle(record.data.name);
			this.getMainSearchButton().hide();
			this.getMainPanel().animateActiveItem(1, {
				type : 'slide',
				direction : 'left'
			});
			var ArticleController = this.getApplication().getController(
					'ArticleController');
			ArticleController.refreshArticleList(record);

			localStorage.History_navigator = "News";
			this.getAlBackButton().hide();
		}
		this.getHomeButton().show();
	},
});