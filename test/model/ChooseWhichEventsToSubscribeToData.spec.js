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
    instance = new SendbirdPlatformSdk.ChooseWhichEventsToSubscribeToData();
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

  describe('ChooseWhichEventsToSubscribeToData', function() {
    it('should create an instance of ChooseWhichEventsToSubscribeToData', function() {
      // uncomment below and update the code to test ChooseWhichEventsToSubscribeToData
      //var instance = new SendbirdPlatformSdk.ChooseWhichEventsToSubscribeToData();
      //expect(instance).to.be.a(SendbirdPlatformSdk.ChooseWhichEventsToSubscribeToData);
    });

    it('should have the property enabled (base name: "enabled")', function() {
      // uncomment below and update the code to test the property enabled
      //var instance = new SendbirdPlatformSdk.ChooseWhichEventsToSubscribeToData();
      //expect(instance).to.be();
    });

    it('should have the property url (base name: "url")', function() {
      // uncomment below and update the code to test the property url
      //var instance = new SendbirdPlatformSdk.ChooseWhichEventsToSubscribeToData();
      //expect(instance).to.be();
    });

    it('should have the property includeMembers (base name: "include_members")', function() {
      // uncomment below and update the code to test the property includeMembers
      //var instance = new SendbirdPlatformSdk.ChooseWhichEventsToSubscribeToData();
      //expect(instance).to.be();
    });

    it('should have the property enabledEvents (base name: "enabled_events")', function() {
      // uncomment below and update the code to test the property enabledEvents
      //var instance = new SendbirdPlatformSdk.ChooseWhichEventsToSubscribeToData();
      //expect(instance).to.be();
    });

  });

}));
