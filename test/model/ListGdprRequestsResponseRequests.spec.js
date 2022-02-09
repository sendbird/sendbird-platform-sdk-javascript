/**
 * Sendbird Platform SDK
 * Sendbird Platform API Javascript SDK  https://sendbird.com/docs/chat/v3/platform-api/getting-started/prepare-to-use-api
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SendbirdPlatformSdk);
  }
}(this, function(expect, SendbirdPlatformSdk) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SendbirdPlatformSdk.ListGdprRequestsResponseRequests();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('ListGdprRequestsResponseRequests', function() {
    it('should create an instance of ListGdprRequestsResponseRequests', function() {
      // uncomment below and update the code to test ListGdprRequestsResponseRequests
      //var instance = new SendbirdPlatformSdk.ListGdprRequestsResponseRequests();
      //expect(instance).to.be.a(SendbirdPlatformSdk.ListGdprRequestsResponseRequests);
    });

    it('should have the property requestId (base name: "request_id")', function() {
      // uncomment below and update the code to test the property requestId
      //var instance = new SendbirdPlatformSdk.ListGdprRequestsResponseRequests();
      //expect(instance).to.be();
    });

    it('should have the property action (base name: "action")', function() {
      // uncomment below and update the code to test the property action
      //var instance = new SendbirdPlatformSdk.ListGdprRequestsResponseRequests();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new SendbirdPlatformSdk.ListGdprRequestsResponseRequests();
      //expect(instance).to.be();
    });

    it('should have the property userId (base name: "user_id")', function() {
      // uncomment below and update the code to test the property userId
      //var instance = new SendbirdPlatformSdk.ListGdprRequestsResponseRequests();
      //expect(instance).to.be();
    });

    it('should have the property files (base name: "files")', function() {
      // uncomment below and update the code to test the property files
      //var instance = new SendbirdPlatformSdk.ListGdprRequestsResponseRequests();
      //expect(instance).to.be();
    });

    it('should have the property userIds (base name: "user_ids")', function() {
      // uncomment below and update the code to test the property userIds
      //var instance = new SendbirdPlatformSdk.ListGdprRequestsResponseRequests();
      //expect(instance).to.be();
    });

    it('should have the property channelDeleteOption (base name: "channel_delete_option")', function() {
      // uncomment below and update the code to test the property channelDeleteOption
      //var instance = new SendbirdPlatformSdk.ListGdprRequestsResponseRequests();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "created_at")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instance = new SendbirdPlatformSdk.ListGdprRequestsResponseRequests();
      //expect(instance).to.be();
    });

  });

}));
