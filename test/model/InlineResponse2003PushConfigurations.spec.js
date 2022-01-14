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
    instance = new SendbirdPlatformSdk.InlineResponse2003PushConfigurations();
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

  describe('InlineResponse2003PushConfigurations', function() {
    it('should create an instance of InlineResponse2003PushConfigurations', function() {
      // uncomment below and update the code to test InlineResponse2003PushConfigurations
      //var instance = new SendbirdPlatformSdk.InlineResponse2003PushConfigurations();
      //expect(instance).to.be.a(SendbirdPlatformSdk.InlineResponse2003PushConfigurations);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new SendbirdPlatformSdk.InlineResponse2003PushConfigurations();
      //expect(instance).to.be();
    });

    it('should have the property pushType (base name: "push_type")', function() {
      // uncomment below and update the code to test the property pushType
      //var instance = new SendbirdPlatformSdk.InlineResponse2003PushConfigurations();
      //expect(instance).to.be();
    });

    it('should have the property huaweiAppId (base name: "huawei_app_id")', function() {
      // uncomment below and update the code to test the property huaweiAppId
      //var instance = new SendbirdPlatformSdk.InlineResponse2003PushConfigurations();
      //expect(instance).to.be();
    });

    it('should have the property huaweiAppSecret (base name: "huawei_app_secret")', function() {
      // uncomment below and update the code to test the property huaweiAppSecret
      //var instance = new SendbirdPlatformSdk.InlineResponse2003PushConfigurations();
      //expect(instance).to.be();
    });

    it('should have the property pushSound (base name: "push_sound")', function() {
      // uncomment below and update the code to test the property pushSound
      //var instance = new SendbirdPlatformSdk.InlineResponse2003PushConfigurations();
      //expect(instance).to.be();
    });

  });

}));
