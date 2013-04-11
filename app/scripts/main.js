/*global require*/
'use strict';

require.config({
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
               'underscore',
              'jquery'
            ],
            exports: 'Backbone'
        },
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        }
    },
    paths: {
        jquery: '../components/jquery/jquery',
        backbone: '../components/backbone-amd/backbone',
        underscore: '../components/underscore-amd/underscore',
        bootstrap: 'vendor/bootstrap',
        text: '../components/text/text',
        templates: 'templates'
    }
});

require([
  'backbone',
  'views/app',
  'routers/router'
], function (Backbone, App, Router) {
  var router = new Router();
});