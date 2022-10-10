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
    instance = new SendbirdPlatformSdk.ModerationApi();
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

  describe('ModerationApi', function() {
    describe('banFromChannelsWithCustomChannelTypes', function() {
      it('should call banFromChannelsWithCustomChannelTypes successfully', function(done) {
        //uncomment below and update the code to test banFromChannelsWithCustomChannelTypes
        //instance.banFromChannelsWithCustomChannelTypes(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('blockUser', function() {
      it('should call blockUser successfully', function(done) {
        //uncomment below and update the code to test blockUser
        //instance.blockUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('gcBanUser', function() {
      it('should call gcBanUser successfully', function(done) {
        //uncomment below and update the code to test gcBanUser
        //instance.gcBanUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('gcFreezeChannel', function() {
      it('should call gcFreezeChannel successfully', function(done) {
        //uncomment below and update the code to test gcFreezeChannel
        //instance.gcFreezeChannel(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('gcListBannedUsers', function() {
      it('should call gcListBannedUsers successfully', function(done) {
        //uncomment below and update the code to test gcListBannedUsers
        //instance.gcListBannedUsers(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('gcListMutedUsers', function() {
      it('should call gcListMutedUsers successfully', function(done) {
        //uncomment below and update the code to test gcListMutedUsers
        //instance.gcListMutedUsers(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('gcMuteUser', function() {
      it('should call gcMuteUser successfully', function(done) {
        //uncomment below and update the code to test gcMuteUser
        //instance.gcMuteUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('gcUnbanUserById', function() {
      it('should call gcUnbanUserById successfully', function(done) {
        //uncomment below and update the code to test gcUnbanUserById
        //instance.gcUnbanUserById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('gcUnmuteUserById', function() {
      it('should call gcUnmuteUserById successfully', function(done) {
        //uncomment below and update the code to test gcUnmuteUserById
        //instance.gcUnmuteUserById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('gcUpdateBanById', function() {
      it('should call gcUpdateBanById successfully', function(done) {
        //uncomment below and update the code to test gcUpdateBanById
        //instance.gcUpdateBanById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('gcViewBanById', function() {
      it('should call gcViewBanById successfully', function(done) {
        //uncomment below and update the code to test gcViewBanById
        //instance.gcViewBanById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('gcViewMuteById', function() {
      it('should call gcViewMuteById successfully', function(done) {
        //uncomment below and update the code to test gcViewMuteById
        //instance.gcViewMuteById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listBannedChannels', function() {
      it('should call listBannedChannels successfully', function(done) {
        //uncomment below and update the code to test listBannedChannels
        //instance.listBannedChannels(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listBlockedUsers', function() {
      it('should call listBlockedUsers successfully', function(done) {
        //uncomment below and update the code to test listBlockedUsers
        //instance.listBlockedUsers(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listMutedChannels', function() {
      it('should call listMutedChannels successfully', function(done) {
        //uncomment below and update the code to test listMutedChannels
        //instance.listMutedChannels(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('muteInChannelsWithCustomChannelTypes', function() {
      it('should call muteInChannelsWithCustomChannelTypes successfully', function(done) {
        //uncomment below and update the code to test muteInChannelsWithCustomChannelTypes
        //instance.muteInChannelsWithCustomChannelTypes(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('ocBanUser', function() {
      it('should call ocBanUser successfully', function(done) {
        //uncomment below and update the code to test ocBanUser
        //instance.ocBanUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('ocFreezeChannel', function() {
      it('should call ocFreezeChannel successfully', function(done) {
        //uncomment below and update the code to test ocFreezeChannel
        //instance.ocFreezeChannel(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('ocListBannedUsers', function() {
      it('should call ocListBannedUsers successfully', function(done) {
        //uncomment below and update the code to test ocListBannedUsers
        //instance.ocListBannedUsers(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('ocListMutedUsers', function() {
      it('should call ocListMutedUsers successfully', function(done) {
        //uncomment below and update the code to test ocListMutedUsers
        //instance.ocListMutedUsers(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('ocMuteUser', function() {
      it('should call ocMuteUser successfully', function(done) {
        //uncomment below and update the code to test ocMuteUser
        //instance.ocMuteUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('ocUnbanUserById', function() {
      it('should call ocUnbanUserById successfully', function(done) {
        //uncomment below and update the code to test ocUnbanUserById
        //instance.ocUnbanUserById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('ocUnmuteUserById', function() {
      it('should call ocUnmuteUserById successfully', function(done) {
        //uncomment below and update the code to test ocUnmuteUserById
        //instance.ocUnmuteUserById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('ocUpdateBanById', function() {
      it('should call ocUpdateBanById successfully', function(done) {
        //uncomment below and update the code to test ocUpdateBanById
        //instance.ocUpdateBanById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('ocViewBanById', function() {
      it('should call ocViewBanById successfully', function(done) {
        //uncomment below and update the code to test ocViewBanById
        //instance.ocViewBanById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('ocViewMuteById', function() {
      it('should call ocViewMuteById successfully', function(done) {
        //uncomment below and update the code to test ocViewMuteById
        //instance.ocViewMuteById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('unblockUserById', function() {
      it('should call unblockUserById successfully', function(done) {
        //uncomment below and update the code to test unblockUserById
        //instance.unblockUserById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
