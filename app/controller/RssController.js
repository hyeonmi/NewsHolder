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
				var localstore = Ext.getStore('rssStore');
				localstore.load({
					callback : function() {
						if (localstore.data.length <= 0) {
							for ( var i = 0; i < serverstore.data.length; i++) {
								localstore.add({
									rssName : serverstore.data.items[i].get('rssName'),
									rssUrl : serverstore.data.items[i].get('rssUrl'),
									rssImage : serverstore.data.items[i].get('rssImage')
								});
							}
						}

						localstore.sync();
					}

				});

			}
		});

	},

	// rss add
	onRssAddButtonTap : function(button, e, options) {
		// var rssname = Ext.getCmp('rssNameText').getValue();
		var rssurl = Ext.getCmp('rssUrlText').getValue();
		var rssimg = './resources/images/rss_tmp.png';
		if (rssurl == "") {
			Ext.Msg.alert('확인', 'URL을 입력해주세요.', Ext.emptyFn);
			return false;
		}

		var store = Ext.getStore("newsPaperStore");
		store.getProxy().setUrl(
				"http://iamapark.cafe24.com/fullrss/makefulltextfeed.php?url="
						+ rssurl + "&format=json");
		Ext.Viewport.setMasked({
			xtype : 'loadmask',
			message : '확인중...'
		});
		store.load({
			callback : function() {
				Ext.Viewport.setMasked(false);

				var store = Ext.getStore('newsPaperStore');
				var title = store.data.items[0].get('title');

				if (title == "") {
					Ext.Msg.alert("확인", "존재하지 않습니다.");

				} else {
					Ext.Msg.confirm("확인", title + "이 맞습니까?", function(buttonId,
							value, opt) {
						if (buttonId == 'yes') {
							this.addMainLocalStore(title, rssurl, rssimg);
						}

					}, this);
				}
			},
			scope : this
		});
		// 유효한 rss인지 확인

	},

	// news rss add
	onRssListItemTap : function(dataview, index, target, record, e, options) {
		var rssname = record.get('rssName');
		var rssurl = record.get('rssUrl');
		var rssimg = record.get('rssImage');

		Ext.Msg.confirm('확인', '추가하시겠습니까?', function(buttonId, value, opt) {
			if (buttonId == 'yes') {
				this.addMainLocalStore(rssname, rssurl, rssimg);
			}
		}, this);

	},

	// function add item MainLocalStored
	addMainLocalStore : function(rssname, rssurl, rssimg) {
		var store = Ext.getStore('mainStore');

		if (store.find('mainRssUrl', rssurl) > -1) { // 중복확인
			Ext.Msg.alert('확인', '이미 저장되어 있습니다.');
		} else {
			store.add({
				mainRssName : rssname,
				mainRssUrl : rssurl,
				mainRssImage : rssimg
			});
			store.sync();
		}

	},

});