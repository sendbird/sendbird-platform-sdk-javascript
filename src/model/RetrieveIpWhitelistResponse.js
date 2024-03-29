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
 * The RetrieveIpWhitelistResponse model module.
 * @module model/RetrieveIpWhitelistResponse
 * @version 0.0.16
 */
class RetrieveIpWhitelistResponse {
    /**
     * Constructs a new <code>RetrieveIpWhitelistResponse</code>.
     * @alias module:model/RetrieveIpWhitelistResponse
     */
    constructor() { 
        
        RetrieveIpWhitelistResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RetrieveIpWhitelistResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RetrieveIpWhitelistResponse} obj Optional instance to populate.
     * @return {module:model/RetrieveIpWhitelistResponse} The populated <code>RetrieveIpWhitelistResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RetrieveIpWhitelistResponse();

            if (data.hasOwnProperty('ip_whitelist_addresses')) {
                obj['ip_whitelist_addresses'] = ApiClient.convertToType(data['ip_whitelist_addresses'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<String>} ip_whitelist_addresses
 */
RetrieveIpWhitelistResponse.prototype['ip_whitelist_addresses'] = undefined;






export default RetrieveIpWhitelistResponse;

