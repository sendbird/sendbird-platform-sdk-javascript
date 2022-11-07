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
 * The UpdateExtraDataInMessageResponseSortedMetaarrayInner model module.
 * @module model/UpdateExtraDataInMessageResponseSortedMetaarrayInner
 * @version 0.0.16
 */
class UpdateExtraDataInMessageResponseSortedMetaarrayInner {
    /**
     * Constructs a new <code>UpdateExtraDataInMessageResponseSortedMetaarrayInner</code>.
     * @alias module:model/UpdateExtraDataInMessageResponseSortedMetaarrayInner
     */
    constructor() { 
        
        UpdateExtraDataInMessageResponseSortedMetaarrayInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdateExtraDataInMessageResponseSortedMetaarrayInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateExtraDataInMessageResponseSortedMetaarrayInner} obj Optional instance to populate.
     * @return {module:model/UpdateExtraDataInMessageResponseSortedMetaarrayInner} The populated <code>UpdateExtraDataInMessageResponseSortedMetaarrayInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateExtraDataInMessageResponseSortedMetaarrayInner();

            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], ['String']);
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<String>} value
 */
UpdateExtraDataInMessageResponseSortedMetaarrayInner.prototype['value'] = undefined;

/**
 * @member {String} key
 */
UpdateExtraDataInMessageResponseSortedMetaarrayInner.prototype['key'] = undefined;






export default UpdateExtraDataInMessageResponseSortedMetaarrayInner;

