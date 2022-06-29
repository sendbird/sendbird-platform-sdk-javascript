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
    instance = new SendbirdPlatformSdk.StatisticsApi();
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

  describe('StatisticsApi', function() {
    describe('retrieveAdvancedAnalyticsMetrics', function() {
      it('should call retrieveAdvancedAnalyticsMetrics successfully', function(done) {
        //uncomment below and update the code to test retrieveAdvancedAnalyticsMetrics
        //instance.retrieveAdvancedAnalyticsMetrics(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('viewNumberOfConcurrentConnections', function() {
      it('should call viewNumberOfConcurrentConnections successfully', function(done) {
        //uncomment below and update the code to test viewNumberOfConcurrentConnections
        //instance.viewNumberOfConcurrentConnections(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('viewNumberOfDailyActiveUsers', function() {
      it('should call viewNumberOfDailyActiveUsers successfully', function(done) {
        //uncomment below and update the code to test viewNumberOfDailyActiveUsers
        //instance.viewNumberOfDailyActiveUsers(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('viewNumberOfMonthlyActiveUsers', function() {
      it('should call viewNumberOfMonthlyActiveUsers successfully', function(done) {
        //uncomment below and update the code to test viewNumberOfMonthlyActiveUsers
        //instance.viewNumberOfMonthlyActiveUsers(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('viewNumberOfPeakConnections', function() {
      it('should call viewNumberOfPeakConnections successfully', function(done) {
        //uncomment below and update the code to test viewNumberOfPeakConnections
        //instance.viewNumberOfPeakConnections(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
