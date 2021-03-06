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
 * The V3ApplicationsSettingsGlobalCustomTypeImageModerationLimits model module.
 * @module model/V3ApplicationsSettingsGlobalCustomTypeImageModerationLimits
 * @version 1.0.3
 */
class V3ApplicationsSettingsGlobalCustomTypeImageModerationLimits {
    /**
     * Constructs a new <code>V3ApplicationsSettingsGlobalCustomTypeImageModerationLimits</code>.
     * @alias module:model/V3ApplicationsSettingsGlobalCustomTypeImageModerationLimits
     */
    constructor() { 
        
        V3ApplicationsSettingsGlobalCustomTypeImageModerationLimits.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V3ApplicationsSettingsGlobalCustomTypeImageModerationLimits</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V3ApplicationsSettingsGlobalCustomTypeImageModerationLimits} obj Optional instance to populate.
     * @return {module:model/V3ApplicationsSettingsGlobalCustomTypeImageModerationLimits} The populated <code>V3ApplicationsSettingsGlobalCustomTypeImageModerationLimits</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V3ApplicationsSettingsGlobalCustomTypeImageModerationLimits();

            if (data.hasOwnProperty('adult')) {
                obj['adult'] = ApiClient.convertToType(data['adult'], 'Number');
            }
            if (data.hasOwnProperty('spoof')) {
                obj['spoof'] = ApiClient.convertToType(data['spoof'], 'Number');
            }
            if (data.hasOwnProperty('medical')) {
                obj['medical'] = ApiClient.convertToType(data['medical'], 'Number');
            }
            if (data.hasOwnProperty('violence')) {
                obj['violence'] = ApiClient.convertToType(data['violence'], 'Number');
            }
            if (data.hasOwnProperty('racy')) {
                obj['racy'] = ApiClient.convertToType(data['racy'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} adult
 */
V3ApplicationsSettingsGlobalCustomTypeImageModerationLimits.prototype['adult'] = undefined;

/**
 * @member {Number} spoof
 */
V3ApplicationsSettingsGlobalCustomTypeImageModerationLimits.prototype['spoof'] = undefined;

/**
 * @member {Number} medical
 */
V3ApplicationsSettingsGlobalCustomTypeImageModerationLimits.prototype['medical'] = undefined;

/**
 * @member {Number} violence
 */
V3ApplicationsSettingsGlobalCustomTypeImageModerationLimits.prototype['violence'] = undefined;

/**
 * @member {Number} racy
 */
V3ApplicationsSettingsGlobalCustomTypeImageModerationLimits.prototype['racy'] = undefined;






export default V3ApplicationsSettingsGlobalCustomTypeImageModerationLimits;

