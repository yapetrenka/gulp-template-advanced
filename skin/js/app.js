$(function(){
    'use strict';

    $('.open-dialog').MyCMSDialog();

    $('.phone-mask').mask("+7 (999) 999-99-99");

    $('select').each(function(){
        var multiple = $(this).attr('multiple') ? true : false;
        var noneSelectedText = $(this).data('text');
        $(this).multiselect({
            multiple: multiple,
            checkAllText: 'Выбрать все',
            uncheckAllText: 'Удалить все',
            noneSelectedText: noneSelectedText,
            selectedText: '# выбрано',
            selectedList: 3,
            height: 234
        });
    });

    $('.main-slider').slick({
        infinite: true,
        arrows: true,
        dots: true
    });

    $('.parallax-window').parallax();

    $.srSmoothscroll({
        step: 150,
        speed: 800
    });

    $(".lg_album").lightGallery({
        selector: '.lg_item',
        exThumbImage: 'data-exthumbimage',
        thumbWidth: 104,
        thumbContHeight: 91,
        download: false
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