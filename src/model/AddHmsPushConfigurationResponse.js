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
import AddHmsPushConfigurationResponsePushConfigurations from './AddHmsPushConfigurationResponsePushConfigurations';

/**
 * The AddHmsPushConfigurationResponse model module.
 * @module model/AddHmsPushConfigurationResponse
 * @version 1.0.0
 */
class AddHmsPushConfigurationResponse {
    /**
     * Constructs a new <code>AddHmsPushConfigurationResponse</code>.
     * @alias module:model/AddHmsPushConfigurationResponse
     */
    constructor() { 
        
        AddHmsPushConfigurationResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AddHmsPushConfigurationResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddHmsPushConfigurationResponse} obj Optional instance to populate.
     * @return {module:model/AddHmsPushConfigurationResponse} The populated <code>AddHmsPushConfigurationResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddHmsPushConfigurationResponse();

            if (data.hasOwnProperty('push_configurations')) {
                obj['push_configurations'] = ApiClient.convertToType(data['push_configurations'], [AddHmsPushConfigurationResponsePushConfigurations]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/AddHmsPushConfigurationResponsePushConfigurations>} push_configurations
 */
AddHmsPushConfigurationResponse.prototype['push_configurations'] = undefined;






export default AddHmsPushConfigurationResponse;
