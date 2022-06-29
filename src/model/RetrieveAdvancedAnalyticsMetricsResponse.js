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
 * The RetrieveAdvancedAnalyticsMetricsResponse model module.
 * @module model/RetrieveAdvancedAnalyticsMetricsResponse
 * @version 1.0.3
 */
class RetrieveAdvancedAnalyticsMetricsResponse {
    /**
     * Constructs a new <code>RetrieveAdvancedAnalyticsMetricsResponse</code>.
     * @alias module:model/RetrieveAdvancedAnalyticsMetricsResponse
     */
    constructor() { 
        
        RetrieveAdvancedAnalyticsMetricsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RetrieveAdvancedAnalyticsMetricsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RetrieveAdvancedAnalyticsMetricsResponse} obj Optional instance to populate.
     * @return {module:model/RetrieveAdvancedAnalyticsMetricsResponse} The populated <code>RetrieveAdvancedAnalyticsMetricsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RetrieveAdvancedAnalyticsMetricsResponse();

            if (data.hasOwnProperty('segments')) {
                obj['segments'] = ApiClient.convertToType(data['segments'], 'String');
            }
            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'Number');
            }
            if (data.hasOwnProperty('channel_type')) {
                obj['channel_type'] = ApiClient.convertToType(data['channel_type'], 'String');
            }
            if (data.hasOwnProperty('custom_channel_type')) {
                obj['custom_channel_type'] = ApiClient.convertToType(data['custom_channel_type'], 'String');
            }
            if (data.hasOwnProperty('custom_message_type')) {
                obj['custom_message_type'] = ApiClient.convertToType(data['custom_message_type'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} segments
 */
RetrieveAdvancedAnalyticsMetricsResponse.prototype['segments'] = undefined;

/**
 * @member {String} date
 */
RetrieveAdvancedAnalyticsMetricsResponse.prototype['date'] = undefined;

/**
 * @member {Number} value
 */
RetrieveAdvancedAnalyticsMetricsResponse.prototype['value'] = undefined;

/**
 * @member {String} channel_type
 */
RetrieveAdvancedAnalyticsMetricsResponse.prototype['channel_type'] = undefined;

/**
 * @member {String} custom_channel_type
 */
RetrieveAdvancedAnalyticsMetricsResponse.prototype['custom_channel_type'] = undefined;

/**
 * @member {String} custom_message_type
 */
RetrieveAdvancedAnalyticsMetricsResponse.prototype['custom_message_type'] = undefined;






export default RetrieveAdvancedAnalyticsMetricsResponse;

