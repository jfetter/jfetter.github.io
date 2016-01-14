angular.module("jfet")

.controller("navCtrl", function($scope, $document){
  
	$scope.title = "Jillian Fetter"
	$scope.subtitle ="Javascript Web Developer"

	//var gitHub = {name: "github", url: "https://github.com/jfetter"};
	var hangman = {name: "hangman", url: "http://www.unfetteredbook.com/hangman/hangman.html", img: "images/hangman.png" , github: "https://github.com/jfetter/CodeHousePrework/tree/master/17HangMan"};
	var hanoi = {name: "hanoi", url: "http://jfetter.github.io/hanoi/", img: "images/hanoi.png", github: "https://github.com/jfetter/hanoi"};
	var calc = {name: "calc", url: "http://jfetter.github.io/calculator/", img: "images/calc.png", github: "https://github.com/jfetter/calculator"};
	var dilDaily = {name: "dilDaily", url: "http://www.unfetteredbook.com", img: "images/jlogo.png", github:"https://github.com/jfetter/calculator"};
	$scope.projects = [hanoi, hangman, calc, dilDaily ];

 ///// *** //scrollspy// *** /////
  var top = angular.element(document.getElementById('page-top'));
  	$scope.toTheTop = function (){
  	$document.scrollTop(0, 1000)
  }
  // var conBubbles = angular.element(document.getElementById('con-bubbles'));
 	//    	$scope.toConBubbles= function (){
  // 	$document.scrollToElementAnimated(conBubbles)
  // } 
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
// scroll to the top on load
// $document.scrollTop(100, 2000).then(function() {
//     console.log('You just scrolled to the top!');
//   });

 


// $scope.showsProjects = function(){
// 		$scope.showProjects = !$scope.showProjects; 
// 		if ($scope.showContact)
// 			$scope.showContact = false;
// 		console.log("show project clicked. Now it's", $scope.showProjects)
// 	}
// 	$scope.showsContact = function(){
// 		$scope.showContact = !$scope.showContact; 
// 		if ($scope.showProjects)
// 			$scope.showProjects = false;
// 		console.log("show contact clicked. Now it's", $scope.showContact)
// 	}


/// *** conversation bubbles *** ///
	$scope.talkingPoints = {comment: "have you seen what she can do with angular", response: "yeah it's amazing"};
	var conversation = [
	//{comment: "have you seen what she can do with angular", response: "yeah it's amazing"}, 
	{comment: "she's in the node", response: "she sure is. I swear she must eat snakes for breakfast she's so in tune with mongoose"},
	{comment: "blah blah blah", response: "la la la"},
	{comment: "test3", response: "test3 resp"}
	]


	$scope.convo = false;
	var count = 0; 

///// *** ////// **** ///// **** /////
/// need to set up for server to watch ///
	window.setInterval(converse, 1000)

	function converse(){
		//console.log($scope.talkingPoints)
		$scope.talkingPoints = conversation[count];
		count ++; 
		$scope.convo = !$scope.convo;
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
