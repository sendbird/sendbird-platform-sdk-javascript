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
 * The BlockUserData model module.
 * @module model/BlockUserData
 * @version 0.0.16
 */
class BlockUserData {
    /**
     * Constructs a new <code>BlockUserData</code>.
     * @alias module:model/BlockUserData
     * @param userId {String} Specifies the unique ID of the user to block.
     * @param targetId {String} Specifies the ID of the user to be blocked.
     * @param userIds {Array.<String>} Specifies an array of the IDs of the users to be blocked at a time. (for bulk mode)
     * @param users {Array.<String>} Specifies an array of the IDs of the users to be blocked at a time. The user_ids above and this property can be used interchangeably. (for bulk mode)
     */
    constructor(userId, targetId, userIds, users) { 
        
        BlockUserData.initialize(this, userId, targetId, userIds, users);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, userId, targetId, userIds, users) { 
        obj['user_id'] = userId;
        obj['target_id'] = targetId;
        obj['user_ids'] = userIds;
        obj['users'] = users;
    }

    /**
     * Constructs a <code>BlockUserData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BlockUserData} obj Optional instance to populate.
     * @return {module:model/BlockUserData} The populated <code>BlockUserData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BlockUserData();

            if (data.hasOwnProperty('user_id')) {
                obj['user_id'] = ApiClient.convertToType(data['user_id'], 'String');
            }
            if (data.hasOwnProperty('target_id')) {
                obj['target_id'] = ApiClient.convertToType(data['target_id'], 'String');
            }
            if (data.hasOwnProperty('user_ids')) {
                obj['user_ids'] = ApiClient.convertToType(data['user_ids'], ['String']);
            }
            if (data.hasOwnProperty('users')) {
                obj['users'] = ApiClient.convertToType(data['users'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * Specifies the unique ID of the user to block.
 * @member {String} user_id
 */
BlockUserData.prototype['user_id'] = undefined;

/**
 * Specifies the ID of the user to be blocked.
 * @member {String} target_id
 */
BlockUserData.prototype['target_id'] = undefined;

/**
 * Specifies an array of the IDs of the users to be blocked at a time. (for bulk mode)
 * @member {Array.<String>} user_ids
 */
BlockUserData.prototype['user_ids'] = undefined;

/**
 * Specifies an array of the IDs of the users to be blocked at a time. The user_ids above and this property can be used interchangeably. (for bulk mode)
 * @member {Array.<String>} users
 */
BlockUserData.prototype['users'] = undefined;






export default BlockUserData;

