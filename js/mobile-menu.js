/**
 * Created by igor7 on 08.05.2017.
 */
$(document).ready(function(){
    $( '.mobile-nav-button' ).click(function(){
        $( ".mobile-nav-button .mobile-nav-button__line:nth-of-type(1)" ).toggleClass( "mobile-nav-button__line--1");
        $( ".mobile-nav-button .mobile-nav-button__line:nth-of-type(2)" ).toggleClass( "mobile-nav-button__line--2");
        $( ".mobile-nav-button .mobile-nav-button__line:nth-of-type(3)" ).toggleClass( "mobile-nav-button__line--3");
        $(".responsive-menu").slideToggle("slow");
        $(".header-row").slideToggle("slow");
        $(window).on('resize', function(){
            if ($(window).width() > 605) {
                $(".responsive-menu").slideUp(1);
                $(".header-row").slideDown(1);
                $( ".mobile-nav-button .mobile-nav-button__line:nth-of-type(1)" ).removeClass( "mobile-nav-button__line--1");
                $( ".mobile-nav-button .mobile-nav-button__line:nth-of-type(2)" ).removeClass( "mobile-nav-button__line--2");
                $( ".mobile-nav-button .mobile-nav-button__line:nth-of-type(3)" ).removeClass( "mobile-nav-button__line--3");
            }
        });
    });
});