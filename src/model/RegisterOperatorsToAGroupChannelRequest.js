/**
 * Sendbird Platform SDK
 * Sendbird Platform API SDK  [https://sendbird.com/docs/chat/v3/platform-api/getting-started/prepare-to-use-api](https://sendbird.com/docs/chat/v3/platform-api/getting-started/prepare-to-use-api)  Contact Support:   Name: Sendbird   Email: [support@sendbird.com](https://mailto:support@sendbird.com)
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
 * The RegisterOperatorsToAGroupChannelRequest model module.
 * @module model/RegisterOperatorsToAGroupChannelRequest
 * @version 2.0.0
 */
class RegisterOperatorsToAGroupChannelRequest {
    /**
     * Constructs a new <code>RegisterOperatorsToAGroupChannelRequest</code>.
     * @alias module:model/RegisterOperatorsToAGroupChannelRequest
     * @param operatorIds {Array.<String>} 
     */
    constructor(operatorIds) { 
        
        RegisterOperatorsToAGroupChannelRequest.initialize(this, operatorIds);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, operatorIds) { 
        obj['operator_ids'] = operatorIds;
    }

    /**
     * Constructs a <code>RegisterOperatorsToAGroupChannelRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RegisterOperatorsToAGroupChannelRequest} obj Optional instance to populate.
     * @return {module:model/RegisterOperatorsToAGroupChannelRequest} The populated <code>RegisterOperatorsToAGroupChannelRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RegisterOperatorsToAGroupChannelRequest();

            if (data.hasOwnProperty('operator_ids')) {
                obj['operator_ids'] = ApiClient.convertToType(data['operator_ids'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<String>} operator_ids
 */
RegisterOperatorsToAGroupChannelRequest.prototype['operator_ids'] = undefined;






export default RegisterOperatorsToAGroupChannelRequest;

