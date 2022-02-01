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
    instance = new SendbirdPlatformSdk.CreateChannelMetacounterData();
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

  describe('CreateChannelMetacounterData', function() {
    it('should create an instance of CreateChannelMetacounterData', function() {
      // uncomment below and update the code to test CreateChannelMetacounterData
      //var instance = new SendbirdPlatformSdk.CreateChannelMetacounterData();
      //expect(instance).to.be.a(SendbirdPlatformSdk.CreateChannelMetacounterData);
    });

    it('should have the property channelType (base name: "channel_type")', function() {
      // uncomment below and update the code to test the property channelType
      //var instance = new SendbirdPlatformSdk.CreateChannelMetacounterData();
      //expect(instance).to.be();
    });

    it('should have the property channelUrl (base name: "channel_url")', function() {
      // uncomment below and update the code to test the property channelUrl
      //var instance = new SendbirdPlatformSdk.CreateChannelMetacounterData();
      //expect(instance).to.be();
    });

    it('should have the property metacounter (base name: "metacounter")', function() {
      // uncomment below and update the code to test the property metacounter
      //var instance = new SendbirdPlatformSdk.CreateChannelMetacounterData();
      //expect(instance).to.be();
    });

  });

}));
