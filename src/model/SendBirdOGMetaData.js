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
import SendBirdOGImage from './SendBirdOGImage';

/**
 * The SendBirdOGMetaData model module.
 * @module model/SendBirdOGMetaData
 * @version 0.0.16
 */
class SendBirdOGMetaData {
    /**
     * Constructs a new <code>SendBirdOGMetaData</code>.
     * @alias module:model/SendBirdOGMetaData
     */
    constructor() { 
        
        SendBirdOGMetaData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SendBirdOGMetaData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SendBirdOGMetaData} obj Optional instance to populate.
     * @return {module:model/SendBirdOGMetaData} The populated <code>SendBirdOGMetaData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SendBirdOGMetaData();

            if (data.hasOwnProperty('default_image')) {
                obj['default_image'] = SendBirdOGImage.constructFromObject(data['default_image']);
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/SendBirdOGImage} default_image
 */
SendBirdOGMetaData.prototype['default_image'] = undefined;

/**
 * @member {String} description
 */
SendBirdOGMetaData.prototype['description'] = undefined;

/**
 * @member {String} title
 */
SendBirdOGMetaData.prototype['title'] = undefined;

/**
 * @member {String} url
 */
SendBirdOGMetaData.prototype['url'] = undefined;






export default SendBirdOGMetaData;

