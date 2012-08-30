Ext.define('NewsHolder.util.ManagerController',{
	id : 'managerController',
	
	constructor : function(config){
		this.initConfig(config);
	},
	
	config : {
		
	},
	
	
	//오른쪽으로 이동하는 에니메이션
	onMoveSlideLeft : function(title, objId){
		this.getTitlebar().setTitle(title);
		this.getMainPanel().animateActiveItem(objId, {
			type : 'slide',
			direction : 'left'
		});
		this.getMainSearchButton().hide();
		this.getHomeButton().show();			
	}
	
});