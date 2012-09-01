Ext.define('NewsHolder.util.PushNotification', {
	singleton : true,

	requires : [ 'Ext.device.Push' ],

	push : function() {
		Ext.device.Push.register({
			type : Ext.device.Push.ALERT | Ext.device.Push.BADGE
					| Ext.device.Push.SOUND,
			success : function(token) {
				console.log('# Push notification registration successful:');
				console.log('    token: ' + token);
			},
			failure : function(error) {
				console.log('# Push notification registration unsuccessful:');
				console.log('     error: ' + error);
			},
			received : function(notifications) {
				console.log('# Push notification received:');
				console.log('    ' + JSON.stringify(notifications));
			}
		});
	}
});