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
import SendBirdChannelResponse from './SendBirdChannelResponse';
import SendBirdMessageResponse from './SendBirdMessageResponse';
import SendBirdUser from './SendBirdUser';

/**
 * The ListReportsResponseReportLogs model module.
 * @module model/ListReportsResponseReportLogs
 * @version 1.0.0
 */
class ListReportsResponseReportLogs {
    /**
     * Constructs a new <code>ListReportsResponseReportLogs</code>.
     * @alias module:model/ListReportsResponseReportLogs
     */
    constructor() { 
        
        ListReportsResponseReportLogs.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ListReportsResponseReportLogs</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListReportsResponseReportLogs} obj Optional instance to populate.
     * @return {module:model/ListReportsResponseReportLogs} The populated <code>ListReportsResponseReportLogs</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListReportsResponseReportLogs();

            if (data.hasOwnProperty('reporting_user')) {
                obj['reporting_user'] = SendBirdUser.constructFromObject(data['reporting_user']);
            }
            if (data.hasOwnProperty('report_type')) {
                obj['report_type'] = ApiClient.convertToType(data['report_type'], 'String');
            }
            if (data.hasOwnProperty('report_category')) {
                obj['report_category'] = ApiClient.convertToType(data['report_category'], 'String');
            }
            if (data.hasOwnProperty('offending_user')) {
                obj['offending_user'] = SendBirdUser.constructFromObject(data['offending_user']);
            }
            if (data.hasOwnProperty('reported_message')) {
                obj['reported_message'] = SendBirdMessageResponse.constructFromObject(data['reported_message']);
            }
            if (data.hasOwnProperty('channel')) {
                obj['channel'] = SendBirdChannelResponse.constructFromObject(data['channel']);
            }
            if (data.hasOwnProperty('report_description')) {
                obj['report_description'] = ApiClient.convertToType(data['report_description'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/SendBirdUser} reporting_user
 */
ListReportsResponseReportLogs.prototype['reporting_user'] = undefined;

/**
 * @member {String} report_type
 */
ListReportsResponseReportLogs.prototype['report_type'] = undefined;

/**
 * @member {String} report_category
 */
ListReportsResponseReportLogs.prototype['report_category'] = undefined;

/**
 * @member {module:model/SendBirdUser} offending_user
 */
ListReportsResponseReportLogs.prototype['offending_user'] = undefined;

/**
 * @member {module:model/SendBirdMessageResponse} reported_message
 */
ListReportsResponseReportLogs.prototype['reported_message'] = undefined;

/**
 * @member {module:model/SendBirdChannelResponse} channel
 */
ListReportsResponseReportLogs.prototype['channel'] = undefined;

/**
 * @member {String} report_description
 */
ListReportsResponseReportLogs.prototype['report_description'] = undefined;

/**
 * @member {Number} created_at
 */
ListReportsResponseReportLogs.prototype['created_at'] = undefined;






export default ListReportsResponseReportLogs;

