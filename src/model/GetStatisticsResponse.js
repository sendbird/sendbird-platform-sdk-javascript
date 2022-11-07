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
import GetStatisticsDailyResponseStatisticsInner from './GetStatisticsDailyResponseStatisticsInner';

/**
 * The GetStatisticsResponse model module.
 * @module model/GetStatisticsResponse
 * @version 0.0.16
 */
class GetStatisticsResponse {
    /**
     * Constructs a new <code>GetStatisticsResponse</code>.
     * @alias module:model/GetStatisticsResponse
     */
    constructor() { 
        
        GetStatisticsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetStatisticsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetStatisticsResponse} obj Optional instance to populate.
     * @return {module:model/GetStatisticsResponse} The populated <code>GetStatisticsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetStatisticsResponse();

            if (data.hasOwnProperty('statistics')) {
                obj['statistics'] = ApiClient.convertToType(data['statistics'], [GetStatisticsDailyResponseStatisticsInner]);
            }
            if (data.hasOwnProperty('week')) {
                obj['week'] = ApiClient.convertToType(data['week'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/GetStatisticsDailyResponseStatisticsInner>} statistics
 */
GetStatisticsResponse.prototype['statistics'] = undefined;

/**
 * @member {Number} week
 */
GetStatisticsResponse.prototype['week'] = undefined;






export default GetStatisticsResponse;

