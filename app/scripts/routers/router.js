define([
  'backbone',
  'views/app',
  'views/profile'
],function (Backbone, App, Profile){
	"use strict";
	var router = Backbone.Router.extend({
    initialize: function (){
      Backbone.history.start();
    },
		routes: {
      "profile": "showProfile",
      "": "defaultRoute",
    },
    defaultRoute: function (){
      $(".nav li:nth-child(1)").removeClass('active');
      var app = new App();
      app.render();
    },
    showProfile: function (){
      $(".nav li:nth-child(1)").addClass('active');
      var profile = new Profile();
      profile.render();
    }
	});

	return router;
});