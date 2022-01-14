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

/**
 * The SendBirdSearchFilterParams model module.
 * @module model/SendBirdSearchFilterParams
 * @version 1.0.0
 */
class SendBirdSearchFilterParams {
    /**
     * Constructs a new <code>SendBirdSearchFilterParams</code>.
     * @alias module:model/SendBirdSearchFilterParams
     */
    constructor() { 
        
        SendBirdSearchFilterParams.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SendBirdSearchFilterParams</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SendBirdSearchFilterParams} obj Optional instance to populate.
     * @return {module:model/SendBirdSearchFilterParams} The populated <code>SendBirdSearchFilterParams</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SendBirdSearchFilterParams();

            if (data.hasOwnProperty('searchFields')) {
                obj['searchFields'] = ApiClient.convertToType(data['searchFields'], ['String']);
            }
            if (data.hasOwnProperty('searchQuery')) {
                obj['searchQuery'] = ApiClient.convertToType(data['searchQuery'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/SendBirdSearchFilterParams.SearchFieldsEnum>} searchFields
 */
SendBirdSearchFilterParams.prototype['searchFields'] = undefined;

/**
 * @member {String} searchQuery
 */
SendBirdSearchFilterParams.prototype['searchQuery'] = undefined;





/**
 * Allowed values for the <code>searchFields</code> property.
 * @enum {String}
 * @readonly
 */
SendBirdSearchFilterParams['SearchFieldsEnum'] = {

    /**
     * value: "channel_name"
     * @const
     */
    "channel_name": "channel_name",

    /**
     * value: "member_nickname"
     * @const
     */
    "member_nickname": "member_nickname"
};



export default SendBirdSearchFilterParams;

