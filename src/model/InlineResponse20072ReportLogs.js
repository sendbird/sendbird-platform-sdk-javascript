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
 * The InlineResponse20072ReportLogs model module.
 * @module model/InlineResponse20072ReportLogs
 * @version 1.0.0
 */
class InlineResponse20072ReportLogs {
    /**
     * Constructs a new <code>InlineResponse20072ReportLogs</code>.
     * @alias module:model/InlineResponse20072ReportLogs
     */
    constructor() { 
        
        InlineResponse20072ReportLogs.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse20072ReportLogs</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20072ReportLogs} obj Optional instance to populate.
     * @return {module:model/InlineResponse20072ReportLogs} The populated <code>InlineResponse20072ReportLogs</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20072ReportLogs();

            if (data.hasOwnProperty('report_type')) {
                obj['report_type'] = ApiClient.convertToType(data['report_type'], 'String');
            }
            if (data.hasOwnProperty('report_category')) {
                obj['report_category'] = ApiClient.convertToType(data['report_category'], 'String');
            }
            if (data.hasOwnProperty('reporting_user')) {
                obj['reporting_user'] = SendBirdUser.constructFromObject(data['reporting_user']);
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
 * @member {String} report_type
 */
InlineResponse20072ReportLogs.prototype['report_type'] = undefined;

/**
 * @member {String} report_category
 */
InlineResponse20072ReportLogs.prototype['report_category'] = undefined;

/**
 * @member {module:model/SendBirdUser} reporting_user
 */
InlineResponse20072ReportLogs.prototype['reporting_user'] = undefined;

/**
 * @member {module:model/SendBirdUser} offending_user
 */
InlineResponse20072ReportLogs.prototype['offending_user'] = undefined;

/**
 * @member {module:model/SendBirdMessageResponse} reported_message
 */
InlineResponse20072ReportLogs.prototype['reported_message'] = undefined;

/**
 * @member {module:model/SendBirdChannelResponse} channel
 */
InlineResponse20072ReportLogs.prototype['channel'] = undefined;

/**
 * @member {String} report_description
 */
InlineResponse20072ReportLogs.prototype['report_description'] = undefined;

/**
 * @member {Number} created_at
 */
InlineResponse20072ReportLogs.prototype['created_at'] = undefined;






export default InlineResponse20072ReportLogs;
