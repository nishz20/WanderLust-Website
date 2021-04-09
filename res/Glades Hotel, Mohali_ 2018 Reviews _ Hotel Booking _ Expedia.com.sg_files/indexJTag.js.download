/* Copyright (C) 2015 Index Exchange All Rights Reserved.
The information contained within this document is confidential, copyrighted and or trade secret. No part of this document may be reproduced or distributed in any form or by any means, in whole or in part, without the prior written permission of Casale Media.
*/


var CasaleR;if(!CasaleR){CasaleR=(new Date().getTime()%2592000)*256+Math.floor(Math.random()*256)+256;}
var CasaleP;if(!CasaleP){CasaleP=indexFlashVer();}
function indexHostAndProtocol(url){if(url.substr(0,5).toLowerCase()=='http:'){return'http://as.casalemedia.com';}
return'https://as-sec.casalemedia.com';}
function indexDetermineEndpoint(){var domainInfo={protocol:0};var wdw=window;var topFrame;var childsReferrer='';while(wdw){topFrame={child:topFrame};topFrame.referrer=childsReferrer;try{topFrame.location=wdw.location.href;childsReferrer=wdw.document.referrer;}catch(err){topFrame.location='';childsReferrer='';}
if(wdw.parent==wdw){break;}
wdw=wdw.parent;}
function getProtocol(loc){var protocolRegex=/^http(s?):/;if(protocolRegex.test(loc)){if(protocolRegex.exec(loc)[1].length>0){return 1;}
return 2;}
return 4;}
domainInfo.url='';var cFrame=topFrame;while(cFrame){var cLocation='';for(var property in cFrame){if(property!='location'&&property!='referrer'){continue;}
var loc=cFrame[property];var cProtocol=getProtocol(loc);if(cProtocol&(1+2)){cLocation=loc;domainInfo.protocol|=cProtocol;break;}}
if(cLocation==''){domainInfo.protocol|=4;}else if(domainInfo.url==''){domainInfo.url=cLocation;}
cFrame=cFrame.child;}
if(domainInfo.protocol&(1+4)){domainInfo.domain='https://as-sec.casalemedia.com';}else{domainInfo.domain='http://as.casalemedia.com';}
return domainInfo;}
function indexCall(Args){var divID='IndexDIV'+Math.random();document.write('<div id="'+divID+'" style="width:0; height:0;position:absolute;"></div>');var amp='&amp;';var indexID=Args.casaleID;var inif=0;var app=0;if("appID"in Args){indexID=Args.appID;app=1;}
var adUnitList=Args.adUnits;if(Args.version>=5){adUnitList=Args.defaultAdUnit;}
var protocol=0;var domain;var url;if(top==self){url=window.location.href;domain=indexHostAndProtocol(url);}else{inif=1;var domainInfo=indexDetermineEndpoint();protocol=domainInfo.protocol;domain=domainInfo.domain;url=domainInfo.url;}
var encodedURL=encodeURIComponent(url);var urlRegex=/^(?:[hH][tT][tT][pP][sS]?:\/\/)?((?:[a-zA-Z0-9]{1}(?:[a-zA-Z0-9\-]{0,61}[a-zA-Z0-9]{1})?\.)*[a-zA-Z0-9]{1}(?:[a-zA-Z0-9\-]{0,61}[a-zA-Z0-9]{1})?)(?:\:[0-9]{1,5})?(?:\/[^\?\#]*?(?:\?(?:[^\#]*?))?(?:\#.*)?)?$/;var usingReferrer=0;if(Args.referrer&&typeof Args.referrer==='string'&&urlRegex.test(Args.referrer)&&urlRegex.exec(Args.referrer)[1].length<=255){usingReferrer=1;encodedURL=encodeURIComponent(Args.referrer);}
encodedURL=encodedURL.substr(0,1024);var adLeft=0;var adTop=0;var adWidth=window.screen.availWidth;var adHeight=window.screen.availHeight;var indexAdObj=document.getElementById(divID);while(indexAdObj!=null){adLeft+=indexAdObj.offsetLeft;adTop+=indexAdObj.offsetTop;indexAdObj=indexAdObj.offsetParent;}
var req='<script type="text/javascript" src="'+domain+'/j?s='+indexID+amp+'a='+adUnitList+amp+'id='+CasaleR+amp+'p='+CasaleP+amp+'v='+Args.version+amp+'inif='+inif;if(Args.positionID){req+=amp+'pos='+Args.positionID;}
if(Args.pubDefault&&/\S/.test(Args.pubDefault)){req+=amp+'d=CasaleArgs.pubDefault';}
if(Args.pubPassback){req+=amp+'pb='+encodeURIComponent(Args.pubPassback);}
if(Args.align){req+=amp+'al='+Args.align;}
if(Args.floor&&/\S/.test(Args.floor)){req+=amp+'f='+encodeURIComponent(Args.floor);if(Args.floorCurrency&&/\S/.test(Args.floorCurrency)){req+=amp+'fc='+encodeURIComponent(Args.floorCurrency);}}
req+=amp+'l='+adLeft;req+=amp+'t='+adTop;req+=amp+'w='+adWidth;req+=amp+'h='+adHeight;req+=amp+'z='+new Date().getTimezoneOffset();if(!inif&&document.referrer){req+=amp+'r='+(encodeURIComponent(document.referrer)).substr(0,512);}
if(usingReferrer){req+=amp+'dr=1';}
if(protocol&4&&!(protocol&1)){req+=amp+'pr=1';}
if(app){req+=amp+'app=1';}
if("ifa"in Args){req+=amp+'ifa='+encodeURIComponent(Args.ifa);}
if("interstitial"in Args){req+=amp+'itl='+encodeURIComponent(Args.interstitial);}
if(typeof mraid!=='undefined'){req+=amp+'m=1';}
req+=amp+'u='+encodedURL;req+='"><\/script>';document.write(req);}
function indexFlashVer(){var version=0;var isIE=(navigator.appVersion.indexOf("MSIE")!=-1)?true:false;var isWin=(navigator.appVersion.toLowerCase().indexOf("win")!=-1)?true:false;var isOpera=(navigator.userAgent.indexOf("Opera")!=-1)?true:false;if(navigator.plugins&&navigator.plugins.length){if(navigator.plugins["Shockwave Flash 2.0"]||navigator.plugins["Shockwave Flash"]){var swVer=navigator.plugins["Shockwave Flash 2.0"]?" 2.0":"";var desc=navigator.plugins["Shockwave Flash"+swVer].description;var ary=desc.split(" ");version=ary[2].split(".")[0];}}else if(isIE&&isWin&&!isOpera){var tmp,verDesc;try{tmp=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");version=tmp.getVariable("$version").split(" ")[1].split(",")[0];}catch(e){}
if(!version){try{tmp=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");verDesc="WIN 6,0,21,0";tmp.AllowScriptAccess="always";version=tmp.getVariable("$version").split(" ")[1].split(",")[0];}catch(e){}}
if(!version){try{tmp=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.3");version=tmp.getVariable("$version").split(" ")[1].split(",")[0];}catch(e){}}}
return version;}
function casaleIncl(src){var i=document.createElement("script");i.type="text/javascript";i.src=src;i.id="_cmjs";(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).appendChild(i);}
function casaleInclCSS(src){var i=document.createElement("link");i.type="text/css";i.href=src;i.rel='stylesheet';i.id="_cmcss";document.getElementsByTagName("head")[0].appendChild(i);}
indexCall(CasaleArgs);