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
import ListReportsResponseReportLogsInner from './ListReportsResponseReportLogsInner';

/**
 * The ListReportsResponse model module.
 * @module model/ListReportsResponse
 * @version 0.0.16
 */
class ListReportsResponse {
    /**
     * Constructs a new <code>ListReportsResponse</code>.
     * @alias module:model/ListReportsResponse
     */
    constructor() { 
        
        ListReportsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ListReportsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListReportsResponse} obj Optional instance to populate.
     * @return {module:model/ListReportsResponse} The populated <code>ListReportsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListReportsResponse();

            if (data.hasOwnProperty('report_logs')) {
                obj['report_logs'] = ApiClient.convertToType(data['report_logs'], [ListReportsResponseReportLogsInner]);
            }
            if (data.hasOwnProperty('next')) {
                obj['next'] = ApiClient.convertToType(data['next'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/ListReportsResponseReportLogsInner>} report_logs
 */
ListReportsResponse.prototype['report_logs'] = undefined;

/**
 * @member {String} next
 */
ListReportsResponse.prototype['next'] = undefined;






export default ListReportsResponse;

