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
 * The UseDefaultEmojisData model module.
 * @module model/UseDefaultEmojisData
 * @version 1.0.7
 */
class UseDefaultEmojisData {
    /**
     * Constructs a new <code>UseDefaultEmojisData</code>.
     * @alias module:model/UseDefaultEmojisData
     * @param useDefaultEmoji {Boolean} Determines whether to use the 7 default emojis initially provided.
     */
    constructor(useDefaultEmoji) { 
        
        UseDefaultEmojisData.initialize(this, useDefaultEmoji);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, useDefaultEmoji) { 
        obj['use_default_emoji'] = useDefaultEmoji;
    }

    /**
     * Constructs a <code>UseDefaultEmojisData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UseDefaultEmojisData} obj Optional instance to populate.
     * @return {module:model/UseDefaultEmojisData} The populated <code>UseDefaultEmojisData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UseDefaultEmojisData();

            if (data.hasOwnProperty('use_default_emoji')) {
                obj['use_default_emoji'] = ApiClient.convertToType(data['use_default_emoji'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * Determines whether to use the 7 default emojis initially provided.
 * @member {Boolean} use_default_emoji
 */
UseDefaultEmojisData.prototype['use_default_emoji'] = undefined;






export default UseDefaultEmojisData;

