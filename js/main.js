!(function($) {
    "use strict";

    // Smooth Scrolling

    $(document).on('click', '.mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('.mobile-nav-toggle i').toggleClass('fas fa-bars fas fa-times');
    });

    $(document).click(function(e) {
      var container = $(".mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('fas fa-bars fas fa-times');
        }
      }
    });



  // // Navigation active state on scroll
  // var nav_sections = $('section');
  // var main_nav = $('.nav-menu');

  // $(window).on('scroll', function() {
  //   var cur_pos = $(this).scrollTop() + 10;
  
    // switch(cur_pos){
    //   case 10:
    //     main_nav.find('li').removeClass('active');
    //     main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
    //     break;
    //   case 513.5636291503906:
    //     main_nav.find('li').removeClass('active');
    //     main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
    //     break;
    //   case 1299.0181884765625:
    //     main_nav.find('li').removeClass('active');
    //     main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
    //     break;
    //   case 2035.5999755859375:
    //     main_nav.find('li').removeClass('active');
    //     main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
    //     break;
    //   case 3296.690673828125:
    //     main_nav.find('li').removeClass('active');
    //     main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
    //     break;
    //   case 4704.39990234375:
    //     main_nav.find('li').removeClass('active');
    //     main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
    //     break;
    //   default:
    //     console.log("Bye");
    // }

    // nav_sections.each(function() {
    //   var top = $(this).offset().top,
    //     bottom = top + $(this).outerHeight();


    //   if (cur_pos >= top && cur_pos <= bottom) {
    //     if (cur_pos <= bottom) {
    //       main_nav.find('li').removeClass('active');
    //     }
    //     main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
    //   }
    //   if (cur_pos < 200) {
    //     $(".nav-menu ul:first li:first").addClass('active');
    //   }
    // });
  // });


      // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 500, 'easeInOutExpo');
    return false;
  });

      // Picture typed
  if ($('.typed').length) {
    var typed_strings = $(".typed").data('typed-items');
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }
      // jQuery counterUp
      $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 1000
      });

    // Porfolio isotope and filter
  $(window).on('load', function() {
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item'
    });

    $('#portfolio-flters li').on('click', function() {
      $("#portfolio-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');

      portfolioIsotope.isotope({
        filter: $(this).data('filter')
      });
    });

    // Initiate venobox (lightbox feature used in portofilo)
    $(document).ready(function() {
      $('.venobox').venobox();

      $('.nav-menu li a').click(function(e) {
  
        $('.nav-menu li.active').removeClass('active');

        var $parent = $(this).parent();
        $parent.addClass('active');
    });
    });

    // Initi AOS
    AOS.init({
    duration: 1000,
    easing: "ease-in-out-back"
    });

  });

})(jQuery);