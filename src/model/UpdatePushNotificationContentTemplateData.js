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
 * The UpdatePushNotificationContentTemplateData model module.
 * @module model/UpdatePushNotificationContentTemplateData
 * @version 0.0.16
 */
class UpdatePushNotificationContentTemplateData {
    /**
     * Constructs a new <code>UpdatePushNotificationContentTemplateData</code>.
     * @alias module:model/UpdatePushNotificationContentTemplateData
     * @param templateName {String} Specifies the name of a push notification content template to update. Acceptable values are default and alternative.
     * @param template {String} The push notification content template of which content types to be updated and their detailed format.
     * @param templateMESG {String} Specifies a format for text messages. We support customization of two fields, which are the sender_name and message. These fields will be replaced with actual corresponding values when sending notification requests to FCM, HMS, or APNs.
     * @param templateFILE {String} Specifies a format for file messages. We support customization with variables including filename and file_type_friendly. When sending notification requests to FCM, HMS, or APNs, the filename will be replaced with the corresponding string value while the file_type_friendly will indicate the type of the file sent, such as `Audio`, `Image`, and `Video`.
     * @param templateADMN {String} Specifies a format for admin messages. We support customization of one field, which is the message. This field will be replaced with actual corresponding values when sending notification requests to FCM, HMS, or APNs.
     */
    constructor(templateName, template, templateMESG, templateFILE, templateADMN) { 
        
        UpdatePushNotificationContentTemplateData.initialize(this, templateName, template, templateMESG, templateFILE, templateADMN);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, templateName, template, templateMESG, templateFILE, templateADMN) { 
        obj['template_name'] = templateName;
        obj['template'] = template;
        obj['template.MESG'] = templateMESG;
        obj['template.FILE'] = templateFILE;
        obj['template.ADMN'] = templateADMN;
    }

    /**
     * Constructs a <code>UpdatePushNotificationContentTemplateData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdatePushNotificationContentTemplateData} obj Optional instance to populate.
     * @return {module:model/UpdatePushNotificationContentTemplateData} The populated <code>UpdatePushNotificationContentTemplateData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdatePushNotificationContentTemplateData();

            if (data.hasOwnProperty('template_name')) {
                obj['template_name'] = ApiClient.convertToType(data['template_name'], 'String');
            }
            if (data.hasOwnProperty('template')) {
                obj['template'] = ApiClient.convertToType(data['template'], 'String');
            }
            if (data.hasOwnProperty('template.MESG')) {
                obj['template.MESG'] = ApiClient.convertToType(data['template.MESG'], 'String');
            }
            if (data.hasOwnProperty('template.FILE')) {
                obj['template.FILE'] = ApiClient.convertToType(data['template.FILE'], 'String');
            }
            if (data.hasOwnProperty('template.ADMN')) {
                obj['template.ADMN'] = ApiClient.convertToType(data['template.ADMN'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Specifies the name of a push notification content template to update. Acceptable values are default and alternative.
 * @member {String} template_name
 */
UpdatePushNotificationContentTemplateData.prototype['template_name'] = undefined;

/**
 * The push notification content template of which content types to be updated and their detailed format.
 * @member {String} template
 */
UpdatePushNotificationContentTemplateData.prototype['template'] = undefined;

/**
 * Specifies a format for text messages. We support customization of two fields, which are the sender_name and message. These fields will be replaced with actual corresponding values when sending notification requests to FCM, HMS, or APNs.
 * @member {String} template.MESG
 */
UpdatePushNotificationContentTemplateData.prototype['template.MESG'] = undefined;

/**
 * Specifies a format for file messages. We support customization with variables including filename and file_type_friendly. When sending notification requests to FCM, HMS, or APNs, the filename will be replaced with the corresponding string value while the file_type_friendly will indicate the type of the file sent, such as `Audio`, `Image`, and `Video`.
 * @member {String} template.FILE
 */
UpdatePushNotificationContentTemplateData.prototype['template.FILE'] = undefined;

/**
 * Specifies a format for admin messages. We support customization of one field, which is the message. This field will be replaced with actual corresponding values when sending notification requests to FCM, HMS, or APNs.
 * @member {String} template.ADMN
 */
UpdatePushNotificationContentTemplateData.prototype['template.ADMN'] = undefined;






export default UpdatePushNotificationContentTemplateData;

