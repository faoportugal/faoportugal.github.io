$(document).ready(function(){
  $('body').keydown(function (e) {
    if (e.keyCode == 75) {
      $('.space').remove();
      $('nav').remove();
      $('script').remove();
    }
  });
});
