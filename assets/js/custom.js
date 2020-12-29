/**
 * Exoplanet Custom JS
 *
 * @package Exoplanet
 *
 * Distributed under the MIT license - http://opensource.org/licenses/MIT
 */

jQuery(function($){
  "use strict";
    $('.menu > ul').superfish({
      delay:       500,                            
      animation:   {opacity:'show',height:'show'},  
      speed:       'fast'                         
    });

    $('.search-icon > i').click(function(){
        $(".serach_outer").slideDown(700);
        
    });

    $('.closepop i').click(function(){
        $(".serach_outer").slideUp(700);
    });

    // Accordian
    $(".collapse").on('show.bs.collapse', function(){
      $(this).parent().find(".fa-plus").removeClass("fa-plus").addClass("fa-minus");
     
    }).on('hide.bs.collapse', function(){
      $(this).parent().find(".fa-minus").removeClass("fa-minus").addClass("fa-plus");
     
    });
});


/* Mobile responsive Menu*/

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  jQuery('#home-page-header .sidenav').width('250');
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  jQuery('#home-page-header .sidenav').width('0');
}

jQuery(function() {
  //----- OPEN
  jQuery('[data-popup-open]').on('click', function(e) {
    var targeted_popup_class = jQuery(this).attr('data-popup-open');
    jQuery('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);

    e.preventDefault();
  });

  //----- CLOSE
  jQuery('[data-popup-close]').on('click', function(e) {
    var targeted_popup_class = jQuery(this).attr('data-popup-close');
    jQuery('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);

    e.preventDefault();
  });
});


jQuery('document').ready(function(){

  var owl = jQuery('#our-partners .owl-carousel');
        owl.owlCarousel({
        margin:20,
        nav:true,
        autoplay : true,
        lazyLoad: true,
        autoplayTimeout: 3000,
        loop:false,
        dots:false,
        navText : ['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
        responsive: {
          0: {
            items: 1
          },
          450: {
            items: 2
          },
          575: {
            items: 2
          },
          600: {
            items: 2
          },
          767: {
            items: 3
          },
          991: {
            items: 3
          },
          1000: {
            items: 3
          },
          1200: {
            items: 5
          }
        },
        autoplayHoverPause : true,
        mouseDrag: true
    });

    var owl = jQuery('#our-family .owl-carousel');
        owl.owlCarousel({
        margin:30,
        nav: true,
        autoplay : true,
        lazyLoad: true,
        autoplayTimeout: 3000,
        loop:false,
        dots:false,
        navText : ['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
        responsive: {
          0: {
            items: 1
          },
          576: {
            items: 1
          },
          600: {
            items: 2
          },
          900: {
            items: 2
          },
          1000: {
            items: 4
          }
        },
        autoplayHoverPause : true,
        mouseDrag: true
    });

    var owl = jQuery('#more-events .owl-carousel');
      owl.owlCarousel({
      margin:20,
      nav: true,
      autoplay : true,
      lazyLoad: true,
      autoplayTimeout: 3000,
      loop:false,
      dots:false,
      navText : ['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
      responsive: {
        0: {
          items: 1
        },
        450: {
          items: 1
        },
        575: {
          items: 1
        },
        600: {
          items: 2
        },
        767: {
          items: 2
        },
        991: {
          items: 2
        },
        1000: {
          items: 3
        }
      },
      autoplayHoverPause : true,
      mouseDrag: true
    });

    jQuery('a.accordion-toggle').click(function() {
        jQuery("i", this).toggleClass("fas fa-plus fas fa-times");
    });
    new WOW().init();
});
/* Counter */
jQuery(document).ready(function(){
  jQuery('.count').each(function () {
      jQuery(this).prop('Counter',0).animate({
          Counter: jQuery(this).text()
      }, {
          duration: 30000,
          easing: 'swing',
          step: function (now) {
             jQuery(this).text(Math.ceil(now));
          }
      });
  });

  jQuery('#are-you-attending .attending-form textarea').parent('span').parent('label').parent('p').addClass('atttextarea');
  jQuery('#are-you-attending .attending-form input[type="submit"]').parent('p').addClass('attbutton');

});

// ------------ Sticky Navbar -------------------

window.onscroll = function() {
  myScrollNav();
  myScrollNavTwo();
};

var navbar = document.getElementById("header");
var navbar2 = document.getElementById("home-page-header");
var sticky = navbar.offsetTop;
var sticky2 = navbar2.offsetTop;

function myScrollNav() {
  
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    navbar.classList.add("stickynavbar");
  } else {
    navbar.classList.remove("sticky");
    navbar.classList.remove("stickynavbar");
  }
}

function myScrollNavTwo() {
  
  if (window.pageYOffset >= sticky2) {
    navbar2.classList.add("sticky");
    navbar2.classList.add("stickynavbar");
  } else {
    navbar2.classList.remove("sticky");
    navbar2.classList.remove("stickynavbar");
  }
}

// ------------ Scroll Top ---------------

  jQuery(window).scroll(function() {
    if (jQuery(this).scrollTop() >= 50) {       // If page is scrolled more than 50px
      jQuery('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
      jQuery('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
  });
  jQuery('#return-to-top').click(function() {      // When arrow is clicked
    jQuery('body,html').animate({
      scrollTop : 0                       // Scroll to top of body
    }, 2000);
  });

  // Weekly Deal Counter
function testing($timer,mydate){
    // Set the date we're counting down to
    var countDownDate = new Date(mydate).getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {

        // Get todays date and time
        var now = new Date().getTime();
        
        // Find the distance between now an the count down date
        var distance = countDownDate - now;
        
        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Output the result in an element with id="timer"

        $timer.html( "<div class='numbers'>" + days + "<br><span class='nofont'>DAYS</span>" + "</div>" + "   " +"<div class='numbers'>" + hours + "<br><span class='nofont'>HOURS</span>" + "</div>" + "   " + "<div class='numbers'>" + minutes + "<br><span class='nofont'>MIN</span>" + "</div>" + "   " + "<div class='numbers'>" + seconds + "<br><span class='nofont'>SEC</spn" + "</div>");
        
        // If the count down is over, write some text 
        if (distance < 0) {
            clearInterval(x);
            $timer.html("Timer Up -EVENT EXPIRED");
        }
    }, 1000);
}

jQuery(document).ready(function () {
  var mydate =jQuery('.date').val();
  jQuery(".countdown").each(function(){
      testing(jQuery(this),mydate);
  });
});
