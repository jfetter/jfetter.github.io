angular.module("jfet")

.controller("navCtrl", function($scope, $anchorScroll, $location, $timeout, $interval, $document){
  
	$scope.title = "Jillian Fetter"

//// projects ////
	var dirtyDealer = {name: "Dirty Dealer", url: "https://dirtydeals.herokuapp.com", img: "images/dirtydealer.jpg", github: "https://github.com/rachelrobynslater/CAH.git"};
	var dilDaily = {name: "Get To Work!", url: "https://ancient-lake-82311.herokuapp.com/", img: "images/dildaily.jpg", github:"https://github.com/jfetter/dildaily.git"};
	var unfettered = {name: "unfettered", url: "http://www.unfetteredbook.com", img: "images/unfettered.jpg", github:"https://github.com/jfetter/unFetteredBook.git"};
	var hangman = {name: "hangman", url: "http://jfetter.github.io/accusor", img: "images/hangman.jpg" , github: "https://github.com/jfetter/accusor.git"};
	//var poker = {name: "poker", url: "https://dry-mesa-2798.herokuapp.com/", img: "images/poker.jpg", github: "https://github.com/jfetter/sog.git"};
	$scope.projects = [dirtyDealer, dilDaily, unfettered, hangman];
 ///// *** //scrolling// *** /////
  var top = angular.element(document.getElementById('page-top'));
  	$scope.toTheTop = function (){
  	$document.scrollTop(0, 1000)
  }
  var conBubbles = angular.element(document.getElementById('con-bubbles'));
 	   	$scope.toConBubbles = function (){
  	$document.scrollToElementAnimated(conBubbles, 50)
  } 
 	var contactView = angular.element(document.getElementById('contact-view'));
   		$scope.toContactView = function (){
  	$document.scrollToElementAnimated(contactView, -200)
  }  
  var projectView = angular.element(document.getElementById('project-view'));
 		$scope.toProjectView = function (){
		console.log("in projectView")
  	$document.scrollToElementAnimated(projectView)
  } 

  $scope.scrollOnce = false;
  $scope.scrollRight = function(){
  	if ($scope.scrollOnce == true){
  		return; 
  	}
  		var w = $(".scrolls").first().width();
  		var width = ($scope.projects.length * w) - 100
  		$(".scrolls").animate({scrollLeft: width}, 500,'linear');
  		$(".scrolls").animate({scrollLeft: 0}, 500,'linear');
 			$scope.scrollOnce = true;
  		
 }

$scope.stopScroll = function(){
	console.log("MOUSE OFF")
 			$scope.scrollOnce = true;

}

// scroll to convo after load
// $document.scrollToElement(contactView, 100 ,2000)



/// *** conversation bubbles *** ///
	$scope.talkingPoints = {comment: "Have you seen what she can do with Angular", response: "OMG yes! This site is actually done in Angular"};
	var conversation = [
	//{comment: "have you seen what she can do with angular", response: "yeah it's amazing"}, 
	{comment: "Have you seen her with nunchucks", response: "You know she actually trained with the ninja turtles one summer"},
	{comment: "I think she channeld that fiestiness into her hangman game", response: "That app was built with good ol' fashioned jQuery."},
	{comment: "Did you know she made a multiplayer real time card game", response: "yeah, Dirty Dealer, its like Cards Against humanity but even better"},
	{comment: "She sucks at DDR though", response: "I know! Homegirl CANNOT dance"},
	{comment: "But she does put together a mean MEAN stack app!", response: "I know what you MEAN. Her app, 'Get To Work' is awesome!"}
	]

	$scope.convo = true;
	var count = 0; 

///// *** ////// **** ///// **** /////
/// need to set up for server to watch ///
	$interval(converse, 3000)

	function converse(){
		$scope.convo = !$scope.convo;
		$scope.talkingPoints = conversation[count];
		if (!$scope.convo)
			count ++; 
		if (count == conversation.length){
				count = 0;
			}
	}

})
	.value('duScrollOffset', -50)

.directive("navBar", function(){
	return{
		templateUrl: "directives/navbar/nav-bar.html"
	};
})
