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
    instance = new SendbirdPlatformSdk.ScheduleAnnouncementData();
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

  describe('ScheduleAnnouncementData', function() {
    it('should create an instance of ScheduleAnnouncementData', function() {
      // uncomment below and update the code to test ScheduleAnnouncementData
      //var instane = new SendbirdPlatformSdk.ScheduleAnnouncementData();
      //expect(instance).to.be.a(SendbirdPlatformSdk.ScheduleAnnouncementData);
    });

    it('should have the property message (base name: "message")', function() {
      // uncomment below and update the code to test the property message
      //var instance = new SendbirdPlatformSdk.ScheduleAnnouncementData();
      //expect(instance).to.be();
    });

    it('should have the property messageType (base name: "message.type")', function() {
      // uncomment below and update the code to test the property messageType
      //var instance = new SendbirdPlatformSdk.ScheduleAnnouncementData();
      //expect(instance).to.be();
    });

    it('should have the property messageUserId (base name: "message.user_id")', function() {
      // uncomment below and update the code to test the property messageUserId
      //var instance = new SendbirdPlatformSdk.ScheduleAnnouncementData();
      //expect(instance).to.be();
    });

    it('should have the property messageContent (base name: "message.content")', function() {
      // uncomment below and update the code to test the property messageContent
      //var instance = new SendbirdPlatformSdk.ScheduleAnnouncementData();
      //expect(instance).to.be();
    });

    it('should have the property targetAt (base name: "target_at")', function() {
      // uncomment below and update the code to test the property targetAt
      //var instance = new SendbirdPlatformSdk.ScheduleAnnouncementData();
      //expect(instance).to.be();
    });

    it('should have the property targetList (base name: "target_list")', function() {
      // uncomment below and update the code to test the property targetList
      //var instance = new SendbirdPlatformSdk.ScheduleAnnouncementData();
      //expect(instance).to.be();
    });

    it('should have the property targetChannelType (base name: "target_channel_type")', function() {
      // uncomment below and update the code to test the property targetChannelType
      //var instance = new SendbirdPlatformSdk.ScheduleAnnouncementData();
      //expect(instance).to.be();
    });

    it('should have the property uniqueId (base name: "unique_id")', function() {
      // uncomment below and update the code to test the property uniqueId
      //var instance = new SendbirdPlatformSdk.ScheduleAnnouncementData();
      //expect(instance).to.be();
    });

    it('should have the property messageCustomType (base name: "message.custom_type")', function() {
      // uncomment below and update the code to test the property messageCustomType
      //var instance = new SendbirdPlatformSdk.ScheduleAnnouncementData();
      //expect(instance).to.be();
    });

    it('should have the property messageData (base name: "message.data")', function() {
      // uncomment below and update the code to test the property messageData
      //var instance = new SendbirdPlatformSdk.ScheduleAnnouncementData();
      //expect(instance).to.be();
    });

    it('should have the property createChannel (base name: "create_channel")', function() {
      // uncomment below and update the code to test the property createChannel
      //var instance = new SendbirdPlatformSdk.ScheduleAnnouncementData();
      //expect(instance).to.be();
    });

    it('should have the property announcementGroup (base name: "announcement_group")', function() {
      // uncomment below and update the code to test the property announcementGroup
      //var instance = new SendbirdPlatformSdk.ScheduleAnnouncementData();
      //expect(instance).to.be();
    });

    it('should have the property createChannelOptions (base name: "create_channel_options")', function() {
      // uncomment below and update the code to test the property createChannelOptions
      //var instance = new SendbirdPlatformSdk.ScheduleAnnouncementData();
      //expect(instance).to.be();
    });

    it('should have the property createChannelOptionsName (base name: "create_channel_options.name")', function() {
      // uncomment below and update the code to test the property createChannelOptionsName
      //var instance = new SendbirdPlatformSdk.ScheduleAnnouncementData();
      //expect(instance).to.be();
    });

    it('should have the property createChannelOptionsCoverUrl (base name: "create_channel_options.cover_url")', function() {
      // uncomment below and update the code to test the property createChannelOptionsCoverUrl
      //var instance = new SendbirdPlatformSdk.ScheduleAnnouncementData();
      //expect(instance).to.be();
    });

    it('should have the property createChannelOptionsCustomType (base name: "create_channel_options.custom_type")', function() {
      // uncomment below and update the code to test the property createChannelOptionsCustomType
      //var instance = new SendbirdPlatformSdk.ScheduleAnnouncementData();
      //expect(instance).to.be();
    });

    it('should have the property createChannelOptionsData (base name: "create_channel_options.data")', function() {
      // uncomment below and update the code to test the property createChannelOptionsData
      //var instance = new SendbirdPlatformSdk.ScheduleAnnouncementData();
      //expect(instance).to.be();
    });

    it('should have the property createChannelOptionsDistinct (base name: "create_channel_options.distinct")', function() {
      // uncomment below and update the code to test the property createChannelOptionsDistinct
      //var instance = new SendbirdPlatformSdk.ScheduleAnnouncementData();
      //expect(instance).to.be();
    });

    it('should have the property scheduledAt (base name: "scheduled_at")', function() {
      // uncomment below and update the code to test the property scheduledAt
      //var instance = new SendbirdPlatformSdk.ScheduleAnnouncementData();
      //expect(instance).to.be();
    });

    it('should have the property ceaseAt (base name: "cease_at")', function() {
      // uncomment below and update the code to test the property ceaseAt
      //var instance = new SendbirdPlatformSdk.ScheduleAnnouncementData();
      //expect(instance).to.be();
    });

    it('should have the property resumeAt (base name: "resume_at")', function() {
      // uncomment below and update the code to test the property resumeAt
      //var instance = new SendbirdPlatformSdk.ScheduleAnnouncementData();
      //expect(instance).to.be();
    });

    it('should have the property endAt (base name: "end_at")', function() {
      // uncomment below and update the code to test the property endAt
      //var instance = new SendbirdPlatformSdk.ScheduleAnnouncementData();
      //expect(instance).to.be();
    });

    it('should have the property enablePush (base name: "enable_push")', function() {
      // uncomment below and update the code to test the property enablePush
      //var instance = new SendbirdPlatformSdk.ScheduleAnnouncementData();
      //expect(instance).to.be();
    });

    it('should have the property assignSenderAsChannelInviter (base name: "assign_sender_as_channel_inviter")', function() {
      // uncomment below and update the code to test the property assignSenderAsChannelInviter
      //var instance = new SendbirdPlatformSdk.ScheduleAnnouncementData();
      //expect(instance).to.be();
    });

  });

}));
