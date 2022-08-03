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
 * The CreateBotResponseBot model module.
 * @module model/CreateBotResponseBot
 * @version 1.0.7
 */
class CreateBotResponseBot {
    /**
     * Constructs a new <code>CreateBotResponseBot</code>.
     * @alias module:model/CreateBotResponseBot
     */
    constructor() { 
        
        CreateBotResponseBot.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreateBotResponseBot</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateBotResponseBot} obj Optional instance to populate.
     * @return {module:model/CreateBotResponseBot} The populated <code>CreateBotResponseBot</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateBotResponseBot();

            if (data.hasOwnProperty('bot_token')) {
                obj['bot_token'] = ApiClient.convertToType(data['bot_token'], 'String');
            }
            if (data.hasOwnProperty('bot_profile_url')) {
                obj['bot_profile_url'] = ApiClient.convertToType(data['bot_profile_url'], 'String');
            }
            if (data.hasOwnProperty('bot_userid')) {
                obj['bot_userid'] = ApiClient.convertToType(data['bot_userid'], 'String');
            }
            if (data.hasOwnProperty('bot_nickname')) {
                obj['bot_nickname'] = ApiClient.convertToType(data['bot_nickname'], 'String');
            }
            if (data.hasOwnProperty('bot_type')) {
                obj['bot_type'] = ApiClient.convertToType(data['bot_type'], 'String');
            }
            if (data.hasOwnProperty('bot_metadata')) {
                obj['bot_metadata'] = ApiClient.convertToType(data['bot_metadata'], Object);
            }
        }
        return obj;
    }


}

/**
 * @member {String} bot_token
 */
CreateBotResponseBot.prototype['bot_token'] = undefined;

/**
 * @member {String} bot_profile_url
 */
CreateBotResponseBot.prototype['bot_profile_url'] = undefined;

/**
 * @member {String} bot_userid
 */
CreateBotResponseBot.prototype['bot_userid'] = undefined;

/**
 * @member {String} bot_nickname
 */
CreateBotResponseBot.prototype['bot_nickname'] = undefined;

/**
 * @member {String} bot_type
 */
CreateBotResponseBot.prototype['bot_type'] = undefined;

/**
 * @member {Object} bot_metadata
 */
CreateBotResponseBot.prototype['bot_metadata'] = undefined;






export default CreateBotResponseBot;

