/**
 * Sendbird Platform SDK
 * Sendbird Platform API SDK  https://sendbird.com/docs/chat/v3/platform-api/getting-started/prepare-to-use-api
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support@sendbird.com
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
    instance = new SendbirdPlatformSdk.ViewPushPreferencesForChannelByUrlResponse();
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

  describe('ViewPushPreferencesForChannelByUrlResponse', function() {
    it('should create an instance of ViewPushPreferencesForChannelByUrlResponse', function() {
      // uncomment below and update the code to test ViewPushPreferencesForChannelByUrlResponse
      //var instance = new SendbirdPlatformSdk.ViewPushPreferencesForChannelByUrlResponse();
      //expect(instance).to.be.a(SendbirdPlatformSdk.ViewPushPreferencesForChannelByUrlResponse);
    });

    it('should have the property pushTriggerOption (base name: "push_trigger_option")', function() {
      // uncomment below and update the code to test the property pushTriggerOption
      //var instance = new SendbirdPlatformSdk.ViewPushPreferencesForChannelByUrlResponse();
      //expect(instance).to.be();
    });

    it('should have the property doNotDisturb (base name: "do_not_disturb")', function() {
      // uncomment below and update the code to test the property doNotDisturb
      //var instance = new SendbirdPlatformSdk.ViewPushPreferencesForChannelByUrlResponse();
      //expect(instance).to.be();
    });

    it('should have the property startHour (base name: "start_hour")', function() {
      // uncomment below and update the code to test the property startHour
      //var instance = new SendbirdPlatformSdk.ViewPushPreferencesForChannelByUrlResponse();
      //expect(instance).to.be();
    });

    it('should have the property startMin (base name: "start_min")', function() {
      // uncomment below and update the code to test the property startMin
      //var instance = new SendbirdPlatformSdk.ViewPushPreferencesForChannelByUrlResponse();
      //expect(instance).to.be();
    });

    it('should have the property endHour (base name: "end_hour")', function() {
      // uncomment below and update the code to test the property endHour
      //var instance = new SendbirdPlatformSdk.ViewPushPreferencesForChannelByUrlResponse();
      //expect(instance).to.be();
    });

    it('should have the property endMin (base name: "end_min")', function() {
      // uncomment below and update the code to test the property endMin
      //var instance = new SendbirdPlatformSdk.ViewPushPreferencesForChannelByUrlResponse();
      //expect(instance).to.be();
    });

    it('should have the property snoozeEnabled (base name: "snooze_enabled")', function() {
      // uncomment below and update the code to test the property snoozeEnabled
      //var instance = new SendbirdPlatformSdk.ViewPushPreferencesForChannelByUrlResponse();
      //expect(instance).to.be();
    });

    it('should have the property snoozeStartTs (base name: "snooze_start_ts")', function() {
      // uncomment below and update the code to test the property snoozeStartTs
      //var instance = new SendbirdPlatformSdk.ViewPushPreferencesForChannelByUrlResponse();
      //expect(instance).to.be();
    });

    it('should have the property snoozeEndTs (base name: "snooze_end_ts")', function() {
      // uncomment below and update the code to test the property snoozeEndTs
      //var instance = new SendbirdPlatformSdk.ViewPushPreferencesForChannelByUrlResponse();
      //expect(instance).to.be();
    });

    it('should have the property timezone (base name: "timezone")', function() {
      // uncomment below and update the code to test the property timezone
      //var instance = new SendbirdPlatformSdk.ViewPushPreferencesForChannelByUrlResponse();
      //expect(instance).to.be();
    });

    it('should have the property pushSound (base name: "push_sound")', function() {
      // uncomment below and update the code to test the property pushSound
      //var instance = new SendbirdPlatformSdk.ViewPushPreferencesForChannelByUrlResponse();
      //expect(instance).to.be();
    });

    it('should have the property enable (base name: "enable")', function() {
      // uncomment below and update the code to test the property enable
      //var instance = new SendbirdPlatformSdk.ViewPushPreferencesForChannelByUrlResponse();
      //expect(instance).to.be();
    });

  });

}));
