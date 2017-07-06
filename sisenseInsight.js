$(document).ready(function(){
  $('#insight-ball').click(function() {
    if (!($('#insights-content').is(":visible"))){
      $('#insights-content').show("blind");
      $('#insight-ball-btn').show("drop");
      $('#insight-ball').addClass('active');
    }
  })
});

// hides the div when clicking outside of the component
$(document).mouseup(function(e)
{
    // if the target of the click isn't the container nor a descendant of the container
    if(!($(e.target).parents('#sisense-insights').length > 0))
    {
        $("#insights-content").hide("blind");
        $('#insight-ball').removeClass('active');
        $('#insight-ball-btn').hide("drop");
    }
});
