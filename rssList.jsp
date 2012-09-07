<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%><%
String callback = request.getParameter("callback");%><%
if(callback != null) { 
response.setContentType("text/javascript");%>
<%=callback%>
({ "rss" : [ 
			{
				"rssName" : "미디어 다음",
				"rssImage" : "./resources/images/rss/daum.png",
				"rssUrl" : "http://media.daum.net/rss/today/primary/all/rss2.xml"
			},
			{
				"rssName" : "구글 뉴스",
				"rssImage" : "./resources/images/rss/google.png",
				"rssUrl" : "http://news.google.co.kr/news?pz=1&cf=all&ned=kr&hl=ko&topic=h&num=3&output=rss"
			
			},
			{
				"rssName" : "조선일보",
				"rssImage" : "./resources/images/rss/chosun.png",
				"rssUrl" : "http://www.chosun.com/site/data/rss/rss.xml"
			
			},
			{
				"rssName" : "중앙일보",
				"rssImage" : "./resources/images/rss/jungang.png",
				"rssUrl" : "http://rss.joins.com/joins_news_list.xml"
			
			},
			{
				"rssName" : "동아일보",
				"rssImage" : "./resources/images/rss/dong-a.png",
				"rssUrl" : "http://rss.donga.com/total.xml"
			
			},									
			{
				"rssName" : "한겨레신문",
				"rssImage" : "./resources/images/rss/hani.png",
				"rssUrl" : "http://www.hani.co.kr/rss/"
			
			},
			{
				"rssName" : "경향신문",
				"rssImage" : "./resources/images/rss/kyunghyang.png",
				"rssUrl" : "http://www.khan.co.kr/rss/rssdata/total_news.xml"
			
			},
			{
				"rssName" : "한국일보",
				"rssImage" : "./resources/images/rss/hankook.png",
				"rssUrl" : "http://rss.hankooki.com/news/hk_main.xml"
			
			},
			{
				"rssName" : "이데일리",
				"rssImage" : "./resources/images/rss/edaily.png",
				"rssUrl" : "http://rss.edaily.co.kr/edaily_news.xml"
			
			},
			{
				"rssName" : "연합뉴스 ",
				"rssImage" : "./resources/images/rss/yenhap.png",
				"rssUrl" : "http://www.yonhapnews.co.kr/RSS/sokbo.xml"
			
			},
			{
				"rssName" : "일간스포츠 ",
				"rssImage" : "./resources/images/rss/ilgan-s.png",
				"rssUrl" : "http://rss.joins.com/joins_ilgan_list.xml"
			
			},
			{
				"rssName" : "스포츠서울",
				"rssImage" : "./resources/images/rss/",
				"rssUrl" : "http://www.sportsseoul.com/rss/rss.asp?cp_flag=1"
			
			},
			{
				"rssName" : "머니투데이 ",
				"rssImage" : "./resources/images/rss/money-t.png",
				"rssUrl" : "http://rss.mt.co.kr/mt_news.xml"
			
			},
			{
				"rssName" : "오마이뉴스",
				"rssImage" : "./resources/images/rss/omynews.png",
				"rssUrl" : "http://rss.ohmynews.com/rss/top.xml"
			
			},
			{
				"rssName" : "ZDNet Korea",
				"rssImage" : "./resources/images/rss/zdnet.png",
				"rssUrl" : "http://www.zdnet.co.kr/services/rss/all/EUC/ZDNetKorea_News.asp"
			
			},
			{
				"rssName" : "딴지일보",
				"rssImage" : "./resources/images/rss/ddanzi.png",
				"rssUrl" : "http://www.ddanzi.com/rss/s/news"
			
			},
			{
				"rssName" : "파이낸셜 뉴스",
				"rssImage" : "./resources/images/rss/fn.png",
				"rssUrl" : "http://www.fnnews.com/rss/fn_realnews_all.xml"
			
			},
			{
				"rssName" : "전자신문",
				"rssImage" : "./resources/images/rss/genga.png",
				"rssUrl" : "http://rss.etnews.co.kr/Section901.xml"
			
			},			
		]
})
<%} %>

