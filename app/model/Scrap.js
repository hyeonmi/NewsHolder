/**
 * id: 로컬스토리지에 저장해야하기 때문에 id를 지정
 * title: 스크랩한 기사의 제목
 * content: 스크랩한 기사의 본문
 * pubDate: 스크랩한 기사의 등록 시간
 * scrapDate: 사용자가 스크랩한 시간
 * link: 기사 본문 링크
 * */
Ext.define('NewsHolder.model.Scrap', {
    extend: 'Ext.data.Model',

    config: {
    	identifier : {
    		type : 'uuid' 
    	},
    	
        fields: [
            {
            	name:'id'
            },
            {
                name: 'title'
            },
            {
                name: 'description'
            },
            {
            	name:'pubDate'
            },
            {
            	name:'scrapDate'
            },
            {
            	name:'link'
            },
            {
            	name: 'titleImage'
            },
            {
            	name: 'summary'
            },
            {
            	name: 'badge'
            },
            {
            	name: 'originDesc'
            }
        ]
    }
});