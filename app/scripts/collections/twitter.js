define([
	"backbone",
	"underscore"
], function (Backbone, _){
  "use strict";
	var Tweets = Backbone.Collection.extend({
		url: function () {
			return 'https://search.twitter.com/search.json?q=' + this.query + '&page=' + this.page;
		},
		parse: function (resp, xhr){
			return resp.results;
		},
		page: 1,
		query: 'el_parga'
	});

	return Tweets;

});