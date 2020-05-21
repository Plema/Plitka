$(document).ready(function(){
  
    $( ".nav" ).click(function() {
      $('nav').stop().addClass('open-nav');
      $('.nav').stop().addClass('nav-none');
      $('.back-dark').stop().toggleClass('back-dark-open'); 
      $('body').css('overflow','hidden');
    });

    
   $( "nav > ul > li" ).click(function() {
    $('nav').removeClass('open-nav');
    $('.nav').stop().removeClass('nav-none');
    $('.back-dark').removeClass('back-dark-open'); 
    $('body').css('overflow','auto');
    console.log('open')
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

    $( ".send" ).click(function(e) {
      e.preventDefault();
      var a = $('#name').val();
      var b = $('#phone').val();
      // var c = $('#check');
      // console.log(c);
      if((a === "") || (b === "")){
       alert('Заполните форму')
      }
      else{
       $('.back-dark').removeClass('back-dark-open'); 
       $('.request-call').removeClass('open-pop'); 
       $('body').css('overflow','hidden'); 
      }
  });
});
