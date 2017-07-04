$(document).ready(function(){
  $( "#insight-ball" ).hover(
    function() {
      $(this).children().addClass('large');
    },
    function(){
      $(this).children().removeClass('large');
    }
  );
});
