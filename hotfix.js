
function appendStyleFile(){
	//var cssId = 'responsiveHotfix';
	var b = document.createElement('script');
	b.setAttribute('src','https://pastebin.com/raw/UMSx6TLk');
	document.head.appendChild(b);
	/*if (!document.getElementById(cssId))
	{
	    var head  = document.getElementsByTagName('head')[0];
	    var link  = document.createElement('link');
	    link.id   = cssId;
	    link.rel  = 'stylesheet';
	    link.type = 'text/css';
	    link.href = 'https://pastebin.com/raw/UMSx6TLk';
	    //link.media = 'all';
	    head.appendChild(link);
	}*/
} 

function appendMetaTag(){
	//<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no,maximum-scale=1,minimum-scale=1">
	var head     = document.getElementsByTagName('head')[0];
    var meta     = document.createElement('meta');
    meta.name    = "viewport";
    meta.content = "width=device-width, initial-scale=1, user-scalable=no,maximum-scale=1,minimum-scale=1";
    head.appendChild(meta);
}

function bindEvents(){
	"use strict"

	/*var menuToggle = $("#responsiveMenu-toggle")[0];

	menuToggle.onclick = function() { 
		
	}*/
}

function renderResponsiveElements(){
	"use strict"
	if(window.screen.width > 960)
		return;
	
	appendMetaTag();
	appendStyleFile();
	bindEvents();
}
renderResponsiveElements();