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
 * The RemoveRegistrationOrDeviceTokenFromOwnerByTokenResponse model module.
 * @module model/RemoveRegistrationOrDeviceTokenFromOwnerByTokenResponse
 * @version 1.0.0
 */
class RemoveRegistrationOrDeviceTokenFromOwnerByTokenResponse {
    /**
     * Constructs a new <code>RemoveRegistrationOrDeviceTokenFromOwnerByTokenResponse</code>.
     * @alias module:model/RemoveRegistrationOrDeviceTokenFromOwnerByTokenResponse
     */
    constructor() { 
        
        RemoveRegistrationOrDeviceTokenFromOwnerByTokenResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RemoveRegistrationOrDeviceTokenFromOwnerByTokenResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RemoveRegistrationOrDeviceTokenFromOwnerByTokenResponse} obj Optional instance to populate.
     * @return {module:model/RemoveRegistrationOrDeviceTokenFromOwnerByTokenResponse} The populated <code>RemoveRegistrationOrDeviceTokenFromOwnerByTokenResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RemoveRegistrationOrDeviceTokenFromOwnerByTokenResponse();

            if (data.hasOwnProperty('user_id')) {
                obj['user_id'] = ApiClient.convertToType(data['user_id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} user_id
 */
RemoveRegistrationOrDeviceTokenFromOwnerByTokenResponse.prototype['user_id'] = undefined;






export default RemoveRegistrationOrDeviceTokenFromOwnerByTokenResponse;

