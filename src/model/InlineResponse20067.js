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
import InlineResponse20067Webhook from './InlineResponse20067Webhook';

/**
 * The InlineResponse20067 model module.
 * @module model/InlineResponse20067
 * @version 1.0.0
 */
class InlineResponse20067 {
    /**
     * Constructs a new <code>InlineResponse20067</code>.
     * @alias module:model/InlineResponse20067
     */
    constructor() { 
        
        InlineResponse20067.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse20067</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20067} obj Optional instance to populate.
     * @return {module:model/InlineResponse20067} The populated <code>InlineResponse20067</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20067();

            if (data.hasOwnProperty('webhook')) {
                obj['webhook'] = InlineResponse20067Webhook.constructFromObject(data['webhook']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/InlineResponse20067Webhook} webhook
 */
InlineResponse20067.prototype['webhook'] = undefined;






export default InlineResponse20067;

