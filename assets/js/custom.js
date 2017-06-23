//@prepros-prepend libs/bootstrap.min.js
//@prepros-prepend easing.js
//@prepros-prepend libs/jquery-ui.min.js
//@prepros-prepend libs/slick.min.js
//@prepros-prepend libs/bootstrap-select.min.js
//@prepros-prepend jquery.matchHeight.js
//@prepros-prepend libs/simpleCart.min.js

/* Init slick slider homepage top */
$("#top-slider").slick({
  // normal options...
  infinite: true,
  dots: false,

  // the magic
  responsive: [{

      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        infinite: true,
      }

    }]
});


// Remove placeholder
$('input,textarea').focus(function(){
   $(this).data('placeholder',$(this).attr('placeholder'))
   $(this).attr('placeholder','');
});
$('input,textarea').blur(function(){
   $(this).attr('placeholder',$(this).data('placeholder'));
});


// Tooltip
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

// smooth scroll
$(function() {
  $('a[href*="#start"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

// same height 
$(function() {
  $('.blog-box').matchHeight();
});

$(function() {
  $('.categorie-content h3').matchHeight();
});

// menu items
$("#catalogue-sidebar li:has(ul)").find(".subnav-item").click(function() {
  $('.subnav-item').removeClass('subnav-item-active');
  var parent = $(this).parent();
  $('.dropdown-menu-acc').not($(this).next()).slideUp();
    $(this).toggleClass('subnav-item-active');
    parent.find("ul:first").slideToggle();
});

 $('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  asNavFor: '.slider-nav',
  pauseOnHover:true,
  pauseOnDotsHover:true
});


$('.slider-nav').slick({
  slidesToShow: 4,
  slidesToScroll: 4,
  asNavFor: '.slider-for',
  dots: true,
  arrows:false,
  centerMode: false,
  focusOnSelect: true,
  variableWidth: false,
  pauseOnHover:true,
  pauseOnDotsHover: true,

    responsive: [
    {
      breakpoint: 960,
      settings: {
        arrows: false,
        centerMode: false,
        slidesToShow: 4,
        slidesToScroll: 2
      }
    },

    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: false,
        slidesToShow: 3
      }
    }
  ]

});

// Menu hamburger
$('.menu-btn').click(function () {
    $(this).toggleClass('open');
});


$('.menu-btn').click (function(){
  $('#mobile-menu').toggleClass('open-menu');
});

$('.menu-btn').click (function(){
  $('body').toggleClass('body-scroll');
});

$('.search-ico').click (function(){
  $('#search-bar').fadeToggle();
});

$('.close-search').click (function(){
  $('#search-bar').fadeToggle();
});
