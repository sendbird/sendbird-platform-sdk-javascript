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
 * The InlineResponse20050 model module.
 * @module model/InlineResponse20050
 * @version 1.0.0
 */
class InlineResponse20050 {
    /**
     * Constructs a new <code>InlineResponse20050</code>.
     * @alias module:model/InlineResponse20050
     */
    constructor() { 
        
        InlineResponse20050.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse20050</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20050} obj Optional instance to populate.
     * @return {module:model/InlineResponse20050} The populated <code>InlineResponse20050</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20050();

            if (data.hasOwnProperty('ts')) {
                obj['ts'] = ApiClient.convertToType(data['ts'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} ts
 */
InlineResponse20050.prototype['ts'] = undefined;






export default InlineResponse20050;

