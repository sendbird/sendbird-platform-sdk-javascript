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
 * The GetDetailedOpenRateOfAnnouncementByIdResponse model module.
 * @module model/GetDetailedOpenRateOfAnnouncementByIdResponse
 * @version 1.0.0
 */
class GetDetailedOpenRateOfAnnouncementByIdResponse {
    /**
     * Constructs a new <code>GetDetailedOpenRateOfAnnouncementByIdResponse</code>.
     * @alias module:model/GetDetailedOpenRateOfAnnouncementByIdResponse
     */
    constructor() { 
        
        GetDetailedOpenRateOfAnnouncementByIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetDetailedOpenRateOfAnnouncementByIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetDetailedOpenRateOfAnnouncementByIdResponse} obj Optional instance to populate.
     * @return {module:model/GetDetailedOpenRateOfAnnouncementByIdResponse} The populated <code>GetDetailedOpenRateOfAnnouncementByIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetDetailedOpenRateOfAnnouncementByIdResponse();

            if (data.hasOwnProperty('unique_id')) {
                obj['unique_id'] = ApiClient.convertToType(data['unique_id'], 'String');
            }
            if (data.hasOwnProperty('open_counts')) {
                obj['open_counts'] = ApiClient.convertToType(data['open_counts'], ['Number']);
            }
            if (data.hasOwnProperty('open_rates')) {
                obj['open_rates'] = ApiClient.convertToType(data['open_rates'], ['Number']);
            }
            if (data.hasOwnProperty('cumulative_open_counts')) {
                obj['cumulative_open_counts'] = ApiClient.convertToType(data['cumulative_open_counts'], ['Number']);
            }
            if (data.hasOwnProperty('cumulative_open_rates')) {
                obj['cumulative_open_rates'] = ApiClient.convertToType(data['cumulative_open_rates'], ['Number']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} unique_id
 */
GetDetailedOpenRateOfAnnouncementByIdResponse.prototype['unique_id'] = undefined;

/**
 * @member {Array.<Number>} open_counts
 */
GetDetailedOpenRateOfAnnouncementByIdResponse.prototype['open_counts'] = undefined;

/**
 * @member {Array.<Number>} open_rates
 */
GetDetailedOpenRateOfAnnouncementByIdResponse.prototype['open_rates'] = undefined;

/**
 * @member {Array.<Number>} cumulative_open_counts
 */
GetDetailedOpenRateOfAnnouncementByIdResponse.prototype['cumulative_open_counts'] = undefined;

/**
 * @member {Array.<Number>} cumulative_open_rates
 */
GetDetailedOpenRateOfAnnouncementByIdResponse.prototype['cumulative_open_rates'] = undefined;






export default GetDetailedOpenRateOfAnnouncementByIdResponse;

