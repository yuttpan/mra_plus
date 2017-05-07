angular.module('starter')

.controller('mainCtrl', function($scope, $state,DataService,$ionicPopup,$window,$localStorage) {

$scope.user = $localStorage.user
console.log($scope.user)



$scope.logout = function(){

$localStorage.user = {}
$state.go('home')

}
})

.controller('mraSendCtrl', function($scope, $state,DataService,$ionicPopup,$window,$localStorage) {

$scope.user = $localStorage.user
console.log($scope.user)
$scope.searchstatushn = 'error'
$scope.searchstatusan = 'error'
$scope.data = {} ;
console.log($scope.data)


$scope.searchHn = function(){
     $scope.searchstatusan = 'error'
 DataService.searchHn($scope.data.hn).success(function ($data) {
			var getdata = angular.extend($data);
$scope.patient = getdata.data 
$scope.searchstatushn = getdata.status 
console.log($scope.searchstatushn)
$scope.data = {} ;
})
}

$scope.searchAn = function(){
    $scope.searchstatushn = 'error'
 DataService.searchAn($scope.data.an).success(function ($data) {
			var getdata = angular.extend($data);
$scope.ipt = getdata.data 
$scope.searchstatusan = getdata.status 
console.log($scope.searchstatusan)
$scope.data = {} ;
})
}

})


.controller('mraAddCtrl', function($scope, $state,DataService,$ionicPopup,$window,$localStorage) {
$scope.user = $localStorage.user
console.log($scope.user)
})




