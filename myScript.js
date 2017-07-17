/*var url = chrome.runtime.getURL('sisenseInsight.html');
var height = '150';
var width = '150';
var iframe = "<iframe src='"+url+"' id='sisenseInsightBall' height="+height+" width="+width+" frameborder='0'></iframe>";
*/

//$('body').append(iframe);

//
var activeListener = false;
if(location.origin == "https://mail.google.com"){
  setInterval(function(){
    if (document.querySelector('[role="textbox"]') && !activeListener){
      var myText = $('div[role="textbox"]');
      $('div[role="textbox"]').bind("DOMSubtreeModified",function(){
        console.log(myText.html());
        chrome.runtime.sendMessage(myText.html());
      });
      activeListener = true;
    }else if (!document.querySelector('[role="textbox"]')){
      $('div[role="textbox"]').unbind("DOMSubtreeModified");
      activeListener = false;
      console.log("no input");
    }
  }, 3000);
}
else if(location.origin == "https://web.whatsapp.com"){
  setInterval(function(){
    if (document.querySelector('[class="input"]') && !activeListener){
      var myText = $('div[class="input"]');
      $('div[class="input"]').bind("DOMSubtreeModified",function(){
        console.log(myText.html());
        chrome.runtime.sendMessage(myText.html());
      });
      activeListener = true;
    }else if (!document.querySelector('[class="input"]')){
      $('div[class="input"]').unbind("DOMSubtreeModified");
      activeListener = false;
      console.log("no input");
    }
  }, 3000);
}

$(document).ready(function(){

});

$.get(chrome.runtime.getURL('sisenseInsight.html'), function(data) {
    //alert(data);
    //$(data).appendTo('body');
    // Or if you're using jQuery 1.8+:
    $($.parseHTML(data)).appendTo('body');
});
