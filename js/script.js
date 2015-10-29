
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
// 

 var form = $('#main-contact-form');
    form.submit(function (event) {
        event.preventDefault();
        var formData = {
            'name': $('input[name=name]').val(),
            'dob': $('input[name=dob]').val(),
            'programme': $('input[name=programme]').val(),
            'contact': $('input[name=contact]').val(),
            'email': $('input[name=email]').val(),
            'message': $('#message').val()
        };
        
        console.log(formData);
        
        var form_status = $('.form_status');
        $.ajax({
            type: 'GET',
            url: 'http://www.sprinterssportsclub.com/mail.php',
            data: formData,
            dataType: 'json',
            encode: true,

            beforeSend: function () {
                form_status.html('<p><i class="fa fa-spinner fa-spin"></i> Email is sending...</p>').fadeIn();
            }
        })
            .done(function (data) {
            console.log(data);
            
            form_status.html('<p class="text-success">SENT</p>').delay(3000).fadeOut();
        });
    })

    
    
    
    /*
    $data = $_POST['formdata'];
    $data = json_decode($data);
    $name = $data['name'];
    $email = $data['email']
    */

$(document).ready(function() { 

   /* $("html").niceScroll({
    	cursorcolor:"#000",
    	scrollspeed :"30",
    	cursorborder:"1px solid #000",
    	horizrailenabled: "false",
    	cursorborderradius: "0px"
    });*/
      
    
    
    // portfolio filtering

    $(".project-wrapper").mixItUp();

});

 $(".click_it").click(function() {
                                $(".click_it").css('color', "black");
                                $(this).css("color", "white");
                                $('.tab').fadeOut();
                                $("#" + $(this).attr("aria-controls")).fadeIn();
                            
                            });

//$(".filter").click(function(){
//    $("" + $(this).attr("data-filter")).fadeIn();
//    var fil = $(this).attr("data-filter");
//    $(".mix").not(fil).fadeOut('fast'); 
//});
   



new WOW().init();

    
/*Preloader*/
//<![CDATA[
$(window).load(function() { // makes sure the whole site is loaded
  $('#status').fadeOut(); // will first fade out the loading animation
  $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
  $('body').delay(350).css({'overflow':'visible'});
})
//]]>


