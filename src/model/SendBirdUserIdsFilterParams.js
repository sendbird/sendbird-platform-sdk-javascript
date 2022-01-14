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
 * The SendBirdUserIdsFilterParams model module.
 * @module model/SendBirdUserIdsFilterParams
 * @version 1.0.0
 */
class SendBirdUserIdsFilterParams {
    /**
     * Constructs a new <code>SendBirdUserIdsFilterParams</code>.
     * @alias module:model/SendBirdUserIdsFilterParams
     */
    constructor() { 
        
        SendBirdUserIdsFilterParams.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SendBirdUserIdsFilterParams</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SendBirdUserIdsFilterParams} obj Optional instance to populate.
     * @return {module:model/SendBirdUserIdsFilterParams} The populated <code>SendBirdUserIdsFilterParams</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SendBirdUserIdsFilterParams();

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
SendBirdUserIdsFilterParams.prototype['includeMode'] = undefined;

/**
 * @member {module:model/SendBirdUserIdsFilterParams.QueryTypeEnum} queryType
 */
SendBirdUserIdsFilterParams.prototype['queryType'] = undefined;

/**
 * @member {Array.<String>} userIds
 */
SendBirdUserIdsFilterParams.prototype['userIds'] = undefined;





/**
 * Allowed values for the <code>queryType</code> property.
 * @enum {String}
 * @readonly
 */
SendBirdUserIdsFilterParams['QueryTypeEnum'] = {

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



export default SendBirdUserIdsFilterParams;

