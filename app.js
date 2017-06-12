(function () {
'use strict';


angular.module('lunchCheckApp', [])

 .controller('lunchCheckController', function($scope){
   $scope.message=  "" ;
   $scope.text2="" ;
   $scope.numnberOfItem = 0
 
  $scope.numnberOfItem = function () {
        
  var stringToArr = 0;
    
  var texbox =  $scope.text2;
    
  var stringToArr = texbox.split(","); // a inserer ds fonction check if to much
    return stringToArr.length;
   };
    

$scope.CheckIftoMuch = function () {
 
 
  switch($scope.numnberOfItem()){
    case 0: 
     $scope.message= "Please enter data first"  ; 
    break;
    case 1:
       if($scope.text2 === "" || $scope.text2 === undefined
            || $scope.text2.length === 0) {
     
            $scope.message="Please enter data first" ;
    
         } 
       else {
            $scope.message= "Enjoy!";
         }
    break;
    case 2:
    case 3: 
      $scope.message= "Enjoy!";  
    break;  
    case 4:
    case 5:
    case 6:
      $scope.message= "Too much!" ; 
    break; 
    default: 
      $scope.message= "Too much!" ;
       }

   
    return $scope.message 
};   
 });




}) ();
