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

import ApiClient from '../ApiClient';

/**
 * The GcDeclineInvitationData model module.
 * @module model/GcDeclineInvitationData
 * @version 0.0.16
 */
class GcDeclineInvitationData {
    /**
     * Constructs a new <code>GcDeclineInvitationData</code>.
     * @alias module:model/GcDeclineInvitationData
     * @param channelUrl {String} Specifies the URL of the private group channel to decline an invitation from.
     * @param userId {String} Specifies the unique ID of the user to decline an invitation.
     */
    constructor(channelUrl, userId) { 
        
        GcDeclineInvitationData.initialize(this, channelUrl, userId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, channelUrl, userId) { 
        obj['channel_url'] = channelUrl;
        obj['user_id'] = userId;
    }

    /**
     * Constructs a <code>GcDeclineInvitationData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GcDeclineInvitationData} obj Optional instance to populate.
     * @return {module:model/GcDeclineInvitationData} The populated <code>GcDeclineInvitationData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GcDeclineInvitationData();

            if (data.hasOwnProperty('channel_url')) {
                obj['channel_url'] = ApiClient.convertToType(data['channel_url'], 'String');
            }
            if (data.hasOwnProperty('user_id')) {
                obj['user_id'] = ApiClient.convertToType(data['user_id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Specifies the URL of the private group channel to decline an invitation from.
 * @member {String} channel_url
 */
GcDeclineInvitationData.prototype['channel_url'] = undefined;

/**
 * Specifies the unique ID of the user to decline an invitation.
 * @member {String} user_id
 */
GcDeclineInvitationData.prototype['user_id'] = undefined;






export default GcDeclineInvitationData;

