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
    instance = new SendbirdPlatformSdk.AddRegistrationOrDeviceTokenData();
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

  describe('AddRegistrationOrDeviceTokenData', function() {
    it('should create an instance of AddRegistrationOrDeviceTokenData', function() {
      // uncomment below and update the code to test AddRegistrationOrDeviceTokenData
      //var instane = new SendbirdPlatformSdk.AddRegistrationOrDeviceTokenData();
      //expect(instance).to.be.a(SendbirdPlatformSdk.AddRegistrationOrDeviceTokenData);
    });

    it('should have the property gcmRegToken (base name: "gcm_reg_token")', function() {
      // uncomment below and update the code to test the property gcmRegToken
      //var instance = new SendbirdPlatformSdk.AddRegistrationOrDeviceTokenData();
      //expect(instance).to.be();
    });

    it('should have the property huaweiDeviceToken (base name: "huawei_device_token")', function() {
      // uncomment below and update the code to test the property huaweiDeviceToken
      //var instance = new SendbirdPlatformSdk.AddRegistrationOrDeviceTokenData();
      //expect(instance).to.be();
    });

    it('should have the property apnsDeviceToken (base name: "apns_device_token")', function() {
      // uncomment below and update the code to test the property apnsDeviceToken
      //var instance = new SendbirdPlatformSdk.AddRegistrationOrDeviceTokenData();
      //expect(instance).to.be();
    });

  });

}));
