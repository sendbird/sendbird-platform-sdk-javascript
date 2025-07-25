/**
 * Sendbird Platform SDK
 * Sendbird Platform API SDK  [https://sendbird.com/docs/chat/v3/platform-api/getting-started/prepare-to-use-api](https://sendbird.com/docs/chat/v3/platform-api/getting-started/prepare-to-use-api)  Contact Support:   Name: Sendbird   Email: [support@sendbird.com](https://mailto:support@sendbird.com)
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
    instance = new SendbirdPlatformSdk.SendABotMessageRequest();
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

  describe('SendABotMessageRequest', function() {
    it('should create an instance of SendABotMessageRequest', function() {
      // uncomment below and update the code to test SendABotMessageRequest
      //var instance = new SendbirdPlatformSdk.SendABotMessageRequest();
      //expect(instance).to.be.a(SendbirdPlatformSdk.SendABotMessageRequest);
    });

    it('should have the property channelUrl (base name: "channel_url")', function() {
      // uncomment below and update the code to test the property channelUrl
      //var instance = new SendbirdPlatformSdk.SendABotMessageRequest();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "created_at")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instance = new SendbirdPlatformSdk.SendABotMessageRequest();
      //expect(instance).to.be();
    });

    it('should have the property customType (base name: "custom_type")', function() {
      // uncomment below and update the code to test the property customType
      //var instance = new SendbirdPlatformSdk.SendABotMessageRequest();
      //expect(instance).to.be();
    });

    it('should have the property data (base name: "data")', function() {
      // uncomment below and update the code to test the property data
      //var instance = new SendbirdPlatformSdk.SendABotMessageRequest();
      //expect(instance).to.be();
    });

    it('should have the property dedupId (base name: "dedup_id")', function() {
      // uncomment below and update the code to test the property dedupId
      //var instance = new SendbirdPlatformSdk.SendABotMessageRequest();
      //expect(instance).to.be();
    });

    it('should have the property extendedMessagePayload (base name: "extended_message_payload")', function() {
      // uncomment below and update the code to test the property extendedMessagePayload
      //var instance = new SendbirdPlatformSdk.SendABotMessageRequest();
      //expect(instance).to.be();
    });

    it('should have the property markAsRead (base name: "mark_as_read")', function() {
      // uncomment below and update the code to test the property markAsRead
      //var instance = new SendbirdPlatformSdk.SendABotMessageRequest();
      //expect(instance).to.be();
    });

    it('should have the property mentioned (base name: "mentioned")', function() {
      // uncomment below and update the code to test the property mentioned
      //var instance = new SendbirdPlatformSdk.SendABotMessageRequest();
      //expect(instance).to.be();
    });

    it('should have the property message (base name: "message")', function() {
      // uncomment below and update the code to test the property message
      //var instance = new SendbirdPlatformSdk.SendABotMessageRequest();
      //expect(instance).to.be();
    });

    it('should have the property sendPush (base name: "send_push")', function() {
      // uncomment below and update the code to test the property sendPush
      //var instance = new SendbirdPlatformSdk.SendABotMessageRequest();
      //expect(instance).to.be();
    });

  });

}));
