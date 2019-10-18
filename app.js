(function(){
'use strict'

angular.module("my_app",[])

.controller("CheckValueController", CheckValueController);
 CheckValueController.$inject = ["$scope"]
 function CheckValueController($scope){
 $scope.item = '';

 $scope.findvalue = function(){
   var items = $scope.item;
   if(items.length == 0)
   {
     $scope.message = "Please enter data first"
     $scope.msg_color = {"color":"red", "border-color" : "red"}
   }
   else
   {
     var arr = items.split(',');
     var arr_count = 0;
     arr.forEach(function(ar){
        if(ar.length > 0)
          arr_count += 1
     });
     if(arr_count <= 3)
     {
       $scope.message = "Enjoy!"
       $scope.msg_color = {"color":"green", "border-color" : "green"}
     }
     else
     {
       $scope.message = "Too much!"
       $scope.msg_color = {"color":"green", "border-color" : "green"}
     }
   }
 };

}

})();
