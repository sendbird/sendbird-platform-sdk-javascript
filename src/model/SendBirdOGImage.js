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
 * The SendBirdOGImage model module.
 * @module model/SendBirdOGImage
 * @version 0.0.16
 */
class SendBirdOGImage {
    /**
     * Constructs a new <code>SendBirdOGImage</code>.
     * @alias module:model/SendBirdOGImage
     */
    constructor() { 
        
        SendBirdOGImage.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SendBirdOGImage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SendBirdOGImage} obj Optional instance to populate.
     * @return {module:model/SendBirdOGImage} The populated <code>SendBirdOGImage</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SendBirdOGImage();

            if (data.hasOwnProperty('alt')) {
                obj['alt'] = ApiClient.convertToType(data['alt'], 'String');
            }
            if (data.hasOwnProperty('height')) {
                obj['height'] = ApiClient.convertToType(data['height'], 'Number');
            }
            if (data.hasOwnProperty('secure_url')) {
                obj['secure_url'] = ApiClient.convertToType(data['secure_url'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
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
 * @member {String} alt
 */
SendBirdOGImage.prototype['alt'] = undefined;

/**
 * @member {Number} height
 */
SendBirdOGImage.prototype['height'] = undefined;

/**
 * @member {String} secure_url
 */
SendBirdOGImage.prototype['secure_url'] = undefined;

/**
 * @member {String} type
 */
SendBirdOGImage.prototype['type'] = undefined;

/**
 * @member {String} url
 */
SendBirdOGImage.prototype['url'] = undefined;

/**
 * @member {Number} width
 */
SendBirdOGImage.prototype['width'] = undefined;






export default SendBirdOGImage;

