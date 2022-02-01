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
 * The InlineResponse20040Message model module.
 * @module model/InlineResponse20040Message
 * @version 1.0.0
 */
class InlineResponse20040Message {
    /**
     * Constructs a new <code>InlineResponse20040Message</code>.
     * @alias module:model/InlineResponse20040Message
     */
    constructor() { 
        
        InlineResponse20040Message.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse20040Message</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20040Message} obj Optional instance to populate.
     * @return {module:model/InlineResponse20040Message} The populated <code>InlineResponse20040Message</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20040Message();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('custom_type')) {
                obj['custom_type'] = ApiClient.convertToType(data['custom_type'], 'String');
            }
            if (data.hasOwnProperty('user_id')) {
                obj['user_id'] = ApiClient.convertToType(data['user_id'], 'String');
            }
            if (data.hasOwnProperty('content')) {
                obj['content'] = ApiClient.convertToType(data['content'], 'String');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} type
 */
InlineResponse20040Message.prototype['type'] = undefined;

/**
 * @member {String} custom_type
 */
InlineResponse20040Message.prototype['custom_type'] = undefined;

/**
 * @member {String} user_id
 */
InlineResponse20040Message.prototype['user_id'] = undefined;

/**
 * @member {String} content
 */
InlineResponse20040Message.prototype['content'] = undefined;

/**
 * @member {String} data
 */
InlineResponse20040Message.prototype['data'] = undefined;






export default InlineResponse20040Message;
