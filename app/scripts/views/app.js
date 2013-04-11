define([
  "backbone",
  "underscore",
  "text!templates/app.html",
  "views/centralPanel/centralPanel"
], function (Backbone, _, template, CentralPanel){
	"use strict";
	var app = Backbone.View.extend({
    el: ".main",
    _template: _.template(template),
    initialize: function (){
      $(window).scroll(this.checkScroll.bind(this));
    },
    render: function (){
      this.$el.html(this._template);
      this.renderCentralPanel();
    },
    renderCentralPanel: function (){
      this.centralPanel = new CentralPanel({el: this.$(".centralPanel")});
      this.centralPanel.render();
    },
    checkScroll: function (){
      var triggerPoint = 5;
      if( !this.centralPanel.isLoading && this.el.scrollTop + this.el.clientHeight + triggerPoint > this.el.scrollHeight){
        this.centralPanel.twitterCollection.page += 1;
        this.centralPanel.loadResults();
      }
    }
	});
	return app;
});