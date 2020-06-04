$(document).ready(function() {

   /*sticky navigation*/
  $('.js--section-career').waypoint(function(direction) {
    if (direction == "down") {
      $('nav').addClass('sticky');
    } else {
      $('nav').removeClass('sticky');
    }
  }, {
    offset: '60px;'
  });

/*scroll on buttons*/
  $('.js--scroll-to-career').click(function() {
    $('html, body').animate({scrollTop: $('.js--section-career').offset().top}, 3000);
  });
  $('.js--scroll-to-experience').click(function() {
    $('html, body').animate({scrollTop: $('.js--section-experience').offset().top}, 3000);
  });
  $('.js--scroll-to-travel').click(function() {
    $('html, body').animate({scrollTop: $('.js--section-travel').offset().top}, 3000);
  });
  $('.js--scroll-to-food').click(function() {
    $('html, body').animate({scrollTop: $('.js--section-food').offset().top}, 3000);
  });
  $('.js--scroll-to-form').click(function() {
    $('html, body').animate({scrollTop: $('.js--section-form').offset().top}, 3000);
  });


  /* Navigation scroll */
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

  /*animation on scroll*/
  $('.js--wp-1').waypoint(function (direction) {
    $('.js--wp-1').addClass('animated rubberBand');
  }, {
    offset: '50%'
  });

  $('.js--wp-2').waypoint(function (direction) {
    $('.js--wp-2').addClass('animated pulse');
  }, {
    offset: '50%'
  });

  $('.js--wp-3').waypoint(function (direction) {
    $('.js--wp-3').addClass('animated flipInY');
  }, {
    offset: '50%'
  });

  $('.js--wp-4').waypoint(function (direction) {
    $('.js--wp-4').addClass('animated bounce');
  }, {
    offset: '50%'
  });

  $('.js--wp-5').waypoint(function (direction) {
    $('.js--wp-5').addClass('animated bounceInDown');
  }, {
    offset: '50%'
  });

  $('.js--wp-6').waypoint(function (direction) {
    $('.js--wp-6').addClass('animated bounceInRight');
  }, {
    offset: '50%'
  });

  $('.js--wp-7').waypoint(function (direction) {
    $('.js--wp-7').addClass('animated bounceInLeft');
  }, {
    offset: '50%'
  });

  $('.js--wp-8').waypoint(function (direction) {
    $('.js--wp-8').addClass('animated bounceInUp');
  }, {
    offset: '50%'
  });

  $('.js--iamhungry').waypoint(function () {
    $('.js--iamhungry').addClass('animated rubberBand');
  }, {
    offset: '50%'
  });

  /*mobile nav*/
  $('.js--nav-icon').click(function() {
    var nav = $('.js--main-nav');
    var icon =$('.js--nav-icon i');

    nav.slideToggle(200);
    if (icon.hasClass('ion-navicon-round')) {
      icon.addClass('ion-close-round');
      icon.removeClass('ion-navicon-round');
    }else {
      icon.addClass('ion-navicon-round');
      icon.removeClass('ion-close-round');
    }


  });

});
