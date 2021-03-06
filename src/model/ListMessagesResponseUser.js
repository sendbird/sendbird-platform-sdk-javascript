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
import ListMessagesResponseUserMetadata from './ListMessagesResponseUserMetadata';

/**
 * The ListMessagesResponseUser model module.
 * @module model/ListMessagesResponseUser
 * @version 1.0.0
 */
class ListMessagesResponseUser {
    /**
     * Constructs a new <code>ListMessagesResponseUser</code>.
     * @alias module:model/ListMessagesResponseUser
     */
    constructor() { 
        
        ListMessagesResponseUser.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ListMessagesResponseUser</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListMessagesResponseUser} obj Optional instance to populate.
     * @return {module:model/ListMessagesResponseUser} The populated <code>ListMessagesResponseUser</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListMessagesResponseUser();

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
                obj['metadata'] = ListMessagesResponseUserMetadata.constructFromObject(data['metadata']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} user_id
 */
ListMessagesResponseUser.prototype['user_id'] = undefined;

/**
 * @member {String} nickname
 */
ListMessagesResponseUser.prototype['nickname'] = undefined;

/**
 * @member {String} profile_url
 */
ListMessagesResponseUser.prototype['profile_url'] = undefined;

/**
 * @member {module:model/ListMessagesResponseUserMetadata} metadata
 */
ListMessagesResponseUser.prototype['metadata'] = undefined;






export default ListMessagesResponseUser;

