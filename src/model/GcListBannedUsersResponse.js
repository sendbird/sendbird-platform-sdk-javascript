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

import ApiClient from '../ApiClient';
import OcListBannedUsersResponseBannedList from './OcListBannedUsersResponseBannedList';

/**
 * The GcListBannedUsersResponse model module.
 * @module model/GcListBannedUsersResponse
 * @version 1.0.3
 */
class GcListBannedUsersResponse {
    /**
     * Constructs a new <code>GcListBannedUsersResponse</code>.
     * @alias module:model/GcListBannedUsersResponse
     */
    constructor() { 
        
        GcListBannedUsersResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GcListBannedUsersResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GcListBannedUsersResponse} obj Optional instance to populate.
     * @return {module:model/GcListBannedUsersResponse} The populated <code>GcListBannedUsersResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GcListBannedUsersResponse();

            if (data.hasOwnProperty('banned_list')) {
                obj['banned_list'] = ApiClient.convertToType(data['banned_list'], [OcListBannedUsersResponseBannedList]);
            }
            if (data.hasOwnProperty('total_ban_count')) {
                obj['total_ban_count'] = ApiClient.convertToType(data['total_ban_count'], 'Number');
            }
            if (data.hasOwnProperty('next')) {
                obj['next'] = ApiClient.convertToType(data['next'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/OcListBannedUsersResponseBannedList>} banned_list
 */
GcListBannedUsersResponse.prototype['banned_list'] = undefined;

/**
 * @member {Number} total_ban_count
 */
GcListBannedUsersResponse.prototype['total_ban_count'] = undefined;

/**
 * @member {String} next
 */
GcListBannedUsersResponse.prototype['next'] = undefined;






export default GcListBannedUsersResponse;

