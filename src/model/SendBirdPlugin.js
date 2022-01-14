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
 * The SendBirdPlugin model module.
 * @module model/SendBirdPlugin
 * @version 1.0.0
 */
class SendBirdPlugin {
    /**
     * Constructs a new <code>SendBirdPlugin</code>.
     * @alias module:model/SendBirdPlugin
     */
    constructor() { 
        
        SendBirdPlugin.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SendBirdPlugin</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SendBirdPlugin} obj Optional instance to populate.
     * @return {module:model/SendBirdPlugin} The populated <code>SendBirdPlugin</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SendBirdPlugin();

            if (data.hasOwnProperty('detail')) {
                obj['detail'] = ApiClient.convertToType(data['detail'], Object);
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('vendor')) {
                obj['vendor'] = ApiClient.convertToType(data['vendor'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Object} detail
 */
SendBirdPlugin.prototype['detail'] = undefined;

/**
 * @member {String} type
 */
SendBirdPlugin.prototype['type'] = undefined;

/**
 * @member {String} vendor
 */
SendBirdPlugin.prototype['vendor'] = undefined;






export default SendBirdPlugin;

