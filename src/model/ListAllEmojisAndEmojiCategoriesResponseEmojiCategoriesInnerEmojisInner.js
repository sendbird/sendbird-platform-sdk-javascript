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
 * The ListAllEmojisAndEmojiCategoriesResponseEmojiCategoriesInnerEmojisInner model module.
 * @module model/ListAllEmojisAndEmojiCategoriesResponseEmojiCategoriesInnerEmojisInner
 * @version 0.0.16
 */
class ListAllEmojisAndEmojiCategoriesResponseEmojiCategoriesInnerEmojisInner {
    /**
     * Constructs a new <code>ListAllEmojisAndEmojiCategoriesResponseEmojiCategoriesInnerEmojisInner</code>.
     * @alias module:model/ListAllEmojisAndEmojiCategoriesResponseEmojiCategoriesInnerEmojisInner
     */
    constructor() { 
        
        ListAllEmojisAndEmojiCategoriesResponseEmojiCategoriesInnerEmojisInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ListAllEmojisAndEmojiCategoriesResponseEmojiCategoriesInnerEmojisInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListAllEmojisAndEmojiCategoriesResponseEmojiCategoriesInnerEmojisInner} obj Optional instance to populate.
     * @return {module:model/ListAllEmojisAndEmojiCategoriesResponseEmojiCategoriesInnerEmojisInner} The populated <code>ListAllEmojisAndEmojiCategoriesResponseEmojiCategoriesInnerEmojisInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListAllEmojisAndEmojiCategoriesResponseEmojiCategoriesInnerEmojisInner();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
ListAllEmojisAndEmojiCategoriesResponseEmojiCategoriesInnerEmojisInner.prototype['id'] = undefined;

/**
 * @member {String} key
 */
ListAllEmojisAndEmojiCategoriesResponseEmojiCategoriesInnerEmojisInner.prototype['key'] = undefined;

/**
 * @member {String} url
 */
ListAllEmojisAndEmojiCategoriesResponseEmojiCategoriesInnerEmojisInner.prototype['url'] = undefined;






export default ListAllEmojisAndEmojiCategoriesResponseEmojiCategoriesInnerEmojisInner;

