Ext.define('NewsHolder.util.ManagerController', {
	xtype : 'managerController',
	id : 'managerControllerId',

	constructor : function(config) {
		this.initConfig(config);
	},

	config : {

	},
	

	// 왼쪽으로 이동하는 에니메이션
	// param : title(지정하고자 하는 타이틀바 제목), movePanel(이동하고자 하는 패널 객체)
	// hideComp(숨기고자 하는 컴포넌트 객체배열), showComp(보여주고자 하는 컴포넌트 id 배열)
	onMoveSlideLeft : function(title, movePanelId, hideCompId, showCompId) {
		if(title!=null){
			Ext.getCmp('titlebar').setTitle(title);
		}
		
		if(typeof(movePanelId)=='string'){
			//console.log(movePanelId);
			Ext.getCmp('mainPanel').animateActiveItem(Ext.getCmp(movePanelId), {
				type : 'slide',
				direction : 'left'
			});
		}else if(typeof(movePanelId)=='number'){
			Ext.getCmp('mainPanel').animateActiveItem(movePanelId, {
				type : 'slide',
				direction : 'left'
			});
		}
		

		for ( var i = 0; i < hideCompId.length; i++) {
			Ext.getCmp(hideCompId[i]).hide();
		}

		for ( var j = 0; j < showCompId.length; j++) {
			Ext.getCmp(showCompId[j]).show();
		}
	},

	// 오른쪽으로 이동하는 에니메이션
	onMoveSlideRight : function(title, movePanelId, hideCompId, showCompId) {
		if(title!=null){
			Ext.getCmp('titlebar').setTitle(title);
		}

		if (typeof (movePanelId) == 'string') {
			Ext.getCmp('mainPanel').animateActiveItem(Ext.getCmp(movePanelId),
					{
						type : 'slide',
						direction : 'right',
					});
		} else if (typeof (movePanelId) == 'number') {
			Ext.getCmp('mainPanel').animateActiveItem(movePanelId, {
				type : 'slide',
				direction : 'right',
			});
		}

		for ( var i = 0; i < hideCompId.length; i++) {
			Ext.getCmp(hideCompId[i]).hide();
		}

		for ( var j = 0; j < showCompId.length; j++) {
			Ext.getCmp(showCompId[j]).show();
		}
	},
	
	
});