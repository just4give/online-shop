/**
 * Created by mithundas on 12/3/15.
 */


appModule.controller('CarouselController', function ($scope) {
    $scope.myInterval = 5000;
    $scope.noWrapSlides = false;
    var slides = $scope.slides = [ {image:'images/img000.jpg', text:"Stealing Deals on HD TVs. ",
        text2:"Everyday is christmas. Find your perfect TV today.",
        link:{text:"Buy", href:"/#/xyz"}},
        {image:'images/img002.jpg', text:"Stealing Deals on HD TVs. ",
            text2:"Everyday is christmas. Find your perfect TV today.",
            link:{text:"Buy", href:"/#/xyz"}}
        ];

});