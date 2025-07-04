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
    instance = new SendbirdPlatformSdk.SendTextMessageRequestBody();
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

  describe('SendTextMessageRequestBody', function() {
    it('should create an instance of SendTextMessageRequestBody', function() {
      // uncomment below and update the code to test SendTextMessageRequestBody
      //var instance = new SendbirdPlatformSdk.SendTextMessageRequestBody();
      //expect(instance).to.be.a(SendbirdPlatformSdk.SendTextMessageRequestBody);
    });

    it('should have the property apnsBundleId (base name: "apns_bundle_id")', function() {
      // uncomment below and update the code to test the property apnsBundleId
      //var instance = new SendbirdPlatformSdk.SendTextMessageRequestBody();
      //expect(instance).to.be();
    });

    it('should have the property appleCriticalAlertOptions (base name: "apple_critical_alert_options")', function() {
      // uncomment below and update the code to test the property appleCriticalAlertOptions
      //var instance = new SendbirdPlatformSdk.SendTextMessageRequestBody();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "created_at")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instance = new SendbirdPlatformSdk.SendTextMessageRequestBody();
      //expect(instance).to.be();
    });

    it('should have the property customType (base name: "custom_type")', function() {
      // uncomment below and update the code to test the property customType
      //var instance = new SendbirdPlatformSdk.SendTextMessageRequestBody();
      //expect(instance).to.be();
    });

    it('should have the property data (base name: "data")', function() {
      // uncomment below and update the code to test the property data
      //var instance = new SendbirdPlatformSdk.SendTextMessageRequestBody();
      //expect(instance).to.be();
    });

    it('should have the property dedupId (base name: "dedup_id")', function() {
      // uncomment below and update the code to test the property dedupId
      //var instance = new SendbirdPlatformSdk.SendTextMessageRequestBody();
      //expect(instance).to.be();
    });

    it('should have the property includePollDetails (base name: "include_poll_details")', function() {
      // uncomment below and update the code to test the property includePollDetails
      //var instance = new SendbirdPlatformSdk.SendTextMessageRequestBody();
      //expect(instance).to.be();
    });

    it('should have the property isSilent (base name: "is_silent")', function() {
      // uncomment below and update the code to test the property isSilent
      //var instance = new SendbirdPlatformSdk.SendTextMessageRequestBody();
      //expect(instance).to.be();
    });

    it('should have the property markAsRead (base name: "mark_as_read")', function() {
      // uncomment below and update the code to test the property markAsRead
      //var instance = new SendbirdPlatformSdk.SendTextMessageRequestBody();
      //expect(instance).to.be();
    });

    it('should have the property mentionType (base name: "mention_type")', function() {
      // uncomment below and update the code to test the property mentionType
      //var instance = new SendbirdPlatformSdk.SendTextMessageRequestBody();
      //expect(instance).to.be();
    });

    it('should have the property mentionedUserIds (base name: "mentioned_user_ids")', function() {
      // uncomment below and update the code to test the property mentionedUserIds
      //var instance = new SendbirdPlatformSdk.SendTextMessageRequestBody();
      //expect(instance).to.be();
    });

    it('should have the property message (base name: "message")', function() {
      // uncomment below and update the code to test the property message
      //var instance = new SendbirdPlatformSdk.SendTextMessageRequestBody();
      //expect(instance).to.be();
    });

    it('should have the property messageType (base name: "message_type")', function() {
      // uncomment below and update the code to test the property messageType
      //var instance = new SendbirdPlatformSdk.SendTextMessageRequestBody();
      //expect(instance).to.be();
    });

    it('should have the property pollId (base name: "poll_id")', function() {
      // uncomment below and update the code to test the property pollId
      //var instance = new SendbirdPlatformSdk.SendTextMessageRequestBody();
      //expect(instance).to.be();
    });

    it('should have the property pushMessageTemplate (base name: "push_message_template")', function() {
      // uncomment below and update the code to test the property pushMessageTemplate
      //var instance = new SendbirdPlatformSdk.SendTextMessageRequestBody();
      //expect(instance).to.be();
    });

    it('should have the property sendPush (base name: "send_push")', function() {
      // uncomment below and update the code to test the property sendPush
      //var instance = new SendbirdPlatformSdk.SendTextMessageRequestBody();
      //expect(instance).to.be();
    });

    it('should have the property sortedMetaarray (base name: "sorted_metaarray")', function() {
      // uncomment below and update the code to test the property sortedMetaarray
      //var instance = new SendbirdPlatformSdk.SendTextMessageRequestBody();
      //expect(instance).to.be();
    });

    it('should have the property sound (base name: "sound")', function() {
      // uncomment below and update the code to test the property sound
      //var instance = new SendbirdPlatformSdk.SendTextMessageRequestBody();
      //expect(instance).to.be();
    });

    it('should have the property volume (base name: "volume")', function() {
      // uncomment below and update the code to test the property volume
      //var instance = new SendbirdPlatformSdk.SendTextMessageRequestBody();
      //expect(instance).to.be();
    });

  });

}));
