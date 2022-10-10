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
 * The GcViewNumberOfEachMembersUnreadMessagesResponse model module.
 * @module model/GcViewNumberOfEachMembersUnreadMessagesResponse
 * @version 0.0.14
 */
class GcViewNumberOfEachMembersUnreadMessagesResponse {
    /**
     * Constructs a new <code>GcViewNumberOfEachMembersUnreadMessagesResponse</code>.
     * @alias module:model/GcViewNumberOfEachMembersUnreadMessagesResponse
     */
    constructor() { 
        
        GcViewNumberOfEachMembersUnreadMessagesResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GcViewNumberOfEachMembersUnreadMessagesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GcViewNumberOfEachMembersUnreadMessagesResponse} obj Optional instance to populate.
     * @return {module:model/GcViewNumberOfEachMembersUnreadMessagesResponse} The populated <code>GcViewNumberOfEachMembersUnreadMessagesResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GcViewNumberOfEachMembersUnreadMessagesResponse();

            if (data.hasOwnProperty('unread')) {
                obj['unread'] = ApiClient.convertToType(data['unread'], {'String': 'Number'});
            }
        }
        return obj;
    }


}

/**
 * @member {Object.<String, Number>} unread
 */
GcViewNumberOfEachMembersUnreadMessagesResponse.prototype['unread'] = undefined;






export default GcViewNumberOfEachMembersUnreadMessagesResponse;

