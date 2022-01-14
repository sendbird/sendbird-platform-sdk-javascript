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
 * The SendBirdPollStaticStatus model module.
 * @module model/SendBirdPollStaticStatus
 * @version 1.0.0
 */
class SendBirdPollStaticStatus {
    /**
     * Constructs a new <code>SendBirdPollStaticStatus</code>.
     * @alias module:model/SendBirdPollStaticStatus
     */
    constructor() { 
        
        SendBirdPollStaticStatus.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SendBirdPollStaticStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SendBirdPollStaticStatus} obj Optional instance to populate.
     * @return {module:model/SendBirdPollStaticStatus} The populated <code>SendBirdPollStaticStatus</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SendBirdPollStaticStatus();

            if (data.hasOwnProperty('CLOSED')) {
                obj['CLOSED'] = ApiClient.convertToType(data['CLOSED'], 'String');
            }
            if (data.hasOwnProperty('OPEN')) {
                obj['OPEN'] = ApiClient.convertToType(data['OPEN'], 'String');
            }
            if (data.hasOwnProperty('REMOVED')) {
                obj['REMOVED'] = ApiClient.convertToType(data['REMOVED'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/SendBirdPollStaticStatus.CLOSEDEnum} CLOSED
 */
SendBirdPollStaticStatus.prototype['CLOSED'] = undefined;

/**
 * @member {module:model/SendBirdPollStaticStatus.OPENEnum} OPEN
 */
SendBirdPollStaticStatus.prototype['OPEN'] = undefined;

/**
 * @member {module:model/SendBirdPollStaticStatus.REMOVEDEnum} REMOVED
 */
SendBirdPollStaticStatus.prototype['REMOVED'] = undefined;





/**
 * Allowed values for the <code>CLOSED</code> property.
 * @enum {String}
 * @readonly
 */
SendBirdPollStaticStatus['CLOSEDEnum'] = {

    /**
     * value: "closed"
     * @const
     */
    "closed": "closed"
};


/**
 * Allowed values for the <code>OPEN</code> property.
 * @enum {String}
 * @readonly
 */
SendBirdPollStaticStatus['OPENEnum'] = {

    /**
     * value: "open"
     * @const
     */
    "open": "open"
};


/**
 * Allowed values for the <code>REMOVED</code> property.
 * @enum {String}
 * @readonly
 */
SendBirdPollStaticStatus['REMOVEDEnum'] = {

    /**
     * value: "removed"
     * @const
     */
    "removed": "removed"
};



export default SendBirdPollStaticStatus;

