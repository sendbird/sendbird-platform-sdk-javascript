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
 * The RegisterGdprRequestResponse model module.
 * @module model/RegisterGdprRequestResponse
 * @version 0.0.16
 */
class RegisterGdprRequestResponse {
    /**
     * Constructs a new <code>RegisterGdprRequestResponse</code>.
     * @alias module:model/RegisterGdprRequestResponse
     */
    constructor() { 
        
        RegisterGdprRequestResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RegisterGdprRequestResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RegisterGdprRequestResponse} obj Optional instance to populate.
     * @return {module:model/RegisterGdprRequestResponse} The populated <code>RegisterGdprRequestResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RegisterGdprRequestResponse();

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
RegisterGdprRequestResponse.prototype['request_id'] = undefined;

/**
 * @member {String} action
 */
RegisterGdprRequestResponse.prototype['action'] = undefined;

/**
 * @member {String} status
 */
RegisterGdprRequestResponse.prototype['status'] = undefined;

/**
 * @member {String} user_id
 */
RegisterGdprRequestResponse.prototype['user_id'] = undefined;

/**
 * @member {Array.<String>} user_ids
 */
RegisterGdprRequestResponse.prototype['user_ids'] = undefined;

/**
 * @member {String} channel_delete_option
 */
RegisterGdprRequestResponse.prototype['channel_delete_option'] = undefined;

/**
 * @member {Number} created_at
 */
RegisterGdprRequestResponse.prototype['created_at'] = undefined;






export default RegisterGdprRequestResponse;

