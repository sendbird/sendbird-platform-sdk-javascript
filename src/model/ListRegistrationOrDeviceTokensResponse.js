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
import SendBirdUser from './SendBirdUser';

/**
 * The ListRegistrationOrDeviceTokensResponse model module.
 * @module model/ListRegistrationOrDeviceTokensResponse
 * @version 1.0.1
 */
class ListRegistrationOrDeviceTokensResponse {
    /**
     * Constructs a new <code>ListRegistrationOrDeviceTokensResponse</code>.
     * @alias module:model/ListRegistrationOrDeviceTokensResponse
     */
    constructor() { 
        
        ListRegistrationOrDeviceTokensResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ListRegistrationOrDeviceTokensResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListRegistrationOrDeviceTokensResponse} obj Optional instance to populate.
     * @return {module:model/ListRegistrationOrDeviceTokensResponse} The populated <code>ListRegistrationOrDeviceTokensResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListRegistrationOrDeviceTokensResponse();

            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], ['String']);
            }
            if (data.hasOwnProperty('tokens')) {
                obj['tokens'] = ApiClient.convertToType(data['tokens'], ['String']);
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('user')) {
                obj['user'] = SendBirdUser.constructFromObject(data['user']);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<String>} token
 */
ListRegistrationOrDeviceTokensResponse.prototype['token'] = undefined;

/**
 * @member {Array.<String>} tokens
 */
ListRegistrationOrDeviceTokensResponse.prototype['tokens'] = undefined;

/**
 * @member {String} type
 */
ListRegistrationOrDeviceTokensResponse.prototype['type'] = undefined;

/**
 * @member {module:model/SendBirdUser} user
 */
ListRegistrationOrDeviceTokensResponse.prototype['user'] = undefined;






export default ListRegistrationOrDeviceTokensResponse;

