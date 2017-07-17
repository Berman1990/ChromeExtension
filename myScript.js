function searchWidget(searchTerm){
  console.log(searchTerm);
  $('#widgets-list').hide();
  $('#widgets-list').empty();
  $('#loader').show();

  $.ajax({
    url: "http://10.20.5.114:8094/getWidgetsByTags?text=" + searchTerm,
    contentType: "application/json",
    dataType: "json",
    success: function(data){
      //alert(data.tags[1].revenue[0]);
      $('#loader').hide();
      $('#widgets-list').show();

      var newImage = new Image(300, 200);
      var srcImage = "data:image/png;base64, " + data.tags[1].revenue[0];

      newImage.src = srcImage;
      $('#widgets-list').append(newImage);
    }
  });
}

//register the gmail and whatsapp input to change event listener
var activeListener = false;
if(location.origin == "https://mail.google.com"){
  setInterval(function(){
    if (document.querySelector('[role="textbox"]') && !activeListener){
      var myText = $('div[role="textbox"]');
      $('div[role="textbox"]').bind("DOMSubtreeModified",function(){
        //console.log(myText.html());
        searchWidget(myText.html());
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
        //console.log(myText.html());
        //chrome.runtime.sendMessage(myText.html());
        searchWidget(myText.html());
      });
      activeListener = true;
    }else if (!document.querySelector('[class="input"]')){
      $('div[class="input"]').unbind("DOMSubtreeModified");
      activeListener = false;
      console.log("no input");
    }
  }, 3000);
}

$(document).mouseup(function(e){
    // if the target of the click isn't the container nor a descendant of the container
    if(!($(e.target).parents('#sisense-insights').length > 0))
    {
        $("#insights-content").hide("blind");
        $('#insight-ball').removeClass('active');
        $('#insight-ball-btn').hide("drop");
    }
});

$(document).ready(function(){
  //ball click event
  $('#insight-ball').click(function() {
    if (!($('#insights-content').is(":visible"))){
      $('#insights-content').show("blind");
      $('#insight-ball-btn').show("drop");
      $('#insight-ball').addClass('active');
    }
  })

  //key press enter for search input
  $('#searchBox').keypress(function(event) {
    if (event.keyCode == 13 || event.which == 13) {
        searchWidget(this.value);
    }
  });
});

//append sisense sticker to body
$.get(chrome.runtime.getURL('sisenseInsight.html'), function(data) {
    $($.parseHTML(data)).appendTo('body');
});
