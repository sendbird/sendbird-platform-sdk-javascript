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
 * The ListPushConfigurationsResponsePushConfigurationsInner model module.
 * @module model/ListPushConfigurationsResponsePushConfigurationsInner
 * @version 0.0.16
 */
class ListPushConfigurationsResponsePushConfigurationsInner {
    /**
     * Constructs a new <code>ListPushConfigurationsResponsePushConfigurationsInner</code>.
     * @alias module:model/ListPushConfigurationsResponsePushConfigurationsInner
     */
    constructor() { 
        
        ListPushConfigurationsResponsePushConfigurationsInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ListPushConfigurationsResponsePushConfigurationsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListPushConfigurationsResponsePushConfigurationsInner} obj Optional instance to populate.
     * @return {module:model/ListPushConfigurationsResponsePushConfigurationsInner} The populated <code>ListPushConfigurationsResponsePushConfigurationsInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListPushConfigurationsResponsePushConfigurationsInner();

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
ListPushConfigurationsResponsePushConfigurationsInner.prototype['id'] = undefined;

/**
 * @member {String} push_type
 */
ListPushConfigurationsResponsePushConfigurationsInner.prototype['push_type'] = undefined;

/**
 * @member {Number} created_at
 */
ListPushConfigurationsResponsePushConfigurationsInner.prototype['created_at'] = undefined;

/**
 * @member {String} api_key
 */
ListPushConfigurationsResponsePushConfigurationsInner.prototype['api_key'] = undefined;

/**
 * @member {String} sender_id
 */
ListPushConfigurationsResponsePushConfigurationsInner.prototype['sender_id'] = undefined;

/**
 * @member {String} push_sound
 */
ListPushConfigurationsResponsePushConfigurationsInner.prototype['push_sound'] = undefined;






export default ListPushConfigurationsResponsePushConfigurationsInner;

