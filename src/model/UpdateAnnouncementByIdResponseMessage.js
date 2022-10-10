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
 * The UpdateAnnouncementByIdResponseMessage model module.
 * @module model/UpdateAnnouncementByIdResponseMessage
 * @version 0.0.13
 */
class UpdateAnnouncementByIdResponseMessage {
    /**
     * Constructs a new <code>UpdateAnnouncementByIdResponseMessage</code>.
     * @alias module:model/UpdateAnnouncementByIdResponseMessage
     */
    constructor() { 
        
        UpdateAnnouncementByIdResponseMessage.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdateAnnouncementByIdResponseMessage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateAnnouncementByIdResponseMessage} obj Optional instance to populate.
     * @return {module:model/UpdateAnnouncementByIdResponseMessage} The populated <code>UpdateAnnouncementByIdResponseMessage</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateAnnouncementByIdResponseMessage();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('custom_type')) {
                obj['custom_type'] = ApiClient.convertToType(data['custom_type'], 'String');
            }
            if (data.hasOwnProperty('user_id')) {
                obj['user_id'] = ApiClient.convertToType(data['user_id'], 'String');
            }
            if (data.hasOwnProperty('content')) {
                obj['content'] = ApiClient.convertToType(data['content'], 'String');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], 'String');
            }
            if (data.hasOwnProperty('enable_push')) {
                obj['enable_push'] = ApiClient.convertToType(data['enable_push'], 'Boolean');
            }
            if (data.hasOwnProperty('target_at')) {
                obj['target_at'] = ApiClient.convertToType(data['target_at'], 'String');
            }
            if (data.hasOwnProperty('target_user_count')) {
                obj['target_user_count'] = ApiClient.convertToType(data['target_user_count'], 'Number');
            }
            if (data.hasOwnProperty('target_channel_count')) {
                obj['target_channel_count'] = ApiClient.convertToType(data['target_channel_count'], 'Number');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('scheduled_at')) {
                obj['scheduled_at'] = ApiClient.convertToType(data['scheduled_at'], 'Number');
            }
            if (data.hasOwnProperty('completed_at')) {
                obj['completed_at'] = ApiClient.convertToType(data['completed_at'], 'Number');
            }
            if (data.hasOwnProperty('sent_user_count')) {
                obj['sent_user_count'] = ApiClient.convertToType(data['sent_user_count'], 'Number');
            }
            if (data.hasOwnProperty('open_count')) {
                obj['open_count'] = ApiClient.convertToType(data['open_count'], 'Number');
            }
            if (data.hasOwnProperty('open_rate')) {
                obj['open_rate'] = ApiClient.convertToType(data['open_rate'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} type
 */
UpdateAnnouncementByIdResponseMessage.prototype['type'] = undefined;

/**
 * @member {String} custom_type
 */
UpdateAnnouncementByIdResponseMessage.prototype['custom_type'] = undefined;

/**
 * @member {String} user_id
 */
UpdateAnnouncementByIdResponseMessage.prototype['user_id'] = undefined;

/**
 * @member {String} content
 */
UpdateAnnouncementByIdResponseMessage.prototype['content'] = undefined;

/**
 * @member {String} data
 */
UpdateAnnouncementByIdResponseMessage.prototype['data'] = undefined;

/**
 * @member {Boolean} enable_push
 */
UpdateAnnouncementByIdResponseMessage.prototype['enable_push'] = undefined;

/**
 * @member {String} target_at
 */
UpdateAnnouncementByIdResponseMessage.prototype['target_at'] = undefined;

/**
 * @member {Number} target_user_count
 */
UpdateAnnouncementByIdResponseMessage.prototype['target_user_count'] = undefined;

/**
 * @member {Number} target_channel_count
 */
UpdateAnnouncementByIdResponseMessage.prototype['target_channel_count'] = undefined;

/**
 * @member {String} status
 */
UpdateAnnouncementByIdResponseMessage.prototype['status'] = undefined;

/**
 * @member {Number} scheduled_at
 */
UpdateAnnouncementByIdResponseMessage.prototype['scheduled_at'] = undefined;

/**
 * @member {Number} completed_at
 */
UpdateAnnouncementByIdResponseMessage.prototype['completed_at'] = undefined;

/**
 * @member {Number} sent_user_count
 */
UpdateAnnouncementByIdResponseMessage.prototype['sent_user_count'] = undefined;

/**
 * @member {Number} open_count
 */
UpdateAnnouncementByIdResponseMessage.prototype['open_count'] = undefined;

/**
 * @member {Number} open_rate
 */
UpdateAnnouncementByIdResponseMessage.prototype['open_rate'] = undefined;






export default UpdateAnnouncementByIdResponseMessage;

