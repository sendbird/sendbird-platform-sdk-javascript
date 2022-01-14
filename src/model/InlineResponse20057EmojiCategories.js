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
import InlineResponse20057Emojis from './InlineResponse20057Emojis';

/**
 * The InlineResponse20057EmojiCategories model module.
 * @module model/InlineResponse20057EmojiCategories
 * @version 1.0.0
 */
class InlineResponse20057EmojiCategories {
    /**
     * Constructs a new <code>InlineResponse20057EmojiCategories</code>.
     * @alias module:model/InlineResponse20057EmojiCategories
     */
    constructor() { 
        
        InlineResponse20057EmojiCategories.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse20057EmojiCategories</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20057EmojiCategories} obj Optional instance to populate.
     * @return {module:model/InlineResponse20057EmojiCategories} The populated <code>InlineResponse20057EmojiCategories</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20057EmojiCategories();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('emojis')) {
                obj['emojis'] = ApiClient.convertToType(data['emojis'], [InlineResponse20057Emojis]);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
InlineResponse20057EmojiCategories.prototype['id'] = undefined;

/**
 * @member {String} name
 */
InlineResponse20057EmojiCategories.prototype['name'] = undefined;

/**
 * @member {String} url
 */
InlineResponse20057EmojiCategories.prototype['url'] = undefined;

/**
 * @member {Array.<module:model/InlineResponse20057Emojis>} emojis
 */
InlineResponse20057EmojiCategories.prototype['emojis'] = undefined;






export default InlineResponse20057EmojiCategories;

