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
 * The SendBirdThumbnailSize model module.
 * @module model/SendBirdThumbnailSize
 * @version 0.0.16
 */
class SendBirdThumbnailSize {
    /**
     * Constructs a new <code>SendBirdThumbnailSize</code>.
     * @alias module:model/SendBirdThumbnailSize
     */
    constructor() { 
        
        SendBirdThumbnailSize.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SendBirdThumbnailSize</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SendBirdThumbnailSize} obj Optional instance to populate.
     * @return {module:model/SendBirdThumbnailSize} The populated <code>SendBirdThumbnailSize</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SendBirdThumbnailSize();

            if (data.hasOwnProperty('max_height')) {
                obj['max_height'] = ApiClient.convertToType(data['max_height'], 'Number');
            }
            if (data.hasOwnProperty('max_width')) {
                obj['max_width'] = ApiClient.convertToType(data['max_width'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} max_height
 */
SendBirdThumbnailSize.prototype['max_height'] = undefined;

/**
 * @member {Number} max_width
 */
SendBirdThumbnailSize.prototype['max_width'] = undefined;






export default SendBirdThumbnailSize;

