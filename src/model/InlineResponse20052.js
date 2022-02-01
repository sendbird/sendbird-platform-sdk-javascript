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
 * The InlineResponse20052 model module.
 * @module model/InlineResponse20052
 * @version 1.0.0
 */
class InlineResponse20052 {
    /**
     * Constructs a new <code>InlineResponse20052</code>.
     * @alias module:model/InlineResponse20052
     */
    constructor() { 
        
        InlineResponse20052.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse20052</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20052} obj Optional instance to populate.
     * @return {module:model/InlineResponse20052} The populated <code>InlineResponse20052</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20052();

            if (data.hasOwnProperty('reactions')) {
                obj['reactions'] = ApiClient.convertToType(data['reactions'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} reactions
 */
InlineResponse20052.prototype['reactions'] = undefined;






export default InlineResponse20052;
