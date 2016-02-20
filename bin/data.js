// Generated by CoffeeScript 1.10.0
(function() {
  'use strict';
  var addData, goodApiKey,
    indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  goodApiKey = function(req) {
    var headers;
    headers = Object.keys(req.headers);
    return indexOf.call(headers, "x-cloudmine-apikey") >= 0;
  };

  addData = function(req) {
    return req.data = {
      apikey: req.headers["x-cloudmine-apikey"],
      request: {
        method: req.method.toUpperCase()
      },
      params: req.query
    };
  };

  module.exports = {
    add: addData,
    goodApiKey: goodApiKey
  };

}).call(this);
