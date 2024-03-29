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
    instance = new SendbirdPlatformSdk.GetStatisticsDailyResponseStatisticsInner();
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

  describe('GetStatisticsDailyResponseStatisticsInner', function() {
    it('should create an instance of GetStatisticsDailyResponseStatisticsInner', function() {
      // uncomment below and update the code to test GetStatisticsDailyResponseStatisticsInner
      //var instance = new SendbirdPlatformSdk.GetStatisticsDailyResponseStatisticsInner();
      //expect(instance).to.be.a(SendbirdPlatformSdk.GetStatisticsDailyResponseStatisticsInner);
    });

    it('should have the property dateRange (base name: "date_range")', function() {
      // uncomment below and update the code to test the property dateRange
      //var instance = new SendbirdPlatformSdk.GetStatisticsDailyResponseStatisticsInner();
      //expect(instance).to.be();
    });

    it('should have the property canceledAnnouncementCount (base name: "canceled_announcement_count")', function() {
      // uncomment below and update the code to test the property canceledAnnouncementCount
      //var instance = new SendbirdPlatformSdk.GetStatisticsDailyResponseStatisticsInner();
      //expect(instance).to.be();
    });

    it('should have the property stoppedAnnouncementCount (base name: "stopped_announcement_count")', function() {
      // uncomment below and update the code to test the property stoppedAnnouncementCount
      //var instance = new SendbirdPlatformSdk.GetStatisticsDailyResponseStatisticsInner();
      //expect(instance).to.be();
    });

    it('should have the property completedAnnouncementCount (base name: "completed_announcement_count")', function() {
      // uncomment below and update the code to test the property completedAnnouncementCount
      //var instance = new SendbirdPlatformSdk.GetStatisticsDailyResponseStatisticsInner();
      //expect(instance).to.be();
    });

    it('should have the property totalAnnouncementCount (base name: "total_announcement_count")', function() {
      // uncomment below and update the code to test the property totalAnnouncementCount
      //var instance = new SendbirdPlatformSdk.GetStatisticsDailyResponseStatisticsInner();
      //expect(instance).to.be();
    });

    it('should have the property targetChannelCount (base name: "target_channel_count")', function() {
      // uncomment below and update the code to test the property targetChannelCount
      //var instance = new SendbirdPlatformSdk.GetStatisticsDailyResponseStatisticsInner();
      //expect(instance).to.be();
    });

    it('should have the property targetUserCount (base name: "target_user_count")', function() {
      // uncomment below and update the code to test the property targetUserCount
      //var instance = new SendbirdPlatformSdk.GetStatisticsDailyResponseStatisticsInner();
      //expect(instance).to.be();
    });

    it('should have the property sentChannelCount (base name: "sent_channel_count")', function() {
      // uncomment below and update the code to test the property sentChannelCount
      //var instance = new SendbirdPlatformSdk.GetStatisticsDailyResponseStatisticsInner();
      //expect(instance).to.be();
    });

    it('should have the property sentUserCount (base name: "sent_user_count")', function() {
      // uncomment below and update the code to test the property sentUserCount
      //var instance = new SendbirdPlatformSdk.GetStatisticsDailyResponseStatisticsInner();
      //expect(instance).to.be();
    });

    it('should have the property openRate (base name: "open_rate")', function() {
      // uncomment below and update the code to test the property openRate
      //var instance = new SendbirdPlatformSdk.GetStatisticsDailyResponseStatisticsInner();
      //expect(instance).to.be();
    });

    it('should have the property openCount (base name: "open_count")', function() {
      // uncomment below and update the code to test the property openCount
      //var instance = new SendbirdPlatformSdk.GetStatisticsDailyResponseStatisticsInner();
      //expect(instance).to.be();
    });

  });

}));
