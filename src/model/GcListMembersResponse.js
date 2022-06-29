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
import SendBirdUser from './SendBirdUser';

/**
 * The GcListMembersResponse model module.
 * @module model/GcListMembersResponse
 * @version 1.0.3
 */
class GcListMembersResponse {
    /**
     * Constructs a new <code>GcListMembersResponse</code>.
     * @alias module:model/GcListMembersResponse
     */
    constructor() { 
        
        GcListMembersResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GcListMembersResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GcListMembersResponse} obj Optional instance to populate.
     * @return {module:model/GcListMembersResponse} The populated <code>GcListMembersResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GcListMembersResponse();

            if (data.hasOwnProperty('members')) {
                obj['members'] = ApiClient.convertToType(data['members'], [SendBirdUser]);
            }
            if (data.hasOwnProperty('next')) {
                obj['next'] = ApiClient.convertToType(data['next'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/SendBirdUser>} members
 */
GcListMembersResponse.prototype['members'] = undefined;

/**
 * @member {String} next
 */
GcListMembersResponse.prototype['next'] = undefined;






export default GcListMembersResponse;

