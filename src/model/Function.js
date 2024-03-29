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
 * The Function model module.
 * @module model/Function
 * @version 0.0.16
 */
class Function {
    /**
     * Constructs a new <code>Function</code>.
     * @alias module:model/Function
     */
    constructor() { 
        
        Function.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Function</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Function} obj Optional instance to populate.
     * @return {module:model/Function} The populated <code>Function</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Function();

            if (data.hasOwnProperty('arguments')) {
                obj['arguments'] = ApiClient.convertToType(data['arguments'], Object);
            }
            if (data.hasOwnProperty('caller')) {
                obj['caller'] = Function.constructFromObject(data['caller']);
            }
            if (data.hasOwnProperty('length')) {
                obj['length'] = ApiClient.convertToType(data['length'], 'Number');
            }
            if (data.hasOwnProperty('prototype')) {
                obj['prototype'] = ApiClient.convertToType(data['prototype'], Object);
            }
        }
        return obj;
    }


}

/**
 * @member {Object} arguments
 */
Function.prototype['arguments'] = undefined;

/**
 * @member {module:model/Function} caller
 */
Function.prototype['caller'] = undefined;

/**
 * @member {Number} length
 */
Function.prototype['length'] = undefined;

/**
 * @member {Object} prototype
 */
Function.prototype['prototype'] = undefined;






export default Function;

