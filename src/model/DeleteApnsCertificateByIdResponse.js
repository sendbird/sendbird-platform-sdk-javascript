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
 * The DeleteApnsCertificateByIdResponse model module.
 * @module model/DeleteApnsCertificateByIdResponse
 * @version 1.0.0
 */
class DeleteApnsCertificateByIdResponse {
    /**
     * Constructs a new <code>DeleteApnsCertificateByIdResponse</code>.
     * @alias module:model/DeleteApnsCertificateByIdResponse
     */
    constructor() { 
        
        DeleteApnsCertificateByIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeleteApnsCertificateByIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteApnsCertificateByIdResponse} obj Optional instance to populate.
     * @return {module:model/DeleteApnsCertificateByIdResponse} The populated <code>DeleteApnsCertificateByIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeleteApnsCertificateByIdResponse();

            if (data.hasOwnProperty('push_configurations')) {
                obj['push_configurations'] = ApiClient.convertToType(data['push_configurations'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<String>} push_configurations
 */
DeleteApnsCertificateByIdResponse.prototype['push_configurations'] = undefined;






export default DeleteApnsCertificateByIdResponse;
