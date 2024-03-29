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
 * The SendBirdRestrictionInfo model module.
 * @module model/SendBirdRestrictionInfo
 * @version 0.0.16
 */
class SendBirdRestrictionInfo {
    /**
     * Constructs a new <code>SendBirdRestrictionInfo</code>.
     * @alias module:model/SendBirdRestrictionInfo
     */
    constructor() { 
        
        SendBirdRestrictionInfo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SendBirdRestrictionInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SendBirdRestrictionInfo} obj Optional instance to populate.
     * @return {module:model/SendBirdRestrictionInfo} The populated <code>SendBirdRestrictionInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SendBirdRestrictionInfo();

            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('end_at')) {
                obj['end_at'] = ApiClient.convertToType(data['end_at'], 'Number');
            }
            if (data.hasOwnProperty('restriction_type')) {
                obj['restriction_type'] = ApiClient.convertToType(data['restriction_type'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} description
 */
SendBirdRestrictionInfo.prototype['description'] = undefined;

/**
 * @member {Number} end_at
 */
SendBirdRestrictionInfo.prototype['end_at'] = undefined;

/**
 * @member {module:model/SendBirdRestrictionInfo.RestrictionTypeEnum} restriction_type
 */
SendBirdRestrictionInfo.prototype['restriction_type'] = undefined;





/**
 * Allowed values for the <code>restriction_type</code> property.
 * @enum {String}
 * @readonly
 */
SendBirdRestrictionInfo['RestrictionTypeEnum'] = {

    /**
     * value: "banned"
     * @const
     */
    "banned": "banned",

    /**
     * value: "muted"
     * @const
     */
    "muted": "muted"
};



export default SendBirdRestrictionInfo;

