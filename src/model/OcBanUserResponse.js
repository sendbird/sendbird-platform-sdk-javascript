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
import OcDeleteChannelByUrl200Response from './OcDeleteChannelByUrl200Response';
import SendBirdUser from './SendBirdUser';

/**
 * The OcBanUserResponse model module.
 * @module model/OcBanUserResponse
 * @version 0.0.16
 */
class OcBanUserResponse {
    /**
     * Constructs a new <code>OcBanUserResponse</code>.
     * @alias module:model/OcBanUserResponse
     */
    constructor() { 
        
        OcBanUserResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OcBanUserResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OcBanUserResponse} obj Optional instance to populate.
     * @return {module:model/OcBanUserResponse} The populated <code>OcBanUserResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OcBanUserResponse();

            if (data.hasOwnProperty('start_at')) {
                obj['start_at'] = ApiClient.convertToType(data['start_at'], 'Number');
            }
            if (data.hasOwnProperty('end_at')) {
                obj['end_at'] = ApiClient.convertToType(data['end_at'], 'Number');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('user_id')) {
                obj['user_id'] = ApiClient.convertToType(data['user_id'], 'String');
            }
            if (data.hasOwnProperty('user')) {
                obj['user'] = SendBirdUser.constructFromObject(data['user']);
            }
            if (data.hasOwnProperty('next_url')) {
                obj['next_url'] = ApiClient.convertToType(data['next_url'], 'String');
            }
            if (data.hasOwnProperty('require_auth_for_profile_image')) {
                obj['require_auth_for_profile_image'] = ApiClient.convertToType(data['require_auth_for_profile_image'], 'Boolean');
            }
            if (data.hasOwnProperty('nickname')) {
                obj['nickname'] = ApiClient.convertToType(data['nickname'], 'String');
            }
            if (data.hasOwnProperty('profile_url')) {
                obj['profile_url'] = ApiClient.convertToType(data['profile_url'], 'String');
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = OcDeleteChannelByUrl200Response.constructFromObject(data['metadata']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} start_at
 */
OcBanUserResponse.prototype['start_at'] = undefined;

/**
 * @member {Number} end_at
 */
OcBanUserResponse.prototype['end_at'] = undefined;

/**
 * @member {String} description
 */
OcBanUserResponse.prototype['description'] = undefined;

/**
 * @member {String} user_id
 */
OcBanUserResponse.prototype['user_id'] = undefined;

/**
 * @member {module:model/SendBirdUser} user
 */
OcBanUserResponse.prototype['user'] = undefined;

/**
 * @member {String} next_url
 */
OcBanUserResponse.prototype['next_url'] = undefined;

/**
 * @member {Boolean} require_auth_for_profile_image
 */
OcBanUserResponse.prototype['require_auth_for_profile_image'] = undefined;

/**
 * @member {String} nickname
 */
OcBanUserResponse.prototype['nickname'] = undefined;

/**
 * @member {String} profile_url
 */
OcBanUserResponse.prototype['profile_url'] = undefined;

/**
 * @member {module:model/OcDeleteChannelByUrl200Response} metadata
 */
OcBanUserResponse.prototype['metadata'] = undefined;






export default OcBanUserResponse;

