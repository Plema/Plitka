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
      $('.popUp').stop().removeClass('open-pop');
    });

    $( ".one-tekstura" ).click(function() {
      $('.one-tekstura').stop().removeClass('changed');
      $(this).stop().toggleClass('changed');
      $('.one-plitka').stop().toggleClass('open-pop');
      $('.back-dark').stop().toggleClass('back-dark-open'); 
      $('body').css('overflow','hidden');
    });

    $( ".call" ).click(function() {
      $('.request-call').stop().toggleClass('open-pop');
      $('.back-dark').stop().toggleClass('back-dark-open'); 
      $('body').css('overflow','hidden');
    });
    $( ".open-politic" ).click(function() {
      $('.politic').stop().toggleClass('open-pop');
      $('.back-dark').stop().toggleClass('back-dark-open'); 
      $('body').css('overflow','hidden');
    });

    $( ".close-pop" ).click(function() {
      $('.popUp').stop().removeClass('open-pop');
      $('.back-dark').stop().removeClass('back-dark-open'); 
      $('body').css('overflow','visible');
    });
});
