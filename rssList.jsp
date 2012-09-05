<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%><%
String callback = request.getParameter("callback");%><%
if(callback != null) { 
response.setContentType("text/javascript");%>
<%=callback%>
({ "rss" : [
			{
				"rssName" : "미디어 다음",
				"rssImage" : "http://icon.daum-img.net/top/2010/logo_rss.gif",
				"rssUrl" : "http://media.daum.net/rss/today/primary/all/rss2.xml"
			},
			{
				"rssName" : "구글 뉴스",
				"rssImage" : "http://www.gstatic.com/news/img/logo/ko_kr/news.gif",
				"rssUrl" : "http://news.google.co.kr/news?pz=1&cf=all&ned=kr&hl=ko&topic=h&num=3&output=rss"
			
			},
			{
				"rssName" : "조선일보",
				"rssImage" : "",
				"rssUrl" : "http://www.chosun.com/site/data/rss/rss.xml"
			
			},
			{
				"rssName" : "중앙일보",
				"rssImage" : "",
				"rssUrl" : "http://rss.joins.com/joins_news_list.xml"
			
			},
			{
				"rssName" : "동아일보",
				"rssImage" : "",
				"rssUrl" : "http://rss.donga.com/total.xml"
			
			},									
			{
				"rssName" : "한겨레신문",
				"rssImage" : "http://img.hani.co.kr/section-image/12/news/hani/images/com/logo.gif",
				"rssUrl" : "http://www.hani.co.kr/rss/"
			
			},
			{
				"rssName" : "경향신문",
				"rssImage" : "http://img.khan.co.kr/spko/main_2011/logo.gif",
				"rssUrl" : "http://www.khan.co.kr/rss/rssdata/total_news.xml"
			
			},
			{
				"rssName" : "한국일",
				"rssImage" : "",
				"rssUrl" : ""
			
			},
			{
				"rssName" : "",
				"rssImage" : "",
				"rssUrl" : ""
			
			},
			{
				"rssName" : "",
				"rssImage" : "",
				"rssUrl" : ""
			
			},
			{
				"rssName" : "",
				"rssImage" : "",
				"rssUrl" : ""
			
			},
			{
				"rssName" : "",
				"rssImage" : "",
				"rssUrl" : ""
			
			},
			{
				"rssName" : "",
				"rssImage" : "",
				"rssUrl" : ""
			
			},
		]
})
<%} %>

