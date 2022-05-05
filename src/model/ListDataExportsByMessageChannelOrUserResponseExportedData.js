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
import ListDataExportsByMessageChannelOrUserResponseFile from './ListDataExportsByMessageChannelOrUserResponseFile';

/**
 * The ListDataExportsByMessageChannelOrUserResponseExportedData model module.
 * @module model/ListDataExportsByMessageChannelOrUserResponseExportedData
 * @version 1.0.0
 */
class ListDataExportsByMessageChannelOrUserResponseExportedData {
    /**
     * Constructs a new <code>ListDataExportsByMessageChannelOrUserResponseExportedData</code>.
     * @alias module:model/ListDataExportsByMessageChannelOrUserResponseExportedData
     */
    constructor() { 
        
        ListDataExportsByMessageChannelOrUserResponseExportedData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ListDataExportsByMessageChannelOrUserResponseExportedData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListDataExportsByMessageChannelOrUserResponseExportedData} obj Optional instance to populate.
     * @return {module:model/ListDataExportsByMessageChannelOrUserResponseExportedData} The populated <code>ListDataExportsByMessageChannelOrUserResponseExportedData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListDataExportsByMessageChannelOrUserResponseExportedData();

            if (data.hasOwnProperty('request_id')) {
                obj['request_id'] = ApiClient.convertToType(data['request_id'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('format')) {
                obj['format'] = ApiClient.convertToType(data['format'], 'String');
            }
            if (data.hasOwnProperty('csv_delimiter')) {
                obj['csv_delimiter'] = ApiClient.convertToType(data['csv_delimiter'], 'String');
            }
            if (data.hasOwnProperty('timezone')) {
                obj['timezone'] = ApiClient.convertToType(data['timezone'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Number');
            }
            if (data.hasOwnProperty('start_ts')) {
                obj['start_ts'] = ApiClient.convertToType(data['start_ts'], 'Number');
            }
            if (data.hasOwnProperty('end_ts')) {
                obj['end_ts'] = ApiClient.convertToType(data['end_ts'], 'Number');
            }
            if (data.hasOwnProperty('channel_urls')) {
                obj['channel_urls'] = ApiClient.convertToType(data['channel_urls'], ['String']);
            }
            if (data.hasOwnProperty('sender_ids')) {
                obj['sender_ids'] = ApiClient.convertToType(data['sender_ids'], ['String']);
            }
            if (data.hasOwnProperty('file')) {
                obj['file'] = ListDataExportsByMessageChannelOrUserResponseFile.constructFromObject(data['file']);
            }
            if (data.hasOwnProperty('user_ids')) {
                obj['user_ids'] = ApiClient.convertToType(data['user_ids'], ['Number']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} request_id
 */
ListDataExportsByMessageChannelOrUserResponseExportedData.prototype['request_id'] = undefined;

/**
 * @member {String} status
 */
ListDataExportsByMessageChannelOrUserResponseExportedData.prototype['status'] = undefined;

/**
 * @member {String} format
 */
ListDataExportsByMessageChannelOrUserResponseExportedData.prototype['format'] = undefined;

/**
 * @member {String} csv_delimiter
 */
ListDataExportsByMessageChannelOrUserResponseExportedData.prototype['csv_delimiter'] = undefined;

/**
 * @member {String} timezone
 */
ListDataExportsByMessageChannelOrUserResponseExportedData.prototype['timezone'] = undefined;

/**
 * @member {Number} created_at
 */
ListDataExportsByMessageChannelOrUserResponseExportedData.prototype['created_at'] = undefined;

/**
 * @member {Number} start_ts
 */
ListDataExportsByMessageChannelOrUserResponseExportedData.prototype['start_ts'] = undefined;

/**
 * @member {Number} end_ts
 */
ListDataExportsByMessageChannelOrUserResponseExportedData.prototype['end_ts'] = undefined;

/**
 * @member {Array.<String>} channel_urls
 */
ListDataExportsByMessageChannelOrUserResponseExportedData.prototype['channel_urls'] = undefined;

/**
 * @member {Array.<String>} sender_ids
 */
ListDataExportsByMessageChannelOrUserResponseExportedData.prototype['sender_ids'] = undefined;

/**
 * @member {module:model/ListDataExportsByMessageChannelOrUserResponseFile} file
 */
ListDataExportsByMessageChannelOrUserResponseExportedData.prototype['file'] = undefined;

/**
 * @member {Array.<Number>} user_ids
 */
ListDataExportsByMessageChannelOrUserResponseExportedData.prototype['user_ids'] = undefined;






export default ListDataExportsByMessageChannelOrUserResponseExportedData;
