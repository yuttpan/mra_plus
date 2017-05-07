angular.module('starter')

.controller('HomeCtrl', function($scope, $state,DataService,$ionicPopup,$window,$localStorage) {
console.log('HOME')


$scope.form = {} ;

$scope.login =function() {

	DataService.loginService($scope.form).success(function ($data) {
			var getdata = angular.extend($data);
			console.log(getdata)
$localStorage.user = getdata.data
            if (getdata.status === 'success'){
 $scope.showAlert()
 $state.go('main')
            }

    })
}


$scope.showAlert = function() {
     var alertPopup = $ionicPopup.alert({
       title: '',
       template: 'เข้าสู่ระบบสำเร็จ'
     });
     alertPopup.then(function(res) {
       console.log('Thank you for not eating my delicious ice cream cone');
     });
   };
})