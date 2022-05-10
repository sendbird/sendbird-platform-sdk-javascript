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
 * The ListPushConfigurationsResponsePushConfigurations model module.
 * @module model/ListPushConfigurationsResponsePushConfigurations
 * @version 1.0.1
 */
class ListPushConfigurationsResponsePushConfigurations {
    /**
     * Constructs a new <code>ListPushConfigurationsResponsePushConfigurations</code>.
     * @alias module:model/ListPushConfigurationsResponsePushConfigurations
     */
    constructor() { 
        
        ListPushConfigurationsResponsePushConfigurations.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ListPushConfigurationsResponsePushConfigurations</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListPushConfigurationsResponsePushConfigurations} obj Optional instance to populate.
     * @return {module:model/ListPushConfigurationsResponsePushConfigurations} The populated <code>ListPushConfigurationsResponsePushConfigurations</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListPushConfigurationsResponsePushConfigurations();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('push_type')) {
                obj['push_type'] = ApiClient.convertToType(data['push_type'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Number');
            }
            if (data.hasOwnProperty('api_key')) {
                obj['api_key'] = ApiClient.convertToType(data['api_key'], 'String');
            }
            if (data.hasOwnProperty('sender_id')) {
                obj['sender_id'] = ApiClient.convertToType(data['sender_id'], 'String');
            }
            if (data.hasOwnProperty('push_sound')) {
                obj['push_sound'] = ApiClient.convertToType(data['push_sound'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
ListPushConfigurationsResponsePushConfigurations.prototype['id'] = undefined;

/**
 * @member {String} push_type
 */
ListPushConfigurationsResponsePushConfigurations.prototype['push_type'] = undefined;

/**
 * @member {Number} created_at
 */
ListPushConfigurationsResponsePushConfigurations.prototype['created_at'] = undefined;

/**
 * @member {String} api_key
 */
ListPushConfigurationsResponsePushConfigurations.prototype['api_key'] = undefined;

/**
 * @member {String} sender_id
 */
ListPushConfigurationsResponsePushConfigurations.prototype['sender_id'] = undefined;

/**
 * @member {String} push_sound
 */
ListPushConfigurationsResponsePushConfigurations.prototype['push_sound'] = undefined;






export default ListPushConfigurationsResponsePushConfigurations;

