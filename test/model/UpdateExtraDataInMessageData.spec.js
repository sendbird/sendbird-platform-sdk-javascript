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
    instance = new SendbirdPlatformSdk.UpdateExtraDataInMessageData();
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

  describe('UpdateExtraDataInMessageData', function() {
    it('should create an instance of UpdateExtraDataInMessageData', function() {
      // uncomment below and update the code to test UpdateExtraDataInMessageData
      //var instance = new SendbirdPlatformSdk.UpdateExtraDataInMessageData();
      //expect(instance).to.be.a(SendbirdPlatformSdk.UpdateExtraDataInMessageData);
    });

    it('should have the property channelType (base name: "channel_type")', function() {
      // uncomment below and update the code to test the property channelType
      //var instance = new SendbirdPlatformSdk.UpdateExtraDataInMessageData();
      //expect(instance).to.be();
    });

    it('should have the property channelUrl (base name: "channel_url")', function() {
      // uncomment below and update the code to test the property channelUrl
      //var instance = new SendbirdPlatformSdk.UpdateExtraDataInMessageData();
      //expect(instance).to.be();
    });

    it('should have the property messageId (base name: "message_id")', function() {
      // uncomment below and update the code to test the property messageId
      //var instance = new SendbirdPlatformSdk.UpdateExtraDataInMessageData();
      //expect(instance).to.be();
    });

    it('should have the property sortedMetaarray (base name: "sorted_metaarray")', function() {
      // uncomment below and update the code to test the property sortedMetaarray
      //var instance = new SendbirdPlatformSdk.UpdateExtraDataInMessageData();
      //expect(instance).to.be();
    });

    it('should have the property mode (base name: "mode")', function() {
      // uncomment below and update the code to test the property mode
      //var instance = new SendbirdPlatformSdk.UpdateExtraDataInMessageData();
      //expect(instance).to.be();
    });

    it('should have the property upsert (base name: "upsert")', function() {
      // uncomment below and update the code to test the property upsert
      //var instance = new SendbirdPlatformSdk.UpdateExtraDataInMessageData();
      //expect(instance).to.be();
    });

  });

}));
