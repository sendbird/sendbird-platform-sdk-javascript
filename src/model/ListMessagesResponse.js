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
import ListMessagesResponseMessages from './ListMessagesResponseMessages';

/**
 * The ListMessagesResponse model module.
 * @module model/ListMessagesResponse
 * @version 1.0.0
 */
class ListMessagesResponse {
    /**
     * Constructs a new <code>ListMessagesResponse</code>.
     * @alias module:model/ListMessagesResponse
     */
    constructor() { 
        
        ListMessagesResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ListMessagesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListMessagesResponse} obj Optional instance to populate.
     * @return {module:model/ListMessagesResponse} The populated <code>ListMessagesResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListMessagesResponse();

            if (data.hasOwnProperty('messages')) {
                obj['messages'] = ApiClient.convertToType(data['messages'], [ListMessagesResponseMessages]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/ListMessagesResponseMessages>} messages
 */
ListMessagesResponse.prototype['messages'] = undefined;






export default ListMessagesResponse;
