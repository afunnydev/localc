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

// SimpleCartJs
simpleCart({
    taxRate: 0.14975,
    cartColumns: [
        { attr: "name" , label: "Item", view: function(item,column){
          return ''
          }
        } ,
        { attr: "quantity" , label: false, view: function(item,column){
          return ''
          } 
        } ,
        { view: function(item, column){
          return '<div class="col-md-6 col-sm-8 col-xs-6 product-details">' +
            '<img src="'+item.get('thumb')+'" alt="">'+
            '<div class="product-type">' +
              '<h5><a href="#">'+item.get('name')+'</a></h5>'+

              '<label class="control control--checkbox hidden-xs"><span>Je veux voir un échantillon!</span>'+
              '<input type="checkbox">' +
              '<div class="control__indicator"></div></label></div></div>'
          }, label: false, attr: "thumb"
        } ,
        { attr: "price" , label: "Couleur", view: function(item,column){
          return '<div class="col-md-2 col-sm-4 col-xs-6 col-md-push-4 product-price">'+
                  '<span class="price">'+item.get('price').toFixed(2)+'$</span>'+
                  '<a href="javascript:;" class="simpleCart_remove remove-product-x"><i class="fa fa-times" aria-hidden="true"></i></a>'
                  '</div>'
          } 
        } ,
        { attr: "color" , label: "Quantité", view: function(item,column){
          return '<div class="col-md-2 col-sm-6 col-xs-12 col-md-pull-2 product-color">'+
                  '<span>'+item.get('color')+'</span></div>'
          }
        },
        { attr: "number", label: "Prix", view: function(item,column){
          return '<div class="col-md-2 col-sm-6 col-xs-12 col-md-pull-2 product-qty text-center">'+
                  '<span>Quantité: '+item.get('number')+' unités</span></div>'
          }
        }
    ]
});
//On product page
if (window.location.href.indexOf("produits") > -1){
  var spanPrix = $('span.item_price');
  var spanColor = $('span.item_color');
  $('select.qty-items').change(function(){
    var qty = $(this).val();
    $('span.item_number').text(qty);
    if (qty == 50){
      spanPrix.text((qty*price[0]).toFixed(2));
    } else if (qty == 100) {
      spanPrix.text((qty*price[1]).toFixed(2));
    } else if (qty == 250) {
      spanPrix.text((qty*price[2]).toFixed(2));
    } else if (qty == 500) {
      spanPrix.text((qty*price[3]).toFixed(2));
    } else {}
  });
  $('select:not(.qty-items)').each(function(index){
    variantes.push($(this).val());
    $(this).change(function(){
      variantes[index] = $(this).val();
      spanColor.text(variantes.join(", "));
    })
  });
  spanPrix.text((50*price[0]).toFixed(2));
  spanColor.text(variantes.join(", "));
  $('.item_add').click(function(){$(this).text('Ajouté').removeClass('item_add').addClass('added')});
}
simpleCart.bind( 'load update' , function(){
  var cartSubTotal = simpleCart.total();
  var cartTps = cartSubTotal * 0.05;
  var cartTvq = cartSubTotal * 0.09975;
  var cartTotal = cartSubTotal * 1.14975;
  $('.cart-details-sum span.cart-subtotal').text(cartSubTotal.toFixed(2));
  $('.cart-details-sum span.cart-tps').text(cartTps.toFixed(2));
  $('.cart-details-sum span.cart-tvq').text(cartTvq.toFixed(2));
  $('.cart-details-sum span.cart-total').text(cartTotal.toFixed(2));
});
