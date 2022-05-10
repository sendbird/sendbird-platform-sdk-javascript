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
import ViewPushNotificationContentTemplateResponsePushMessageTemplates from './ViewPushNotificationContentTemplateResponsePushMessageTemplates';

/**
 * The UpdatePushNotificationContentTemplateResponse model module.
 * @module model/UpdatePushNotificationContentTemplateResponse
 * @version 1.0.1
 */
class UpdatePushNotificationContentTemplateResponse {
    /**
     * Constructs a new <code>UpdatePushNotificationContentTemplateResponse</code>.
     * @alias module:model/UpdatePushNotificationContentTemplateResponse
     */
    constructor() { 
        
        UpdatePushNotificationContentTemplateResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdatePushNotificationContentTemplateResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdatePushNotificationContentTemplateResponse} obj Optional instance to populate.
     * @return {module:model/UpdatePushNotificationContentTemplateResponse} The populated <code>UpdatePushNotificationContentTemplateResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdatePushNotificationContentTemplateResponse();

            if (data.hasOwnProperty('push_message_templates')) {
                obj['push_message_templates'] = ApiClient.convertToType(data['push_message_templates'], [ViewPushNotificationContentTemplateResponsePushMessageTemplates]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/ViewPushNotificationContentTemplateResponsePushMessageTemplates>} push_message_templates
 */
UpdatePushNotificationContentTemplateResponse.prototype['push_message_templates'] = undefined;






export default UpdatePushNotificationContentTemplateResponse;

