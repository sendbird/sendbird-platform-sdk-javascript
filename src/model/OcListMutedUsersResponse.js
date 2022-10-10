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
import SendBirdUser from './SendBirdUser';

/**
 * The OcListMutedUsersResponse model module.
 * @module model/OcListMutedUsersResponse
 * @version 0.0.14
 */
class OcListMutedUsersResponse {
    /**
     * Constructs a new <code>OcListMutedUsersResponse</code>.
     * @alias module:model/OcListMutedUsersResponse
     */
    constructor() { 
        
        OcListMutedUsersResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OcListMutedUsersResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OcListMutedUsersResponse} obj Optional instance to populate.
     * @return {module:model/OcListMutedUsersResponse} The populated <code>OcListMutedUsersResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OcListMutedUsersResponse();

            if (data.hasOwnProperty('muted_list')) {
                obj['muted_list'] = ApiClient.convertToType(data['muted_list'], [SendBirdUser]);
            }
            if (data.hasOwnProperty('total_mute_count')) {
                obj['total_mute_count'] = ApiClient.convertToType(data['total_mute_count'], 'Number');
            }
            if (data.hasOwnProperty('next')) {
                obj['next'] = ApiClient.convertToType(data['next'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/SendBirdUser>} muted_list
 */
OcListMutedUsersResponse.prototype['muted_list'] = undefined;

/**
 * @member {Number} total_mute_count
 */
OcListMutedUsersResponse.prototype['total_mute_count'] = undefined;

/**
 * @member {String} next
 */
OcListMutedUsersResponse.prototype['next'] = undefined;






export default OcListMutedUsersResponse;

