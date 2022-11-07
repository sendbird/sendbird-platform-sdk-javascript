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
import ScheduleAnnouncementResponseCreateChannelOptions from './ScheduleAnnouncementResponseCreateChannelOptions';
import ScheduleAnnouncementResponseMessage from './ScheduleAnnouncementResponseMessage';

/**
 * The ScheduleAnnouncementResponse model module.
 * @module model/ScheduleAnnouncementResponse
 * @version 0.0.16
 */
class ScheduleAnnouncementResponse {
    /**
     * Constructs a new <code>ScheduleAnnouncementResponse</code>.
     * @alias module:model/ScheduleAnnouncementResponse
     */
    constructor() { 
        
        ScheduleAnnouncementResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ScheduleAnnouncementResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ScheduleAnnouncementResponse} obj Optional instance to populate.
     * @return {module:model/ScheduleAnnouncementResponse} The populated <code>ScheduleAnnouncementResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ScheduleAnnouncementResponse();

            if (data.hasOwnProperty('unique_id')) {
                obj['unique_id'] = ApiClient.convertToType(data['unique_id'], 'String');
            }
            if (data.hasOwnProperty('announcement_group')) {
                obj['announcement_group'] = ApiClient.convertToType(data['announcement_group'], 'String');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ScheduleAnnouncementResponseMessage.constructFromObject(data['message']);
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
            if (data.hasOwnProperty('target_channel_type')) {
                obj['target_channel_type'] = ApiClient.convertToType(data['target_channel_type'], 'String');
            }
            if (data.hasOwnProperty('create_channel_options')) {
                obj['create_channel_options'] = ScheduleAnnouncementResponseCreateChannelOptions.constructFromObject(data['create_channel_options']);
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('scheduled_at')) {
                obj['scheduled_at'] = ApiClient.convertToType(data['scheduled_at'], 'Number');
            }
            if (data.hasOwnProperty('cease_at')) {
                obj['cease_at'] = ApiClient.convertToType(data['cease_at'], 'String');
            }
            if (data.hasOwnProperty('resume_at')) {
                obj['resume_at'] = ApiClient.convertToType(data['resume_at'], 'String');
            }
            if (data.hasOwnProperty('completed_at')) {
                obj['completed_at'] = ApiClient.convertToType(data['completed_at'], 'Number');
            }
            if (data.hasOwnProperty('sent_user_count')) {
                obj['sent_user_count'] = ApiClient.convertToType(data['sent_user_count'], 'Number');
            }
            if (data.hasOwnProperty('sent_channel_count')) {
                obj['sent_channel_count'] = ApiClient.convertToType(data['sent_channel_count'], 'Number');
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
 * @member {String} unique_id
 */
ScheduleAnnouncementResponse.prototype['unique_id'] = undefined;

/**
 * @member {String} announcement_group
 */
ScheduleAnnouncementResponse.prototype['announcement_group'] = undefined;

/**
 * @member {module:model/ScheduleAnnouncementResponseMessage} message
 */
ScheduleAnnouncementResponse.prototype['message'] = undefined;

/**
 * @member {Boolean} enable_push
 */
ScheduleAnnouncementResponse.prototype['enable_push'] = undefined;

/**
 * @member {String} target_at
 */
ScheduleAnnouncementResponse.prototype['target_at'] = undefined;

/**
 * @member {Number} target_user_count
 */
ScheduleAnnouncementResponse.prototype['target_user_count'] = undefined;

/**
 * @member {Number} target_channel_count
 */
ScheduleAnnouncementResponse.prototype['target_channel_count'] = undefined;

/**
 * @member {String} target_channel_type
 */
ScheduleAnnouncementResponse.prototype['target_channel_type'] = undefined;

/**
 * @member {module:model/ScheduleAnnouncementResponseCreateChannelOptions} create_channel_options
 */
ScheduleAnnouncementResponse.prototype['create_channel_options'] = undefined;

/**
 * @member {String} status
 */
ScheduleAnnouncementResponse.prototype['status'] = undefined;

/**
 * @member {Number} scheduled_at
 */
ScheduleAnnouncementResponse.prototype['scheduled_at'] = undefined;

/**
 * @member {String} cease_at
 */
ScheduleAnnouncementResponse.prototype['cease_at'] = undefined;

/**
 * @member {String} resume_at
 */
ScheduleAnnouncementResponse.prototype['resume_at'] = undefined;

/**
 * @member {Number} completed_at
 */
ScheduleAnnouncementResponse.prototype['completed_at'] = undefined;

/**
 * @member {Number} sent_user_count
 */
ScheduleAnnouncementResponse.prototype['sent_user_count'] = undefined;

/**
 * @member {Number} sent_channel_count
 */
ScheduleAnnouncementResponse.prototype['sent_channel_count'] = undefined;

/**
 * @member {Number} open_count
 */
ScheduleAnnouncementResponse.prototype['open_count'] = undefined;

/**
 * @member {Number} open_rate
 */
ScheduleAnnouncementResponse.prototype['open_rate'] = undefined;






export default ScheduleAnnouncementResponse;

