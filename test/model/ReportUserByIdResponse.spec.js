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
    instance = new SendbirdPlatformSdk.ReportUserByIdResponse();
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

  describe('ReportUserByIdResponse', function() {
    it('should create an instance of ReportUserByIdResponse', function() {
      // uncomment below and update the code to test ReportUserByIdResponse
      //var instance = new SendbirdPlatformSdk.ReportUserByIdResponse();
      //expect(instance).to.be.a(SendbirdPlatformSdk.ReportUserByIdResponse);
    });

    it('should have the property reportType (base name: "report_type")', function() {
      // uncomment below and update the code to test the property reportType
      //var instance = new SendbirdPlatformSdk.ReportUserByIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property reportCategory (base name: "report_category")', function() {
      // uncomment below and update the code to test the property reportCategory
      //var instance = new SendbirdPlatformSdk.ReportUserByIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property reportingUser (base name: "reporting_user")', function() {
      // uncomment below and update the code to test the property reportingUser
      //var instance = new SendbirdPlatformSdk.ReportUserByIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property offendingUser (base name: "offending_user")', function() {
      // uncomment below and update the code to test the property offendingUser
      //var instance = new SendbirdPlatformSdk.ReportUserByIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property reportedMessage (base name: "reported_message")', function() {
      // uncomment below and update the code to test the property reportedMessage
      //var instance = new SendbirdPlatformSdk.ReportUserByIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property channel (base name: "channel")', function() {
      // uncomment below and update the code to test the property channel
      //var instance = new SendbirdPlatformSdk.ReportUserByIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property reportDescription (base name: "report_description")', function() {
      // uncomment below and update the code to test the property reportDescription
      //var instance = new SendbirdPlatformSdk.ReportUserByIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "created_at")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instance = new SendbirdPlatformSdk.ReportUserByIdResponse();
      //expect(instance).to.be();
    });

  });

}));
