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
import ListAllEmojisAndEmojiCategoriesResponseEmojiCategoriesInnerEmojisInner from './ListAllEmojisAndEmojiCategoriesResponseEmojiCategoriesInnerEmojisInner';

/**
 * The ListAllEmojisAndEmojiCategoriesResponseEmojiCategoriesInner model module.
 * @module model/ListAllEmojisAndEmojiCategoriesResponseEmojiCategoriesInner
 * @version 0.0.14
 */
class ListAllEmojisAndEmojiCategoriesResponseEmojiCategoriesInner {
    /**
     * Constructs a new <code>ListAllEmojisAndEmojiCategoriesResponseEmojiCategoriesInner</code>.
     * @alias module:model/ListAllEmojisAndEmojiCategoriesResponseEmojiCategoriesInner
     */
    constructor() { 
        
        ListAllEmojisAndEmojiCategoriesResponseEmojiCategoriesInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ListAllEmojisAndEmojiCategoriesResponseEmojiCategoriesInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListAllEmojisAndEmojiCategoriesResponseEmojiCategoriesInner} obj Optional instance to populate.
     * @return {module:model/ListAllEmojisAndEmojiCategoriesResponseEmojiCategoriesInner} The populated <code>ListAllEmojisAndEmojiCategoriesResponseEmojiCategoriesInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListAllEmojisAndEmojiCategoriesResponseEmojiCategoriesInner();

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
                obj['emojis'] = ApiClient.convertToType(data['emojis'], [ListAllEmojisAndEmojiCategoriesResponseEmojiCategoriesInnerEmojisInner]);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
ListAllEmojisAndEmojiCategoriesResponseEmojiCategoriesInner.prototype['id'] = undefined;

/**
 * @member {String} name
 */
ListAllEmojisAndEmojiCategoriesResponseEmojiCategoriesInner.prototype['name'] = undefined;

/**
 * @member {String} url
 */
ListAllEmojisAndEmojiCategoriesResponseEmojiCategoriesInner.prototype['url'] = undefined;

/**
 * @member {Array.<module:model/ListAllEmojisAndEmojiCategoriesResponseEmojiCategoriesInnerEmojisInner>} emojis
 */
ListAllEmojisAndEmojiCategoriesResponseEmojiCategoriesInner.prototype['emojis'] = undefined;






export default ListAllEmojisAndEmojiCategoriesResponseEmojiCategoriesInner;

