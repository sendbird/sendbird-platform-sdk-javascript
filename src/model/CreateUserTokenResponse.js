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
 * The CreateUserTokenResponse model module.
 * @module model/CreateUserTokenResponse
 * @version 0.0.16
 */
class CreateUserTokenResponse {
    /**
     * Constructs a new <code>CreateUserTokenResponse</code>.
     * @alias module:model/CreateUserTokenResponse
     */
    constructor() { 
        
        CreateUserTokenResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreateUserTokenResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateUserTokenResponse} obj Optional instance to populate.
     * @return {module:model/CreateUserTokenResponse} The populated <code>CreateUserTokenResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateUserTokenResponse();

            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('expires_at')) {
                obj['expires_at'] = ApiClient.convertToType(data['expires_at'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} token
 */
CreateUserTokenResponse.prototype['token'] = undefined;

/**
 * @member {Number} expires_at
 */
CreateUserTokenResponse.prototype['expires_at'] = undefined;






export default CreateUserTokenResponse;

