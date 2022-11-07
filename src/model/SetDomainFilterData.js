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
import SetDomainFilterDataDomainFilter from './SetDomainFilterDataDomainFilter';
import SetDomainFilterDataImageModeration from './SetDomainFilterDataImageModeration';
import SetDomainFilterDataProfanityFilter from './SetDomainFilterDataProfanityFilter';
import SetDomainFilterDataProfanityTriggeredModeration from './SetDomainFilterDataProfanityTriggeredModeration';

/**
 * The SetDomainFilterData model module.
 * @module model/SetDomainFilterData
 * @version 0.0.16
 */
class SetDomainFilterData {
    /**
     * Constructs a new <code>SetDomainFilterData</code>.
     * @alias module:model/SetDomainFilterData
     */
    constructor() { 
        
        SetDomainFilterData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SetDomainFilterData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SetDomainFilterData} obj Optional instance to populate.
     * @return {module:model/SetDomainFilterData} The populated <code>SetDomainFilterData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SetDomainFilterData();

            if (data.hasOwnProperty('domain_filter')) {
                obj['domain_filter'] = SetDomainFilterDataDomainFilter.constructFromObject(data['domain_filter']);
            }
            if (data.hasOwnProperty('profanity_filter')) {
                obj['profanity_filter'] = SetDomainFilterDataProfanityFilter.constructFromObject(data['profanity_filter']);
            }
            if (data.hasOwnProperty('profanity_triggered_moderation')) {
                obj['profanity_triggered_moderation'] = SetDomainFilterDataProfanityTriggeredModeration.constructFromObject(data['profanity_triggered_moderation']);
            }
            if (data.hasOwnProperty('image_moderation')) {
                obj['image_moderation'] = SetDomainFilterDataImageModeration.constructFromObject(data['image_moderation']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/SetDomainFilterDataDomainFilter} domain_filter
 */
SetDomainFilterData.prototype['domain_filter'] = undefined;

/**
 * @member {module:model/SetDomainFilterDataProfanityFilter} profanity_filter
 */
SetDomainFilterData.prototype['profanity_filter'] = undefined;

/**
 * @member {module:model/SetDomainFilterDataProfanityTriggeredModeration} profanity_triggered_moderation
 */
SetDomainFilterData.prototype['profanity_triggered_moderation'] = undefined;

/**
 * @member {module:model/SetDomainFilterDataImageModeration} image_moderation
 */
SetDomainFilterData.prototype['image_moderation'] = undefined;






export default SetDomainFilterData;

