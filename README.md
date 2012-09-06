[ECONOVATION](http://www.econovation.co.kr/) - 에코노베이션
==========================================================
### hybrid앱 전문가 과정 6조 - 뉴스 구독 앱[NewsHolder]
[![Build Status](https://www.evernote.com/shard/s126/share/32d0-s126-6f466ce05437894d3cbedb31b878e0da-1/res/af928076-e4b0-4c84-a825-c0eb4482718a/splash.png)]
----------------------


파일 설명
-----------
###1. app/view

-MainContent: 메인에서 아이콘을 담고 있는 화면

-MainPanel: 메인 화면

-ArticleListPanel: 기사 리스트 화면

-ArticlePanel: 기사 본문 화면

-KeywordGroupPanel: '키워드 모음' 화면

-KeywordPanel: '키워드 검색' 화면

-KGDetailPanel: 키워드 검색 결과 화면

-RssPanel: 'RSS 모음' 화면

-ScrapPanel: '스크랩 모음' 화면


###2. app/controller

-MainController: 메인 화면을 제어한다.

-KeywordSearchController: 메인 화면에서 우측 상단의 '검색' 아이콘을 선택해서 들어간 화면을 제어한다.

-KeywordGroupController: 메인 화면에서  '키워드 모음' 아이콘을 선택해서 들어간 화면을 제어한다.

-KGDetailController: '키워드 모음'에서 키워드를 선택했을 때의 화면을 제어한다.

-ArticleController: 메인 화면에서 신문사 아이콘을 선택해서 들어간 화면을 제어한다.

-RssController: 메인 화면에서  'RSS 추가' 아이콘을 선택해서 들어간 화면을 제어한다.

-ScrapController: 메인 화면에서  '스크랩 모음' 아이콘을 선택해서 들어간 화면을 제어한다.
 
-ButtonController: 앱 내에서 실행되는 모든 '버튼'을 제어한다.


###3. app/store

-MainStore: 메인 화면 관리

-Feed: 특정 신문사의 기사를 관리

-KeywordGroupStore: 사용자가 저장한 키워드를 관리

-KGResultStore: 키워드 검색 결과를 관리

-NewsPaperStore: 앱에서 기본으로 제공하는 뉴스 피드 관리

-RankStore: 실시간 검색어 관리

-RssServerStore: RSS 관리

-RssStore: 로컬스토리지에 저장되어 있는 RSS 관리

-Scrap: 사용자가 스크랩한 기사 관리

-SearchResultStore: 키워드 검색 결과를 관리

-Test: 새로 등록된 기사 갯수를 서버측으로부터 받아와 관리. 버전업 필요


###4. app/model

-MainModel: 메인 화면 아이콘

-KeywordGroupModel: 키워드 그룹

-News: 신문사

-NewsPaperModel: 앱에서 기본 제공하는 신문사

-Rank: 실시간 검색어

-RssModel: RSS 피드

-Scarp: 스크랩 기사

-SearchResult: 검색 결과


###5. app/util

-ListPaging: 리스트 페이징 관리 클래스

-ManagerController: 화면 이동 관리 클래스

-PushNotification: 기사가 새로 등록되었을 때 사용자 단말기로 푸쉬해주는 클래스

-TagExtractor: 기사 본문에서 불필요한 태그를 제거하는 클래스