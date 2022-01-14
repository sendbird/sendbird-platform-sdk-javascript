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
 * The InlineResponse20020 model module.
 * @module model/InlineResponse20020
 * @version 1.0.0
 */
class InlineResponse20020 {
    /**
     * Constructs a new <code>InlineResponse20020</code>.
     * @alias module:model/InlineResponse20020
     */
    constructor() { 
        
        InlineResponse20020.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse20020</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20020} obj Optional instance to populate.
     * @return {module:model/InlineResponse20020} The populated <code>InlineResponse20020</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20020();

            if (data.hasOwnProperty('non_super_group_channel_unread_message_count')) {
                obj['non_super_group_channel_unread_message_count'] = ApiClient.convertToType(data['non_super_group_channel_unread_message_count'], 'Number');
            }
            if (data.hasOwnProperty('super_group_channel_unread_message_count')) {
                obj['super_group_channel_unread_message_count'] = ApiClient.convertToType(data['super_group_channel_unread_message_count'], 'Number');
            }
            if (data.hasOwnProperty('group_channel_unread_message_count')) {
                obj['group_channel_unread_message_count'] = ApiClient.convertToType(data['group_channel_unread_message_count'], 'Number');
            }
            if (data.hasOwnProperty('super_group_channel_invitation_count')) {
                obj['super_group_channel_invitation_count'] = ApiClient.convertToType(data['super_group_channel_invitation_count'], 'Number');
            }
            if (data.hasOwnProperty('group_channel_invitation_count')) {
                obj['group_channel_invitation_count'] = ApiClient.convertToType(data['group_channel_invitation_count'], 'Number');
            }
            if (data.hasOwnProperty('super_group_channel_unread_mention_count')) {
                obj['super_group_channel_unread_mention_count'] = ApiClient.convertToType(data['super_group_channel_unread_mention_count'], 'Number');
            }
            if (data.hasOwnProperty('group_channel_unread_mention_count')) {
                obj['group_channel_unread_mention_count'] = ApiClient.convertToType(data['group_channel_unread_mention_count'], 'Number');
            }
            if (data.hasOwnProperty('non_super_group_channel_unread_mention_count')) {
                obj['non_super_group_channel_unread_mention_count'] = ApiClient.convertToType(data['non_super_group_channel_unread_mention_count'], 'Number');
            }
            if (data.hasOwnProperty('non_super_group_channel_invitation_count')) {
                obj['non_super_group_channel_invitation_count'] = ApiClient.convertToType(data['non_super_group_channel_invitation_count'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} non_super_group_channel_unread_message_count
 */
InlineResponse20020.prototype['non_super_group_channel_unread_message_count'] = undefined;

/**
 * @member {Number} super_group_channel_unread_message_count
 */
InlineResponse20020.prototype['super_group_channel_unread_message_count'] = undefined;

/**
 * @member {Number} group_channel_unread_message_count
 */
InlineResponse20020.prototype['group_channel_unread_message_count'] = undefined;

/**
 * @member {Number} super_group_channel_invitation_count
 */
InlineResponse20020.prototype['super_group_channel_invitation_count'] = undefined;

/**
 * @member {Number} group_channel_invitation_count
 */
InlineResponse20020.prototype['group_channel_invitation_count'] = undefined;

/**
 * @member {Number} super_group_channel_unread_mention_count
 */
InlineResponse20020.prototype['super_group_channel_unread_mention_count'] = undefined;

/**
 * @member {Number} group_channel_unread_mention_count
 */
InlineResponse20020.prototype['group_channel_unread_mention_count'] = undefined;

/**
 * @member {Number} non_super_group_channel_unread_mention_count
 */
InlineResponse20020.prototype['non_super_group_channel_unread_mention_count'] = undefined;

/**
 * @member {Number} non_super_group_channel_invitation_count
 */
InlineResponse20020.prototype['non_super_group_channel_invitation_count'] = undefined;






export default InlineResponse20020;

