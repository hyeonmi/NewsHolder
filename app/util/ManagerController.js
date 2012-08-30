Ext.define('NewsHolder.util.ManagerController',{
	xtype : 'managerController',
	id : 'managerControllerId',
	
	constructor : function(config){
		this.initConfig(config);
	},
	
	config : {
		
	},
	
	//왼쪽으로 이동하는 에니메이션
	onMoveSlideLeft : function(title, objId){
		Ext.getCmp('titlebar').setTitle(title);
		Ext.getCmp('mainPanel').animateActiveItem(objId, {
			type : 'slide',
			direction : 'left'
		});
		Ext.getCmp('mainSearchButton').hide();
		Ext.getCmp('homeButton').show();			
	},
	
	//오른쪽으로 이동하는 에니메이션
	onMoveSlideRight : function(title, objId){
		Ext.getCmp('titlebar').setTitle(title);
		Ext.getCmp('mainPanel').animateActiveItem(objId, {
			type : 'slide',
			direction : 'right'
		});
		Ext.getCmp('mainSearchButton').show();
		Ext.getCmp('homeButton').hide();			
	},	
});