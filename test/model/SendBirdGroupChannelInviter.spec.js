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
    instance = new SendbirdPlatformSdk.SendBirdGroupChannelInviter();
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

  describe('SendBirdGroupChannelInviter', function() {
    it('should create an instance of SendBirdGroupChannelInviter', function() {
      // uncomment below and update the code to test SendBirdGroupChannelInviter
      //var instance = new SendbirdPlatformSdk.SendBirdGroupChannelInviter();
      //expect(instance).to.be.a(SendbirdPlatformSdk.SendBirdGroupChannelInviter);
    });

    it('should have the property requireAuthForProfileImage (base name: "require_auth_for_profile_image")', function() {
      // uncomment below and update the code to test the property requireAuthForProfileImage
      //var instance = new SendbirdPlatformSdk.SendBirdGroupChannelInviter();
      //expect(instance).to.be();
    });

    it('should have the property isOnline (base name: "is_online")', function() {
      // uncomment below and update the code to test the property isOnline
      //var instance = new SendbirdPlatformSdk.SendBirdGroupChannelInviter();
      //expect(instance).to.be();
    });

    it('should have the property userId (base name: "user_id")', function() {
      // uncomment below and update the code to test the property userId
      //var instance = new SendbirdPlatformSdk.SendBirdGroupChannelInviter();
      //expect(instance).to.be();
    });

    it('should have the property accessToken (base name: "access_token")', function() {
      // uncomment below and update the code to test the property accessToken
      //var instance = new SendbirdPlatformSdk.SendBirdGroupChannelInviter();
      //expect(instance).to.be();
    });

    it('should have the property hasEverLoggedIn (base name: "has_ever_logged_in")', function() {
      // uncomment below and update the code to test the property hasEverLoggedIn
      //var instance = new SendbirdPlatformSdk.SendBirdGroupChannelInviter();
      //expect(instance).to.be();
    });

    it('should have the property isActive (base name: "is_active")', function() {
      // uncomment below and update the code to test the property isActive
      //var instance = new SendbirdPlatformSdk.SendBirdGroupChannelInviter();
      //expect(instance).to.be();
    });

    it('should have the property lastSeenAt (base name: "last_seen_at")', function() {
      // uncomment below and update the code to test the property lastSeenAt
      //var instance = new SendbirdPlatformSdk.SendBirdGroupChannelInviter();
      //expect(instance).to.be();
    });

    it('should have the property nickname (base name: "nickname")', function() {
      // uncomment below and update the code to test the property nickname
      //var instance = new SendbirdPlatformSdk.SendBirdGroupChannelInviter();
      //expect(instance).to.be();
    });

    it('should have the property discoveryKeys (base name: "discovery_keys")', function() {
      // uncomment below and update the code to test the property discoveryKeys
      //var instance = new SendbirdPlatformSdk.SendBirdGroupChannelInviter();
      //expect(instance).to.be();
    });

    it('should have the property sessionTokens (base name: "session_tokens")', function() {
      // uncomment below and update the code to test the property sessionTokens
      //var instance = new SendbirdPlatformSdk.SendBirdGroupChannelInviter();
      //expect(instance).to.be();
    });

    it('should have the property preferredLanguages (base name: "preferred_languages")', function() {
      // uncomment below and update the code to test the property preferredLanguages
      //var instance = new SendbirdPlatformSdk.SendBirdGroupChannelInviter();
      //expect(instance).to.be();
    });

    it('should have the property profileUrl (base name: "profile_url")', function() {
      // uncomment below and update the code to test the property profileUrl
      //var instance = new SendbirdPlatformSdk.SendBirdGroupChannelInviter();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "created_at")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instance = new SendbirdPlatformSdk.SendBirdGroupChannelInviter();
      //expect(instance).to.be();
    });

    it('should have the property phoneNumber (base name: "phone_number")', function() {
      // uncomment below and update the code to test the property phoneNumber
      //var instance = new SendbirdPlatformSdk.SendBirdGroupChannelInviter();
      //expect(instance).to.be();
    });

    it('should have the property local (base name: "local")', function() {
      // uncomment below and update the code to test the property local
      //var instance = new SendbirdPlatformSdk.SendBirdGroupChannelInviter();
      //expect(instance).to.be();
    });

    it('should have the property locale (base name: "locale")', function() {
      // uncomment below and update the code to test the property locale
      //var instance = new SendbirdPlatformSdk.SendBirdGroupChannelInviter();
      //expect(instance).to.be();
    });

    it('should have the property isHideMeFromFriends (base name: "is_hide_me_from_friends")', function() {
      // uncomment below and update the code to test the property isHideMeFromFriends
      //var instance = new SendbirdPlatformSdk.SendBirdGroupChannelInviter();
      //expect(instance).to.be();
    });

    it('should have the property isShadowBlocked (base name: "is_shadow_blocked")', function() {
      // uncomment below and update the code to test the property isShadowBlocked
      //var instance = new SendbirdPlatformSdk.SendBirdGroupChannelInviter();
      //expect(instance).to.be();
    });

    it('should have the property isCreated (base name: "is_created")', function() {
      // uncomment below and update the code to test the property isCreated
      //var instance = new SendbirdPlatformSdk.SendBirdGroupChannelInviter();
      //expect(instance).to.be();
    });

    it('should have the property metadata (base name: "metadata")', function() {
      // uncomment below and update the code to test the property metadata
      //var instance = new SendbirdPlatformSdk.SendBirdGroupChannelInviter();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new SendbirdPlatformSdk.SendBirdGroupChannelInviter();
      //expect(instance).to.be();
    });

    it('should have the property endAt (base name: "end_at")', function() {
      // uncomment below and update the code to test the property endAt
      //var instance = new SendbirdPlatformSdk.SendBirdGroupChannelInviter();
      //expect(instance).to.be();
    });

    it('should have the property startAt (base name: "start_at")', function() {
      // uncomment below and update the code to test the property startAt
      //var instance = new SendbirdPlatformSdk.SendBirdGroupChannelInviter();
      //expect(instance).to.be();
    });

  });

}));