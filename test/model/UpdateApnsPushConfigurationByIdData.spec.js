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
    instance = new SendbirdPlatformSdk.UpdateApnsPushConfigurationByIdData();
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

  describe('UpdateApnsPushConfigurationByIdData', function() {
    it('should create an instance of UpdateApnsPushConfigurationByIdData', function() {
      // uncomment below and update the code to test UpdateApnsPushConfigurationByIdData
      //var instance = new SendbirdPlatformSdk.UpdateApnsPushConfigurationByIdData();
      //expect(instance).to.be.a(SendbirdPlatformSdk.UpdateApnsPushConfigurationByIdData);
    });

    it('should have the property providerId (base name: "provider_id")', function() {
      // uncomment below and update the code to test the property providerId
      //var instance = new SendbirdPlatformSdk.UpdateApnsPushConfigurationByIdData();
      //expect(instance).to.be();
    });

    it('should have the property apnsCert (base name: "apns_cert")', function() {
      // uncomment below and update the code to test the property apnsCert
      //var instance = new SendbirdPlatformSdk.UpdateApnsPushConfigurationByIdData();
      //expect(instance).to.be();
    });

    it('should have the property apnsCertEnvType (base name: "apns_cert_env_type")', function() {
      // uncomment below and update the code to test the property apnsCertEnvType
      //var instance = new SendbirdPlatformSdk.UpdateApnsPushConfigurationByIdData();
      //expect(instance).to.be();
    });

    it('should have the property apnsCertPassword (base name: "apns_cert_password")', function() {
      // uncomment below and update the code to test the property apnsCertPassword
      //var instance = new SendbirdPlatformSdk.UpdateApnsPushConfigurationByIdData();
      //expect(instance).to.be();
    });

    it('should have the property hasUnreadCountBadge (base name: "has_unread_count_badge")', function() {
      // uncomment below and update the code to test the property hasUnreadCountBadge
      //var instance = new SendbirdPlatformSdk.UpdateApnsPushConfigurationByIdData();
      //expect(instance).to.be();
    });

    it('should have the property contentAvailable (base name: "content_available")', function() {
      // uncomment below and update the code to test the property contentAvailable
      //var instance = new SendbirdPlatformSdk.UpdateApnsPushConfigurationByIdData();
      //expect(instance).to.be();
    });

    it('should have the property mutableContent (base name: "mutable_content")', function() {
      // uncomment below and update the code to test the property mutableContent
      //var instance = new SendbirdPlatformSdk.UpdateApnsPushConfigurationByIdData();
      //expect(instance).to.be();
    });

    it('should have the property pushSound (base name: "push_sound")', function() {
      // uncomment below and update the code to test the property pushSound
      //var instance = new SendbirdPlatformSdk.UpdateApnsPushConfigurationByIdData();
      //expect(instance).to.be();
    });

    it('should have the property apnsType (base name: "apns_type")', function() {
      // uncomment below and update the code to test the property apnsType
      //var instance = new SendbirdPlatformSdk.UpdateApnsPushConfigurationByIdData();
      //expect(instance).to.be();
    });

  });

}));
