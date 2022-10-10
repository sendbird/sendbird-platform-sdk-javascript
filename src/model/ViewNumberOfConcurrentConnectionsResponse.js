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
 * The ViewNumberOfConcurrentConnectionsResponse model module.
 * @module model/ViewNumberOfConcurrentConnectionsResponse
 * @version 0.0.13
 */
class ViewNumberOfConcurrentConnectionsResponse {
    /**
     * Constructs a new <code>ViewNumberOfConcurrentConnectionsResponse</code>.
     * @alias module:model/ViewNumberOfConcurrentConnectionsResponse
     */
    constructor() { 
        
        ViewNumberOfConcurrentConnectionsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ViewNumberOfConcurrentConnectionsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ViewNumberOfConcurrentConnectionsResponse} obj Optional instance to populate.
     * @return {module:model/ViewNumberOfConcurrentConnectionsResponse} The populated <code>ViewNumberOfConcurrentConnectionsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ViewNumberOfConcurrentConnectionsResponse();

            if (data.hasOwnProperty('ccu')) {
                obj['ccu'] = ApiClient.convertToType(data['ccu'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} ccu
 */
ViewNumberOfConcurrentConnectionsResponse.prototype['ccu'] = undefined;






export default ViewNumberOfConcurrentConnectionsResponse;

