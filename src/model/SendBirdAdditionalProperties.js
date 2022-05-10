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
 * The SendBirdAdditionalProperties model module.
 * @module model/SendBirdAdditionalProperties
 * @version 1.0.1
 */
class SendBirdAdditionalProperties {
    /**
     * Constructs a new <code>SendBirdAdditionalProperties</code>.
     * @alias module:model/SendBirdAdditionalProperties
     */
    constructor() { 
        
        SendBirdAdditionalProperties.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SendBirdAdditionalProperties</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SendBirdAdditionalProperties} obj Optional instance to populate.
     * @return {module:model/SendBirdAdditionalProperties} The populated <code>SendBirdAdditionalProperties</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SendBirdAdditionalProperties();

        }
        return obj;
    }


}






export default SendBirdAdditionalProperties;

