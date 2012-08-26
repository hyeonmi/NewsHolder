Ext.define('NewsHolder.controller.RssController', {
	extend : 'Ext.app.Controller',

	config : {
		models : [ 'RssModel' ],
		views : [ 'RssPanel' ],

		refs : {
			addButton : '#rssAddButton',
			rssItems : '#rssList',

		},

		control : {
			'addButton' : {
				tap : 'onRssAddButtonTap'
			},
			'rssItems' : {
				itemtap : 'onRssListItemTap'
			}
		},

	},

	// sever->local
	init : function() {
		var serverstore = Ext.getStore('rssServerStore');
		serverstore.load({
			callback : function() {
				success: {
					var localstore = Ext.getStore('rssStore');
					if (localstore.data.length <= 0) {
						for ( var i = 0; i < serverstore.data.length; i++) {

							localstore.add({
								rssName : serverstore.data.items[i]
										.get('rssName'),
								rssUrl : serverstore.data.items[i]
										.get('rssUrl'),
								rssImage : serverstore.data.items[i]
										.get('rssImage')
							});

						}
						
						localstore.sync();
					}
				}
			}
		});

	},

	// rss add
	onRssAddButtonTap : function(button, e, options) {
		var rssname = Ext.getCmp('rssNameText').getValue();
		var rssurl = Ext.getCmp('rssUrlText').getValue();
		var rssimg = Ext.getCmp('rssImageText').getValue();
		if (rssurl == "") {
			Ext.Msg.alert('확인', 'URL을 입력해주세요.', Ext.emptyFn);
		}

		this.addMainLocalStore(rssname, rssurl, rssimg);
	},

	// news rss add
	onRssListItemTap : function(dataview, index, target, record, e, options) {
		var rssname = record.get('rssName');
		var rssurl = record.get('rssUrl');
		var rssimg = record.get('rssImage');

		Ext.Msg.confirm('확인', '신문사를 추가하시겠습니까?', 
				function(buttonId, value, opt) {
					if (buttonId == 'yes') {
						
						this.addMainLocalStore(rssname, rssurl, rssimg);		
					}
				}, this);

	},

	// function add item MainLocalStored
	addMainLocalStore : function(rssname, rssurl, rssimg) {
		var store = Ext.getStore('mainStore');
		//중복확인
		if(store.find('mainRssUrl', rssurl) > -1){
			Ext.Msg.alert('확인', '이미 저장되어 있습니다.');
		}else{
			store.add({
				mainRssName : rssname,
				mainRssUrl : rssurl,
				mainRssImage : rssimg
			});
			store.sync();			
		}



	},

});