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
    instance = new SendbirdPlatformSdk.RegisterAndScheduleDataExportData();
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

  describe('RegisterAndScheduleDataExportData', function() {
    it('should create an instance of RegisterAndScheduleDataExportData', function() {
      // uncomment below and update the code to test RegisterAndScheduleDataExportData
      //var instance = new SendbirdPlatformSdk.RegisterAndScheduleDataExportData();
      //expect(instance).to.be.a(SendbirdPlatformSdk.RegisterAndScheduleDataExportData);
    });

    it('should have the property startTs (base name: "start_ts")', function() {
      // uncomment below and update the code to test the property startTs
      //var instance = new SendbirdPlatformSdk.RegisterAndScheduleDataExportData();
      //expect(instance).to.be();
    });

    it('should have the property endTs (base name: "end_ts")', function() {
      // uncomment below and update the code to test the property endTs
      //var instance = new SendbirdPlatformSdk.RegisterAndScheduleDataExportData();
      //expect(instance).to.be();
    });

    it('should have the property format (base name: "format")', function() {
      // uncomment below and update the code to test the property format
      //var instance = new SendbirdPlatformSdk.RegisterAndScheduleDataExportData();
      //expect(instance).to.be();
    });

    it('should have the property csvDelimiter (base name: "csv_delimiter")', function() {
      // uncomment below and update the code to test the property csvDelimiter
      //var instance = new SendbirdPlatformSdk.RegisterAndScheduleDataExportData();
      //expect(instance).to.be();
    });

    it('should have the property timezone (base name: "timezone")', function() {
      // uncomment below and update the code to test the property timezone
      //var instance = new SendbirdPlatformSdk.RegisterAndScheduleDataExportData();
      //expect(instance).to.be();
    });

    it('should have the property senderIds (base name: "sender_ids")', function() {
      // uncomment below and update the code to test the property senderIds
      //var instance = new SendbirdPlatformSdk.RegisterAndScheduleDataExportData();
      //expect(instance).to.be();
    });

    it('should have the property excludeSenderIds (base name: "exclude_sender_ids")', function() {
      // uncomment below and update the code to test the property excludeSenderIds
      //var instance = new SendbirdPlatformSdk.RegisterAndScheduleDataExportData();
      //expect(instance).to.be();
    });

    it('should have the property channelUrls (base name: "channel_urls")', function() {
      // uncomment below and update the code to test the property channelUrls
      //var instance = new SendbirdPlatformSdk.RegisterAndScheduleDataExportData();
      //expect(instance).to.be();
    });

    it('should have the property excludeChannelUrls (base name: "exclude_channel_urls")', function() {
      // uncomment below and update the code to test the property excludeChannelUrls
      //var instance = new SendbirdPlatformSdk.RegisterAndScheduleDataExportData();
      //expect(instance).to.be();
    });

    it('should have the property userIds (base name: "user_ids")', function() {
      // uncomment below and update the code to test the property userIds
      //var instance = new SendbirdPlatformSdk.RegisterAndScheduleDataExportData();
      //expect(instance).to.be();
    });

    it('should have the property showReadReceipt (base name: "show_read_receipt")', function() {
      // uncomment below and update the code to test the property showReadReceipt
      //var instance = new SendbirdPlatformSdk.RegisterAndScheduleDataExportData();
      //expect(instance).to.be();
    });

    it('should have the property showChannelMetadata (base name: "show_channel_metadata")', function() {
      // uncomment below and update the code to test the property showChannelMetadata
      //var instance = new SendbirdPlatformSdk.RegisterAndScheduleDataExportData();
      //expect(instance).to.be();
    });

    it('should have the property neighboringMessageLimit (base name: "neighboring_message_limit")', function() {
      // uncomment below and update the code to test the property neighboringMessageLimit
      //var instance = new SendbirdPlatformSdk.RegisterAndScheduleDataExportData();
      //expect(instance).to.be();
    });

  });

}));
