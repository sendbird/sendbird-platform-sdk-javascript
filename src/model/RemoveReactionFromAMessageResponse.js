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
 * The RemoveReactionFromAMessageResponse model module.
 * @module model/RemoveReactionFromAMessageResponse
 * @version 1.0.3
 */
class RemoveReactionFromAMessageResponse {
    /**
     * Constructs a new <code>RemoveReactionFromAMessageResponse</code>.
     * @alias module:model/RemoveReactionFromAMessageResponse
     */
    constructor() { 
        
        RemoveReactionFromAMessageResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RemoveReactionFromAMessageResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RemoveReactionFromAMessageResponse} obj Optional instance to populate.
     * @return {module:model/RemoveReactionFromAMessageResponse} The populated <code>RemoveReactionFromAMessageResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RemoveReactionFromAMessageResponse();

            if (data.hasOwnProperty('reaction')) {
                obj['reaction'] = ApiClient.convertToType(data['reaction'], 'String');
            }
            if (data.hasOwnProperty('user_id')) {
                obj['user_id'] = ApiClient.convertToType(data['user_id'], 'Number');
            }
            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');
            }
            if (data.hasOwnProperty('msg_id')) {
                obj['msg_id'] = ApiClient.convertToType(data['msg_id'], 'Number');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Number');
            }
            if (data.hasOwnProperty('operation')) {
                obj['operation'] = ApiClient.convertToType(data['operation'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} reaction
 */
RemoveReactionFromAMessageResponse.prototype['reaction'] = undefined;

/**
 * @member {Number} user_id
 */
RemoveReactionFromAMessageResponse.prototype['user_id'] = undefined;

/**
 * @member {Boolean} success
 */
RemoveReactionFromAMessageResponse.prototype['success'] = undefined;

/**
 * @member {Number} msg_id
 */
RemoveReactionFromAMessageResponse.prototype['msg_id'] = undefined;

/**
 * @member {Number} updated_at
 */
RemoveReactionFromAMessageResponse.prototype['updated_at'] = undefined;

/**
 * @member {String} operation
 */
RemoveReactionFromAMessageResponse.prototype['operation'] = undefined;






export default RemoveReactionFromAMessageResponse;

