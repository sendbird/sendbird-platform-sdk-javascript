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
 * The AddEmojiCategoriesResponseEmojiCategories model module.
 * @module model/AddEmojiCategoriesResponseEmojiCategories
 * @version 1.0.3
 */
class AddEmojiCategoriesResponseEmojiCategories {
    /**
     * Constructs a new <code>AddEmojiCategoriesResponseEmojiCategories</code>.
     * @alias module:model/AddEmojiCategoriesResponseEmojiCategories
     */
    constructor() { 
        
        AddEmojiCategoriesResponseEmojiCategories.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AddEmojiCategoriesResponseEmojiCategories</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddEmojiCategoriesResponseEmojiCategories} obj Optional instance to populate.
     * @return {module:model/AddEmojiCategoriesResponseEmojiCategories} The populated <code>AddEmojiCategoriesResponseEmojiCategories</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddEmojiCategoriesResponseEmojiCategories();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
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
AddEmojiCategoriesResponseEmojiCategories.prototype['id'] = undefined;

/**
 * @member {String} name
 */
AddEmojiCategoriesResponseEmojiCategories.prototype['name'] = undefined;

/**
 * @member {String} url
 */
AddEmojiCategoriesResponseEmojiCategories.prototype['url'] = undefined;






export default AddEmojiCategoriesResponseEmojiCategories;

