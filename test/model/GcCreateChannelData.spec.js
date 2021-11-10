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
    instance = new SendbirdPlatformSdk.GcCreateChannelData();
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

  describe('GcCreateChannelData', function() {
    it('should create an instance of GcCreateChannelData', function() {
      // uncomment below and update the code to test GcCreateChannelData
      //var instane = new SendbirdPlatformSdk.GcCreateChannelData();
      //expect(instance).to.be.a(SendbirdPlatformSdk.GcCreateChannelData);
    });

    it('should have the property userIds (base name: "user_ids")', function() {
      // uncomment below and update the code to test the property userIds
      //var instance = new SendbirdPlatformSdk.GcCreateChannelData();
      //expect(instance).to.be();
    });

    it('should have the property users (base name: "users")', function() {
      // uncomment below and update the code to test the property users
      //var instance = new SendbirdPlatformSdk.GcCreateChannelData();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new SendbirdPlatformSdk.GcCreateChannelData();
      //expect(instance).to.be();
    });

    it('should have the property channelUrl (base name: "channel_url")', function() {
      // uncomment below and update the code to test the property channelUrl
      //var instance = new SendbirdPlatformSdk.GcCreateChannelData();
      //expect(instance).to.be();
    });

    it('should have the property coverUrl (base name: "cover_url")', function() {
      // uncomment below and update the code to test the property coverUrl
      //var instance = new SendbirdPlatformSdk.GcCreateChannelData();
      //expect(instance).to.be();
    });

    it('should have the property coverFile (base name: "cover_file")', function() {
      // uncomment below and update the code to test the property coverFile
      //var instance = new SendbirdPlatformSdk.GcCreateChannelData();
      //expect(instance).to.be();
    });

    it('should have the property customType (base name: "custom_type")', function() {
      // uncomment below and update the code to test the property customType
      //var instance = new SendbirdPlatformSdk.GcCreateChannelData();
      //expect(instance).to.be();
    });

    it('should have the property data (base name: "data")', function() {
      // uncomment below and update the code to test the property data
      //var instance = new SendbirdPlatformSdk.GcCreateChannelData();
      //expect(instance).to.be();
    });

    it('should have the property isDistinct (base name: "is_distinct")', function() {
      // uncomment below and update the code to test the property isDistinct
      //var instance = new SendbirdPlatformSdk.GcCreateChannelData();
      //expect(instance).to.be();
    });

    it('should have the property isPublic (base name: "is_public")', function() {
      // uncomment below and update the code to test the property isPublic
      //var instance = new SendbirdPlatformSdk.GcCreateChannelData();
      //expect(instance).to.be();
    });

    it('should have the property isSuper (base name: "is_super")', function() {
      // uncomment below and update the code to test the property isSuper
      //var instance = new SendbirdPlatformSdk.GcCreateChannelData();
      //expect(instance).to.be();
    });

    it('should have the property isEphemeral (base name: "is_ephemeral")', function() {
      // uncomment below and update the code to test the property isEphemeral
      //var instance = new SendbirdPlatformSdk.GcCreateChannelData();
      //expect(instance).to.be();
    });

    it('should have the property accessCode (base name: "access_code")', function() {
      // uncomment below and update the code to test the property accessCode
      //var instance = new SendbirdPlatformSdk.GcCreateChannelData();
      //expect(instance).to.be();
    });

    it('should have the property inviterId (base name: "inviter_id")', function() {
      // uncomment below and update the code to test the property inviterId
      //var instance = new SendbirdPlatformSdk.GcCreateChannelData();
      //expect(instance).to.be();
    });

    it('should have the property strict (base name: "strict")', function() {
      // uncomment below and update the code to test the property strict
      //var instance = new SendbirdPlatformSdk.GcCreateChannelData();
      //expect(instance).to.be();
    });

    it('should have the property invitationStatus (base name: "invitation_status")', function() {
      // uncomment below and update the code to test the property invitationStatus
      //var instance = new SendbirdPlatformSdk.GcCreateChannelData();
      //expect(instance).to.be();
    });

    it('should have the property hiddenStatus (base name: "hidden_status")', function() {
      // uncomment below and update the code to test the property hiddenStatus
      //var instance = new SendbirdPlatformSdk.GcCreateChannelData();
      //expect(instance).to.be();
    });

    it('should have the property operatorIds (base name: "operator_ids")', function() {
      // uncomment below and update the code to test the property operatorIds
      //var instance = new SendbirdPlatformSdk.GcCreateChannelData();
      //expect(instance).to.be();
    });

    it('should have the property blockSdkUserChannelJoin (base name: "block_sdk_user_channel_join")', function() {
      // uncomment below and update the code to test the property blockSdkUserChannelJoin
      //var instance = new SendbirdPlatformSdk.GcCreateChannelData();
      //expect(instance).to.be();
    });

  });

}));
