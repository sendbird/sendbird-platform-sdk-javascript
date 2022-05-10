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
 * The GcRegisterOperatorsData model module.
 * @module model/GcRegisterOperatorsData
 * @version 1.0.1
 */
class GcRegisterOperatorsData {
    /**
     * Constructs a new <code>GcRegisterOperatorsData</code>.
     * @alias module:model/GcRegisterOperatorsData
     * @param channelUrl {String} Specifies the URL of the channel to register operators to.
     * @param operatorIds {Array.<Number>} Specifies an array of one or more IDs of users to register as operators of the channel. If the operators are not members of the channel yet, they need an [invitation](#2-invite-as-members) to [join](#2-join-a-channel) a privte group channel while they don't need any to join a [public](#-3-private-vs-public) group channel. The maximum allowed number of operators per channel is 100.
     */
    constructor(channelUrl, operatorIds) { 
        
        GcRegisterOperatorsData.initialize(this, channelUrl, operatorIds);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, channelUrl, operatorIds) { 
        obj['channel_url'] = channelUrl;
        obj['operator_ids'] = operatorIds;
    }

    /**
     * Constructs a <code>GcRegisterOperatorsData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GcRegisterOperatorsData} obj Optional instance to populate.
     * @return {module:model/GcRegisterOperatorsData} The populated <code>GcRegisterOperatorsData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GcRegisterOperatorsData();

            if (data.hasOwnProperty('channel_url')) {
                obj['channel_url'] = ApiClient.convertToType(data['channel_url'], 'String');
            }
            if (data.hasOwnProperty('operator_ids')) {
                obj['operator_ids'] = ApiClient.convertToType(data['operator_ids'], ['Number']);
            }
        }
        return obj;
    }


}

/**
 * Specifies the URL of the channel to register operators to.
 * @member {String} channel_url
 */
GcRegisterOperatorsData.prototype['channel_url'] = undefined;

/**
 * Specifies an array of one or more IDs of users to register as operators of the channel. If the operators are not members of the channel yet, they need an [invitation](#2-invite-as-members) to [join](#2-join-a-channel) a privte group channel while they don't need any to join a [public](#-3-private-vs-public) group channel. The maximum allowed number of operators per channel is 100.
 * @member {Array.<Number>} operator_ids
 */
GcRegisterOperatorsData.prototype['operator_ids'] = undefined;






export default GcRegisterOperatorsData;

