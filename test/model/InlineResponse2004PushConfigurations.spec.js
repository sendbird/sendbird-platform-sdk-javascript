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
    instance = new SendbirdPlatformSdk.InlineResponse2004PushConfigurations();
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

  describe('InlineResponse2004PushConfigurations', function() {
    it('should create an instance of InlineResponse2004PushConfigurations', function() {
      // uncomment below and update the code to test InlineResponse2004PushConfigurations
      //var instance = new SendbirdPlatformSdk.InlineResponse2004PushConfigurations();
      //expect(instance).to.be.a(SendbirdPlatformSdk.InlineResponse2004PushConfigurations);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new SendbirdPlatformSdk.InlineResponse2004PushConfigurations();
      //expect(instance).to.be();
    });

    it('should have the property pushType (base name: "push_type")', function() {
      // uncomment below and update the code to test the property pushType
      //var instance = new SendbirdPlatformSdk.InlineResponse2004PushConfigurations();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "created_at")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instance = new SendbirdPlatformSdk.InlineResponse2004PushConfigurations();
      //expect(instance).to.be();
    });

    it('should have the property apnsCerEnvType (base name: "apns_cer_env_type")', function() {
      // uncomment below and update the code to test the property apnsCerEnvType
      //var instance = new SendbirdPlatformSdk.InlineResponse2004PushConfigurations();
      //expect(instance).to.be();
    });

    it('should have the property apnsExpiration (base name: "apns_expiration")', function() {
      // uncomment below and update the code to test the property apnsExpiration
      //var instance = new SendbirdPlatformSdk.InlineResponse2004PushConfigurations();
      //expect(instance).to.be();
    });

    it('should have the property apnsName (base name: "apns_name")', function() {
      // uncomment below and update the code to test the property apnsName
      //var instance = new SendbirdPlatformSdk.InlineResponse2004PushConfigurations();
      //expect(instance).to.be();
    });

    it('should have the property hasUnreadCountBadge (base name: "has_unread_count_badge")', function() {
      // uncomment below and update the code to test the property hasUnreadCountBadge
      //var instance = new SendbirdPlatformSdk.InlineResponse2004PushConfigurations();
      //expect(instance).to.be();
    });

    it('should have the property contentAvailable (base name: "content_available")', function() {
      // uncomment below and update the code to test the property contentAvailable
      //var instance = new SendbirdPlatformSdk.InlineResponse2004PushConfigurations();
      //expect(instance).to.be();
    });

    it('should have the property mutableContent (base name: "mutable_content")', function() {
      // uncomment below and update the code to test the property mutableContent
      //var instance = new SendbirdPlatformSdk.InlineResponse2004PushConfigurations();
      //expect(instance).to.be();
    });

    it('should have the property pushSound (base name: "push_sound")', function() {
      // uncomment below and update the code to test the property pushSound
      //var instance = new SendbirdPlatformSdk.InlineResponse2004PushConfigurations();
      //expect(instance).to.be();
    });

  });

}));
