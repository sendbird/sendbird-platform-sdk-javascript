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
 * The RetrieveListOfSubscribedEventsResponseWebhook model module.
 * @module model/RetrieveListOfSubscribedEventsResponseWebhook
 * @version 1.0.0
 */
class RetrieveListOfSubscribedEventsResponseWebhook {
    /**
     * Constructs a new <code>RetrieveListOfSubscribedEventsResponseWebhook</code>.
     * @alias module:model/RetrieveListOfSubscribedEventsResponseWebhook
     */
    constructor() { 
        
        RetrieveListOfSubscribedEventsResponseWebhook.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RetrieveListOfSubscribedEventsResponseWebhook</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RetrieveListOfSubscribedEventsResponseWebhook} obj Optional instance to populate.
     * @return {module:model/RetrieveListOfSubscribedEventsResponseWebhook} The populated <code>RetrieveListOfSubscribedEventsResponseWebhook</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RetrieveListOfSubscribedEventsResponseWebhook();

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
            if (data.hasOwnProperty('all_webhook_categories')) {
                obj['all_webhook_categories'] = ApiClient.convertToType(data['all_webhook_categories'], ['String']);
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
RetrieveListOfSubscribedEventsResponseWebhook.prototype['enabled'] = undefined;

/**
 * @member {String} url
 */
RetrieveListOfSubscribedEventsResponseWebhook.prototype['url'] = undefined;

/**
 * @member {Boolean} include_members
 */
RetrieveListOfSubscribedEventsResponseWebhook.prototype['include_members'] = undefined;

/**
 * @member {Array.<String>} enabled_events
 */
RetrieveListOfSubscribedEventsResponseWebhook.prototype['enabled_events'] = undefined;

/**
 * @member {Array.<String>} all_webhook_categories
 */
RetrieveListOfSubscribedEventsResponseWebhook.prototype['all_webhook_categories'] = undefined;

/**
 * @member {Boolean} include_unread_count
 */
RetrieveListOfSubscribedEventsResponseWebhook.prototype['include_unread_count'] = undefined;






export default RetrieveListOfSubscribedEventsResponseWebhook;
