var url = chrome.extension.getURL('sisenseInsight.html');
var height = '150';
var width = '150';
var iframe = "<iframe src='"+url+"' id='sisenseInsightBall' height="+height+" width="+width+" frameborder='0'></iframe>";

$('body').append(iframe);

$(document).ready(function(){
  $('#sisenseInsightBall').draggable();
});
