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
 * The UpdateHmsPushConfigurationByIdData model module.
 * @module model/UpdateHmsPushConfigurationByIdData
 * @version 1.0.1
 */
class UpdateHmsPushConfigurationByIdData {
    /**
     * Constructs a new <code>UpdateHmsPushConfigurationByIdData</code>.
     * @alias module:model/UpdateHmsPushConfigurationByIdData
     * @param providerId {String} Specifies the provider ID of the push configuration to update.
     * @param huaweiAppId {String} Specifies the unique ID of application for HMS to update.
     * @param huaweiAppSecret {String} Specifies the secret key of the application to update.
     * @param pushSound {String} Specifies the name of a sound file to be played when a push notification is delivered to your client app. The file should be located in the `/res/raw` folder.
     */
    constructor(providerId, huaweiAppId, huaweiAppSecret, pushSound) { 
        
        UpdateHmsPushConfigurationByIdData.initialize(this, providerId, huaweiAppId, huaweiAppSecret, pushSound);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, providerId, huaweiAppId, huaweiAppSecret, pushSound) { 
        obj['provider_id'] = providerId;
        obj['huawei_app_id'] = huaweiAppId;
        obj['huawei_app_secret'] = huaweiAppSecret;
        obj['push_sound'] = pushSound;
    }

    /**
     * Constructs a <code>UpdateHmsPushConfigurationByIdData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateHmsPushConfigurationByIdData} obj Optional instance to populate.
     * @return {module:model/UpdateHmsPushConfigurationByIdData} The populated <code>UpdateHmsPushConfigurationByIdData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateHmsPushConfigurationByIdData();

            if (data.hasOwnProperty('provider_id')) {
                obj['provider_id'] = ApiClient.convertToType(data['provider_id'], 'String');
            }
            if (data.hasOwnProperty('huawei_app_id')) {
                obj['huawei_app_id'] = ApiClient.convertToType(data['huawei_app_id'], 'String');
            }
            if (data.hasOwnProperty('huawei_app_secret')) {
                obj['huawei_app_secret'] = ApiClient.convertToType(data['huawei_app_secret'], 'String');
            }
            if (data.hasOwnProperty('push_sound')) {
                obj['push_sound'] = ApiClient.convertToType(data['push_sound'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Specifies the provider ID of the push configuration to update.
 * @member {String} provider_id
 */
UpdateHmsPushConfigurationByIdData.prototype['provider_id'] = undefined;

/**
 * Specifies the unique ID of application for HMS to update.
 * @member {String} huawei_app_id
 */
UpdateHmsPushConfigurationByIdData.prototype['huawei_app_id'] = undefined;

/**
 * Specifies the secret key of the application to update.
 * @member {String} huawei_app_secret
 */
UpdateHmsPushConfigurationByIdData.prototype['huawei_app_secret'] = undefined;

/**
 * Specifies the name of a sound file to be played when a push notification is delivered to your client app. The file should be located in the `/res/raw` folder.
 * @member {String} push_sound
 */
UpdateHmsPushConfigurationByIdData.prototype['push_sound'] = undefined;






export default UpdateHmsPushConfigurationByIdData;

