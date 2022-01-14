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
import SendBirdUser from './SendBirdUser';

/**
 * The SendBirdScheduledUserMessageParams model module.
 * @module model/SendBirdScheduledUserMessageParams
 * @version 1.0.0
 */
class SendBirdScheduledUserMessageParams {
    /**
     * Constructs a new <code>SendBirdScheduledUserMessageParams</code>.
     * @alias module:model/SendBirdScheduledUserMessageParams
     */
    constructor() { 
        
        SendBirdScheduledUserMessageParams.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SendBirdScheduledUserMessageParams</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SendBirdScheduledUserMessageParams} obj Optional instance to populate.
     * @return {module:model/SendBirdScheduledUserMessageParams} The populated <code>SendBirdScheduledUserMessageParams</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SendBirdScheduledUserMessageParams();

            if (data.hasOwnProperty('appleCriticalAlertOptions')) {
                obj['appleCriticalAlertOptions'] = SendBirdAppleCriticalAlertOptions.constructFromObject(data['appleCriticalAlertOptions']);
            }
            if (data.hasOwnProperty('customType')) {
                obj['customType'] = ApiClient.convertToType(data['customType'], 'String');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], 'String');
            }
            if (data.hasOwnProperty('day')) {
                obj['day'] = ApiClient.convertToType(data['day'], 'Number');
            }
            if (data.hasOwnProperty('hour')) {
                obj['hour'] = ApiClient.convertToType(data['hour'], 'Number');
            }
            if (data.hasOwnProperty('mentionType')) {
                obj['mentionType'] = ApiClient.convertToType(data['mentionType'], 'String');
            }
            if (data.hasOwnProperty('mentionedUserIds')) {
                obj['mentionedUserIds'] = ApiClient.convertToType(data['mentionedUserIds'], ['String']);
            }
            if (data.hasOwnProperty('mentionedUsers')) {
                obj['mentionedUsers'] = ApiClient.convertToType(data['mentionedUsers'], [SendBirdUser]);
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('metaArrayKeys')) {
                obj['metaArrayKeys'] = ApiClient.convertToType(data['metaArrayKeys'], ['String']);
            }
            if (data.hasOwnProperty('min')) {
                obj['min'] = ApiClient.convertToType(data['min'], 'Number');
            }
            if (data.hasOwnProperty('month')) {
                obj['month'] = ApiClient.convertToType(data['month'], 'Number');
            }
            if (data.hasOwnProperty('pushNotificationDeliveryOption')) {
                obj['pushNotificationDeliveryOption'] = ApiClient.convertToType(data['pushNotificationDeliveryOption'], 'String');
            }
            if (data.hasOwnProperty('scheduledDateTimeString')) {
                obj['scheduledDateTimeString'] = ApiClient.convertToType(data['scheduledDateTimeString'], 'String');
            }
            if (data.hasOwnProperty('timezone')) {
                obj['timezone'] = ApiClient.convertToType(data['timezone'], 'String');
            }
            if (data.hasOwnProperty('translationTargetLanguages')) {
                obj['translationTargetLanguages'] = ApiClient.convertToType(data['translationTargetLanguages'], ['String']);
            }
            if (data.hasOwnProperty('year')) {
                obj['year'] = ApiClient.convertToType(data['year'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/SendBirdAppleCriticalAlertOptions} appleCriticalAlertOptions
 */
SendBirdScheduledUserMessageParams.prototype['appleCriticalAlertOptions'] = undefined;

/**
 * @member {String} customType
 */
SendBirdScheduledUserMessageParams.prototype['customType'] = undefined;

/**
 * @member {String} data
 */
SendBirdScheduledUserMessageParams.prototype['data'] = undefined;

/**
 * @member {Number} day
 */
SendBirdScheduledUserMessageParams.prototype['day'] = undefined;

/**
 * @member {Number} hour
 */
SendBirdScheduledUserMessageParams.prototype['hour'] = undefined;

/**
 * @member {module:model/SendBirdScheduledUserMessageParams.MentionTypeEnum} mentionType
 */
SendBirdScheduledUserMessageParams.prototype['mentionType'] = undefined;

/**
 * @member {Array.<String>} mentionedUserIds
 */
SendBirdScheduledUserMessageParams.prototype['mentionedUserIds'] = undefined;

/**
 * @member {Array.<module:model/SendBirdUser>} mentionedUsers
 */
SendBirdScheduledUserMessageParams.prototype['mentionedUsers'] = undefined;

/**
 * @member {String} message
 */
SendBirdScheduledUserMessageParams.prototype['message'] = undefined;

/**
 * @member {Array.<String>} metaArrayKeys
 */
SendBirdScheduledUserMessageParams.prototype['metaArrayKeys'] = undefined;

/**
 * @member {Number} min
 */
SendBirdScheduledUserMessageParams.prototype['min'] = undefined;

/**
 * @member {Number} month
 */
SendBirdScheduledUserMessageParams.prototype['month'] = undefined;

/**
 * @member {module:model/SendBirdScheduledUserMessageParams.PushNotificationDeliveryOptionEnum} pushNotificationDeliveryOption
 */
SendBirdScheduledUserMessageParams.prototype['pushNotificationDeliveryOption'] = undefined;

/**
 * @member {String} scheduledDateTimeString
 */
SendBirdScheduledUserMessageParams.prototype['scheduledDateTimeString'] = undefined;

/**
 * @member {String} timezone
 */
SendBirdScheduledUserMessageParams.prototype['timezone'] = undefined;

/**
 * @member {Array.<String>} translationTargetLanguages
 */
SendBirdScheduledUserMessageParams.prototype['translationTargetLanguages'] = undefined;

/**
 * @member {Number} year
 */
SendBirdScheduledUserMessageParams.prototype['year'] = undefined;





/**
 * Allowed values for the <code>mentionType</code> property.
 * @enum {String}
 * @readonly
 */
SendBirdScheduledUserMessageParams['MentionTypeEnum'] = {

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
 * Allowed values for the <code>pushNotificationDeliveryOption</code> property.
 * @enum {String}
 * @readonly
 */
SendBirdScheduledUserMessageParams['PushNotificationDeliveryOptionEnum'] = {

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



export default SendBirdScheduledUserMessageParams;

