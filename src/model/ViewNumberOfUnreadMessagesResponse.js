/**
 * Sendbird Platform SDK
 * Sendbird Platform API SDK  [https://sendbird.com/docs/chat/v3/platform-api/getting-started/prepare-to-use-api](https://sendbird.com/docs/chat/v3/platform-api/getting-started/prepare-to-use-api)  Contact Support:   Name: Sendbird   Email: [support@sendbird.com](https://mailto:support@sendbird.com)
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
 * The ViewNumberOfUnreadMessagesResponse model module.
 * @module model/ViewNumberOfUnreadMessagesResponse
 * @version 2.0.0
 */
class ViewNumberOfUnreadMessagesResponse {
    /**
     * Constructs a new <code>ViewNumberOfUnreadMessagesResponse</code>.
     * @alias module:model/ViewNumberOfUnreadMessagesResponse
     */
    constructor() { 
        
        ViewNumberOfUnreadMessagesResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ViewNumberOfUnreadMessagesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ViewNumberOfUnreadMessagesResponse} obj Optional instance to populate.
     * @return {module:model/ViewNumberOfUnreadMessagesResponse} The populated <code>ViewNumberOfUnreadMessagesResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ViewNumberOfUnreadMessagesResponse();

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
ViewNumberOfUnreadMessagesResponse.prototype['unread_count'] = undefined;






export default ViewNumberOfUnreadMessagesResponse;

