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
import SendBirdAppleCriticalAlertOptions from './SendBirdAppleCriticalAlertOptions';
import SendBirdMessageMetaArray from './SendBirdMessageMetaArray';
import SendBirdUser from './SendBirdUser';

/**
 * The SendBirdUserMessageParams model module.
 * @module model/SendBirdUserMessageParams
 * @version 1.0.1
 */
class SendBirdUserMessageParams {
    /**
     * Constructs a new <code>SendBirdUserMessageParams</code>.
     * @alias module:model/SendBirdUserMessageParams
     */
    constructor() { 
        
        SendBirdUserMessageParams.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SendBirdUserMessageParams</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SendBirdUserMessageParams} obj Optional instance to populate.
     * @return {module:model/SendBirdUserMessageParams} The populated <code>SendBirdUserMessageParams</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SendBirdUserMessageParams();

            if (data.hasOwnProperty('apple_critical_alert_options')) {
                obj['apple_critical_alert_options'] = SendBirdAppleCriticalAlertOptions.constructFromObject(data['apple_critical_alert_options']);
            }
            if (data.hasOwnProperty('custom_type')) {
                obj['custom_type'] = ApiClient.convertToType(data['custom_type'], 'String');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], 'String');
            }
            if (data.hasOwnProperty('is_reply_to_channel')) {
                obj['is_reply_to_channel'] = ApiClient.convertToType(data['is_reply_to_channel'], 'Boolean');
            }
            if (data.hasOwnProperty('mention_type')) {
                obj['mention_type'] = ApiClient.convertToType(data['mention_type'], 'String');
            }
            if (data.hasOwnProperty('mentioned_user_ids')) {
                obj['mentioned_user_ids'] = ApiClient.convertToType(data['mentioned_user_ids'], ['String']);
            }
            if (data.hasOwnProperty('mentioned_users')) {
                obj['mentioned_users'] = ApiClient.convertToType(data['mentioned_users'], [SendBirdUser]);
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('meta_array_keys')) {
                obj['meta_array_keys'] = ApiClient.convertToType(data['meta_array_keys'], ['String']);
            }
            if (data.hasOwnProperty('meta_arrays')) {
                obj['meta_arrays'] = ApiClient.convertToType(data['meta_arrays'], [SendBirdMessageMetaArray]);
            }
            if (data.hasOwnProperty('parent_message_id')) {
                obj['parent_message_id'] = ApiClient.convertToType(data['parent_message_id'], 'Number');
            }
            if (data.hasOwnProperty('poll_id')) {
                obj['poll_id'] = ApiClient.convertToType(data['poll_id'], 'Number');
            }
            if (data.hasOwnProperty('push_notification_delivery_option')) {
                obj['push_notification_delivery_option'] = ApiClient.convertToType(data['push_notification_delivery_option'], 'String');
            }
            if (data.hasOwnProperty('target_languages')) {
                obj['target_languages'] = ApiClient.convertToType(data['target_languages'], ['String']);
            }
            if (data.hasOwnProperty('translation_target_languages')) {
                obj['translation_target_languages'] = ApiClient.convertToType(data['translation_target_languages'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/SendBirdAppleCriticalAlertOptions} apple_critical_alert_options
 */
SendBirdUserMessageParams.prototype['apple_critical_alert_options'] = undefined;

/**
 * @member {String} custom_type
 */
SendBirdUserMessageParams.prototype['custom_type'] = undefined;

/**
 * @member {String} data
 */
SendBirdUserMessageParams.prototype['data'] = undefined;

/**
 * @member {Boolean} is_reply_to_channel
 */
SendBirdUserMessageParams.prototype['is_reply_to_channel'] = undefined;

/**
 * @member {module:model/SendBirdUserMessageParams.MentionTypeEnum} mention_type
 */
SendBirdUserMessageParams.prototype['mention_type'] = undefined;

/**
 * @member {Array.<String>} mentioned_user_ids
 */
SendBirdUserMessageParams.prototype['mentioned_user_ids'] = undefined;

/**
 * @member {Array.<module:model/SendBirdUser>} mentioned_users
 */
SendBirdUserMessageParams.prototype['mentioned_users'] = undefined;

/**
 * @member {String} message
 */
SendBirdUserMessageParams.prototype['message'] = undefined;

/**
 * @member {Array.<String>} meta_array_keys
 */
SendBirdUserMessageParams.prototype['meta_array_keys'] = undefined;

/**
 * @member {Array.<module:model/SendBirdMessageMetaArray>} meta_arrays
 */
SendBirdUserMessageParams.prototype['meta_arrays'] = undefined;

/**
 * @member {Number} parent_message_id
 */
SendBirdUserMessageParams.prototype['parent_message_id'] = undefined;

/**
 * @member {Number} poll_id
 */
SendBirdUserMessageParams.prototype['poll_id'] = undefined;

/**
 * @member {module:model/SendBirdUserMessageParams.PushNotificationDeliveryOptionEnum} push_notification_delivery_option
 */
SendBirdUserMessageParams.prototype['push_notification_delivery_option'] = undefined;

/**
 * @member {Array.<String>} target_languages
 */
SendBirdUserMessageParams.prototype['target_languages'] = undefined;

/**
 * @member {Array.<String>} translation_target_languages
 */
SendBirdUserMessageParams.prototype['translation_target_languages'] = undefined;





/**
 * Allowed values for the <code>mention_type</code> property.
 * @enum {String}
 * @readonly
 */
SendBirdUserMessageParams['MentionTypeEnum'] = {

    /**
     * value: "channel"
     * @const
     */
    "channel": "channel",

    /**
     * value: "users"
     * @const
     */
    "users": "users"
};


/**
 * Allowed values for the <code>push_notification_delivery_option</code> property.
 * @enum {String}
 * @readonly
 */
SendBirdUserMessageParams['PushNotificationDeliveryOptionEnum'] = {

    /**
     * value: "default"
     * @const
     */
    "default": "default",

    /**
     * value: "suppress"
     * @const
     */
    "suppress": "suppress"
};



export default SendBirdUserMessageParams;

