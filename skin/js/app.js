$(function(){
    'use strict';

    $('.open-dialog').MyCMSDialog();

    $('.phone-mask').mask("+7 (999) 999-99-99");

    $('.main-slider').slick({
        infinite: true,
        arrows: true,
        dots: true
    });

    if ($('.parallax-img').length) {
        var p = new Parallax('.parallax', {
            offsetYBounds: 50,
            intensity: 50,
            center:1.5,
            safeHeight: 0.15
        }).init();
    }

    $.srSmoothscroll({
        step: 150,
        speed: 800
    });

    onScrollInit( $('.os-animation') );

});

function onScrollInit(items, trigger) {
    items.each( function() {
        var osElement = $(this),
            osAnimationClass = osElement.attr('data-os-animation') ? osElement.attr('data-os-animation') : 'fadeIn',
            osAnimationDelay = osElement.attr('data-os-animation-delay') ? osElement.attr('data-os-animation-delay') : '0s';

        osElement.css({
            '-webkit-animation-delay':  osAnimationDelay,
            '-moz-animation-delay':     osAnimationDelay,
            'animation-delay':          osAnimationDelay
        });

        var osTrigger = ( trigger ) ? trigger : osElement;

        osTrigger.waypoint(function() {
            osElement.addClass('animated').addClass(osAnimationClass);
        },{
            triggerOnce: true,
            offset: '95%'
        });
    });
}