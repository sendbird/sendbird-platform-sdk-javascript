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
 * The UpdateApnsPushConfigurationByIdResponse model module.
 * @module model/UpdateApnsPushConfigurationByIdResponse
 * @version 0.0.14
 */
class UpdateApnsPushConfigurationByIdResponse {
    /**
     * Constructs a new <code>UpdateApnsPushConfigurationByIdResponse</code>.
     * @alias module:model/UpdateApnsPushConfigurationByIdResponse
     */
    constructor() { 
        
        UpdateApnsPushConfigurationByIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdateApnsPushConfigurationByIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateApnsPushConfigurationByIdResponse} obj Optional instance to populate.
     * @return {module:model/UpdateApnsPushConfigurationByIdResponse} The populated <code>UpdateApnsPushConfigurationByIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateApnsPushConfigurationByIdResponse();

            if (data.hasOwnProperty('push_configurations')) {
                obj['push_configurations'] = ApiClient.convertToType(data['push_configurations'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} push_configurations
 */
UpdateApnsPushConfigurationByIdResponse.prototype['push_configurations'] = undefined;






export default UpdateApnsPushConfigurationByIdResponse;

