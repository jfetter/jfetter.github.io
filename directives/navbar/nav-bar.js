angular.module("jfet")

.controller("navCtrl", function($scope, $interval, $document){
  
	$scope.title = "Jillian Fetter"

//// projects ////
	var unfettered = {name: "unfettered", url: "http://www.unfetteredbook.com", img: "images/unfettered.jpg", github:"https://github.com/jfetter/unFetteredBook.git"};
	var hangman = {name: "hangman", url: "http://jfetter.github.io/accusor", img: "images/hangman.jpg" , github: "https://github.com/jfetter/accusor.git"};
	//var poker = {name: "poker", url: "https://dry-mesa-2798.herokuapp.com/", img: "images/poker.jpg", github: "https://github.com/jfetter/sog.git"};
	var dirtyDealer = {name: "Dirty Dealer", url: "https://mysterious-temple-85764.herokuapp.com/game", img: "images/dirtydealer.jpg", github: "https://github.com/rachelrobynslater/CAH.git"};
	var dilDaily = {name: "Dilliegence", url: "https://fast-ravine-7212.herokuapp.com/", img: "images/dildaily.jpg", github:"https://github.com/jfetter/dildaily.git"};
	$scope.projects = [unfettered, hangman, dirtyDealer, dilDaily ];

 ///// *** //scrolling// *** /////
  var top = angular.element(document.getElementById('page-top'));
  	$scope.toTheTop = function (){
  	$document.scrollTop(0, 1000)
  }
  var conBubbles = angular.element(document.getElementById('con-bubbles'));
 	   	$scope.toConBubbles = function (){
  	$document.scrollToElementAnimated(conBubbles, 75)
  } 
 	var contactView = angular.element(document.getElementById('contact-view'));
   		$scope.toContactView = function (){
  	$document.scrollToElementAnimated(contactView, 100)
  } 
  // var resumeView = angular.element(document.getElementById('resume-view'));
  // 		$scope.toResumeView = function (){
  // 	$document.scrollToElementAnimated(resumeView)
  // } 
  var projectView = angular.element(document.getElementById('project-view'));
 		$scope.toProjectView = function (){
		console.log("in projectView")
  	$document.scrollToElementAnimated(projectView)
  } 
// scroll to convo after load
$document.scrollTop(950, 4000).then(function() {
    console.log('You just scrolled to convo bubbles!');
  });


/// *** conversation bubbles *** ///
	$scope.talkingPoints = {comment: "Have you seen what she can do with Angular", response: "OMG yes! This site is actually done in Angular"};
	var conversation = [
	//{comment: "have you seen what she can do with angular", response: "yeah it's amazing"}, 
	{comment: "She puts together a mean MEAN stack!", response: "Her app daily dilligence uses MEAN stack"},
	{comment: "And have you seen her with nunchucks", response: "You know she actually trained with the ninja turtles one summer"},
	{comment: "I love to hangout and play her hangman game", response: "That app was built with good ol' fashioned jQuery."},
	{comment: "Did you know she made a multiplayer real time card game", response: "yeah, Dirty Dealer, its like Cards Against humanity but even better"},
	{comment: "She sucks at DDR though", response: "I know! Homegirl CANNOT dance"}
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
