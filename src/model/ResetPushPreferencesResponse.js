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
 * The ResetPushPreferencesResponse model module.
 * @module model/ResetPushPreferencesResponse
 * @version 0.0.14
 */
class ResetPushPreferencesResponse {
    /**
     * Constructs a new <code>ResetPushPreferencesResponse</code>.
     * @alias module:model/ResetPushPreferencesResponse
     */
    constructor() { 
        
        ResetPushPreferencesResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ResetPushPreferencesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ResetPushPreferencesResponse} obj Optional instance to populate.
     * @return {module:model/ResetPushPreferencesResponse} The populated <code>ResetPushPreferencesResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ResetPushPreferencesResponse();

            if (data.hasOwnProperty('snooze_start_ts')) {
                obj['snooze_start_ts'] = ApiClient.convertToType(data['snooze_start_ts'], 'String');
            }
            if (data.hasOwnProperty('start_hour')) {
                obj['start_hour'] = ApiClient.convertToType(data['start_hour'], 'Number');
            }
            if (data.hasOwnProperty('snooze_enabled')) {
                obj['snooze_enabled'] = ApiClient.convertToType(data['snooze_enabled'], 'Boolean');
            }
            if (data.hasOwnProperty('end_min')) {
                obj['end_min'] = ApiClient.convertToType(data['end_min'], 'Number');
            }
            if (data.hasOwnProperty('timezone')) {
                obj['timezone'] = ApiClient.convertToType(data['timezone'], 'String');
            }
            if (data.hasOwnProperty('block_push_from_bots')) {
                obj['block_push_from_bots'] = ApiClient.convertToType(data['block_push_from_bots'], 'Boolean');
            }
            if (data.hasOwnProperty('push_blocked_bot_ids')) {
                obj['push_blocked_bot_ids'] = ApiClient.convertToType(data['push_blocked_bot_ids'], ['Number']);
            }
            if (data.hasOwnProperty('start_min')) {
                obj['start_min'] = ApiClient.convertToType(data['start_min'], 'Number');
            }
            if (data.hasOwnProperty('snooze_end_ts')) {
                obj['snooze_end_ts'] = ApiClient.convertToType(data['snooze_end_ts'], 'String');
            }
            if (data.hasOwnProperty('do_not_disturb')) {
                obj['do_not_disturb'] = ApiClient.convertToType(data['do_not_disturb'], 'Boolean');
            }
            if (data.hasOwnProperty('end_hour')) {
                obj['end_hour'] = ApiClient.convertToType(data['end_hour'], 'Number');
            }
            if (data.hasOwnProperty('enable_push_for_replies')) {
                obj['enable_push_for_replies'] = ApiClient.convertToType(data['enable_push_for_replies'], 'Boolean');
            }
            if (data.hasOwnProperty('push_sound')) {
                obj['push_sound'] = ApiClient.convertToType(data['push_sound'], 'String');
            }
            if (data.hasOwnProperty('push_trigger_option')) {
                obj['push_trigger_option'] = ApiClient.convertToType(data['push_trigger_option'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} snooze_start_ts
 */
ResetPushPreferencesResponse.prototype['snooze_start_ts'] = undefined;

/**
 * @member {Number} start_hour
 */
ResetPushPreferencesResponse.prototype['start_hour'] = undefined;

/**
 * @member {Boolean} snooze_enabled
 */
ResetPushPreferencesResponse.prototype['snooze_enabled'] = undefined;

/**
 * @member {Number} end_min
 */
ResetPushPreferencesResponse.prototype['end_min'] = undefined;

/**
 * @member {String} timezone
 */
ResetPushPreferencesResponse.prototype['timezone'] = undefined;

/**
 * @member {Boolean} block_push_from_bots
 */
ResetPushPreferencesResponse.prototype['block_push_from_bots'] = undefined;

/**
 * @member {Array.<Number>} push_blocked_bot_ids
 */
ResetPushPreferencesResponse.prototype['push_blocked_bot_ids'] = undefined;

/**
 * @member {Number} start_min
 */
ResetPushPreferencesResponse.prototype['start_min'] = undefined;

/**
 * @member {String} snooze_end_ts
 */
ResetPushPreferencesResponse.prototype['snooze_end_ts'] = undefined;

/**
 * @member {Boolean} do_not_disturb
 */
ResetPushPreferencesResponse.prototype['do_not_disturb'] = undefined;

/**
 * @member {Number} end_hour
 */
ResetPushPreferencesResponse.prototype['end_hour'] = undefined;

/**
 * @member {Boolean} enable_push_for_replies
 */
ResetPushPreferencesResponse.prototype['enable_push_for_replies'] = undefined;

/**
 * @member {String} push_sound
 */
ResetPushPreferencesResponse.prototype['push_sound'] = undefined;

/**
 * @member {String} push_trigger_option
 */
ResetPushPreferencesResponse.prototype['push_trigger_option'] = undefined;






export default ResetPushPreferencesResponse;

