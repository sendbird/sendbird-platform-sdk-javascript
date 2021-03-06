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
 * The GetStatisticsDailyResponseStatistics model module.
 * @module model/GetStatisticsDailyResponseStatistics
 * @version 1.0.3
 */
class GetStatisticsDailyResponseStatistics {
    /**
     * Constructs a new <code>GetStatisticsDailyResponseStatistics</code>.
     * @alias module:model/GetStatisticsDailyResponseStatistics
     */
    constructor() { 
        
        GetStatisticsDailyResponseStatistics.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetStatisticsDailyResponseStatistics</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetStatisticsDailyResponseStatistics} obj Optional instance to populate.
     * @return {module:model/GetStatisticsDailyResponseStatistics} The populated <code>GetStatisticsDailyResponseStatistics</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetStatisticsDailyResponseStatistics();

            if (data.hasOwnProperty('date_range')) {
                obj['date_range'] = ApiClient.convertToType(data['date_range'], 'String');
            }
            if (data.hasOwnProperty('canceled_announcement_count')) {
                obj['canceled_announcement_count'] = ApiClient.convertToType(data['canceled_announcement_count'], 'Number');
            }
            if (data.hasOwnProperty('stopped_announcement_count')) {
                obj['stopped_announcement_count'] = ApiClient.convertToType(data['stopped_announcement_count'], 'Number');
            }
            if (data.hasOwnProperty('completed_announcement_count')) {
                obj['completed_announcement_count'] = ApiClient.convertToType(data['completed_announcement_count'], 'Number');
            }
            if (data.hasOwnProperty('total_announcement_count')) {
                obj['total_announcement_count'] = ApiClient.convertToType(data['total_announcement_count'], 'Number');
            }
            if (data.hasOwnProperty('target_channel_count')) {
                obj['target_channel_count'] = ApiClient.convertToType(data['target_channel_count'], 'Number');
            }
            if (data.hasOwnProperty('target_user_count')) {
                obj['target_user_count'] = ApiClient.convertToType(data['target_user_count'], 'Number');
            }
            if (data.hasOwnProperty('sent_channel_count')) {
                obj['sent_channel_count'] = ApiClient.convertToType(data['sent_channel_count'], 'Number');
            }
            if (data.hasOwnProperty('sent_user_count')) {
                obj['sent_user_count'] = ApiClient.convertToType(data['sent_user_count'], 'Number');
            }
            if (data.hasOwnProperty('open_rate')) {
                obj['open_rate'] = ApiClient.convertToType(data['open_rate'], 'Number');
            }
            if (data.hasOwnProperty('open_count')) {
                obj['open_count'] = ApiClient.convertToType(data['open_count'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} date_range
 */
GetStatisticsDailyResponseStatistics.prototype['date_range'] = undefined;

/**
 * @member {Number} canceled_announcement_count
 */
GetStatisticsDailyResponseStatistics.prototype['canceled_announcement_count'] = undefined;

/**
 * @member {Number} stopped_announcement_count
 */
GetStatisticsDailyResponseStatistics.prototype['stopped_announcement_count'] = undefined;

/**
 * @member {Number} completed_announcement_count
 */
GetStatisticsDailyResponseStatistics.prototype['completed_announcement_count'] = undefined;

/**
 * @member {Number} total_announcement_count
 */
GetStatisticsDailyResponseStatistics.prototype['total_announcement_count'] = undefined;

/**
 * @member {Number} target_channel_count
 */
GetStatisticsDailyResponseStatistics.prototype['target_channel_count'] = undefined;

/**
 * @member {Number} target_user_count
 */
GetStatisticsDailyResponseStatistics.prototype['target_user_count'] = undefined;

/**
 * @member {Number} sent_channel_count
 */
GetStatisticsDailyResponseStatistics.prototype['sent_channel_count'] = undefined;

/**
 * @member {Number} sent_user_count
 */
GetStatisticsDailyResponseStatistics.prototype['sent_user_count'] = undefined;

/**
 * @member {Number} open_rate
 */
GetStatisticsDailyResponseStatistics.prototype['open_rate'] = undefined;

/**
 * @member {Number} open_count
 */
GetStatisticsDailyResponseStatistics.prototype['open_count'] = undefined;






export default GetStatisticsDailyResponseStatistics;

