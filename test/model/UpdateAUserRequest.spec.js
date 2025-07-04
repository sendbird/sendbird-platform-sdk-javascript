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
    instance = new SendbirdPlatformSdk.UpdateAUserRequest();
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

  describe('UpdateAUserRequest', function() {
    it('should create an instance of UpdateAUserRequest', function() {
      // uncomment below and update the code to test UpdateAUserRequest
      //var instance = new SendbirdPlatformSdk.UpdateAUserRequest();
      //expect(instance).to.be.a(SendbirdPlatformSdk.UpdateAUserRequest);
    });

    it('should have the property discoveryKeys (base name: "discovery_keys")', function() {
      // uncomment below and update the code to test the property discoveryKeys
      //var instance = new SendbirdPlatformSdk.UpdateAUserRequest();
      //expect(instance).to.be();
    });

    it('should have the property isActive (base name: "is_active")', function() {
      // uncomment below and update the code to test the property isActive
      //var instance = new SendbirdPlatformSdk.UpdateAUserRequest();
      //expect(instance).to.be();
    });

    it('should have the property issueAccessToken (base name: "issue_access_token")', function() {
      // uncomment below and update the code to test the property issueAccessToken
      //var instance = new SendbirdPlatformSdk.UpdateAUserRequest();
      //expect(instance).to.be();
    });

    it('should have the property lastSeenAt (base name: "last_seen_at")', function() {
      // uncomment below and update the code to test the property lastSeenAt
      //var instance = new SendbirdPlatformSdk.UpdateAUserRequest();
      //expect(instance).to.be();
    });

    it('should have the property leaveAllWhenDeactivated (base name: "leave_all_when_deactivated")', function() {
      // uncomment below and update the code to test the property leaveAllWhenDeactivated
      //var instance = new SendbirdPlatformSdk.UpdateAUserRequest();
      //expect(instance).to.be();
    });

    it('should have the property nickname (base name: "nickname")', function() {
      // uncomment below and update the code to test the property nickname
      //var instance = new SendbirdPlatformSdk.UpdateAUserRequest();
      //expect(instance).to.be();
    });

    it('should have the property preferredLanguages (base name: "preferred_languages")', function() {
      // uncomment below and update the code to test the property preferredLanguages
      //var instance = new SendbirdPlatformSdk.UpdateAUserRequest();
      //expect(instance).to.be();
    });

    it('should have the property profileFile (base name: "profile_file")', function() {
      // uncomment below and update the code to test the property profileFile
      //var instance = new SendbirdPlatformSdk.UpdateAUserRequest();
      //expect(instance).to.be();
    });

    it('should have the property profileUrl (base name: "profile_url")', function() {
      // uncomment below and update the code to test the property profileUrl
      //var instance = new SendbirdPlatformSdk.UpdateAUserRequest();
      //expect(instance).to.be();
    });

  });

}));
