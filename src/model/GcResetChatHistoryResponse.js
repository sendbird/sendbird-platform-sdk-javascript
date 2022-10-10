/**
 * Sendbird Platform SDK
 * Sendbird Platform API SDK  https://sendbird.com/docs/chat/v3/platform-api/getting-started/prepare-to-use-api
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support@sendbird.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The GcResetChatHistoryResponse model module.
 * @module model/GcResetChatHistoryResponse
 * @version 0.0.14
 */
class GcResetChatHistoryResponse {
    /**
     * Constructs a new <code>GcResetChatHistoryResponse</code>.
     * @alias module:model/GcResetChatHistoryResponse
     */
    constructor() { 
        
        GcResetChatHistoryResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GcResetChatHistoryResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GcResetChatHistoryResponse} obj Optional instance to populate.
     * @return {module:model/GcResetChatHistoryResponse} The populated <code>GcResetChatHistoryResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GcResetChatHistoryResponse();

            if (data.hasOwnProperty('ts_message_offset')) {
                obj['ts_message_offset'] = ApiClient.convertToType(data['ts_message_offset'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} ts_message_offset
 */
GcResetChatHistoryResponse.prototype['ts_message_offset'] = undefined;






export default GcResetChatHistoryResponse;

