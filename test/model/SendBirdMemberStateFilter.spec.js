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
    instance = new SendbirdPlatformSdk.SendBirdMemberStateFilter();
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

  describe('SendBirdMemberStateFilter', function() {
    it('should create an instance of SendBirdMemberStateFilter', function() {
      // uncomment below and update the code to test SendBirdMemberStateFilter
      //var instance = new SendbirdPlatformSdk.SendBirdMemberStateFilter();
      //expect(instance).to.be.a(SendbirdPlatformSdk.SendBirdMemberStateFilter);
    });

    it('should have the property ALL (base name: "ALL")', function() {
      // uncomment below and update the code to test the property ALL
      //var instance = new SendbirdPlatformSdk.SendBirdMemberStateFilter();
      //expect(instance).to.be();
    });

    it('should have the property INVITED (base name: "INVITED")', function() {
      // uncomment below and update the code to test the property INVITED
      //var instance = new SendbirdPlatformSdk.SendBirdMemberStateFilter();
      //expect(instance).to.be();
    });

    it('should have the property INVITED_BY_FRIEND (base name: "INVITED_BY_FRIEND")', function() {
      // uncomment below and update the code to test the property INVITED_BY_FRIEND
      //var instance = new SendbirdPlatformSdk.SendBirdMemberStateFilter();
      //expect(instance).to.be();
    });

    it('should have the property INVITED_BY_NON_FRIEND (base name: "INVITED_BY_NON_FRIEND")', function() {
      // uncomment below and update the code to test the property INVITED_BY_NON_FRIEND
      //var instance = new SendbirdPlatformSdk.SendBirdMemberStateFilter();
      //expect(instance).to.be();
    });

    it('should have the property JOINED (base name: "JOINED")', function() {
      // uncomment below and update the code to test the property JOINED
      //var instance = new SendbirdPlatformSdk.SendBirdMemberStateFilter();
      //expect(instance).to.be();
    });

  });

}));
