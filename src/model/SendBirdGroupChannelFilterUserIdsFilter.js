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
 * The SendBirdGroupChannelFilterUserIdsFilter model module.
 * @module model/SendBirdGroupChannelFilterUserIdsFilter
 * @version 1.0.0
 */
class SendBirdGroupChannelFilterUserIdsFilter {
    /**
     * Constructs a new <code>SendBirdGroupChannelFilterUserIdsFilter</code>.
     * @alias module:model/SendBirdGroupChannelFilterUserIdsFilter
     */
    constructor() { 
        
        SendBirdGroupChannelFilterUserIdsFilter.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SendBirdGroupChannelFilterUserIdsFilter</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SendBirdGroupChannelFilterUserIdsFilter} obj Optional instance to populate.
     * @return {module:model/SendBirdGroupChannelFilterUserIdsFilter} The populated <code>SendBirdGroupChannelFilterUserIdsFilter</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SendBirdGroupChannelFilterUserIdsFilter();

            if (data.hasOwnProperty('includeMode')) {
                obj['includeMode'] = ApiClient.convertToType(data['includeMode'], 'Boolean');
            }
            if (data.hasOwnProperty('queryType')) {
                obj['queryType'] = ApiClient.convertToType(data['queryType'], 'String');
            }
            if (data.hasOwnProperty('userIds')) {
                obj['userIds'] = ApiClient.convertToType(data['userIds'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} includeMode
 */
SendBirdGroupChannelFilterUserIdsFilter.prototype['includeMode'] = undefined;

/**
 * @member {module:model/SendBirdGroupChannelFilterUserIdsFilter.QueryTypeEnum} queryType
 */
SendBirdGroupChannelFilterUserIdsFilter.prototype['queryType'] = undefined;

/**
 * @member {Array.<String>} userIds
 */
SendBirdGroupChannelFilterUserIdsFilter.prototype['userIds'] = undefined;





/**
 * Allowed values for the <code>queryType</code> property.
 * @enum {String}
 * @readonly
 */
SendBirdGroupChannelFilterUserIdsFilter['QueryTypeEnum'] = {

    /**
     * value: "AND"
     * @const
     */
    "AND": "AND",

    /**
     * value: "OR"
     * @const
     */
    "OR": "OR"
};



export default SendBirdGroupChannelFilterUserIdsFilter;

