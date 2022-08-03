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
 * The UpdateBotByIdResponse model module.
 * @module model/UpdateBotByIdResponse
 * @version 1.0.7
 */
class UpdateBotByIdResponse {
    /**
     * Constructs a new <code>UpdateBotByIdResponse</code>.
     * @alias module:model/UpdateBotByIdResponse
     */
    constructor() { 
        
        UpdateBotByIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdateBotByIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateBotByIdResponse} obj Optional instance to populate.
     * @return {module:model/UpdateBotByIdResponse} The populated <code>UpdateBotByIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateBotByIdResponse();

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
UpdateBotByIdResponse.prototype['bot'] = undefined;

/**
 * @member {String} bot_callback_url
 */
UpdateBotByIdResponse.prototype['bot_callback_url'] = undefined;

/**
 * @member {Boolean} enable_mark_as_read
 */
UpdateBotByIdResponse.prototype['enable_mark_as_read'] = undefined;

/**
 * @member {Boolean} is_privacy_mode
 */
UpdateBotByIdResponse.prototype['is_privacy_mode'] = undefined;

/**
 * @member {Boolean} show_member
 */
UpdateBotByIdResponse.prototype['show_member'] = undefined;

/**
 * @member {Number} channel_invitation_preference
 */
UpdateBotByIdResponse.prototype['channel_invitation_preference'] = undefined;






export default UpdateBotByIdResponse;

