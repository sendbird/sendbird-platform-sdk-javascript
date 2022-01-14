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
    instance = new SendbirdPlatformSdk.SendBirdBaseMessageParams();
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

  describe('SendBirdBaseMessageParams', function() {
    it('should create an instance of SendBirdBaseMessageParams', function() {
      // uncomment below and update the code to test SendBirdBaseMessageParams
      //var instance = new SendbirdPlatformSdk.SendBirdBaseMessageParams();
      //expect(instance).to.be.a(SendbirdPlatformSdk.SendBirdBaseMessageParams);
    });

    it('should have the property appleCriticalAlertOptions (base name: "appleCriticalAlertOptions")', function() {
      // uncomment below and update the code to test the property appleCriticalAlertOptions
      //var instance = new SendbirdPlatformSdk.SendBirdBaseMessageParams();
      //expect(instance).to.be();
    });

    it('should have the property customType (base name: "customType")', function() {
      // uncomment below and update the code to test the property customType
      //var instance = new SendbirdPlatformSdk.SendBirdBaseMessageParams();
      //expect(instance).to.be();
    });

    it('should have the property data (base name: "data")', function() {
      // uncomment below and update the code to test the property data
      //var instance = new SendbirdPlatformSdk.SendBirdBaseMessageParams();
      //expect(instance).to.be();
    });

    it('should have the property isReplyToChannel (base name: "isReplyToChannel")', function() {
      // uncomment below and update the code to test the property isReplyToChannel
      //var instance = new SendbirdPlatformSdk.SendBirdBaseMessageParams();
      //expect(instance).to.be();
    });

    it('should have the property mentionType (base name: "mentionType")', function() {
      // uncomment below and update the code to test the property mentionType
      //var instance = new SendbirdPlatformSdk.SendBirdBaseMessageParams();
      //expect(instance).to.be();
    });

    it('should have the property mentionedUserIds (base name: "mentionedUserIds")', function() {
      // uncomment below and update the code to test the property mentionedUserIds
      //var instance = new SendbirdPlatformSdk.SendBirdBaseMessageParams();
      //expect(instance).to.be();
    });

    it('should have the property mentionedUsers (base name: "mentionedUsers")', function() {
      // uncomment below and update the code to test the property mentionedUsers
      //var instance = new SendbirdPlatformSdk.SendBirdBaseMessageParams();
      //expect(instance).to.be();
    });

    it('should have the property metaArrayKeys (base name: "metaArrayKeys")', function() {
      // uncomment below and update the code to test the property metaArrayKeys
      //var instance = new SendbirdPlatformSdk.SendBirdBaseMessageParams();
      //expect(instance).to.be();
    });

    it('should have the property metaArrays (base name: "metaArrays")', function() {
      // uncomment below and update the code to test the property metaArrays
      //var instance = new SendbirdPlatformSdk.SendBirdBaseMessageParams();
      //expect(instance).to.be();
    });

    it('should have the property parentMessageId (base name: "parentMessageId")', function() {
      // uncomment below and update the code to test the property parentMessageId
      //var instance = new SendbirdPlatformSdk.SendBirdBaseMessageParams();
      //expect(instance).to.be();
    });

    it('should have the property pushNotificationDeliveryOption (base name: "pushNotificationDeliveryOption")', function() {
      // uncomment below and update the code to test the property pushNotificationDeliveryOption
      //var instance = new SendbirdPlatformSdk.SendBirdBaseMessageParams();
      //expect(instance).to.be();
    });

  });

}));
