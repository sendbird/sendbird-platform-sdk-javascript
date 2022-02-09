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
 * The ViewGdprRequestByIdResponse model module.
 * @module model/ViewGdprRequestByIdResponse
 * @version 1.0.0
 */
class ViewGdprRequestByIdResponse {
    /**
     * Constructs a new <code>ViewGdprRequestByIdResponse</code>.
     * @alias module:model/ViewGdprRequestByIdResponse
     */
    constructor() { 
        
        ViewGdprRequestByIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ViewGdprRequestByIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ViewGdprRequestByIdResponse} obj Optional instance to populate.
     * @return {module:model/ViewGdprRequestByIdResponse} The populated <code>ViewGdprRequestByIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ViewGdprRequestByIdResponse();

            if (data.hasOwnProperty('request_id')) {
                obj['request_id'] = ApiClient.convertToType(data['request_id'], 'String');
            }
            if (data.hasOwnProperty('action')) {
                obj['action'] = ApiClient.convertToType(data['action'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('user_id')) {
                obj['user_id'] = ApiClient.convertToType(data['user_id'], 'String');
            }
            if (data.hasOwnProperty('files')) {
                obj['files'] = ListDataExportsByMessageChannelOrUserResponseFile.constructFromObject(data['files']);
            }
            if (data.hasOwnProperty('user_ids')) {
                obj['user_ids'] = ApiClient.convertToType(data['user_ids'], ['String']);
            }
            if (data.hasOwnProperty('channel_delete_option')) {
                obj['channel_delete_option'] = ApiClient.convertToType(data['channel_delete_option'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} request_id
 */
ViewGdprRequestByIdResponse.prototype['request_id'] = undefined;

/**
 * @member {String} action
 */
ViewGdprRequestByIdResponse.prototype['action'] = undefined;

/**
 * @member {String} status
 */
ViewGdprRequestByIdResponse.prototype['status'] = undefined;

/**
 * @member {String} user_id
 */
ViewGdprRequestByIdResponse.prototype['user_id'] = undefined;

/**
 * @member {module:model/ListDataExportsByMessageChannelOrUserResponseFile} files
 */
ViewGdprRequestByIdResponse.prototype['files'] = undefined;

/**
 * @member {Array.<String>} user_ids
 */
ViewGdprRequestByIdResponse.prototype['user_ids'] = undefined;

/**
 * @member {String} channel_delete_option
 */
ViewGdprRequestByIdResponse.prototype['channel_delete_option'] = undefined;

/**
 * @member {Number} created_at
 */
ViewGdprRequestByIdResponse.prototype['created_at'] = undefined;






export default ViewGdprRequestByIdResponse;

