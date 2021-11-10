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
 * The OcMuteUserData model module.
 * @module model/OcMuteUserData
 * @version 1.0.0
 */
class OcMuteUserData {
    /**
     * Constructs a new <code>OcMuteUserData</code>.
     * @alias module:model/OcMuteUserData
     * @param userId {String} Specifies the ID of the target user to mute.
     * @param seconds {Number} Specifies the duration of mute status. If set to -1, the user will be muted permanently (10 years, technically). (Default: -1)
     * @param description {String} Specifies a reason for the muting.
     */
    constructor(userId, seconds, description) { 
        
        OcMuteUserData.initialize(this, userId, seconds, description);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, userId, seconds, description) { 
        obj['user_id'] = userId;
        obj['seconds'] = seconds;
        obj['description'] = description;
    }

    /**
     * Constructs a <code>OcMuteUserData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OcMuteUserData} obj Optional instance to populate.
     * @return {module:model/OcMuteUserData} The populated <code>OcMuteUserData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OcMuteUserData();

            if (data.hasOwnProperty('user_id')) {
                obj['user_id'] = ApiClient.convertToType(data['user_id'], 'String');
            }
            if (data.hasOwnProperty('seconds')) {
                obj['seconds'] = ApiClient.convertToType(data['seconds'], 'Number');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Specifies the ID of the target user to mute.
 * @member {String} user_id
 */
OcMuteUserData.prototype['user_id'] = undefined;

/**
 * Specifies the duration of mute status. If set to -1, the user will be muted permanently (10 years, technically). (Default: -1)
 * @member {Number} seconds
 */
OcMuteUserData.prototype['seconds'] = undefined;

/**
 * Specifies a reason for the muting.
 * @member {String} description
 */
OcMuteUserData.prototype['description'] = undefined;






export default OcMuteUserData;

