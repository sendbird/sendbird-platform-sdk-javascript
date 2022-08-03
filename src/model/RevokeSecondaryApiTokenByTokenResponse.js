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
 * The RevokeSecondaryApiTokenByTokenResponse model module.
 * @module model/RevokeSecondaryApiTokenByTokenResponse
 * @version 1.0.7
 */
class RevokeSecondaryApiTokenByTokenResponse {
    /**
     * Constructs a new <code>RevokeSecondaryApiTokenByTokenResponse</code>.
     * @alias module:model/RevokeSecondaryApiTokenByTokenResponse
     */
    constructor() { 
        
        RevokeSecondaryApiTokenByTokenResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RevokeSecondaryApiTokenByTokenResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RevokeSecondaryApiTokenByTokenResponse} obj Optional instance to populate.
     * @return {module:model/RevokeSecondaryApiTokenByTokenResponse} The populated <code>RevokeSecondaryApiTokenByTokenResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RevokeSecondaryApiTokenByTokenResponse();

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
RevokeSecondaryApiTokenByTokenResponse.prototype['token'] = undefined;

/**
 * @member {Number} created_at
 */
RevokeSecondaryApiTokenByTokenResponse.prototype['created_at'] = undefined;






export default RevokeSecondaryApiTokenByTokenResponse;

