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
    instance = new SendbirdPlatformSdk.SendBirdMessageCollectionHandler();
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

  describe('SendBirdMessageCollectionHandler', function() {
    it('should create an instance of SendBirdMessageCollectionHandler', function() {
      // uncomment below and update the code to test SendBirdMessageCollectionHandler
      //var instance = new SendbirdPlatformSdk.SendBirdMessageCollectionHandler();
      //expect(instance).to.be.a(SendbirdPlatformSdk.SendBirdMessageCollectionHandler);
    });

    it('should have the property onChannelDeleted (base name: "onChannelDeleted")', function() {
      // uncomment below and update the code to test the property onChannelDeleted
      //var instance = new SendbirdPlatformSdk.SendBirdMessageCollectionHandler();
      //expect(instance).to.be();
    });

    it('should have the property onChannelUpdated (base name: "onChannelUpdated")', function() {
      // uncomment below and update the code to test the property onChannelUpdated
      //var instance = new SendbirdPlatformSdk.SendBirdMessageCollectionHandler();
      //expect(instance).to.be();
    });

    it('should have the property onHugeGapDetected (base name: "onHugeGapDetected")', function() {
      // uncomment below and update the code to test the property onHugeGapDetected
      //var instance = new SendbirdPlatformSdk.SendBirdMessageCollectionHandler();
      //expect(instance).to.be();
    });

    it('should have the property onMessagesAdded (base name: "onMessagesAdded")', function() {
      // uncomment below and update the code to test the property onMessagesAdded
      //var instance = new SendbirdPlatformSdk.SendBirdMessageCollectionHandler();
      //expect(instance).to.be();
    });

    it('should have the property onMessagesDeleted (base name: "onMessagesDeleted")', function() {
      // uncomment below and update the code to test the property onMessagesDeleted
      //var instance = new SendbirdPlatformSdk.SendBirdMessageCollectionHandler();
      //expect(instance).to.be();
    });

    it('should have the property onMessagesUpdated (base name: "onMessagesUpdated")', function() {
      // uncomment below and update the code to test the property onMessagesUpdated
      //var instance = new SendbirdPlatformSdk.SendBirdMessageCollectionHandler();
      //expect(instance).to.be();
    });

  });

}));
