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
import CreateBotResponseBot from './CreateBotResponseBot';

/**
 * The ListBotsResponseBots model module.
 * @module model/ListBotsResponseBots
 * @version 1.0.3
 */
class ListBotsResponseBots {
    /**
     * Constructs a new <code>ListBotsResponseBots</code>.
     * @alias module:model/ListBotsResponseBots
     */
    constructor() { 
        
        ListBotsResponseBots.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ListBotsResponseBots</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListBotsResponseBots} obj Optional instance to populate.
     * @return {module:model/ListBotsResponseBots} The populated <code>ListBotsResponseBots</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListBotsResponseBots();

            if (data.hasOwnProperty('bot')) {
                obj['bot'] = CreateBotResponseBot.constructFromObject(data['bot']);
            }
            if (data.hasOwnProperty('bot_callback_url')) {
                obj['bot_callback_url'] = ApiClient.convertToType(data['bot_callback_url'], 'String');
            }
            if (data.hasOwnProperty('enable_mark_as_read')) {
                obj['enable_mark_as_read'] = ApiClient.convertToType(data['enable_mark_as_read'], 'Boolean');
            }
            if (data.hasOwnProperty('is_privacy_mode')) {
                obj['is_privacy_mode'] = ApiClient.convertToType(data['is_privacy_mode'], 'Boolean');
            }
            if (data.hasOwnProperty('show_member')) {
                obj['show_member'] = ApiClient.convertToType(data['show_member'], 'Boolean');
            }
            if (data.hasOwnProperty('channel_invitation_preference')) {
                obj['channel_invitation_preference'] = ApiClient.convertToType(data['channel_invitation_preference'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/CreateBotResponseBot} bot
 */
ListBotsResponseBots.prototype['bot'] = undefined;

/**
 * @member {String} bot_callback_url
 */
ListBotsResponseBots.prototype['bot_callback_url'] = undefined;

/**
 * @member {Boolean} enable_mark_as_read
 */
ListBotsResponseBots.prototype['enable_mark_as_read'] = undefined;

/**
 * @member {Boolean} is_privacy_mode
 */
ListBotsResponseBots.prototype['is_privacy_mode'] = undefined;

/**
 * @member {Boolean} show_member
 */
ListBotsResponseBots.prototype['show_member'] = undefined;

/**
 * @member {Number} channel_invitation_preference
 */
ListBotsResponseBots.prototype['channel_invitation_preference'] = undefined;






export default ListBotsResponseBots;

