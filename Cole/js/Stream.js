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
                     "pics/ColeI-12.jpg",
                      "pics/headshots2.jpg",
                     "pics/Stage2.jpg"
                ];
                this.album = theater;

                this.picture = 0;

                this.current = function() {


                    return this.picture;

                };
                this.next = function(){
                  if (this.picture === theater.length-1){
                      return 0;
                  }
                    else{
                      return this.picture + 1;
                  }
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

                    this.setCurrent(this.current()+1);

                };
               /* this.nextSlide = function($timeout, $scope) {

                document.getElementById("frontPic").className="fadeOut";
                    this.timeInMs = 1000;
                    $timeout(function(){
                        var num = $scope.current();
                        num++;
                       $scope.setCurrent(num);

                    }, this.timeInMs);

*/
                    /*setTimeout(function(){
                        var num = app.slideShow.current();
                        num += 1;
                        slideShow.setCurrent(num);
                        document.getElementById("frontPic").className="picFront";

                        },1000);



                };*/
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
                this.changeClass = function(id){
                    setTimeout(function(){
                        document.getElementById(id).className = "fadeIn";
                    }, 100);

                };
                this.revertClass = function(id){
                    document.getElementById(id).className = "beginBlank";
                }

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