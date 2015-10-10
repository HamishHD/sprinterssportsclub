
//SMOOTH PAGE SCROLL
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


  $("#owl-carousel").owlCarousel({
 
      autoPlay: 3000, //Set AutoPlay to 3 seconds
 
      items : 4,
      pagination: false,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]
 
  });

  $("#owl-slider").owlCarousel({
      navigation : false,
      pagination : false, 
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
      
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false

  });


  // Contact form
  var form = $('#main-contact-form');
  form.submit(function(event){
    event.preventDefault();
    var form_status = $('<div class="form_status"></div>');
    $.ajax({
      url: $(this).attr('action'),
      beforeSend: function(){
        form.prepend( form_status.html('<p><i class="fa fa-spinner fa-spin"></i> Email is sending...</p>').fadeIn() );
      }
    }).done(function(data){
      form_status.html('<p class="text-success">Thank you for contact us. As early as possible  we will contact you</p>').delay(3000).fadeOut();
    });
  });

$(document).ready(

  function() { 

    $("html").niceScroll({
    	cursorcolor:"#000",
    	scrollspeed :"30",
    	cursorborder:"1px solid #000",
    	horizrailenabled: "false",
    	cursorborderradius: "0px"
    });
      
    
    
    // portfolio filtering

    $(".project-wrapper").mixItUp();

});

 $(".click_it").click(function() {
                                $(".click_it").css('color', "#efc337");
                                $(this).css("color", "black");
                                $('.tab').fadeOut();
                                $($(this).attr("href")).fadeIn();
                            
                            });

new WOW().init();

    
/*Preloader*/
//<![CDATA[
$(window).load(function() { // makes sure the whole site is loaded
  $('#status').fadeOut(); // will first fade out the loading animation
  $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
  $('body').delay(350).css({'overflow':'visible'});
})
//]]>


