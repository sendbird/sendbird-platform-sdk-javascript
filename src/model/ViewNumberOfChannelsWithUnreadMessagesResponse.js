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
 * The ViewNumberOfChannelsWithUnreadMessagesResponse model module.
 * @module model/ViewNumberOfChannelsWithUnreadMessagesResponse
 * @version 1.0.0
 */
class ViewNumberOfChannelsWithUnreadMessagesResponse {
    /**
     * Constructs a new <code>ViewNumberOfChannelsWithUnreadMessagesResponse</code>.
     * @alias module:model/ViewNumberOfChannelsWithUnreadMessagesResponse
     */
    constructor() { 
        
        ViewNumberOfChannelsWithUnreadMessagesResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ViewNumberOfChannelsWithUnreadMessagesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ViewNumberOfChannelsWithUnreadMessagesResponse} obj Optional instance to populate.
     * @return {module:model/ViewNumberOfChannelsWithUnreadMessagesResponse} The populated <code>ViewNumberOfChannelsWithUnreadMessagesResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ViewNumberOfChannelsWithUnreadMessagesResponse();

            if (data.hasOwnProperty('unread_count')) {
                obj['unread_count'] = ApiClient.convertToType(data['unread_count'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} unread_count
 */
ViewNumberOfChannelsWithUnreadMessagesResponse.prototype['unread_count'] = undefined;






export default ViewNumberOfChannelsWithUnreadMessagesResponse;
