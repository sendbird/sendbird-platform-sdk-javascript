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
 * The AddEmojisData model module.
 * @module model/AddEmojisData
 * @version 1.0.0
 */
class AddEmojisData {
    /**
     * Constructs a new <code>AddEmojisData</code>.
     * @alias module:model/AddEmojisData
     * @param emojiCategoryId {Number} Specifies the unique ID of the emoji category that a list of new emojis belong to.
     * @param emojis {Array.<String>} Specifies a list of one or more new emojis to register.
     * @param emojiKey {String} Specifies the string key of each new emoji.
     * @param emojiUrl {String} Specifies the image URL of each new emoji.
     */
    constructor(emojiCategoryId, emojis, emojiKey, emojiUrl) { 
        
        AddEmojisData.initialize(this, emojiCategoryId, emojis, emojiKey, emojiUrl);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, emojiCategoryId, emojis, emojiKey, emojiUrl) { 
        obj['emoji_category_id'] = emojiCategoryId;
        obj['emojis'] = emojis;
        obj['(emoji).key'] = emojiKey;
        obj['(emoji).url'] = emojiUrl;
    }

    /**
     * Constructs a <code>AddEmojisData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddEmojisData} obj Optional instance to populate.
     * @return {module:model/AddEmojisData} The populated <code>AddEmojisData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddEmojisData();

            if (data.hasOwnProperty('emoji_category_id')) {
                obj['emoji_category_id'] = ApiClient.convertToType(data['emoji_category_id'], 'Number');
            }
            if (data.hasOwnProperty('emojis')) {
                obj['emojis'] = ApiClient.convertToType(data['emojis'], ['String']);
            }
            if (data.hasOwnProperty('(emoji).key')) {
                obj['(emoji).key'] = ApiClient.convertToType(data['(emoji).key'], 'String');
            }
            if (data.hasOwnProperty('(emoji).url')) {
                obj['(emoji).url'] = ApiClient.convertToType(data['(emoji).url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Specifies the unique ID of the emoji category that a list of new emojis belong to.
 * @member {Number} emoji_category_id
 */
AddEmojisData.prototype['emoji_category_id'] = undefined;

/**
 * Specifies a list of one or more new emojis to register.
 * @member {Array.<String>} emojis
 */
AddEmojisData.prototype['emojis'] = undefined;

/**
 * Specifies the string key of each new emoji.
 * @member {String} (emoji).key
 */
AddEmojisData.prototype['(emoji).key'] = undefined;

/**
 * Specifies the image URL of each new emoji.
 * @member {String} (emoji).url
 */
AddEmojisData.prototype['(emoji).url'] = undefined;






export default AddEmojisData;

