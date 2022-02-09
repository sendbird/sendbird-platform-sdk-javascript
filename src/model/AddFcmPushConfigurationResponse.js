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
import AddFcmPushConfigurationResponsePushConfigurations from './AddFcmPushConfigurationResponsePushConfigurations';

/**
 * The AddFcmPushConfigurationResponse model module.
 * @module model/AddFcmPushConfigurationResponse
 * @version 1.0.0
 */
class AddFcmPushConfigurationResponse {
    /**
     * Constructs a new <code>AddFcmPushConfigurationResponse</code>.
     * @alias module:model/AddFcmPushConfigurationResponse
     */
    constructor() { 
        
        AddFcmPushConfigurationResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AddFcmPushConfigurationResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddFcmPushConfigurationResponse} obj Optional instance to populate.
     * @return {module:model/AddFcmPushConfigurationResponse} The populated <code>AddFcmPushConfigurationResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddFcmPushConfigurationResponse();

            if (data.hasOwnProperty('push_configurations')) {
                obj['push_configurations'] = ApiClient.convertToType(data['push_configurations'], [AddFcmPushConfigurationResponsePushConfigurations]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/AddFcmPushConfigurationResponsePushConfigurations>} push_configurations
 */
AddFcmPushConfigurationResponse.prototype['push_configurations'] = undefined;






export default AddFcmPushConfigurationResponse;

