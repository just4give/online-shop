/**
 * Created by mithundas on 12/3/15.
 */
var appModule = angular.module("profile",['ui.router','ui.bootstrap','ngAnimate', 'ngTouch','angular-confirm',
    'LocalStorageModule','headroom','viewhead','vcRecaptcha']);

appModule.config(function (localStorageServiceProvider) {
    localStorageServiceProvider
        .setPrefix('photoOrder')
        .setStorageType('localStorage') //sessionStorage
        .setNotify(true, true)

});

appModule.run(["$interval","localStorageService","$rootScope", function($interval,localStorageService,$rootScope){
//create a new instance
    new WOW().init();

    $rootScope.$on('$routeChangeStart', function (next, current) {
        //when the view changes sync wow
        new WOW().sync();
    });

    $(document).ready(function(){

        if ( $(window).width() > 768) {
            $('a').click(function(){
                $('html, body').animate({
                    scrollTop: $( $.attr(this, 'href') ).offset().top -80
                }, 500);
                event.preventDefault()
            });
        }
        else {
            $('a').click(function(){
                $('html, body').animate({
                    scrollTop: $( $.attr(this, 'href') ).offset().top -82
                }, 500);
                event.preventDefault()
            });
        }
        /*
         End Animate scroll code and add offset for header
         */

        /*
         Fix to set selected nav option to class active
         */
        $('.nav li a').on('click', function() {
            $(this).parent().parent().find('.active').removeClass('active');
            $(this).parent().addClass('active');
            $('.navbar-collapse').removeClass('in').addClass('collapse');
        });

    });
}]);



