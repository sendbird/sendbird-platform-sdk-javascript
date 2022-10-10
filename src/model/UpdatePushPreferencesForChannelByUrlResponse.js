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
 * The UpdatePushPreferencesForChannelByUrlResponse model module.
 * @module model/UpdatePushPreferencesForChannelByUrlResponse
 * @version 0.0.13
 */
class UpdatePushPreferencesForChannelByUrlResponse {
    /**
     * Constructs a new <code>UpdatePushPreferencesForChannelByUrlResponse</code>.
     * @alias module:model/UpdatePushPreferencesForChannelByUrlResponse
     */
    constructor() { 
        
        UpdatePushPreferencesForChannelByUrlResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdatePushPreferencesForChannelByUrlResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdatePushPreferencesForChannelByUrlResponse} obj Optional instance to populate.
     * @return {module:model/UpdatePushPreferencesForChannelByUrlResponse} The populated <code>UpdatePushPreferencesForChannelByUrlResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdatePushPreferencesForChannelByUrlResponse();

            if (data.hasOwnProperty('push_trigger_option')) {
                obj['push_trigger_option'] = ApiClient.convertToType(data['push_trigger_option'], 'String');
            }
            if (data.hasOwnProperty('do_not_disturb')) {
                obj['do_not_disturb'] = ApiClient.convertToType(data['do_not_disturb'], 'Boolean');
            }
            if (data.hasOwnProperty('start_hour')) {
                obj['start_hour'] = ApiClient.convertToType(data['start_hour'], 'Number');
            }
            if (data.hasOwnProperty('start_min')) {
                obj['start_min'] = ApiClient.convertToType(data['start_min'], 'Number');
            }
            if (data.hasOwnProperty('end_hour')) {
                obj['end_hour'] = ApiClient.convertToType(data['end_hour'], 'Number');
            }
            if (data.hasOwnProperty('end_min')) {
                obj['end_min'] = ApiClient.convertToType(data['end_min'], 'Number');
            }
            if (data.hasOwnProperty('snooze_enabled')) {
                obj['snooze_enabled'] = ApiClient.convertToType(data['snooze_enabled'], 'Boolean');
            }
            if (data.hasOwnProperty('snooze_start_ts')) {
                obj['snooze_start_ts'] = ApiClient.convertToType(data['snooze_start_ts'], 'Number');
            }
            if (data.hasOwnProperty('snooze_end_ts')) {
                obj['snooze_end_ts'] = ApiClient.convertToType(data['snooze_end_ts'], 'Number');
            }
            if (data.hasOwnProperty('timezone')) {
                obj['timezone'] = ApiClient.convertToType(data['timezone'], 'String');
            }
            if (data.hasOwnProperty('push_sound')) {
                obj['push_sound'] = ApiClient.convertToType(data['push_sound'], 'String');
            }
            if (data.hasOwnProperty('enable')) {
                obj['enable'] = ApiClient.convertToType(data['enable'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {String} push_trigger_option
 */
UpdatePushPreferencesForChannelByUrlResponse.prototype['push_trigger_option'] = undefined;

/**
 * @member {Boolean} do_not_disturb
 */
UpdatePushPreferencesForChannelByUrlResponse.prototype['do_not_disturb'] = undefined;

/**
 * @member {Number} start_hour
 */
UpdatePushPreferencesForChannelByUrlResponse.prototype['start_hour'] = undefined;

/**
 * @member {Number} start_min
 */
UpdatePushPreferencesForChannelByUrlResponse.prototype['start_min'] = undefined;

/**
 * @member {Number} end_hour
 */
UpdatePushPreferencesForChannelByUrlResponse.prototype['end_hour'] = undefined;

/**
 * @member {Number} end_min
 */
UpdatePushPreferencesForChannelByUrlResponse.prototype['end_min'] = undefined;

/**
 * @member {Boolean} snooze_enabled
 */
UpdatePushPreferencesForChannelByUrlResponse.prototype['snooze_enabled'] = undefined;

/**
 * @member {Number} snooze_start_ts
 */
UpdatePushPreferencesForChannelByUrlResponse.prototype['snooze_start_ts'] = undefined;

/**
 * @member {Number} snooze_end_ts
 */
UpdatePushPreferencesForChannelByUrlResponse.prototype['snooze_end_ts'] = undefined;

/**
 * @member {String} timezone
 */
UpdatePushPreferencesForChannelByUrlResponse.prototype['timezone'] = undefined;

/**
 * @member {String} push_sound
 */
UpdatePushPreferencesForChannelByUrlResponse.prototype['push_sound'] = undefined;

/**
 * @member {Boolean} enable
 */
UpdatePushPreferencesForChannelByUrlResponse.prototype['enable'] = undefined;






export default UpdatePushPreferencesForChannelByUrlResponse;

