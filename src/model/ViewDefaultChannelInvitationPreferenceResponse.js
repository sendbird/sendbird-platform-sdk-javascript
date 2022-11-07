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
 * The ViewDefaultChannelInvitationPreferenceResponse model module.
 * @module model/ViewDefaultChannelInvitationPreferenceResponse
 * @version 0.0.16
 */
class ViewDefaultChannelInvitationPreferenceResponse {
    /**
     * Constructs a new <code>ViewDefaultChannelInvitationPreferenceResponse</code>.
     * @alias module:model/ViewDefaultChannelInvitationPreferenceResponse
     */
    constructor() { 
        
        ViewDefaultChannelInvitationPreferenceResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ViewDefaultChannelInvitationPreferenceResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ViewDefaultChannelInvitationPreferenceResponse} obj Optional instance to populate.
     * @return {module:model/ViewDefaultChannelInvitationPreferenceResponse} The populated <code>ViewDefaultChannelInvitationPreferenceResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ViewDefaultChannelInvitationPreferenceResponse();

            if (data.hasOwnProperty('auto_accept')) {
                obj['auto_accept'] = ApiClient.convertToType(data['auto_accept'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} auto_accept
 */
ViewDefaultChannelInvitationPreferenceResponse.prototype['auto_accept'] = undefined;






export default ViewDefaultChannelInvitationPreferenceResponse;

