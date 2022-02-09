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
 * The ListPushNotificationContentTemplatesResponseTemplate model module.
 * @module model/ListPushNotificationContentTemplatesResponseTemplate
 * @version 1.0.0
 */
class ListPushNotificationContentTemplatesResponseTemplate {
    /**
     * Constructs a new <code>ListPushNotificationContentTemplatesResponseTemplate</code>.
     * @alias module:model/ListPushNotificationContentTemplatesResponseTemplate
     */
    constructor() { 
        
        ListPushNotificationContentTemplatesResponseTemplate.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ListPushNotificationContentTemplatesResponseTemplate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListPushNotificationContentTemplatesResponseTemplate} obj Optional instance to populate.
     * @return {module:model/ListPushNotificationContentTemplatesResponseTemplate} The populated <code>ListPushNotificationContentTemplatesResponseTemplate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListPushNotificationContentTemplatesResponseTemplate();

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
ListPushNotificationContentTemplatesResponseTemplate.prototype['MESG'] = undefined;

/**
 * @member {String} FILE
 */
ListPushNotificationContentTemplatesResponseTemplate.prototype['FILE'] = undefined;

/**
 * @member {String} ADMM
 */
ListPushNotificationContentTemplatesResponseTemplate.prototype['ADMM'] = undefined;






export default ListPushNotificationContentTemplatesResponseTemplate;

