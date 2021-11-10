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
 * The UpdateChannelInvitationPreferenceData model module.
 * @module model/UpdateChannelInvitationPreferenceData
 * @version 1.0.0
 */
class UpdateChannelInvitationPreferenceData {
    /**
     * Constructs a new <code>UpdateChannelInvitationPreferenceData</code>.
     * @alias module:model/UpdateChannelInvitationPreferenceData
     * @param autoAccept {Boolean} Determines for the user whether or not to automatically join a [private](/docs/chat/v3/platform-api/guides/group-channel#-3-private-vs-public) group channel promptly from an invitation without having to accept it. (Default: true)
     */
    constructor(autoAccept) { 
        
        UpdateChannelInvitationPreferenceData.initialize(this, autoAccept);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, autoAccept) { 
        obj['auto_accept'] = autoAccept;
    }

    /**
     * Constructs a <code>UpdateChannelInvitationPreferenceData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateChannelInvitationPreferenceData} obj Optional instance to populate.
     * @return {module:model/UpdateChannelInvitationPreferenceData} The populated <code>UpdateChannelInvitationPreferenceData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateChannelInvitationPreferenceData();

            if (data.hasOwnProperty('auto_accept')) {
                obj['auto_accept'] = ApiClient.convertToType(data['auto_accept'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * Determines for the user whether or not to automatically join a [private](/docs/chat/v3/platform-api/guides/group-channel#-3-private-vs-public) group channel promptly from an invitation without having to accept it. (Default: true)
 * @member {Boolean} auto_accept
 */
UpdateChannelInvitationPreferenceData.prototype['auto_accept'] = undefined;






export default UpdateChannelInvitationPreferenceData;

