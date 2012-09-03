Ext.define('NewsHolder.view.MainCarousel',{
	extend : 'Ext.carousel.Carousel',
	id : 'mainCarousel',
	defaults: {
	       xtype: 'dataview'
	   },
	   items: [
	       {
	           html: 'Panel 1'
	       },
	       {
	           html: 'Panel 2'
	       }
	   ]
});