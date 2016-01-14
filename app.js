"use strict";

angular.module("jfet", [ "ui.bootstrap", "ui.router" , 'duScroll'])

.config(function( $stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise("/");

	$stateProvider
	.state("home", {url:"/", templateUrl:"index.html", controller: "navCtrl"})
	// .state("home.resume", {url:"/home/resume", templateUrl: "templates/resume.html", controller: "navCtrl"})
	// .state("home.blog", {url:"/home/resume", templateUrl: "templates/blog.html", controller: "navCtrl"} )
})

.directive("pageTop", function(){
	return{
		templateUrl: "directives/navbar/topspace.html"
	}
})

.directive("resumeView", function(){
	return{
		templateUrl: "directives/resume/resume-view.html"
	}
})