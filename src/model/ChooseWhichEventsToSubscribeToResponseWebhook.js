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
 * The ChooseWhichEventsToSubscribeToResponseWebhook model module.
 * @module model/ChooseWhichEventsToSubscribeToResponseWebhook
 * @version 1.0.0
 */
class ChooseWhichEventsToSubscribeToResponseWebhook {
    /**
     * Constructs a new <code>ChooseWhichEventsToSubscribeToResponseWebhook</code>.
     * @alias module:model/ChooseWhichEventsToSubscribeToResponseWebhook
     */
    constructor() { 
        
        ChooseWhichEventsToSubscribeToResponseWebhook.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ChooseWhichEventsToSubscribeToResponseWebhook</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ChooseWhichEventsToSubscribeToResponseWebhook} obj Optional instance to populate.
     * @return {module:model/ChooseWhichEventsToSubscribeToResponseWebhook} The populated <code>ChooseWhichEventsToSubscribeToResponseWebhook</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ChooseWhichEventsToSubscribeToResponseWebhook();

            if (data.hasOwnProperty('enabled')) {
                obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('include_members')) {
                obj['include_members'] = ApiClient.convertToType(data['include_members'], 'Boolean');
            }
            if (data.hasOwnProperty('enabled_events')) {
                obj['enabled_events'] = ApiClient.convertToType(data['enabled_events'], ['String']);
            }
            if (data.hasOwnProperty('include_unread_count')) {
                obj['include_unread_count'] = ApiClient.convertToType(data['include_unread_count'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} enabled
 */
ChooseWhichEventsToSubscribeToResponseWebhook.prototype['enabled'] = undefined;

/**
 * @member {String} url
 */
ChooseWhichEventsToSubscribeToResponseWebhook.prototype['url'] = undefined;

/**
 * @member {Boolean} include_members
 */
ChooseWhichEventsToSubscribeToResponseWebhook.prototype['include_members'] = undefined;

/**
 * @member {Array.<String>} enabled_events
 */
ChooseWhichEventsToSubscribeToResponseWebhook.prototype['enabled_events'] = undefined;

/**
 * @member {Boolean} include_unread_count
 */
ChooseWhichEventsToSubscribeToResponseWebhook.prototype['include_unread_count'] = undefined;






export default ChooseWhichEventsToSubscribeToResponseWebhook;
