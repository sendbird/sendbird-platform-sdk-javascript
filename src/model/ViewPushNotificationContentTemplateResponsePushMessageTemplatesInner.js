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
import ListPushNotificationContentTemplatesResponsePushMessageTemplatesInnerTemplate from './ListPushNotificationContentTemplatesResponsePushMessageTemplatesInnerTemplate';

/**
 * The ViewPushNotificationContentTemplateResponsePushMessageTemplatesInner model module.
 * @module model/ViewPushNotificationContentTemplateResponsePushMessageTemplatesInner
 * @version 0.0.13
 */
class ViewPushNotificationContentTemplateResponsePushMessageTemplatesInner {
    /**
     * Constructs a new <code>ViewPushNotificationContentTemplateResponsePushMessageTemplatesInner</code>.
     * @alias module:model/ViewPushNotificationContentTemplateResponsePushMessageTemplatesInner
     */
    constructor() { 
        
        ViewPushNotificationContentTemplateResponsePushMessageTemplatesInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ViewPushNotificationContentTemplateResponsePushMessageTemplatesInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ViewPushNotificationContentTemplateResponsePushMessageTemplatesInner} obj Optional instance to populate.
     * @return {module:model/ViewPushNotificationContentTemplateResponsePushMessageTemplatesInner} The populated <code>ViewPushNotificationContentTemplateResponsePushMessageTemplatesInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ViewPushNotificationContentTemplateResponsePushMessageTemplatesInner();

            if (data.hasOwnProperty('template_name')) {
                obj['template_name'] = ApiClient.convertToType(data['template_name'], 'String');
            }
            if (data.hasOwnProperty('template')) {
                obj['template'] = ListPushNotificationContentTemplatesResponsePushMessageTemplatesInnerTemplate.constructFromObject(data['template']);
            }
            if (data.hasOwnProperty('push_message_preview')) {
                obj['push_message_preview'] = ListPushNotificationContentTemplatesResponsePushMessageTemplatesInnerTemplate.constructFromObject(data['push_message_preview']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} template_name
 */
ViewPushNotificationContentTemplateResponsePushMessageTemplatesInner.prototype['template_name'] = undefined;

/**
 * @member {module:model/ListPushNotificationContentTemplatesResponsePushMessageTemplatesInnerTemplate} template
 */
ViewPushNotificationContentTemplateResponsePushMessageTemplatesInner.prototype['template'] = undefined;

/**
 * @member {module:model/ListPushNotificationContentTemplatesResponsePushMessageTemplatesInnerTemplate} push_message_preview
 */
ViewPushNotificationContentTemplateResponsePushMessageTemplatesInner.prototype['push_message_preview'] = undefined;






export default ViewPushNotificationContentTemplateResponsePushMessageTemplatesInner;

