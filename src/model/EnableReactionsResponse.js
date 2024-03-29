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
 * The EnableReactionsResponse model module.
 * @module model/EnableReactionsResponse
 * @version 0.0.16
 */
class EnableReactionsResponse {
    /**
     * Constructs a new <code>EnableReactionsResponse</code>.
     * @alias module:model/EnableReactionsResponse
     */
    constructor() { 
        
        EnableReactionsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EnableReactionsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EnableReactionsResponse} obj Optional instance to populate.
     * @return {module:model/EnableReactionsResponse} The populated <code>EnableReactionsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EnableReactionsResponse();

            if (data.hasOwnProperty('reactions')) {
                obj['reactions'] = ApiClient.convertToType(data['reactions'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} reactions
 */
EnableReactionsResponse.prototype['reactions'] = undefined;






export default EnableReactionsResponse;

