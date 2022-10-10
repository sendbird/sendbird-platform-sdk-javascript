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
import ListReportsOnMessageByIdResponseReportLogsInner from './ListReportsOnMessageByIdResponseReportLogsInner';

/**
 * The ListReportsOnMessageByIdResponse model module.
 * @module model/ListReportsOnMessageByIdResponse
 * @version 0.0.13
 */
class ListReportsOnMessageByIdResponse {
    /**
     * Constructs a new <code>ListReportsOnMessageByIdResponse</code>.
     * @alias module:model/ListReportsOnMessageByIdResponse
     */
    constructor() { 
        
        ListReportsOnMessageByIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ListReportsOnMessageByIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListReportsOnMessageByIdResponse} obj Optional instance to populate.
     * @return {module:model/ListReportsOnMessageByIdResponse} The populated <code>ListReportsOnMessageByIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListReportsOnMessageByIdResponse();

            if (data.hasOwnProperty('report_logs')) {
                obj['report_logs'] = ApiClient.convertToType(data['report_logs'], [ListReportsOnMessageByIdResponseReportLogsInner]);
            }
            if (data.hasOwnProperty('next')) {
                obj['next'] = ApiClient.convertToType(data['next'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/ListReportsOnMessageByIdResponseReportLogsInner>} report_logs
 */
ListReportsOnMessageByIdResponse.prototype['report_logs'] = undefined;

/**
 * @member {String} next
 */
ListReportsOnMessageByIdResponse.prototype['next'] = undefined;






export default ListReportsOnMessageByIdResponse;

