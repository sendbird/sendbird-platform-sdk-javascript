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
    instance = new SendbirdPlatformSdk.V3ApplicationsSettingsGlobalCustomTypeDomainFilter();
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

  describe('V3ApplicationsSettingsGlobalCustomTypeDomainFilter', function() {
    it('should create an instance of V3ApplicationsSettingsGlobalCustomTypeDomainFilter', function() {
      // uncomment below and update the code to test V3ApplicationsSettingsGlobalCustomTypeDomainFilter
      //var instance = new SendbirdPlatformSdk.V3ApplicationsSettingsGlobalCustomTypeDomainFilter();
      //expect(instance).to.be.a(SendbirdPlatformSdk.V3ApplicationsSettingsGlobalCustomTypeDomainFilter);
    });

    it('should have the property domains (base name: "domains")', function() {
      // uncomment below and update the code to test the property domains
      //var instance = new SendbirdPlatformSdk.V3ApplicationsSettingsGlobalCustomTypeDomainFilter();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new SendbirdPlatformSdk.V3ApplicationsSettingsGlobalCustomTypeDomainFilter();
      //expect(instance).to.be();
    });

    it('should have the property shouldCheckGlobal (base name: "should_check_global")', function() {
      // uncomment below and update the code to test the property shouldCheckGlobal
      //var instance = new SendbirdPlatformSdk.V3ApplicationsSettingsGlobalCustomTypeDomainFilter();
      //expect(instance).to.be();
    });

  });

}));
