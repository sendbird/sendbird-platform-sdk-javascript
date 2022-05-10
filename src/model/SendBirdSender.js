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
import SBObject from './SBObject';

/**
 * The SendBirdSender model module.
 * @module model/SendBirdSender
 * @version 1.0.1
 */
class SendBirdSender {
    /**
     * Constructs a new <code>SendBirdSender</code>.
     * @alias module:model/SendBirdSender
     */
    constructor() { 
        
        SendBirdSender.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SendBirdSender</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SendBirdSender} obj Optional instance to populate.
     * @return {module:model/SendBirdSender} The populated <code>SendBirdSender</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SendBirdSender();

            if (data.hasOwnProperty('connection_status')) {
                obj['connection_status'] = ApiClient.convertToType(data['connection_status'], 'String');
            }
            if (data.hasOwnProperty('friend_discovery_key')) {
                obj['friend_discovery_key'] = ApiClient.convertToType(data['friend_discovery_key'], 'String');
            }
            if (data.hasOwnProperty('friend_name')) {
                obj['friend_name'] = ApiClient.convertToType(data['friend_name'], 'String');
            }
            if (data.hasOwnProperty('is_active')) {
                obj['is_active'] = ApiClient.convertToType(data['is_active'], 'Boolean');
            }
            if (data.hasOwnProperty('is_blocked_by_me')) {
                obj['is_blocked_by_me'] = ApiClient.convertToType(data['is_blocked_by_me'], 'Boolean');
            }
            if (data.hasOwnProperty('last_seen_at')) {
                obj['last_seen_at'] = ApiClient.convertToType(data['last_seen_at'], 'Number');
            }
            if (data.hasOwnProperty('meta_data')) {
                obj['meta_data'] = SBObject.constructFromObject(data['meta_data']);
            }
            if (data.hasOwnProperty('nickname')) {
                obj['nickname'] = ApiClient.convertToType(data['nickname'], 'String');
            }
            if (data.hasOwnProperty('plain_profile_url')) {
                obj['plain_profile_url'] = ApiClient.convertToType(data['plain_profile_url'], 'String');
            }
            if (data.hasOwnProperty('preferred_languages')) {
                obj['preferred_languages'] = ApiClient.convertToType(data['preferred_languages'], ['String']);
            }
            if (data.hasOwnProperty('profile_url')) {
                obj['profile_url'] = ApiClient.convertToType(data['profile_url'], 'String');
            }
            if (data.hasOwnProperty('require_auth')) {
                obj['require_auth'] = ApiClient.convertToType(data['require_auth'], 'Boolean');
            }
            if (data.hasOwnProperty('user_id')) {
                obj['user_id'] = ApiClient.convertToType(data['user_id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} connection_status
 */
SendBirdSender.prototype['connection_status'] = undefined;

/**
 * @member {String} friend_discovery_key
 */
SendBirdSender.prototype['friend_discovery_key'] = undefined;

/**
 * @member {String} friend_name
 */
SendBirdSender.prototype['friend_name'] = undefined;

/**
 * @member {Boolean} is_active
 */
SendBirdSender.prototype['is_active'] = undefined;

/**
 * @member {Boolean} is_blocked_by_me
 */
SendBirdSender.prototype['is_blocked_by_me'] = undefined;

/**
 * @member {Number} last_seen_at
 */
SendBirdSender.prototype['last_seen_at'] = undefined;

/**
 * @member {module:model/SBObject} meta_data
 */
SendBirdSender.prototype['meta_data'] = undefined;

/**
 * @member {String} nickname
 */
SendBirdSender.prototype['nickname'] = undefined;

/**
 * @member {String} plain_profile_url
 */
SendBirdSender.prototype['plain_profile_url'] = undefined;

/**
 * @member {Array.<String>} preferred_languages
 */
SendBirdSender.prototype['preferred_languages'] = undefined;

/**
 * @member {String} profile_url
 */
SendBirdSender.prototype['profile_url'] = undefined;

/**
 * @member {Boolean} require_auth
 */
SendBirdSender.prototype['require_auth'] = undefined;

/**
 * @member {String} user_id
 */
SendBirdSender.prototype['user_id'] = undefined;






export default SendBirdSender;

