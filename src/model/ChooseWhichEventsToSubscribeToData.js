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
 * The ChooseWhichEventsToSubscribeToData model module.
 * @module model/ChooseWhichEventsToSubscribeToData
 * @version 0.0.16
 */
class ChooseWhichEventsToSubscribeToData {
    /**
     * Constructs a new <code>ChooseWhichEventsToSubscribeToData</code>.
     * @alias module:model/ChooseWhichEventsToSubscribeToData
     * @param enabled {Boolean} Determines whether webhooks are turned on in your Sendbird application or not. (Default: false)
     * @param url {String} Specifies the URL of your webhook server to receive payloads for events.
     */
    constructor(enabled, url) { 
        
        ChooseWhichEventsToSubscribeToData.initialize(this, enabled, url);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, enabled, url) { 
        obj['enabled'] = enabled;
        obj['url'] = url;
    }

    /**
     * Constructs a <code>ChooseWhichEventsToSubscribeToData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ChooseWhichEventsToSubscribeToData} obj Optional instance to populate.
     * @return {module:model/ChooseWhichEventsToSubscribeToData} The populated <code>ChooseWhichEventsToSubscribeToData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ChooseWhichEventsToSubscribeToData();

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
        }
        return obj;
    }


}

/**
 * Determines whether webhooks are turned on in your Sendbird application or not. (Default: false)
 * @member {Boolean} enabled
 */
ChooseWhichEventsToSubscribeToData.prototype['enabled'] = undefined;

/**
 * Specifies the URL of your webhook server to receive payloads for events.
 * @member {String} url
 */
ChooseWhichEventsToSubscribeToData.prototype['url'] = undefined;

/**
 * Determines whether to include the information on the members of group channels in payloads. (Default: false)
 * @member {Boolean} include_members
 */
ChooseWhichEventsToSubscribeToData.prototype['include_members'] = undefined;

/**
 * Specifies an array of one or more [events](#2-webhook-events) for your webhook server to subscribe to. If set to an asterisk () only, the server will subscribe to all supported events. If set to an empty array, the server will unsubscribe from all (which indicates turning off webhooks).
 * @member {Array.<String>} enabled_events
 */
ChooseWhichEventsToSubscribeToData.prototype['enabled_events'] = undefined;






export default ChooseWhichEventsToSubscribeToData;

