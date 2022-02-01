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
    instance = new SendbirdPlatformSdk.SendBirdMember();
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

  describe('SendBirdMember', function() {
    it('should create an instance of SendBirdMember', function() {
      // uncomment below and update the code to test SendBirdMember
      //var instance = new SendbirdPlatformSdk.SendBirdMember();
      //expect(instance).to.be.a(SendbirdPlatformSdk.SendBirdMember);
    });

    it('should have the property connectionStatus (base name: "connection_status")', function() {
      // uncomment below and update the code to test the property connectionStatus
      //var instance = new SendbirdPlatformSdk.SendBirdMember();
      //expect(instance).to.be();
    });

    it('should have the property friendDiscoveryKey (base name: "friend_discovery_key")', function() {
      // uncomment below and update the code to test the property friendDiscoveryKey
      //var instance = new SendbirdPlatformSdk.SendBirdMember();
      //expect(instance).to.be();
    });

    it('should have the property friendName (base name: "friend_name")', function() {
      // uncomment below and update the code to test the property friendName
      //var instance = new SendbirdPlatformSdk.SendBirdMember();
      //expect(instance).to.be();
    });

    it('should have the property isActive (base name: "is_active")', function() {
      // uncomment below and update the code to test the property isActive
      //var instance = new SendbirdPlatformSdk.SendBirdMember();
      //expect(instance).to.be();
    });

    it('should have the property isBlockedByMe (base name: "is_blocked_by_me")', function() {
      // uncomment below and update the code to test the property isBlockedByMe
      //var instance = new SendbirdPlatformSdk.SendBirdMember();
      //expect(instance).to.be();
    });

    it('should have the property isBlockingMe (base name: "is_blocking_me")', function() {
      // uncomment below and update the code to test the property isBlockingMe
      //var instance = new SendbirdPlatformSdk.SendBirdMember();
      //expect(instance).to.be();
    });

    it('should have the property isMuted (base name: "is_muted")', function() {
      // uncomment below and update the code to test the property isMuted
      //var instance = new SendbirdPlatformSdk.SendBirdMember();
      //expect(instance).to.be();
    });

    it('should have the property lastSeenAt (base name: "last_seen_at")', function() {
      // uncomment below and update the code to test the property lastSeenAt
      //var instance = new SendbirdPlatformSdk.SendBirdMember();
      //expect(instance).to.be();
    });

    it('should have the property metaData (base name: "meta_data")', function() {
      // uncomment below and update the code to test the property metaData
      //var instance = new SendbirdPlatformSdk.SendBirdMember();
      //expect(instance).to.be();
    });

    it('should have the property nickname (base name: "nickname")', function() {
      // uncomment below and update the code to test the property nickname
      //var instance = new SendbirdPlatformSdk.SendBirdMember();
      //expect(instance).to.be();
    });

    it('should have the property plainProfileUrl (base name: "plain_profile_url")', function() {
      // uncomment below and update the code to test the property plainProfileUrl
      //var instance = new SendbirdPlatformSdk.SendBirdMember();
      //expect(instance).to.be();
    });

    it('should have the property preferredLanguages (base name: "preferred_languages")', function() {
      // uncomment below and update the code to test the property preferredLanguages
      //var instance = new SendbirdPlatformSdk.SendBirdMember();
      //expect(instance).to.be();
    });

    it('should have the property profileUrl (base name: "profile_url")', function() {
      // uncomment below and update the code to test the property profileUrl
      //var instance = new SendbirdPlatformSdk.SendBirdMember();
      //expect(instance).to.be();
    });

    it('should have the property requireAuth (base name: "require_auth")', function() {
      // uncomment below and update the code to test the property requireAuth
      //var instance = new SendbirdPlatformSdk.SendBirdMember();
      //expect(instance).to.be();
    });

    it('should have the property restrictionInfo (base name: "restriction_info")', function() {
      // uncomment below and update the code to test the property restrictionInfo
      //var instance = new SendbirdPlatformSdk.SendBirdMember();
      //expect(instance).to.be();
    });

    it('should have the property role (base name: "role")', function() {
      // uncomment below and update the code to test the property role
      //var instance = new SendbirdPlatformSdk.SendBirdMember();
      //expect(instance).to.be();
    });

    it('should have the property state (base name: "state")', function() {
      // uncomment below and update the code to test the property state
      //var instance = new SendbirdPlatformSdk.SendBirdMember();
      //expect(instance).to.be();
    });

    it('should have the property userId (base name: "user_id")', function() {
      // uncomment below and update the code to test the property userId
      //var instance = new SendbirdPlatformSdk.SendBirdMember();
      //expect(instance).to.be();
    });

  });

}));
