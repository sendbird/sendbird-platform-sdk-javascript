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
 * The AddRegistrationOrDeviceTokenData model module.
 * @module model/AddRegistrationOrDeviceTokenData
 * @version 0.0.14
 */
class AddRegistrationOrDeviceTokenData {
    /**
     * Constructs a new <code>AddRegistrationOrDeviceTokenData</code>.
     * @alias module:model/AddRegistrationOrDeviceTokenData
     * @param gcmRegToken {String} Specifies a registration token for Firebase Cloud Messaging (formerly [Google Cloud Messaging](https://developers.google.com/cloud-messaging/)).
     * @param huaweiDeviceToken {String} Specifies a device token for Huawei Mobile Services.
     * @param apnsDeviceToken {String} Specifies a device token for Apple Push Notification Service.
     */
    constructor(gcmRegToken, huaweiDeviceToken, apnsDeviceToken) { 
        
        AddRegistrationOrDeviceTokenData.initialize(this, gcmRegToken, huaweiDeviceToken, apnsDeviceToken);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, gcmRegToken, huaweiDeviceToken, apnsDeviceToken) { 
        obj['gcm_reg_token'] = gcmRegToken;
        obj['huawei_device_token'] = huaweiDeviceToken;
        obj['apns_device_token'] = apnsDeviceToken;
    }

    /**
     * Constructs a <code>AddRegistrationOrDeviceTokenData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddRegistrationOrDeviceTokenData} obj Optional instance to populate.
     * @return {module:model/AddRegistrationOrDeviceTokenData} The populated <code>AddRegistrationOrDeviceTokenData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddRegistrationOrDeviceTokenData();

            if (data.hasOwnProperty('gcm_reg_token')) {
                obj['gcm_reg_token'] = ApiClient.convertToType(data['gcm_reg_token'], 'String');
            }
            if (data.hasOwnProperty('huawei_device_token')) {
                obj['huawei_device_token'] = ApiClient.convertToType(data['huawei_device_token'], 'String');
            }
            if (data.hasOwnProperty('apns_device_token')) {
                obj['apns_device_token'] = ApiClient.convertToType(data['apns_device_token'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Specifies a registration token for Firebase Cloud Messaging (formerly [Google Cloud Messaging](https://developers.google.com/cloud-messaging/)).
 * @member {String} gcm_reg_token
 */
AddRegistrationOrDeviceTokenData.prototype['gcm_reg_token'] = undefined;

/**
 * Specifies a device token for Huawei Mobile Services.
 * @member {String} huawei_device_token
 */
AddRegistrationOrDeviceTokenData.prototype['huawei_device_token'] = undefined;

/**
 * Specifies a device token for Apple Push Notification Service.
 * @member {String} apns_device_token
 */
AddRegistrationOrDeviceTokenData.prototype['apns_device_token'] = undefined;






export default AddRegistrationOrDeviceTokenData;

