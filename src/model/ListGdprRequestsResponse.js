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
import ListGdprRequestsResponseRequestsInner from './ListGdprRequestsResponseRequestsInner';

/**
 * The ListGdprRequestsResponse model module.
 * @module model/ListGdprRequestsResponse
 * @version 0.0.13
 */
class ListGdprRequestsResponse {
    /**
     * Constructs a new <code>ListGdprRequestsResponse</code>.
     * @alias module:model/ListGdprRequestsResponse
     */
    constructor() { 
        
        ListGdprRequestsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ListGdprRequestsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListGdprRequestsResponse} obj Optional instance to populate.
     * @return {module:model/ListGdprRequestsResponse} The populated <code>ListGdprRequestsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListGdprRequestsResponse();

            if (data.hasOwnProperty('requests')) {
                obj['requests'] = ApiClient.convertToType(data['requests'], [ListGdprRequestsResponseRequestsInner]);
            }
            if (data.hasOwnProperty('next')) {
                obj['next'] = ApiClient.convertToType(data['next'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/ListGdprRequestsResponseRequestsInner>} requests
 */
ListGdprRequestsResponse.prototype['requests'] = undefined;

/**
 * @member {String} next
 */
ListGdprRequestsResponse.prototype['next'] = undefined;






export default ListGdprRequestsResponse;

