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
 * The ListUsersResponse model module.
 * @module model/ListUsersResponse
 * @version 0.0.13
 */
class ListUsersResponse {
    /**
     * Constructs a new <code>ListUsersResponse</code>.
     * @alias module:model/ListUsersResponse
     */
    constructor() { 
        
        ListUsersResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ListUsersResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListUsersResponse} obj Optional instance to populate.
     * @return {module:model/ListUsersResponse} The populated <code>ListUsersResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListUsersResponse();

            if (data.hasOwnProperty('users')) {
                obj['users'] = ApiClient.convertToType(data['users'], [SendBirdUser]);
            }
            if (data.hasOwnProperty('next')) {
                obj['next'] = ApiClient.convertToType(data['next'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/SendBirdUser>} users
 */
ListUsersResponse.prototype['users'] = undefined;

/**
 * @member {String} next
 */
ListUsersResponse.prototype['next'] = undefined;






export default ListUsersResponse;

