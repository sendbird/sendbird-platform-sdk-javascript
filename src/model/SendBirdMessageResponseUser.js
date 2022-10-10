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

/**
 * The SendBirdMessageResponseUser model module.
 * @module model/SendBirdMessageResponseUser
 * @version 0.0.14
 */
class SendBirdMessageResponseUser {
    /**
     * Constructs a new <code>SendBirdMessageResponseUser</code>.
     * @alias module:model/SendBirdMessageResponseUser
     */
    constructor() { 
        
        SendBirdMessageResponseUser.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SendBirdMessageResponseUser</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SendBirdMessageResponseUser} obj Optional instance to populate.
     * @return {module:model/SendBirdMessageResponseUser} The populated <code>SendBirdMessageResponseUser</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SendBirdMessageResponseUser();

            if (data.hasOwnProperty('require_auth_for_profile_image')) {
                obj['require_auth_for_profile_image'] = ApiClient.convertToType(data['require_auth_for_profile_image'], 'Boolean');
            }
            if (data.hasOwnProperty('is_active')) {
                obj['is_active'] = ApiClient.convertToType(data['is_active'], 'Boolean');
            }
            if (data.hasOwnProperty('role')) {
                obj['role'] = ApiClient.convertToType(data['role'], 'String');
            }
            if (data.hasOwnProperty('user_id')) {
                obj['user_id'] = ApiClient.convertToType(data['user_id'], 'String');
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
 * @member {Boolean} require_auth_for_profile_image
 */
SendBirdMessageResponseUser.prototype['require_auth_for_profile_image'] = undefined;

/**
 * @member {Boolean} is_active
 */
SendBirdMessageResponseUser.prototype['is_active'] = undefined;

/**
 * @member {String} role
 */
SendBirdMessageResponseUser.prototype['role'] = undefined;

/**
 * @member {String} user_id
 */
SendBirdMessageResponseUser.prototype['user_id'] = undefined;

/**
 * @member {String} nickname
 */
SendBirdMessageResponseUser.prototype['nickname'] = undefined;

/**
 * @member {String} profile_url
 */
SendBirdMessageResponseUser.prototype['profile_url'] = undefined;

/**
 * @member {module:model/OcDeleteChannelByUrl200Response} metadata
 */
SendBirdMessageResponseUser.prototype['metadata'] = undefined;






export default SendBirdMessageResponseUser;

