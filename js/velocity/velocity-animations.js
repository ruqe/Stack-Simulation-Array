function translateRight(){
	var translate = document.querySelectorAll(".shiftMe");
	Velocity(translate, { translateX: "1000px" });	
	Velocity(translate, "reverse");
	//var $previous = $('.alreadyAdded').attr('class');;
	//$previous.velocity({translateY: "300px"}, 1000);
}



function resetInput(){
	var input = document.querySelectorAll(".toBeAdded");
	Velocity(input, {translateX: "0", translateY:"0", opacity:0}, {duration: 0});
}

function slideRightPrevious(){
	var previousThingy = document.querySelectorAll(".yaAdded");
	Velocity(previousThingy, {translateX: "100px"}, {duration: 1000, complete: function(){
		console.log("complete shift right");
	}
	});
}

function slideDownDeleted(){
	var deleted = document.querySelectorAll(".toBeDeleted")
	Velocity(deleted, {translateY:"100px"}, 1000);
	Velocity(deleted, {opacity:0}, 100);
}

function resetDeleted(){
	var deleted = document.querySelectorAll(".toBeDeleted")
	Velocity(deleted, {translateY:"0", opacity:0}, 0);
}

function showDeleted($scope){
	var deleted = document.querySelectorAll(".toBeDeleted")
	Velocity(deleted, {opacity:1}, {duration: 0, complete: function(){
		$scope.$apply();
	}});
}
