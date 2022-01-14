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
 * The SendBirdMutedUserListQuery model module.
 * @module model/SendBirdMutedUserListQuery
 * @version 1.0.0
 */
class SendBirdMutedUserListQuery {
    /**
     * Constructs a new <code>SendBirdMutedUserListQuery</code>.
     * @alias module:model/SendBirdMutedUserListQuery
     */
    constructor() { 
        
        SendBirdMutedUserListQuery.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SendBirdMutedUserListQuery</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SendBirdMutedUserListQuery} obj Optional instance to populate.
     * @return {module:model/SendBirdMutedUserListQuery} The populated <code>SendBirdMutedUserListQuery</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SendBirdMutedUserListQuery();

            if (data.hasOwnProperty('hasNext')) {
                obj['hasNext'] = ApiClient.convertToType(data['hasNext'], 'Boolean');
            }
            if (data.hasOwnProperty('isLoading')) {
                obj['isLoading'] = ApiClient.convertToType(data['isLoading'], 'Boolean');
            }
            if (data.hasOwnProperty('limit')) {
                obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} hasNext
 */
SendBirdMutedUserListQuery.prototype['hasNext'] = undefined;

/**
 * @member {Boolean} isLoading
 */
SendBirdMutedUserListQuery.prototype['isLoading'] = undefined;

/**
 * @member {Number} limit
 */
SendBirdMutedUserListQuery.prototype['limit'] = undefined;






export default SendBirdMutedUserListQuery;

