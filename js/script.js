$(function () {
    
/*=====TYPE/HEADLINE=====*/
    "use strict";

    $('.animate-clip').animatedHeadline({
        animationType: 'clip'
    });

    
/*===========MENU FIX===========*/
    var navoff = $('.main_menu').offset().top;

    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();

        if (scrolling > navoff) {
            $('.main_menu').addClass('menu_fix');
        } else {
            $('.main_menu').removeClass('menu_fix');
        }
    });

    
/*==============ISOTOPE==================*/  
    var $grid = $('.grid').isotope({
    });
    
    $('.portfolio-filter').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
    });
    
    
    
/*==============wow.js==================*/
    new WOW().init();


/*=====JQUERY BARFILLER START=====*/
    $(document).ready(function () {

        $('#bar1').barfiller({barColor: '#79244D'});
        $('#bar2').barfiller({barColor: '#79244D'});
        $('#bar3').barfiller({barColor: '#79244D'});
        $('#bar4').barfiller({barColor: '#79244D'});
        $('#bar5').barfiller({barColor: '#79244D'});
        $('#bar6').barfiller({barColor: '#79244D'});
        $('#bar7').barfiller({barColor: '#79244D'});
        $('#bar8').barfiller({barColor: '#79244D'});
    });
    
/*=====PARALLEX START=====*/
    var scene = document.getElementById('scene');
    var parallaxInstance = new Parallax(scene);

    
/*=====COUNTER START=====*/
    jQuery(document).ready(function( $ ) {
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });
    });

  



});
