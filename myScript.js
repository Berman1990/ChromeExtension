/*var url = chrome.runtime.getURL('sisenseInsight.html');
var height = '150';
var width = '150';
var iframe = "<iframe src='"+url+"' id='sisenseInsightBall' height="+height+" width="+width+" frameborder='0'></iframe>";

$('body').append(iframe);

$(document).ready(function(){
  $('#sisenseInsightBall').draggable();
});*/

$.get(chrome.runtime.getURL('sisenseInsight.html'), function(data) {
    //alert(data);
    //$(data).appendTo('body');
    // Or if you're using jQuery 1.8+:
    $($.parseHTML(data)).appendTo('body');
});
