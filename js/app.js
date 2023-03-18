(function () {
    "use strict";
    angular.module("mySolution", [])
        .controller("myController", myController);
    myController.$inject = ["$scope", "$filter"];
    function myController($scope) {
        $scope.name = "";
        $scope.msg = "";
        $scope.check = function () {
              $scope.msg=setMessage($scope.name);
        };
        function setMessage(name) {
            if(name.length==0){
                return "Please provide data"
            }
           else {
            var arr=name.split(",");
            if(arr.length>3){
                return "Too much!"
            }
            else{
                return "Enjoy!"
            }

           }
        }
    }
})()