define([
  "backbone",
  "underscore",
  "text!templates/profile.html"
], function (Backbone, _, template){
	"use strict";
	var app = Backbone.View.extend({
    el: ".main",
    _template: _.template(template),
    render: function (){
      this.$el.html(this._template);
    }
	});
	return app;
});