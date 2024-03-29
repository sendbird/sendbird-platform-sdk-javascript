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
import SendBirdMessageResponseMentionedUsersInner from './SendBirdMessageResponseMentionedUsersInner';
import SendBirdMessageResponseUser from './SendBirdMessageResponseUser';

/**
 * The SendBirdMessageResponse model module.
 * @module model/SendBirdMessageResponse
 * @version 0.0.16
 */
class SendBirdMessageResponse {
    /**
     * Constructs a new <code>SendBirdMessageResponse</code>.
     * @alias module:model/SendBirdMessageResponse
     */
    constructor() { 
        
        SendBirdMessageResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SendBirdMessageResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SendBirdMessageResponse} obj Optional instance to populate.
     * @return {module:model/SendBirdMessageResponse} The populated <code>SendBirdMessageResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SendBirdMessageResponse();

            if (data.hasOwnProperty('require_auth')) {
                obj['require_auth'] = ApiClient.convertToType(data['require_auth'], 'Boolean');
            }
            if (data.hasOwnProperty('message_survival_seconds')) {
                obj['message_survival_seconds'] = ApiClient.convertToType(data['message_survival_seconds'], 'Number');
            }
            if (data.hasOwnProperty('custom_type')) {
                obj['custom_type'] = ApiClient.convertToType(data['custom_type'], 'String');
            }
            if (data.hasOwnProperty('mentioned_users')) {
                obj['mentioned_users'] = ApiClient.convertToType(data['mentioned_users'], [SendBirdMessageResponseMentionedUsersInner]);
            }
            if (data.hasOwnProperty('translations')) {
                obj['translations'] = ApiClient.convertToType(data['translations'], Object);
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Number');
            }
            if (data.hasOwnProperty('is_op_msg')) {
                obj['is_op_msg'] = ApiClient.convertToType(data['is_op_msg'], 'Boolean');
            }
            if (data.hasOwnProperty('is_removed')) {
                obj['is_removed'] = ApiClient.convertToType(data['is_removed'], 'Boolean');
            }
            if (data.hasOwnProperty('user')) {
                obj['user'] = SendBirdMessageResponseUser.constructFromObject(data['user']);
            }
            if (data.hasOwnProperty('file')) {
                obj['file'] = ApiClient.convertToType(data['file'], Object);
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], 'String');
            }
            if (data.hasOwnProperty('message_retention_hour')) {
                obj['message_retention_hour'] = ApiClient.convertToType(data['message_retention_hour'], 'Number');
            }
            if (data.hasOwnProperty('silent')) {
                obj['silent'] = ApiClient.convertToType(data['silent'], 'Boolean');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Number');
            }
            if (data.hasOwnProperty('channel_type')) {
                obj['channel_type'] = ApiClient.convertToType(data['channel_type'], 'String');
            }
            if (data.hasOwnProperty('req_id')) {
                obj['req_id'] = ApiClient.convertToType(data['req_id'], 'String');
            }
            if (data.hasOwnProperty('mention_type')) {
                obj['mention_type'] = ApiClient.convertToType(data['mention_type'], 'String');
            }
            if (data.hasOwnProperty('channel_url')) {
                obj['channel_url'] = ApiClient.convertToType(data['channel_url'], 'String');
            }
            if (data.hasOwnProperty('message_id')) {
                obj['message_id'] = ApiClient.convertToType(data['message_id'], 'Number');
            }
            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'Number');
            }
            if (data.hasOwnProperty('sorted_metaarray')) {
                obj['sorted_metaarray'] = ApiClient.convertToType(data['sorted_metaarray'], [Object]);
            }
            if (data.hasOwnProperty('thread_info')) {
                obj['thread_info'] = ApiClient.convertToType(data['thread_info'], Object);
            }
            if (data.hasOwnProperty('parent_message_id')) {
                obj['parent_message_id'] = ApiClient.convertToType(data['parent_message_id'], 'Number');
            }
            if (data.hasOwnProperty('parent_message_info')) {
                obj['parent_message_info'] = ApiClient.convertToType(data['parent_message_info'], Object);
            }
            if (data.hasOwnProperty('is_reply_to_channel')) {
                obj['is_reply_to_channel'] = ApiClient.convertToType(data['is_reply_to_channel'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} require_auth
 */
SendBirdMessageResponse.prototype['require_auth'] = undefined;

/**
 * @member {Number} message_survival_seconds
 */
SendBirdMessageResponse.prototype['message_survival_seconds'] = undefined;

/**
 * @member {String} custom_type
 */
SendBirdMessageResponse.prototype['custom_type'] = undefined;

/**
 * @member {Array.<module:model/SendBirdMessageResponseMentionedUsersInner>} mentioned_users
 */
SendBirdMessageResponse.prototype['mentioned_users'] = undefined;

/**
 * @member {Object} translations
 */
SendBirdMessageResponse.prototype['translations'] = undefined;

/**
 * @member {Number} updated_at
 */
SendBirdMessageResponse.prototype['updated_at'] = undefined;

/**
 * @member {Boolean} is_op_msg
 */
SendBirdMessageResponse.prototype['is_op_msg'] = undefined;

/**
 * @member {Boolean} is_removed
 */
SendBirdMessageResponse.prototype['is_removed'] = undefined;

/**
 * @member {module:model/SendBirdMessageResponseUser} user
 */
SendBirdMessageResponse.prototype['user'] = undefined;

/**
 * @member {Object} file
 */
SendBirdMessageResponse.prototype['file'] = undefined;

/**
 * @member {String} message
 */
SendBirdMessageResponse.prototype['message'] = undefined;

/**
 * @member {String} data
 */
SendBirdMessageResponse.prototype['data'] = undefined;

/**
 * @member {Number} message_retention_hour
 */
SendBirdMessageResponse.prototype['message_retention_hour'] = undefined;

/**
 * @member {Boolean} silent
 */
SendBirdMessageResponse.prototype['silent'] = undefined;

/**
 * @member {String} type
 */
SendBirdMessageResponse.prototype['type'] = undefined;

/**
 * @member {Number} created_at
 */
SendBirdMessageResponse.prototype['created_at'] = undefined;

/**
 * @member {String} channel_type
 */
SendBirdMessageResponse.prototype['channel_type'] = undefined;

/**
 * @member {String} req_id
 */
SendBirdMessageResponse.prototype['req_id'] = undefined;

/**
 * @member {String} mention_type
 */
SendBirdMessageResponse.prototype['mention_type'] = undefined;

/**
 * @member {String} channel_url
 */
SendBirdMessageResponse.prototype['channel_url'] = undefined;

/**
 * @member {Number} message_id
 */
SendBirdMessageResponse.prototype['message_id'] = undefined;

/**
 * @member {Number} size
 */
SendBirdMessageResponse.prototype['size'] = undefined;

/**
 * @member {Array.<Object>} sorted_metaarray
 */
SendBirdMessageResponse.prototype['sorted_metaarray'] = undefined;

/**
 * @member {Object} thread_info
 */
SendBirdMessageResponse.prototype['thread_info'] = undefined;

/**
 * @member {Number} parent_message_id
 */
SendBirdMessageResponse.prototype['parent_message_id'] = undefined;

/**
 * @member {Object} parent_message_info
 */
SendBirdMessageResponse.prototype['parent_message_info'] = undefined;

/**
 * @member {Boolean} is_reply_to_channel
 */
SendBirdMessageResponse.prototype['is_reply_to_channel'] = undefined;






export default SendBirdMessageResponse;

