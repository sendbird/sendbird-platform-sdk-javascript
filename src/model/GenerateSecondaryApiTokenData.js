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
 * The GenerateSecondaryApiTokenData model module.
 * @module model/GenerateSecondaryApiTokenData
 * @version 1.0.0
 */
class GenerateSecondaryApiTokenData {
    /**
     * Constructs a new <code>GenerateSecondaryApiTokenData</code>.
     * @alias module:model/GenerateSecondaryApiTokenData
     * @param HTTP_API_TOKEN {String} Specifies the master API token of the application.
     */
    constructor(HTTP_API_TOKEN) { 
        
        GenerateSecondaryApiTokenData.initialize(this, HTTP_API_TOKEN);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, HTTP_API_TOKEN) { 
        obj['HTTP_API_TOKEN'] = HTTP_API_TOKEN;
    }

    /**
     * Constructs a <code>GenerateSecondaryApiTokenData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GenerateSecondaryApiTokenData} obj Optional instance to populate.
     * @return {module:model/GenerateSecondaryApiTokenData} The populated <code>GenerateSecondaryApiTokenData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GenerateSecondaryApiTokenData();

            if (data.hasOwnProperty('HTTP_API_TOKEN')) {
                obj['HTTP_API_TOKEN'] = ApiClient.convertToType(data['HTTP_API_TOKEN'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Specifies the master API token of the application.
 * @member {String} HTTP_API_TOKEN
 */
GenerateSecondaryApiTokenData.prototype['HTTP_API_TOKEN'] = undefined;






export default GenerateSecondaryApiTokenData;

