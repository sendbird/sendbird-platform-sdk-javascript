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
    instance = new SendbirdPlatformSdk.SendBirdBaseMessageInstance();
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

  describe('SendBirdBaseMessageInstance', function() {
    it('should create an instance of SendBirdBaseMessageInstance', function() {
      // uncomment below and update the code to test SendBirdBaseMessageInstance
      //var instance = new SendbirdPlatformSdk.SendBirdBaseMessageInstance();
      //expect(instance).to.be.a(SendbirdPlatformSdk.SendBirdBaseMessageInstance);
    });

    it('should have the property appleCriticalAlertOptions (base name: "apple_critical_alert_options")', function() {
      // uncomment below and update the code to test the property appleCriticalAlertOptions
      //var instance = new SendbirdPlatformSdk.SendBirdBaseMessageInstance();
      //expect(instance).to.be();
    });

    it('should have the property channelType (base name: "channel_type")', function() {
      // uncomment below and update the code to test the property channelType
      //var instance = new SendbirdPlatformSdk.SendBirdBaseMessageInstance();
      //expect(instance).to.be();
    });

    it('should have the property channelUrl (base name: "channel_url")', function() {
      // uncomment below and update the code to test the property channelUrl
      //var instance = new SendbirdPlatformSdk.SendBirdBaseMessageInstance();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "created_at")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instance = new SendbirdPlatformSdk.SendBirdBaseMessageInstance();
      //expect(instance).to.be();
    });

    it('should have the property customType (base name: "custom_type")', function() {
      // uncomment below and update the code to test the property customType
      //var instance = new SendbirdPlatformSdk.SendBirdBaseMessageInstance();
      //expect(instance).to.be();
    });

    it('should have the property data (base name: "data")', function() {
      // uncomment below and update the code to test the property data
      //var instance = new SendbirdPlatformSdk.SendBirdBaseMessageInstance();
      //expect(instance).to.be();
    });

    it('should have the property isReplyToChannel (base name: "is_reply_to_channel")', function() {
      // uncomment below and update the code to test the property isReplyToChannel
      //var instance = new SendbirdPlatformSdk.SendBirdBaseMessageInstance();
      //expect(instance).to.be();
    });

    it('should have the property mentionType (base name: "mention_type")', function() {
      // uncomment below and update the code to test the property mentionType
      //var instance = new SendbirdPlatformSdk.SendBirdBaseMessageInstance();
      //expect(instance).to.be();
    });

    it('should have the property mentionedUsers (base name: "mentioned_users")', function() {
      // uncomment below and update the code to test the property mentionedUsers
      //var instance = new SendbirdPlatformSdk.SendBirdBaseMessageInstance();
      //expect(instance).to.be();
    });

    it('should have the property messageId (base name: "message_id")', function() {
      // uncomment below and update the code to test the property messageId
      //var instance = new SendbirdPlatformSdk.SendBirdBaseMessageInstance();
      //expect(instance).to.be();
    });

    it('should have the property messageType (base name: "message_type")', function() {
      // uncomment below and update the code to test the property messageType
      //var instance = new SendbirdPlatformSdk.SendBirdBaseMessageInstance();
      //expect(instance).to.be();
    });

    it('should have the property metaArray (base name: "meta_array")', function() {
      // uncomment below and update the code to test the property metaArray
      //var instance = new SendbirdPlatformSdk.SendBirdBaseMessageInstance();
      //expect(instance).to.be();
    });

    it('should have the property metaArrays (base name: "meta_arrays")', function() {
      // uncomment below and update the code to test the property metaArrays
      //var instance = new SendbirdPlatformSdk.SendBirdBaseMessageInstance();
      //expect(instance).to.be();
    });

    it('should have the property ogMetaData (base name: "og_meta_data")', function() {
      // uncomment below and update the code to test the property ogMetaData
      //var instance = new SendbirdPlatformSdk.SendBirdBaseMessageInstance();
      //expect(instance).to.be();
    });

    it('should have the property parentMessage (base name: "parent_message")', function() {
      // uncomment below and update the code to test the property parentMessage
      //var instance = new SendbirdPlatformSdk.SendBirdBaseMessageInstance();
      //expect(instance).to.be();
    });

    it('should have the property parentMessageId (base name: "parent_message_id")', function() {
      // uncomment below and update the code to test the property parentMessageId
      //var instance = new SendbirdPlatformSdk.SendBirdBaseMessageInstance();
      //expect(instance).to.be();
    });

    it('should have the property parentMessageText (base name: "parent_message_text")', function() {
      // uncomment below and update the code to test the property parentMessageText
      //var instance = new SendbirdPlatformSdk.SendBirdBaseMessageInstance();
      //expect(instance).to.be();
    });

    it('should have the property reactions (base name: "reactions")', function() {
      // uncomment below and update the code to test the property reactions
      //var instance = new SendbirdPlatformSdk.SendBirdBaseMessageInstance();
      //expect(instance).to.be();
    });

    it('should have the property sendingStatus (base name: "sending_status")', function() {
      // uncomment below and update the code to test the property sendingStatus
      //var instance = new SendbirdPlatformSdk.SendBirdBaseMessageInstance();
      //expect(instance).to.be();
    });

    it('should have the property silent (base name: "silent")', function() {
      // uncomment below and update the code to test the property silent
      //var instance = new SendbirdPlatformSdk.SendBirdBaseMessageInstance();
      //expect(instance).to.be();
    });

    it('should have the property threadInfo (base name: "thread_info")', function() {
      // uncomment below and update the code to test the property threadInfo
      //var instance = new SendbirdPlatformSdk.SendBirdBaseMessageInstance();
      //expect(instance).to.be();
    });

    it('should have the property updatedAt (base name: "updated_at")', function() {
      // uncomment below and update the code to test the property updatedAt
      //var instance = new SendbirdPlatformSdk.SendBirdBaseMessageInstance();
      //expect(instance).to.be();
    });

  });

}));
