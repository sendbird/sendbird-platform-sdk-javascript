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
 * The SetDomainFilterDataProfanityTriggeredModeration model module.
 * @module model/SetDomainFilterDataProfanityTriggeredModeration
 * @version 0.0.16
 */
class SetDomainFilterDataProfanityTriggeredModeration {
    /**
     * Constructs a new <code>SetDomainFilterDataProfanityTriggeredModeration</code>.
     * @alias module:model/SetDomainFilterDataProfanityTriggeredModeration
     */
    constructor() { 
        
        SetDomainFilterDataProfanityTriggeredModeration.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SetDomainFilterDataProfanityTriggeredModeration</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SetDomainFilterDataProfanityTriggeredModeration} obj Optional instance to populate.
     * @return {module:model/SetDomainFilterDataProfanityTriggeredModeration} The populated <code>SetDomainFilterDataProfanityTriggeredModeration</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SetDomainFilterDataProfanityTriggeredModeration();

            if (data.hasOwnProperty('count')) {
                obj['count'] = ApiClient.convertToType(data['count'], 'Number');
            }
            if (data.hasOwnProperty('duration')) {
                obj['duration'] = ApiClient.convertToType(data['duration'], 'Number');
            }
            if (data.hasOwnProperty('action')) {
                obj['action'] = ApiClient.convertToType(data['action'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} count
 */
SetDomainFilterDataProfanityTriggeredModeration.prototype['count'] = undefined;

/**
 * @member {Number} duration
 */
SetDomainFilterDataProfanityTriggeredModeration.prototype['duration'] = undefined;

/**
 * @member {Number} action
 */
SetDomainFilterDataProfanityTriggeredModeration.prototype['action'] = undefined;






export default SetDomainFilterDataProfanityTriggeredModeration;

