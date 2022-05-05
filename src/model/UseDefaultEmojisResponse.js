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
 * The UseDefaultEmojisResponse model module.
 * @module model/UseDefaultEmojisResponse
 * @version 1.0.0
 */
class UseDefaultEmojisResponse {
    /**
     * Constructs a new <code>UseDefaultEmojisResponse</code>.
     * @alias module:model/UseDefaultEmojisResponse
     */
    constructor() { 
        
        UseDefaultEmojisResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UseDefaultEmojisResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UseDefaultEmojisResponse} obj Optional instance to populate.
     * @return {module:model/UseDefaultEmojisResponse} The populated <code>UseDefaultEmojisResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UseDefaultEmojisResponse();

            if (data.hasOwnProperty('use_default_emoji')) {
                obj['use_default_emoji'] = ApiClient.convertToType(data['use_default_emoji'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} use_default_emoji
 */
UseDefaultEmojisResponse.prototype['use_default_emoji'] = undefined;






export default UseDefaultEmojisResponse;
