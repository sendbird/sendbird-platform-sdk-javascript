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
    instance = new SendbirdPlatformSdk.ReportApi();
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

  describe('ReportApi', function() {
    describe('listReports', function() {
      it('should call listReports successfully', function(done) {
        //uncomment below and update the code to test listReports
        //instance.listReports(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listReportsOnChannelByUrl', function() {
      it('should call listReportsOnChannelByUrl successfully', function(done) {
        //uncomment below and update the code to test listReportsOnChannelByUrl
        //instance.listReportsOnChannelByUrl(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listReportsOnMessageById', function() {
      it('should call listReportsOnMessageById successfully', function(done) {
        //uncomment below and update the code to test listReportsOnMessageById
        //instance.listReportsOnMessageById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listReportsOnUserById', function() {
      it('should call listReportsOnUserById successfully', function(done) {
        //uncomment below and update the code to test listReportsOnUserById
        //instance.listReportsOnUserById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('reportChannelByUrl', function() {
      it('should call reportChannelByUrl successfully', function(done) {
        //uncomment below and update the code to test reportChannelByUrl
        //instance.reportChannelByUrl(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('reportMessageById', function() {
      it('should call reportMessageById successfully', function(done) {
        //uncomment below and update the code to test reportMessageById
        //instance.reportMessageById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('reportUserById', function() {
      it('should call reportUserById successfully', function(done) {
        //uncomment below and update the code to test reportUserById
        //instance.reportUserById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('viewModeratedMessageById', function() {
      it('should call viewModeratedMessageById successfully', function(done) {
        //uncomment below and update the code to test viewModeratedMessageById
        //instance.viewModeratedMessageById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
