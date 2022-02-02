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
import InlineResponse20022BannedChannels from './InlineResponse20022BannedChannels';

/**
 * The InlineResponse20022 model module.
 * @module model/InlineResponse20022
 * @version 1.0.0
 */
class InlineResponse20022 {
    /**
     * Constructs a new <code>InlineResponse20022</code>.
     * @alias module:model/InlineResponse20022
     */
    constructor() { 
        
        InlineResponse20022.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse20022</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20022} obj Optional instance to populate.
     * @return {module:model/InlineResponse20022} The populated <code>InlineResponse20022</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20022();

            if (data.hasOwnProperty('banned_channels')) {
                obj['banned_channels'] = ApiClient.convertToType(data['banned_channels'], [InlineResponse20022BannedChannels]);
            }
            if (data.hasOwnProperty('next')) {
                obj['next'] = ApiClient.convertToType(data['next'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/InlineResponse20022BannedChannels>} banned_channels
 */
InlineResponse20022.prototype['banned_channels'] = undefined;

/**
 * @member {String} next
 */
InlineResponse20022.prototype['next'] = undefined;






export default InlineResponse20022;

