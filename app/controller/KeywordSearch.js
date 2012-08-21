Ext.define('NewsHolder.controller.KeywordSearch', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            searchField: '#searchField',
            searchList: '#searchList',
            searchStore: '#searchResultsStore'
        },

        control: {
            "searchfield": {
                action: 'onSearchfieldAction'
            }
        }
    },

    onSearchfieldAction: function(textfield, e, options) {
        var input=this.getSearchField().getValue();

        var encode=Ext.Object.toQueryString({query : input});
        var sliceEncode=encode.substr(6);
        console.log(sliceEncode);
        var feedUrl="http://iamapark.cafe24.com/fullrss/makefulltextfeed.php?url=openapi.naver.com%2Fsearch%3Fkey%3D907ed5cd8ab441dc61ffb0016280e906%26query%3D"+sliceEncode+"%26target%3Dnews&format=json";
        //console.log(feedUrl);




        var store=Ext.getStore("searchResultsStore");
        store.getProxy().setUrl(feedUrl);
        store.sync();

        this.getSearchList().setStore(store);
        this.getSearchList().refresh();



    }

});