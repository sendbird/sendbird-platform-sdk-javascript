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
    instance = new SendbirdPlatformSdk.AddFcmPushConfigurationResponsePushConfigurationsInner();
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

  describe('AddFcmPushConfigurationResponsePushConfigurationsInner', function() {
    it('should create an instance of AddFcmPushConfigurationResponsePushConfigurationsInner', function() {
      // uncomment below and update the code to test AddFcmPushConfigurationResponsePushConfigurationsInner
      //var instance = new SendbirdPlatformSdk.AddFcmPushConfigurationResponsePushConfigurationsInner();
      //expect(instance).to.be.a(SendbirdPlatformSdk.AddFcmPushConfigurationResponsePushConfigurationsInner);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new SendbirdPlatformSdk.AddFcmPushConfigurationResponsePushConfigurationsInner();
      //expect(instance).to.be();
    });

    it('should have the property pushType (base name: "push_type")', function() {
      // uncomment below and update the code to test the property pushType
      //var instance = new SendbirdPlatformSdk.AddFcmPushConfigurationResponsePushConfigurationsInner();
      //expect(instance).to.be();
    });

    it('should have the property apiKey (base name: "api_key")', function() {
      // uncomment below and update the code to test the property apiKey
      //var instance = new SendbirdPlatformSdk.AddFcmPushConfigurationResponsePushConfigurationsInner();
      //expect(instance).to.be();
    });

    it('should have the property pushSound (base name: "push_sound")', function() {
      // uncomment below and update the code to test the property pushSound
      //var instance = new SendbirdPlatformSdk.AddFcmPushConfigurationResponsePushConfigurationsInner();
      //expect(instance).to.be();
    });

  });

}));
