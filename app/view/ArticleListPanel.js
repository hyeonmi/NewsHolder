Ext.define("NewsHolder.view.ArticleListPanel",{
	extend:"Ext.Panel",
	xtype:"articlelist",
	id : 'articleListId',
	
	config:{
		layout:{
			type:"vbox",
		},
		items:[
	       {
	    	   xtype:"panel",
	    	   id:"articleListTopCarousel",
	    	   flex:1,
	    	   layout:{
	    		   type:"fit",
	    	   }
	       },
	       {
				xtype:"list",
				cls:"newsList",
		        id:"articleList",
		        itemTpl: [
		            '<div class="articleTitle"/> </div>',
	            	'<img src="{url}"/> {title}<br>',
		        ],
		        store: 'Feed',
		        flex:1,
		        listeners:{
		        	afterrender:function(){
		        		console.log("afterrender");
		        	}
		        }
			}
		],
	},
	
});