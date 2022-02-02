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
    instance = new SendbirdPlatformSdk.SendBirdChannelResponse();
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

  describe('SendBirdChannelResponse', function() {
    it('should create an instance of SendBirdChannelResponse', function() {
      // uncomment below and update the code to test SendBirdChannelResponse
      //var instance = new SendbirdPlatformSdk.SendBirdChannelResponse();
      //expect(instance).to.be.a(SendbirdPlatformSdk.SendBirdChannelResponse);
    });

    it('should have the property coverUrl (base name: "cover_url")', function() {
      // uncomment below and update the code to test the property coverUrl
      //var instance = new SendbirdPlatformSdk.SendBirdChannelResponse();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "created_at")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instance = new SendbirdPlatformSdk.SendBirdChannelResponse();
      //expect(instance).to.be();
    });

    it('should have the property creator (base name: "creator")', function() {
      // uncomment below and update the code to test the property creator
      //var instance = new SendbirdPlatformSdk.SendBirdChannelResponse();
      //expect(instance).to.be();
    });

    it('should have the property customType (base name: "custom_type")', function() {
      // uncomment below and update the code to test the property customType
      //var instance = new SendbirdPlatformSdk.SendBirdChannelResponse();
      //expect(instance).to.be();
    });

    it('should have the property data (base name: "data")', function() {
      // uncomment below and update the code to test the property data
      //var instance = new SendbirdPlatformSdk.SendBirdChannelResponse();
      //expect(instance).to.be();
    });

    it('should have the property hiddenState (base name: "hidden_state")', function() {
      // uncomment below and update the code to test the property hiddenState
      //var instance = new SendbirdPlatformSdk.SendBirdChannelResponse();
      //expect(instance).to.be();
    });

    it('should have the property invitedAt (base name: "invited_at")', function() {
      // uncomment below and update the code to test the property invitedAt
      //var instance = new SendbirdPlatformSdk.SendBirdChannelResponse();
      //expect(instance).to.be();
    });

    it('should have the property inviter (base name: "inviter")', function() {
      // uncomment below and update the code to test the property inviter
      //var instance = new SendbirdPlatformSdk.SendBirdChannelResponse();
      //expect(instance).to.be();
    });

    it('should have the property isAccessCodeRequired (base name: "is_access_code_required")', function() {
      // uncomment below and update the code to test the property isAccessCodeRequired
      //var instance = new SendbirdPlatformSdk.SendBirdChannelResponse();
      //expect(instance).to.be();
    });

    it('should have the property isBroadcast (base name: "is_broadcast")', function() {
      // uncomment below and update the code to test the property isBroadcast
      //var instance = new SendbirdPlatformSdk.SendBirdChannelResponse();
      //expect(instance).to.be();
    });

    it('should have the property isDiscoverable (base name: "is_discoverable")', function() {
      // uncomment below and update the code to test the property isDiscoverable
      //var instance = new SendbirdPlatformSdk.SendBirdChannelResponse();
      //expect(instance).to.be();
    });

    it('should have the property isDistinct (base name: "is_distinct")', function() {
      // uncomment below and update the code to test the property isDistinct
      //var instance = new SendbirdPlatformSdk.SendBirdChannelResponse();
      //expect(instance).to.be();
    });

    it('should have the property isEphemeral (base name: "is_ephemeral")', function() {
      // uncomment below and update the code to test the property isEphemeral
      //var instance = new SendbirdPlatformSdk.SendBirdChannelResponse();
      //expect(instance).to.be();
    });

    it('should have the property isFrozen (base name: "is_frozen")', function() {
      // uncomment below and update the code to test the property isFrozen
      //var instance = new SendbirdPlatformSdk.SendBirdChannelResponse();
      //expect(instance).to.be();
    });

    it('should have the property isHidden (base name: "is_hidden")', function() {
      // uncomment below and update the code to test the property isHidden
      //var instance = new SendbirdPlatformSdk.SendBirdChannelResponse();
      //expect(instance).to.be();
    });

    it('should have the property isPublic (base name: "is_public")', function() {
      // uncomment below and update the code to test the property isPublic
      //var instance = new SendbirdPlatformSdk.SendBirdChannelResponse();
      //expect(instance).to.be();
    });

    it('should have the property isPushEnabled (base name: "is_push_enabled")', function() {
      // uncomment below and update the code to test the property isPushEnabled
      //var instance = new SendbirdPlatformSdk.SendBirdChannelResponse();
      //expect(instance).to.be();
    });

    it('should have the property isSuper (base name: "is_super")', function() {
      // uncomment below and update the code to test the property isSuper
      //var instance = new SendbirdPlatformSdk.SendBirdChannelResponse();
      //expect(instance).to.be();
    });

    it('should have the property joinedAt (base name: "joined_at")', function() {
      // uncomment below and update the code to test the property joinedAt
      //var instance = new SendbirdPlatformSdk.SendBirdChannelResponse();
      //expect(instance).to.be();
    });

    it('should have the property joinedMemberCount (base name: "joined_member_count")', function() {
      // uncomment below and update the code to test the property joinedMemberCount
      //var instance = new SendbirdPlatformSdk.SendBirdChannelResponse();
      //expect(instance).to.be();
    });

    it('should have the property lastMessage (base name: "last_message")', function() {
      // uncomment below and update the code to test the property lastMessage
      //var instance = new SendbirdPlatformSdk.SendBirdChannelResponse();
      //expect(instance).to.be();
    });

    it('should have the property memberCount (base name: "member_count")', function() {
      // uncomment below and update the code to test the property memberCount
      //var instance = new SendbirdPlatformSdk.SendBirdChannelResponse();
      //expect(instance).to.be();
    });

    it('should have the property members (base name: "members")', function() {
      // uncomment below and update the code to test the property members
      //var instance = new SendbirdPlatformSdk.SendBirdChannelResponse();
      //expect(instance).to.be();
    });

    it('should have the property messageOffsetTimestamp (base name: "message_offset_timestamp")', function() {
      // uncomment below and update the code to test the property messageOffsetTimestamp
      //var instance = new SendbirdPlatformSdk.SendBirdChannelResponse();
      //expect(instance).to.be();
    });

    it('should have the property messageSurvivalSeconds (base name: "message_survival_seconds")', function() {
      // uncomment below and update the code to test the property messageSurvivalSeconds
      //var instance = new SendbirdPlatformSdk.SendBirdChannelResponse();
      //expect(instance).to.be();
    });

    it('should have the property myCountPreference (base name: "my_count_preference")', function() {
      // uncomment below and update the code to test the property myCountPreference
      //var instance = new SendbirdPlatformSdk.SendBirdChannelResponse();
      //expect(instance).to.be();
    });

    it('should have the property myLastRead (base name: "my_last_read")', function() {
      // uncomment below and update the code to test the property myLastRead
      //var instance = new SendbirdPlatformSdk.SendBirdChannelResponse();
      //expect(instance).to.be();
    });

    it('should have the property myMemberState (base name: "my_member_state")', function() {
      // uncomment below and update the code to test the property myMemberState
      //var instance = new SendbirdPlatformSdk.SendBirdChannelResponse();
      //expect(instance).to.be();
    });

    it('should have the property myMutedState (base name: "my_muted_state")', function() {
      // uncomment below and update the code to test the property myMutedState
      //var instance = new SendbirdPlatformSdk.SendBirdChannelResponse();
      //expect(instance).to.be();
    });

    it('should have the property myPushTriggerOption (base name: "my_push_trigger_option")', function() {
      // uncomment below and update the code to test the property myPushTriggerOption
      //var instance = new SendbirdPlatformSdk.SendBirdChannelResponse();
      //expect(instance).to.be();
    });

    it('should have the property myRole (base name: "my_role")', function() {
      // uncomment below and update the code to test the property myRole
      //var instance = new SendbirdPlatformSdk.SendBirdChannelResponse();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new SendbirdPlatformSdk.SendBirdChannelResponse();
      //expect(instance).to.be();
    });

    it('should have the property unreadMentionCount (base name: "unread_mention_count")', function() {
      // uncomment below and update the code to test the property unreadMentionCount
      //var instance = new SendbirdPlatformSdk.SendBirdChannelResponse();
      //expect(instance).to.be();
    });

    it('should have the property unreadMessageCount (base name: "unread_message_count")', function() {
      // uncomment below and update the code to test the property unreadMessageCount
      //var instance = new SendbirdPlatformSdk.SendBirdChannelResponse();
      //expect(instance).to.be();
    });

    it('should have the property channelUrl (base name: "channel_url")', function() {
      // uncomment below and update the code to test the property channelUrl
      //var instance = new SendbirdPlatformSdk.SendBirdChannelResponse();
      //expect(instance).to.be();
    });

    it('should have the property operators (base name: "operators")', function() {
      // uncomment below and update the code to test the property operators
      //var instance = new SendbirdPlatformSdk.SendBirdChannelResponse();
      //expect(instance).to.be();
    });

    it('should have the property participantCount (base name: "participant_count")', function() {
      // uncomment below and update the code to test the property participantCount
      //var instance = new SendbirdPlatformSdk.SendBirdChannelResponse();
      //expect(instance).to.be();
    });

  });

}));
