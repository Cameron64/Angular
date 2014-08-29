/**
 * Created by camer_000 on 8/23/2014.
 */
(function() {

    var app = angular.module('cole', []);

    app.directive('slideShow', function() {
        return{
            restrict: 'E',
            templateUrl: 'slide-show.html',
            controller: function(){
                var theater = [
                    { "name": "pics/ColeI-12.jpg", "type": 0},
                    { "name": "pics/headshots2.jpg", "type": 0},
                    { "name": "pics/Stage2.jpg", "type": 0}
                ];
                this.album = theater;

                this.picture = 0;

                this.current = function() {


                    return this.picture;

                };

                this.setCurrent = function(num) {


                    if(this.picture >= theater.length-1) {
                        this.picture = 0;
                    }
                    else {
                        this.picture = num;
                    }

                };

                this.nextSlide = function() {



                    this.setCurrent(this.picture + 1);



                };
            },
            controllerAs: 'pics'
        };
    });

    app.directive('tabs', function(){
        return{
            restrict: 'E',
            templateUrl: 'tabs.html',
            controller: function(){

                this.current = 1;

                this.isSet = function(num) {

                    return this.current === num;

                };

                this.setTab = function(num){

                    this.current = num;

                };

            },
            controllerAs: 'tab'
        };
    });

    app.directive('contact', function() {

       return{

           restrict: 'E',
           templateUrl: "contact-info.html"

       };
    });
    app.directive('about', function() {

        return{

            restrict: 'E',
            templateUrl: "About.html"

        };
    });

    app.directive('resume', function() {

        return{

            restrict: 'E',
            templateUrl: "resume.html"

        };
    });
})();