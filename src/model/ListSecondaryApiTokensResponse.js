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
import ListSecondaryApiTokensResponseApiTokens from './ListSecondaryApiTokensResponseApiTokens';

/**
 * The ListSecondaryApiTokensResponse model module.
 * @module model/ListSecondaryApiTokensResponse
 * @version 1.0.3
 */
class ListSecondaryApiTokensResponse {
    /**
     * Constructs a new <code>ListSecondaryApiTokensResponse</code>.
     * @alias module:model/ListSecondaryApiTokensResponse
     */
    constructor() { 
        
        ListSecondaryApiTokensResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ListSecondaryApiTokensResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListSecondaryApiTokensResponse} obj Optional instance to populate.
     * @return {module:model/ListSecondaryApiTokensResponse} The populated <code>ListSecondaryApiTokensResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListSecondaryApiTokensResponse();

            if (data.hasOwnProperty('api_tokens')) {
                obj['api_tokens'] = ApiClient.convertToType(data['api_tokens'], [ListSecondaryApiTokensResponseApiTokens]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/ListSecondaryApiTokensResponseApiTokens>} api_tokens
 */
ListSecondaryApiTokensResponse.prototype['api_tokens'] = undefined;






export default ListSecondaryApiTokensResponse;

