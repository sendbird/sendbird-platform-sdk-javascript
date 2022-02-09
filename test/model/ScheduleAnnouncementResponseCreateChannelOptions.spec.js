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
    instance = new SendbirdPlatformSdk.ScheduleAnnouncementResponseCreateChannelOptions();
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

  describe('ScheduleAnnouncementResponseCreateChannelOptions', function() {
    it('should create an instance of ScheduleAnnouncementResponseCreateChannelOptions', function() {
      // uncomment below and update the code to test ScheduleAnnouncementResponseCreateChannelOptions
      //var instance = new SendbirdPlatformSdk.ScheduleAnnouncementResponseCreateChannelOptions();
      //expect(instance).to.be.a(SendbirdPlatformSdk.ScheduleAnnouncementResponseCreateChannelOptions);
    });

    it('should have the property distinct (base name: "distinct")', function() {
      // uncomment below and update the code to test the property distinct
      //var instance = new SendbirdPlatformSdk.ScheduleAnnouncementResponseCreateChannelOptions();
      //expect(instance).to.be();
    });

    it('should have the property data (base name: "data")', function() {
      // uncomment below and update the code to test the property data
      //var instance = new SendbirdPlatformSdk.ScheduleAnnouncementResponseCreateChannelOptions();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new SendbirdPlatformSdk.ScheduleAnnouncementResponseCreateChannelOptions();
      //expect(instance).to.be();
    });

    it('should have the property coverUrl (base name: "cover_url")', function() {
      // uncomment below and update the code to test the property coverUrl
      //var instance = new SendbirdPlatformSdk.ScheduleAnnouncementResponseCreateChannelOptions();
      //expect(instance).to.be();
    });

    it('should have the property customType (base name: "custom_type")', function() {
      // uncomment below and update the code to test the property customType
      //var instance = new SendbirdPlatformSdk.ScheduleAnnouncementResponseCreateChannelOptions();
      //expect(instance).to.be();
    });

  });

}));
