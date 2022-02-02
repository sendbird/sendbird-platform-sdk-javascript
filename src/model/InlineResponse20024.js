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
 * The InlineResponse20024 model module.
 * @module model/InlineResponse20024
 * @version 1.0.0
 */
class InlineResponse20024 {
    /**
     * Constructs a new <code>InlineResponse20024</code>.
     * @alias module:model/InlineResponse20024
     */
    constructor() { 
        
        InlineResponse20024.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse20024</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20024} obj Optional instance to populate.
     * @return {module:model/InlineResponse20024} The populated <code>InlineResponse20024</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20024();

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
 * @member {Array.<String>} tokens
 */
InlineResponse20024.prototype['tokens'] = undefined;

/**
 * @member {String} type
 */
InlineResponse20024.prototype['type'] = undefined;

/**
 * @member {module:model/SendBirdUser} user
 */
InlineResponse20024.prototype['user'] = undefined;






export default InlineResponse20024;

