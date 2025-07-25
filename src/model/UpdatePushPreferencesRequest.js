/**
 * Sendbird Platform SDK
 * Sendbird Platform API SDK  [https://sendbird.com/docs/chat/v3/platform-api/getting-started/prepare-to-use-api](https://sendbird.com/docs/chat/v3/platform-api/getting-started/prepare-to-use-api)  Contact Support:   Name: Sendbird   Email: [support@sendbird.com](https://mailto:support@sendbird.com)
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
import SendbirdPushTriggerOption from './SendbirdPushTriggerOption';

/**
 * The UpdatePushPreferencesRequest model module.
 * @module model/UpdatePushPreferencesRequest
 * @version 2.0.0
 */
class UpdatePushPreferencesRequest {
    /**
     * Constructs a new <code>UpdatePushPreferencesRequest</code>.
     * @alias module:model/UpdatePushPreferencesRequest
     */
    constructor() { 
        
        UpdatePushPreferencesRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdatePushPreferencesRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdatePushPreferencesRequest} obj Optional instance to populate.
     * @return {module:model/UpdatePushPreferencesRequest} The populated <code>UpdatePushPreferencesRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdatePushPreferencesRequest();

            if (data.hasOwnProperty('block_push_from_bots')) {
                obj['block_push_from_bots'] = ApiClient.convertToType(data['block_push_from_bots'], 'Boolean');
            }
            if (data.hasOwnProperty('do_not_disturb')) {
                obj['do_not_disturb'] = ApiClient.convertToType(data['do_not_disturb'], 'Boolean');
            }
            if (data.hasOwnProperty('enable_push_for_replies')) {
                obj['enable_push_for_replies'] = ApiClient.convertToType(data['enable_push_for_replies'], 'Boolean');
            }
            if (data.hasOwnProperty('end_hour')) {
                obj['end_hour'] = ApiClient.convertToType(data['end_hour'], 'Number');
            }
            if (data.hasOwnProperty('end_min')) {
                obj['end_min'] = ApiClient.convertToType(data['end_min'], 'Number');
            }
            if (data.hasOwnProperty('push_blocked_bot_ids')) {
                obj['push_blocked_bot_ids'] = ApiClient.convertToType(data['push_blocked_bot_ids'], ['String']);
            }
            if (data.hasOwnProperty('push_sound')) {
                obj['push_sound'] = ApiClient.convertToType(data['push_sound'], 'String');
            }
            if (data.hasOwnProperty('push_trigger_option')) {
                obj['push_trigger_option'] = SendbirdPushTriggerOption.constructFromObject(data['push_trigger_option']);
            }
            if (data.hasOwnProperty('snooze_enabled')) {
                obj['snooze_enabled'] = ApiClient.convertToType(data['snooze_enabled'], 'Boolean');
            }
            if (data.hasOwnProperty('snooze_end_ts')) {
                obj['snooze_end_ts'] = ApiClient.convertToType(data['snooze_end_ts'], 'Number');
            }
            if (data.hasOwnProperty('snooze_start_ts')) {
                obj['snooze_start_ts'] = ApiClient.convertToType(data['snooze_start_ts'], 'Number');
            }
            if (data.hasOwnProperty('start_hour')) {
                obj['start_hour'] = ApiClient.convertToType(data['start_hour'], 'Number');
            }
            if (data.hasOwnProperty('start_min')) {
                obj['start_min'] = ApiClient.convertToType(data['start_min'], 'Number');
            }
            if (data.hasOwnProperty('timezone')) {
                obj['timezone'] = ApiClient.convertToType(data['timezone'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} block_push_from_bots
 */
UpdatePushPreferencesRequest.prototype['block_push_from_bots'] = undefined;

/**
 * @member {Boolean} do_not_disturb
 */
UpdatePushPreferencesRequest.prototype['do_not_disturb'] = undefined;

/**
 * @member {Boolean} enable_push_for_replies
 */
UpdatePushPreferencesRequest.prototype['enable_push_for_replies'] = undefined;

/**
 * @member {Number} end_hour
 */
UpdatePushPreferencesRequest.prototype['end_hour'] = undefined;

/**
 * @member {Number} end_min
 */
UpdatePushPreferencesRequest.prototype['end_min'] = undefined;

/**
 * @member {Array.<String>} push_blocked_bot_ids
 */
UpdatePushPreferencesRequest.prototype['push_blocked_bot_ids'] = undefined;

/**
 * @member {String} push_sound
 */
UpdatePushPreferencesRequest.prototype['push_sound'] = undefined;

/**
 * @member {module:model/SendbirdPushTriggerOption} push_trigger_option
 */
UpdatePushPreferencesRequest.prototype['push_trigger_option'] = undefined;

/**
 * @member {Boolean} snooze_enabled
 */
UpdatePushPreferencesRequest.prototype['snooze_enabled'] = undefined;

/**
 * @member {Number} snooze_end_ts
 */
UpdatePushPreferencesRequest.prototype['snooze_end_ts'] = undefined;

/**
 * @member {Number} snooze_start_ts
 */
UpdatePushPreferencesRequest.prototype['snooze_start_ts'] = undefined;

/**
 * @member {Number} start_hour
 */
UpdatePushPreferencesRequest.prototype['start_hour'] = undefined;

/**
 * @member {Number} start_min
 */
UpdatePushPreferencesRequest.prototype['start_min'] = undefined;

/**
 * @member {String} timezone
 */
UpdatePushPreferencesRequest.prototype['timezone'] = undefined;






export default UpdatePushPreferencesRequest;

