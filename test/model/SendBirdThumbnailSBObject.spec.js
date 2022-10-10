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
    instance = new SendbirdPlatformSdk.SendBirdThumbnailSBObject();
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

  describe('SendBirdThumbnailSBObject', function() {
    it('should create an instance of SendBirdThumbnailSBObject', function() {
      // uncomment below and update the code to test SendBirdThumbnailSBObject
      //var instance = new SendbirdPlatformSdk.SendBirdThumbnailSBObject();
      //expect(instance).to.be.a(SendbirdPlatformSdk.SendBirdThumbnailSBObject);
    });

    it('should have the property height (base name: "height")', function() {
      // uncomment below and update the code to test the property height
      //var instance = new SendbirdPlatformSdk.SendBirdThumbnailSBObject();
      //expect(instance).to.be();
    });

    it('should have the property plainUrl (base name: "plain_url")', function() {
      // uncomment below and update the code to test the property plainUrl
      //var instance = new SendbirdPlatformSdk.SendBirdThumbnailSBObject();
      //expect(instance).to.be();
    });

    it('should have the property realHeight (base name: "real_height")', function() {
      // uncomment below and update the code to test the property realHeight
      //var instance = new SendbirdPlatformSdk.SendBirdThumbnailSBObject();
      //expect(instance).to.be();
    });

    it('should have the property realWidth (base name: "real_width")', function() {
      // uncomment below and update the code to test the property realWidth
      //var instance = new SendbirdPlatformSdk.SendBirdThumbnailSBObject();
      //expect(instance).to.be();
    });

    it('should have the property url (base name: "url")', function() {
      // uncomment below and update the code to test the property url
      //var instance = new SendbirdPlatformSdk.SendBirdThumbnailSBObject();
      //expect(instance).to.be();
    });

    it('should have the property width (base name: "width")', function() {
      // uncomment below and update the code to test the property width
      //var instance = new SendbirdPlatformSdk.SendBirdThumbnailSBObject();
      //expect(instance).to.be();
    });

  });

}));
