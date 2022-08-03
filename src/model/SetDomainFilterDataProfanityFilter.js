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
import SetDomainFilterDataProfanityFilterRegexFiltersInner from './SetDomainFilterDataProfanityFilterRegexFiltersInner';

/**
 * The SetDomainFilterDataProfanityFilter model module.
 * @module model/SetDomainFilterDataProfanityFilter
 * @version 1.0.7
 */
class SetDomainFilterDataProfanityFilter {
    /**
     * Constructs a new <code>SetDomainFilterDataProfanityFilter</code>.
     * @alias module:model/SetDomainFilterDataProfanityFilter
     */
    constructor() { 
        
        SetDomainFilterDataProfanityFilter.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SetDomainFilterDataProfanityFilter</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SetDomainFilterDataProfanityFilter} obj Optional instance to populate.
     * @return {module:model/SetDomainFilterDataProfanityFilter} The populated <code>SetDomainFilterDataProfanityFilter</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SetDomainFilterDataProfanityFilter();

            if (data.hasOwnProperty('keywords')) {
                obj['keywords'] = ApiClient.convertToType(data['keywords'], ['String']);
            }
            if (data.hasOwnProperty('regex_filters')) {
                obj['regex_filters'] = ApiClient.convertToType(data['regex_filters'], [SetDomainFilterDataProfanityFilterRegexFiltersInner]);
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'Number');
            }
            if (data.hasOwnProperty('should_check_global')) {
                obj['should_check_global'] = ApiClient.convertToType(data['should_check_global'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<String>} keywords
 */
SetDomainFilterDataProfanityFilter.prototype['keywords'] = undefined;

/**
 * @member {Array.<module:model/SetDomainFilterDataProfanityFilterRegexFiltersInner>} regex_filters
 */
SetDomainFilterDataProfanityFilter.prototype['regex_filters'] = undefined;

/**
 * @member {Number} type
 */
SetDomainFilterDataProfanityFilter.prototype['type'] = undefined;

/**
 * @member {Boolean} should_check_global
 */
SetDomainFilterDataProfanityFilter.prototype['should_check_global'] = undefined;






export default SetDomainFilterDataProfanityFilter;
