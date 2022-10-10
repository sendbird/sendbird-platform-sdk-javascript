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
 * The GenerateSecondaryApiTokenResponse model module.
 * @module model/GenerateSecondaryApiTokenResponse
 * @version 0.0.14
 */
class GenerateSecondaryApiTokenResponse {
    /**
     * Constructs a new <code>GenerateSecondaryApiTokenResponse</code>.
     * @alias module:model/GenerateSecondaryApiTokenResponse
     */
    constructor() { 
        
        GenerateSecondaryApiTokenResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GenerateSecondaryApiTokenResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GenerateSecondaryApiTokenResponse} obj Optional instance to populate.
     * @return {module:model/GenerateSecondaryApiTokenResponse} The populated <code>GenerateSecondaryApiTokenResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GenerateSecondaryApiTokenResponse();

            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} token
 */
GenerateSecondaryApiTokenResponse.prototype['token'] = undefined;

/**
 * @member {Number} created_at
 */
GenerateSecondaryApiTokenResponse.prototype['created_at'] = undefined;






export default GenerateSecondaryApiTokenResponse;

