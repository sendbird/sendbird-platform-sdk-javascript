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
 * The DeleteAllowedIpsFromWhitelistResponse model module.
 * @module model/DeleteAllowedIpsFromWhitelistResponse
 * @version 0.0.13
 */
class DeleteAllowedIpsFromWhitelistResponse {
    /**
     * Constructs a new <code>DeleteAllowedIpsFromWhitelistResponse</code>.
     * @alias module:model/DeleteAllowedIpsFromWhitelistResponse
     */
    constructor() { 
        
        DeleteAllowedIpsFromWhitelistResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeleteAllowedIpsFromWhitelistResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteAllowedIpsFromWhitelistResponse} obj Optional instance to populate.
     * @return {module:model/DeleteAllowedIpsFromWhitelistResponse} The populated <code>DeleteAllowedIpsFromWhitelistResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeleteAllowedIpsFromWhitelistResponse();

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
DeleteAllowedIpsFromWhitelistResponse.prototype['ip_whitelist_addresses'] = undefined;






export default DeleteAllowedIpsFromWhitelistResponse;

