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
    instance = new SendbirdPlatformSdk.ScheduleAnAnnouncementResponse();
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

  describe('ScheduleAnAnnouncementResponse', function() {
    it('should create an instance of ScheduleAnAnnouncementResponse', function() {
      // uncomment below and update the code to test ScheduleAnAnnouncementResponse
      //var instance = new SendbirdPlatformSdk.ScheduleAnAnnouncementResponse();
      //expect(instance).to.be.a(SendbirdPlatformSdk.ScheduleAnAnnouncementResponse);
    });

    it('should have the property announcementGroup (base name: "announcement_group")', function() {
      // uncomment below and update the code to test the property announcementGroup
      //var instance = new SendbirdPlatformSdk.ScheduleAnAnnouncementResponse();
      //expect(instance).to.be();
    });

    it('should have the property ceaseAt (base name: "cease_at")', function() {
      // uncomment below and update the code to test the property ceaseAt
      //var instance = new SendbirdPlatformSdk.ScheduleAnAnnouncementResponse();
      //expect(instance).to.be();
    });

    it('should have the property completedAt (base name: "completed_at")', function() {
      // uncomment below and update the code to test the property completedAt
      //var instance = new SendbirdPlatformSdk.ScheduleAnAnnouncementResponse();
      //expect(instance).to.be();
    });

    it('should have the property createChannel (base name: "create_channel")', function() {
      // uncomment below and update the code to test the property createChannel
      //var instance = new SendbirdPlatformSdk.ScheduleAnAnnouncementResponse();
      //expect(instance).to.be();
    });

    it('should have the property createChannelOptions (base name: "create_channel_options")', function() {
      // uncomment below and update the code to test the property createChannelOptions
      //var instance = new SendbirdPlatformSdk.ScheduleAnAnnouncementResponse();
      //expect(instance).to.be();
    });

    it('should have the property enablePush (base name: "enable_push")', function() {
      // uncomment below and update the code to test the property enablePush
      //var instance = new SendbirdPlatformSdk.ScheduleAnAnnouncementResponse();
      //expect(instance).to.be();
    });

    it('should have the property endAt (base name: "end_at")', function() {
      // uncomment below and update the code to test the property endAt
      //var instance = new SendbirdPlatformSdk.ScheduleAnAnnouncementResponse();
      //expect(instance).to.be();
    });

    it('should have the property markAsRead (base name: "mark_as_read")', function() {
      // uncomment below and update the code to test the property markAsRead
      //var instance = new SendbirdPlatformSdk.ScheduleAnAnnouncementResponse();
      //expect(instance).to.be();
    });

    it('should have the property message (base name: "message")', function() {
      // uncomment below and update the code to test the property message
      //var instance = new SendbirdPlatformSdk.ScheduleAnAnnouncementResponse();
      //expect(instance).to.be();
    });

    it('should have the property openCount (base name: "open_count")', function() {
      // uncomment below and update the code to test the property openCount
      //var instance = new SendbirdPlatformSdk.ScheduleAnAnnouncementResponse();
      //expect(instance).to.be();
    });

    it('should have the property openRate (base name: "open_rate")', function() {
      // uncomment below and update the code to test the property openRate
      //var instance = new SendbirdPlatformSdk.ScheduleAnAnnouncementResponse();
      //expect(instance).to.be();
    });

    it('should have the property priority (base name: "priority")', function() {
      // uncomment below and update the code to test the property priority
      //var instance = new SendbirdPlatformSdk.ScheduleAnAnnouncementResponse();
      //expect(instance).to.be();
    });

    it('should have the property resumeAt (base name: "resume_at")', function() {
      // uncomment below and update the code to test the property resumeAt
      //var instance = new SendbirdPlatformSdk.ScheduleAnAnnouncementResponse();
      //expect(instance).to.be();
    });

    it('should have the property scheduledAt (base name: "scheduled_at")', function() {
      // uncomment below and update the code to test the property scheduledAt
      //var instance = new SendbirdPlatformSdk.ScheduleAnAnnouncementResponse();
      //expect(instance).to.be();
    });

    it('should have the property sendToFrozenChannels (base name: "send_to_frozen_channels")', function() {
      // uncomment below and update the code to test the property sendToFrozenChannels
      //var instance = new SendbirdPlatformSdk.ScheduleAnAnnouncementResponse();
      //expect(instance).to.be();
    });

    it('should have the property sentChannelCount (base name: "sent_channel_count")', function() {
      // uncomment below and update the code to test the property sentChannelCount
      //var instance = new SendbirdPlatformSdk.ScheduleAnAnnouncementResponse();
      //expect(instance).to.be();
    });

    it('should have the property sentUserCount (base name: "sent_user_count")', function() {
      // uncomment below and update the code to test the property sentUserCount
      //var instance = new SendbirdPlatformSdk.ScheduleAnAnnouncementResponse();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new SendbirdPlatformSdk.ScheduleAnAnnouncementResponse();
      //expect(instance).to.be();
    });

    it('should have the property targetAt (base name: "target_at")', function() {
      // uncomment below and update the code to test the property targetAt
      //var instance = new SendbirdPlatformSdk.ScheduleAnAnnouncementResponse();
      //expect(instance).to.be();
    });

    it('should have the property targetChannelCount (base name: "target_channel_count")', function() {
      // uncomment below and update the code to test the property targetChannelCount
      //var instance = new SendbirdPlatformSdk.ScheduleAnAnnouncementResponse();
      //expect(instance).to.be();
    });

    it('should have the property targetChannelType (base name: "target_channel_type")', function() {
      // uncomment below and update the code to test the property targetChannelType
      //var instance = new SendbirdPlatformSdk.ScheduleAnAnnouncementResponse();
      //expect(instance).to.be();
    });

    it('should have the property targetCustomType (base name: "target_custom_type")', function() {
      // uncomment below and update the code to test the property targetCustomType
      //var instance = new SendbirdPlatformSdk.ScheduleAnAnnouncementResponse();
      //expect(instance).to.be();
    });

    it('should have the property targetUserCount (base name: "target_user_count")', function() {
      // uncomment below and update the code to test the property targetUserCount
      //var instance = new SendbirdPlatformSdk.ScheduleAnAnnouncementResponse();
      //expect(instance).to.be();
    });

    it('should have the property uniqueId (base name: "unique_id")', function() {
      // uncomment below and update the code to test the property uniqueId
      //var instance = new SendbirdPlatformSdk.ScheduleAnAnnouncementResponse();
      //expect(instance).to.be();
    });

  });

}));
