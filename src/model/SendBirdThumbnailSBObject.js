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
 * The SendBirdThumbnailSBObject model module.
 * @module model/SendBirdThumbnailSBObject
 * @version 1.0.0
 */
class SendBirdThumbnailSBObject {
    /**
     * Constructs a new <code>SendBirdThumbnailSBObject</code>.
     * @alias module:model/SendBirdThumbnailSBObject
     */
    constructor() { 
        
        SendBirdThumbnailSBObject.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SendBirdThumbnailSBObject</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SendBirdThumbnailSBObject} obj Optional instance to populate.
     * @return {module:model/SendBirdThumbnailSBObject} The populated <code>SendBirdThumbnailSBObject</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SendBirdThumbnailSBObject();

            if (data.hasOwnProperty('height')) {
                obj['height'] = ApiClient.convertToType(data['height'], 'Number');
            }
            if (data.hasOwnProperty('plain_url')) {
                obj['plain_url'] = ApiClient.convertToType(data['plain_url'], 'String');
            }
            if (data.hasOwnProperty('real_height')) {
                obj['real_height'] = ApiClient.convertToType(data['real_height'], 'Number');
            }
            if (data.hasOwnProperty('real_width')) {
                obj['real_width'] = ApiClient.convertToType(data['real_width'], 'Number');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('width')) {
                obj['width'] = ApiClient.convertToType(data['width'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} height
 */
SendBirdThumbnailSBObject.prototype['height'] = undefined;

/**
 * @member {String} plain_url
 */
SendBirdThumbnailSBObject.prototype['plain_url'] = undefined;

/**
 * @member {Number} real_height
 */
SendBirdThumbnailSBObject.prototype['real_height'] = undefined;

/**
 * @member {Number} real_width
 */
SendBirdThumbnailSBObject.prototype['real_width'] = undefined;

/**
 * @member {String} url
 */
SendBirdThumbnailSBObject.prototype['url'] = undefined;

/**
 * @member {Number} width
 */
SendBirdThumbnailSBObject.prototype['width'] = undefined;






export default SendBirdThumbnailSBObject;

