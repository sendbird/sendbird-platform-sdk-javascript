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
    instance = new SendbirdPlatformSdk.EmojisApi();
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

  describe('EmojisApi', function() {
    describe('addEmojiCategories', function() {
      it('should call addEmojiCategories successfully', function(done) {
        //uncomment below and update the code to test addEmojiCategories
        //instance.addEmojiCategories(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addEmojis', function() {
      it('should call addEmojis successfully', function(done) {
        //uncomment below and update the code to test addEmojis
        //instance.addEmojis(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteEmojiByKey', function() {
      it('should call deleteEmojiByKey successfully', function(done) {
        //uncomment below and update the code to test deleteEmojiByKey
        //instance.deleteEmojiByKey(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteEmojiCategoryById', function() {
      it('should call deleteEmojiCategoryById successfully', function(done) {
        //uncomment below and update the code to test deleteEmojiCategoryById
        //instance.deleteEmojiCategoryById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('enableReactions', function() {
      it('should call enableReactions successfully', function(done) {
        //uncomment below and update the code to test enableReactions
        //instance.enableReactions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getEmojiByKey', function() {
      it('should call getEmojiByKey successfully', function(done) {
        //uncomment below and update the code to test getEmojiByKey
        //instance.getEmojiByKey(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getEmojiCategoryById', function() {
      it('should call getEmojiCategoryById successfully', function(done) {
        //uncomment below and update the code to test getEmojiCategoryById
        //instance.getEmojiCategoryById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listAllEmojisAndEmojiCategories', function() {
      it('should call listAllEmojisAndEmojiCategories successfully', function(done) {
        //uncomment below and update the code to test listAllEmojisAndEmojiCategories
        //instance.listAllEmojisAndEmojiCategories(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listEmojis', function() {
      it('should call listEmojis successfully', function(done) {
        //uncomment below and update the code to test listEmojis
        //instance.listEmojis(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateEmojiCategoryUrlById', function() {
      it('should call updateEmojiCategoryUrlById successfully', function(done) {
        //uncomment below and update the code to test updateEmojiCategoryUrlById
        //instance.updateEmojiCategoryUrlById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateEmojiUrlByKey', function() {
      it('should call updateEmojiUrlByKey successfully', function(done) {
        //uncomment below and update the code to test updateEmojiUrlByKey
        //instance.updateEmojiUrlByKey(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('useDefaultEmojis', function() {
      it('should call useDefaultEmojis successfully', function(done) {
        //uncomment below and update the code to test useDefaultEmojis
        //instance.useDefaultEmojis(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
