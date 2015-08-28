/**
 * 
 */

var ArrayStackControllers = angular.module('arraystackcontrollers', []);

ArrayStackControllers.controller('ArrayStackCtrl', ['$scope',function($scope){
	$scope.array = [];
	$scope.hidden=[];
	$scope.arrayStuff="]";
	$scope.toDelete=[];
	$scope.isDisabled = false;
	
	$scope.push = function(){
		$scope.isDisabled = true;
		console.log("push");
		slideRightPrevious();
		var slideDownInput = document.querySelectorAll(".toBeAdded");
		Velocity(slideDownInput, {translateX: "-45px", translateY:"24px", opacity:1},{ duration: 1000, complete: function(){
			console.log("Completed");
			$scope.array.unshift($scope.inputValue);
			console.log("Put stuff in");
			console.log($scope.array.toString());
			$scope.arrayStuff=$scope.array.join(", ") + "]";
			console.log("Updated View");
			resetInput();
			console.log("Reset");
			$scope.$apply();
			$scope.isDisabled = false;
			console.log("Disabled " + $scope.isDisabled);
			$scope.$apply();

		}});
	
	
		var width = 100;
		
	};
	
	$scope.pop = function(){
		if($scope.array.length != 0){
			$scope.deletedValue = $scope.array[0];
			pop();
			
		}else{
			alert("Array is Empty, cannot pop elements from empty array!");
		}
		$scope.isDisabled = false;
	};
	
	$scope.clear = function(){
		var count = $scope.array.length;
		if(count != 0){
		$scope.deletedValue = $scope.array[0];
		for(i = 0; i<count; i++){
			pop();
			
		}
		} else{
			alert("Array is already Empty!");
		}
		$scope.isDisabled = false;

		
	};
	
	$scope.move = function(){
		var temp = $scope.array[2];
		$scope.array[2] = $scope.array[0];
		$scope.array[0] = temp;
	}
	
	function pop(){
		$scope.isDisabled = true;
		$scope.toDelete = $scope.array.slice();
		
		$scope.toDelete.splice(0,1);
		console.log("Now deleting " + $scope.deletedValue);
		$scope.arrayStuff=$scope.toDelete.join(", ") + "]";
		showDeleted($scope);
		
		var deleted = document.querySelectorAll(".toBeDeleted");
		Velocity(deleted, {translateY:"100px"}, {duration: 1000, begin: function(){
			$scope.toDelete = $scope.array.slice();
			$scope.toDelete.splice(0,1);
			console.log($scope.toDelete);
			$scope.arrayStuff=$scope.toDelete.join(", ") + "]";

			$scope.deletedValue = $scope.array[0];
			$scope.$apply();
			console.log(deleted);
			console.log("before " + $scope.deletedValue);
			
		}, complete: function(){
			
			console.log("animated " + $scope.deletedValue);
			$scope.array.splice(0,1);
			$scope.deletedValue = $scope.array[0];
			$scope.toDelete = $scope.array.slice();
			$scope.toDelete.splice(0,1);
			
			
			$scope.$apply();
			resetDeleted();
			$scope.isDisabled = false;

		}});
		
		
		
		
		//Velocity(deleted, {opacity:0}, 100);
		resetDeleted();
		
		//slideLeftPrevious();
		
		
		
		
	}
	

	
}]);

