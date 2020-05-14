$(document).ready(function(){
  
    $( ".nav" ).click(function() {
      $('nav').stop().toggleClass('open-nav');
      $('.nav').stop().toggleClass('nav-none');
      $('.back-dark').stop().toggleClass('back-dark-open'); 
      $('body').css('overflow','hidden');
    });

    $( ".close-nav" ).click(function() {
      $('nav').stop().removeClass('open-nav');
      $('.back-dark').stop().removeClass('back-dark-open'); 
      $('body').css('overflow','auto');
      $('.nav').stop().toggleClass('nav-none');
    });

    $( ".back-dark" ).click(function() {
      $('nav').stop().removeClass('open-nav');
      $('.back-dark').stop().removeClass('back-dark-open');  
      $('body').css('overflow','auto');
      $('.nav').stop().toggleClass('nav-none');
    });
});
