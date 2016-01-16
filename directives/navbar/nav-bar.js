angular.module("jfet")

.controller("navCtrl", function($scope, $interval, $document){
  
	$scope.title = "Jillian Fetter"

//// projects ////
	var thisPage = {name: "dilDaily", url: "http://www.unfetteredbook.com", img: "images/jlogo.png", github:"https://github.com/jfetter/calculator"};
	var hangman = {name: "hangman", url: "http://www.unfetteredbook.com/hangman/hangman.html", img: "images/hangman.png" , github: "https://github.com/jfetter/CodeHousePrework/tree/master/17HangMan"};
	var hanoi = {name: "hanoi", url: "http://jfetter.github.io/hanoi/", img: "images/hanoi.png", github: "https://github.com/jfetter/hanoi"};
	//var calc = {name: "calc", url: "http://jfetter.github.io/calculator/", img: "images/calc.png", github: "https://github.com/jfetter/calculator"};
	var dilDaily = {name: "dilDaily", url: "http://www.unfetteredbook.com", img: "images/jlogo.png", github:"https://github.com/jfetter/calculator"};
	$scope.projects = [hanoi, hangman, thisPage, dilDaily ];

 ///// *** //scrolling// *** /////
  var top = angular.element(document.getElementById('page-top'));
  	$scope.toTheTop = function (){
  	$document.scrollTop(0, 1000)
  }
  var conBubbles = angular.element(document.getElementById('con-bubbles'));
 	   	$scope.toConBubbles = function (){
  	$document.scrollToElementAnimated(conBubbles)
  } 
 	var contactView = angular.element(document.getElementById('contact-view'));
   		$scope.toContactView = function (){
  	$document.scrollToElementAnimated(contactView)
  } 
  var resumeView = angular.element(document.getElementById('resume-view'));
  		$scope.toResumeView = function (){
  	$document.scrollToElementAnimated(resumeView)
  } 
  var projectView = angular.element(document.getElementById('project-view'));
 		$scope.toProjectView = function (){
		console.log("in projectView")
  	$document.scrollToElementAnimated(projectView)
  } 
// scroll to convo after load
$document.scrollTop(1500, 5000).then(function() {
    console.log('You just scrolled to convo bubbles!');
  });


/// *** conversation bubbles *** ///
	$scope.talkingPoints = {comment: "Have you seen what she can do with Angular", response: "OMG yes! This site is actually done in Angular"};
	var conversation = [
	//{comment: "have you seen what she can do with angular", response: "yeah it's amazing"}, 
	{comment: "She puts together a mean mean stack too", response: "Her app daily dilligence uses MEAN stack"},
	{comment: "And have you seen her witn nunchucks", response: "You know she actually trained with the ninja turtles one summer"},
	{comment: "She sucks at DDR though", response: "I know, white girl CANNOT dance"}
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
