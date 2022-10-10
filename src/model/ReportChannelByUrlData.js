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
 * The ReportChannelByUrlData model module.
 * @module model/ReportChannelByUrlData
 * @version 0.0.14
 */
class ReportChannelByUrlData {
    /**
     * Constructs a new <code>ReportChannelByUrlData</code>.
     * @alias module:model/ReportChannelByUrlData
     * @param reportCategory {String} Specifies the category which indicates the reason for reporting. Acceptable values are suspicious, harassing, inappropriate, and spam.
     */
    constructor(reportCategory) { 
        
        ReportChannelByUrlData.initialize(this, reportCategory);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, reportCategory) { 
        obj['report_category'] = reportCategory;
    }

    /**
     * Constructs a <code>ReportChannelByUrlData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReportChannelByUrlData} obj Optional instance to populate.
     * @return {module:model/ReportChannelByUrlData} The populated <code>ReportChannelByUrlData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReportChannelByUrlData();

            if (data.hasOwnProperty('channel_type')) {
                obj['channel_type'] = ApiClient.convertToType(data['channel_type'], 'String');
            }
            if (data.hasOwnProperty('channel_url')) {
                obj['channel_url'] = ApiClient.convertToType(data['channel_url'], 'String');
            }
            if (data.hasOwnProperty('report_category')) {
                obj['report_category'] = ApiClient.convertToType(data['report_category'], 'String');
            }
            if (data.hasOwnProperty('reporting_user_id')) {
                obj['reporting_user_id'] = ApiClient.convertToType(data['reporting_user_id'], 'String');
            }
            if (data.hasOwnProperty('report_description')) {
                obj['report_description'] = ApiClient.convertToType(data['report_description'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Specifies the type of the channel. Either open_channels or group_channels.
 * @member {String} channel_type
 */
ReportChannelByUrlData.prototype['channel_type'] = undefined;

/**
 * Specifies the URL of the channel to report for offensive messages or inappropriate activities.
 * @member {String} channel_url
 */
ReportChannelByUrlData.prototype['channel_url'] = undefined;

/**
 * Specifies the category which indicates the reason for reporting. Acceptable values are suspicious, harassing, inappropriate, and spam.
 * @member {String} report_category
 */
ReportChannelByUrlData.prototype['report_category'] = undefined;

/**
 * Specifies the unique ID of the user who reports the channel.
 * @member {String} reporting_user_id
 */
ReportChannelByUrlData.prototype['reporting_user_id'] = undefined;

/**
 * Specifies additional information to be included in the report.
 * @member {String} report_description
 */
ReportChannelByUrlData.prototype['report_description'] = undefined;






export default ReportChannelByUrlData;

