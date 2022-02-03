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
    instance = new SendbirdPlatformSdk.InlineResponse20047Messages();
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

  describe('InlineResponse20047Messages', function() {
    it('should create an instance of InlineResponse20047Messages', function() {
      // uncomment below and update the code to test InlineResponse20047Messages
      //var instance = new SendbirdPlatformSdk.InlineResponse20047Messages();
      //expect(instance).to.be.a(SendbirdPlatformSdk.InlineResponse20047Messages);
    });

    it('should have the property messageId (base name: "message_id")', function() {
      // uncomment below and update the code to test the property messageId
      //var instance = new SendbirdPlatformSdk.InlineResponse20047Messages();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new SendbirdPlatformSdk.InlineResponse20047Messages();
      //expect(instance).to.be();
    });

    it('should have the property customType (base name: "custom_type")', function() {
      // uncomment below and update the code to test the property customType
      //var instance = new SendbirdPlatformSdk.InlineResponse20047Messages();
      //expect(instance).to.be();
    });

    it('should have the property channelUrl (base name: "channel_url")', function() {
      // uncomment below and update the code to test the property channelUrl
      //var instance = new SendbirdPlatformSdk.InlineResponse20047Messages();
      //expect(instance).to.be();
    });

    it('should have the property user (base name: "user")', function() {
      // uncomment below and update the code to test the property user
      //var instance = new SendbirdPlatformSdk.InlineResponse20047Messages();
      //expect(instance).to.be();
    });

    it('should have the property mentionType (base name: "mention_type")', function() {
      // uncomment below and update the code to test the property mentionType
      //var instance = new SendbirdPlatformSdk.InlineResponse20047Messages();
      //expect(instance).to.be();
    });

    it('should have the property mentionedUsers (base name: "mentioned_users")', function() {
      // uncomment below and update the code to test the property mentionedUsers
      //var instance = new SendbirdPlatformSdk.InlineResponse20047Messages();
      //expect(instance).to.be();
    });

    it('should have the property isRemoved (base name: "is_removed")', function() {
      // uncomment below and update the code to test the property isRemoved
      //var instance = new SendbirdPlatformSdk.InlineResponse20047Messages();
      //expect(instance).to.be();
    });

    it('should have the property message (base name: "message")', function() {
      // uncomment below and update the code to test the property message
      //var instance = new SendbirdPlatformSdk.InlineResponse20047Messages();
      //expect(instance).to.be();
    });

    it('should have the property translations (base name: "translations")', function() {
      // uncomment below and update the code to test the property translations
      //var instance = new SendbirdPlatformSdk.InlineResponse20047Messages();
      //expect(instance).to.be();
    });

    it('should have the property data (base name: "data")', function() {
      // uncomment below and update the code to test the property data
      //var instance = new SendbirdPlatformSdk.InlineResponse20047Messages();
      //expect(instance).to.be();
    });

    it('should have the property sortedMetaarray (base name: "sorted_metaarray")', function() {
      // uncomment below and update the code to test the property sortedMetaarray
      //var instance = new SendbirdPlatformSdk.InlineResponse20047Messages();
      //expect(instance).to.be();
    });

    it('should have the property ogTag (base name: "og_tag")', function() {
      // uncomment below and update the code to test the property ogTag
      //var instance = new SendbirdPlatformSdk.InlineResponse20047Messages();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "created_at")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instance = new SendbirdPlatformSdk.InlineResponse20047Messages();
      //expect(instance).to.be();
    });

    it('should have the property updatedAt (base name: "updated_at")', function() {
      // uncomment below and update the code to test the property updatedAt
      //var instance = new SendbirdPlatformSdk.InlineResponse20047Messages();
      //expect(instance).to.be();
    });

    it('should have the property file (base name: "file")', function() {
      // uncomment below and update the code to test the property file
      //var instance = new SendbirdPlatformSdk.InlineResponse20047Messages();
      //expect(instance).to.be();
    });

  });

}));