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
 * The ScheduleAnnouncementDataMessage model module.
 * @module model/ScheduleAnnouncementDataMessage
 * @version 0.0.16
 */
class ScheduleAnnouncementDataMessage {
    /**
     * Constructs a new <code>ScheduleAnnouncementDataMessage</code>.
     * The [message](/docs/chat/v3/platform-api/guides/messages#-3-resource-representation) of a new announcement.
     * @alias module:model/ScheduleAnnouncementDataMessage
     */
    constructor() { 
        
        ScheduleAnnouncementDataMessage.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ScheduleAnnouncementDataMessage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ScheduleAnnouncementDataMessage} obj Optional instance to populate.
     * @return {module:model/ScheduleAnnouncementDataMessage} The populated <code>ScheduleAnnouncementDataMessage</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ScheduleAnnouncementDataMessage();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('user_id')) {
                obj['user_id'] = ApiClient.convertToType(data['user_id'], 'String');
            }
            if (data.hasOwnProperty('content')) {
                obj['content'] = ApiClient.convertToType(data['content'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} type
 */
ScheduleAnnouncementDataMessage.prototype['type'] = undefined;

/**
 * @member {String} user_id
 */
ScheduleAnnouncementDataMessage.prototype['user_id'] = undefined;

/**
 * @member {String} content
 */
ScheduleAnnouncementDataMessage.prototype['content'] = undefined;






export default ScheduleAnnouncementDataMessage;
