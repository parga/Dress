define([
  "backbone",
  "underscore",
  'collections/twitter',
  "text!templates/centralPanel/centralPanel.html"
], function (Backbone, _, TwitterCollection, template){
	"use strict";
	var app = Backbone.View.extend({
    initialize: function (){
      this.isLoading = false;
      this.twitterCollection = new TwitterCollection();
    },
    render: function (){
      this.loadResults();
    },
    loadResults: function (){
      var that = this;
      this.isLoading = true;
      this.twitterCollection.fetch({
        success: function (tweets){
          that.$el.append(_.template(template, {tweets: tweets.models, _:_}));
          that.isLoading = false;
        }
      });
    },
    events: {
      'scroll': 'checkScroll'
    },
    checkScroll: function (){
      var triggerPoint = 100;
      if( !this.isLoading && this.el.scrollTop + this.el.clientHeight + triggerPoint > this.el.scrollHeight){
        this.twitterCollection.page += 1;
        this.loadResults();
      }
    }
	});
	return app;
});