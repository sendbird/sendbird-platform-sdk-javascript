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
 * The GcCheckIfMemberByIdResponse model module.
 * @module model/GcCheckIfMemberByIdResponse
 * @version 0.0.13
 */
class GcCheckIfMemberByIdResponse {
    /**
     * Constructs a new <code>GcCheckIfMemberByIdResponse</code>.
     * @alias module:model/GcCheckIfMemberByIdResponse
     */
    constructor() { 
        
        GcCheckIfMemberByIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GcCheckIfMemberByIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GcCheckIfMemberByIdResponse} obj Optional instance to populate.
     * @return {module:model/GcCheckIfMemberByIdResponse} The populated <code>GcCheckIfMemberByIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GcCheckIfMemberByIdResponse();

            if (data.hasOwnProperty('is_member')) {
                obj['is_member'] = ApiClient.convertToType(data['is_member'], 'Boolean');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} is_member
 */
GcCheckIfMemberByIdResponse.prototype['is_member'] = undefined;

/**
 * @member {String} state
 */
GcCheckIfMemberByIdResponse.prototype['state'] = undefined;






export default GcCheckIfMemberByIdResponse;

