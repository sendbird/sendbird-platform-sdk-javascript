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
import Function from './Function';

/**
 * The ModelObject model module.
 * @module model/ModelObject
 * @version 1.0.0
 */
class ModelObject {
    /**
     * Constructs a new <code>ModelObject</code>.
     * @alias module:model/ModelObject
     */
    constructor() { 
        
        ModelObject.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ModelObject</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModelObject} obj Optional instance to populate.
     * @return {module:model/ModelObject} The populated <code>ModelObject</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ModelObject();

            if (data.hasOwnProperty('constructor')) {
                obj['constructor'] = Function.constructFromObject(data['constructor']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/Function} constructor
 */
ModelObject.prototype['constructor'] = undefined;






export default ModelObject;
