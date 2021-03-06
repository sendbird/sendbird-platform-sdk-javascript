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
import ListPushNotificationContentTemplatesResponsePushMessageTemplates from './ListPushNotificationContentTemplatesResponsePushMessageTemplates';

/**
 * The ListPushNotificationContentTemplatesResponse model module.
 * @module model/ListPushNotificationContentTemplatesResponse
 * @version 1.0.3
 */
class ListPushNotificationContentTemplatesResponse {
    /**
     * Constructs a new <code>ListPushNotificationContentTemplatesResponse</code>.
     * @alias module:model/ListPushNotificationContentTemplatesResponse
     */
    constructor() { 
        
        ListPushNotificationContentTemplatesResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ListPushNotificationContentTemplatesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListPushNotificationContentTemplatesResponse} obj Optional instance to populate.
     * @return {module:model/ListPushNotificationContentTemplatesResponse} The populated <code>ListPushNotificationContentTemplatesResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListPushNotificationContentTemplatesResponse();

            if (data.hasOwnProperty('push_message_templates')) {
                obj['push_message_templates'] = ApiClient.convertToType(data['push_message_templates'], [ListPushNotificationContentTemplatesResponsePushMessageTemplates]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/ListPushNotificationContentTemplatesResponsePushMessageTemplates>} push_message_templates
 */
ListPushNotificationContentTemplatesResponse.prototype['push_message_templates'] = undefined;






export default ListPushNotificationContentTemplatesResponse;

