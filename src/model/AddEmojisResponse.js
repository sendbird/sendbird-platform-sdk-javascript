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
import ListAllEmojisAndEmojiCategoriesResponseEmojis from './ListAllEmojisAndEmojiCategoriesResponseEmojis';

/**
 * The AddEmojisResponse model module.
 * @module model/AddEmojisResponse
 * @version 1.0.3
 */
class AddEmojisResponse {
    /**
     * Constructs a new <code>AddEmojisResponse</code>.
     * @alias module:model/AddEmojisResponse
     */
    constructor() { 
        
        AddEmojisResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AddEmojisResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddEmojisResponse} obj Optional instance to populate.
     * @return {module:model/AddEmojisResponse} The populated <code>AddEmojisResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddEmojisResponse();

            if (data.hasOwnProperty('emojis')) {
                obj['emojis'] = ApiClient.convertToType(data['emojis'], [ListAllEmojisAndEmojiCategoriesResponseEmojis]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/ListAllEmojisAndEmojiCategoriesResponseEmojis>} emojis
 */
AddEmojisResponse.prototype['emojis'] = undefined;






export default AddEmojisResponse;

