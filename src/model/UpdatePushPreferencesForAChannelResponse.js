/**
 * Sendbird Platform SDK
 * Sendbird Platform API SDK  [https://sendbird.com/docs/chat/v3/platform-api/getting-started/prepare-to-use-api](https://sendbird.com/docs/chat/v3/platform-api/getting-started/prepare-to-use-api)  Contact Support:   Name: Sendbird   Email: [support@sendbird.com](https://mailto:support@sendbird.com)
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
import SendbirdPushTriggerOption from './SendbirdPushTriggerOption';

/**
 * The UpdatePushPreferencesForAChannelResponse model module.
 * @module model/UpdatePushPreferencesForAChannelResponse
 * @version 2.0.0
 */
class UpdatePushPreferencesForAChannelResponse {
    /**
     * Constructs a new <code>UpdatePushPreferencesForAChannelResponse</code>.
     * @alias module:model/UpdatePushPreferencesForAChannelResponse
     */
    constructor() { 
        
        UpdatePushPreferencesForAChannelResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdatePushPreferencesForAChannelResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdatePushPreferencesForAChannelResponse} obj Optional instance to populate.
     * @return {module:model/UpdatePushPreferencesForAChannelResponse} The populated <code>UpdatePushPreferencesForAChannelResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdatePushPreferencesForAChannelResponse();

            if (data.hasOwnProperty('enable')) {
                obj['enable'] = ApiClient.convertToType(data['enable'], 'Boolean');
            }
            if (data.hasOwnProperty('push_sound')) {
                obj['push_sound'] = ApiClient.convertToType(data['push_sound'], 'String');
            }
            if (data.hasOwnProperty('push_trigger_option')) {
                obj['push_trigger_option'] = SendbirdPushTriggerOption.constructFromObject(data['push_trigger_option']);
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} enable
 */
UpdatePushPreferencesForAChannelResponse.prototype['enable'] = undefined;

/**
 * @member {String} push_sound
 */
UpdatePushPreferencesForAChannelResponse.prototype['push_sound'] = undefined;

/**
 * @member {module:model/SendbirdPushTriggerOption} push_trigger_option
 */
UpdatePushPreferencesForAChannelResponse.prototype['push_trigger_option'] = undefined;






export default UpdatePushPreferencesForAChannelResponse;

