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
    instance = new SendbirdPlatformSdk.GetDetailedOpenRateOfAnnouncementGroupResponse();
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

  describe('GetDetailedOpenRateOfAnnouncementGroupResponse', function() {
    it('should create an instance of GetDetailedOpenRateOfAnnouncementGroupResponse', function() {
      // uncomment below and update the code to test GetDetailedOpenRateOfAnnouncementGroupResponse
      //var instance = new SendbirdPlatformSdk.GetDetailedOpenRateOfAnnouncementGroupResponse();
      //expect(instance).to.be.a(SendbirdPlatformSdk.GetDetailedOpenRateOfAnnouncementGroupResponse);
    });

    it('should have the property uniqueId (base name: "unique_id")', function() {
      // uncomment below and update the code to test the property uniqueId
      //var instance = new SendbirdPlatformSdk.GetDetailedOpenRateOfAnnouncementGroupResponse();
      //expect(instance).to.be();
    });

    it('should have the property announcementGroup (base name: "announcement_group")', function() {
      // uncomment below and update the code to test the property announcementGroup
      //var instance = new SendbirdPlatformSdk.GetDetailedOpenRateOfAnnouncementGroupResponse();
      //expect(instance).to.be();
    });

    it('should have the property openCounts (base name: "open_counts")', function() {
      // uncomment below and update the code to test the property openCounts
      //var instance = new SendbirdPlatformSdk.GetDetailedOpenRateOfAnnouncementGroupResponse();
      //expect(instance).to.be();
    });

    it('should have the property openRates (base name: "open_rates")', function() {
      // uncomment below and update the code to test the property openRates
      //var instance = new SendbirdPlatformSdk.GetDetailedOpenRateOfAnnouncementGroupResponse();
      //expect(instance).to.be();
    });

    it('should have the property cumulativeOpenCounts (base name: "cumulative_open_counts")', function() {
      // uncomment below and update the code to test the property cumulativeOpenCounts
      //var instance = new SendbirdPlatformSdk.GetDetailedOpenRateOfAnnouncementGroupResponse();
      //expect(instance).to.be();
    });

    it('should have the property cumulativeOpenRates (base name: "cumulative_open_rates")', function() {
      // uncomment below and update the code to test the property cumulativeOpenRates
      //var instance = new SendbirdPlatformSdk.GetDetailedOpenRateOfAnnouncementGroupResponse();
      //expect(instance).to.be();
    });

  });

}));
