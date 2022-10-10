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
 * The ListPushNotificationContentTemplatesResponsePushMessageTemplatesInnerTemplate model module.
 * @module model/ListPushNotificationContentTemplatesResponsePushMessageTemplatesInnerTemplate
 * @version 0.0.14
 */
class ListPushNotificationContentTemplatesResponsePushMessageTemplatesInnerTemplate {
    /**
     * Constructs a new <code>ListPushNotificationContentTemplatesResponsePushMessageTemplatesInnerTemplate</code>.
     * @alias module:model/ListPushNotificationContentTemplatesResponsePushMessageTemplatesInnerTemplate
     */
    constructor() { 
        
        ListPushNotificationContentTemplatesResponsePushMessageTemplatesInnerTemplate.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ListPushNotificationContentTemplatesResponsePushMessageTemplatesInnerTemplate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListPushNotificationContentTemplatesResponsePushMessageTemplatesInnerTemplate} obj Optional instance to populate.
     * @return {module:model/ListPushNotificationContentTemplatesResponsePushMessageTemplatesInnerTemplate} The populated <code>ListPushNotificationContentTemplatesResponsePushMessageTemplatesInnerTemplate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListPushNotificationContentTemplatesResponsePushMessageTemplatesInnerTemplate();

            if (data.hasOwnProperty('MESG')) {
                obj['MESG'] = ApiClient.convertToType(data['MESG'], 'String');
            }
            if (data.hasOwnProperty('FILE')) {
                obj['FILE'] = ApiClient.convertToType(data['FILE'], 'String');
            }
            if (data.hasOwnProperty('ADMM')) {
                obj['ADMM'] = ApiClient.convertToType(data['ADMM'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} MESG
 */
ListPushNotificationContentTemplatesResponsePushMessageTemplatesInnerTemplate.prototype['MESG'] = undefined;

/**
 * @member {String} FILE
 */
ListPushNotificationContentTemplatesResponsePushMessageTemplatesInnerTemplate.prototype['FILE'] = undefined;

/**
 * @member {String} ADMM
 */
ListPushNotificationContentTemplatesResponsePushMessageTemplatesInnerTemplate.prototype['ADMM'] = undefined;






export default ListPushNotificationContentTemplatesResponsePushMessageTemplatesInnerTemplate;

