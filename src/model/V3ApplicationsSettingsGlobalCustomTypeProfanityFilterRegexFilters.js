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
 * The V3ApplicationsSettingsGlobalCustomTypeProfanityFilterRegexFilters model module.
 * @module model/V3ApplicationsSettingsGlobalCustomTypeProfanityFilterRegexFilters
 * @version 1.0.3
 */
class V3ApplicationsSettingsGlobalCustomTypeProfanityFilterRegexFilters {
    /**
     * Constructs a new <code>V3ApplicationsSettingsGlobalCustomTypeProfanityFilterRegexFilters</code>.
     * @alias module:model/V3ApplicationsSettingsGlobalCustomTypeProfanityFilterRegexFilters
     */
    constructor() { 
        
        V3ApplicationsSettingsGlobalCustomTypeProfanityFilterRegexFilters.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V3ApplicationsSettingsGlobalCustomTypeProfanityFilterRegexFilters</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V3ApplicationsSettingsGlobalCustomTypeProfanityFilterRegexFilters} obj Optional instance to populate.
     * @return {module:model/V3ApplicationsSettingsGlobalCustomTypeProfanityFilterRegexFilters} The populated <code>V3ApplicationsSettingsGlobalCustomTypeProfanityFilterRegexFilters</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V3ApplicationsSettingsGlobalCustomTypeProfanityFilterRegexFilters();

            if (data.hasOwnProperty('regex')) {
                obj['regex'] = ApiClient.convertToType(data['regex'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} regex
 */
V3ApplicationsSettingsGlobalCustomTypeProfanityFilterRegexFilters.prototype['regex'] = undefined;






export default V3ApplicationsSettingsGlobalCustomTypeProfanityFilterRegexFilters;

