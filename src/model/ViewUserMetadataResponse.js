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
 * The ViewUserMetadataResponse model module.
 * @module model/ViewUserMetadataResponse
 * @version 0.0.16
 */
class ViewUserMetadataResponse {
    /**
     * Constructs a new <code>ViewUserMetadataResponse</code>.
     * @alias module:model/ViewUserMetadataResponse
     */
    constructor() { 
        
        ViewUserMetadataResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ViewUserMetadataResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ViewUserMetadataResponse} obj Optional instance to populate.
     * @return {module:model/ViewUserMetadataResponse} The populated <code>ViewUserMetadataResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ViewUserMetadataResponse();

            if (data.hasOwnProperty('anyOf')) {
                obj['anyOf'] = ApiClient.convertToType(data['anyOf'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} anyOf
 */
ViewUserMetadataResponse.prototype['anyOf'] = undefined;






export default ViewUserMetadataResponse;

