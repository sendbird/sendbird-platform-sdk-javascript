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
import SendBirdGroupChannel from './SendBirdGroupChannel';
import SendBirdGroupChannelCreatedBy from './SendBirdGroupChannelCreatedBy';
import SendBirdGroupChannelDisappearingMessage from './SendBirdGroupChannelDisappearingMessage';
import SendBirdGroupChannelSmsFallback from './SendBirdGroupChannelSmsFallback';
import SendBirdMember from './SendBirdMember';
import SendBirdMessageResponse from './SendBirdMessageResponse';
import SendBirdOpenChannel from './SendBirdOpenChannel';
import SendBirdUser from './SendBirdUser';

/**
 * The SendBirdChannelResponse model module.
 * @module model/SendBirdChannelResponse
 * @version 1.0.0
 */
class SendBirdChannelResponse {
    /**
     * Constructs a new <code>SendBirdChannelResponse</code>.
     * @alias module:model/SendBirdChannelResponse
     * @implements module:model/SendBirdGroupChannel
     * @implements module:model/SendBirdOpenChannel
     */
    constructor() { 
        SendBirdGroupChannel.initialize(this);SendBirdOpenChannel.initialize(this);
        SendBirdChannelResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SendBirdChannelResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SendBirdChannelResponse} obj Optional instance to populate.
     * @return {module:model/SendBirdChannelResponse} The populated <code>SendBirdChannelResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SendBirdChannelResponse();
            SendBirdGroupChannel.constructFromObject(data, obj);
            SendBirdOpenChannel.constructFromObject(data, obj);

            if (data.hasOwnProperty('channel_url')) {
                obj['channel_url'] = ApiClient.convertToType(data['channel_url'], 'String');
            }
            if (data.hasOwnProperty('cover_url')) {
                obj['cover_url'] = ApiClient.convertToType(data['cover_url'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Number');
            }
            if (data.hasOwnProperty('created_by')) {
                obj['created_by'] = SendBirdGroupChannelCreatedBy.constructFromObject(data['created_by']);
            }
            if (data.hasOwnProperty('creator')) {
                obj['creator'] = SendBirdUser.constructFromObject(data['creator']);
            }
            if (data.hasOwnProperty('custom_type')) {
                obj['custom_type'] = ApiClient.convertToType(data['custom_type'], 'String');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], 'String');
            }
            if (data.hasOwnProperty('disappearing_message')) {
                obj['disappearing_message'] = SendBirdGroupChannelDisappearingMessage.constructFromObject(data['disappearing_message']);
            }
            if (data.hasOwnProperty('freeze')) {
                obj['freeze'] = ApiClient.convertToType(data['freeze'], 'Boolean');
            }
            if (data.hasOwnProperty('ignore_profanity_filter')) {
                obj['ignore_profanity_filter'] = ApiClient.convertToType(data['ignore_profanity_filter'], 'Boolean');
            }
            if (data.hasOwnProperty('hidden_state')) {
                obj['hidden_state'] = ApiClient.convertToType(data['hidden_state'], 'String');
            }
            if (data.hasOwnProperty('invited_at')) {
                obj['invited_at'] = ApiClient.convertToType(data['invited_at'], 'Number');
            }
            if (data.hasOwnProperty('inviter')) {
                obj['inviter'] = SendBirdUser.constructFromObject(data['inviter']);
            }
            if (data.hasOwnProperty('is_access_code_required')) {
                obj['is_access_code_required'] = ApiClient.convertToType(data['is_access_code_required'], 'Boolean');
            }
            if (data.hasOwnProperty('is_broadcast')) {
                obj['is_broadcast'] = ApiClient.convertToType(data['is_broadcast'], 'Boolean');
            }
            if (data.hasOwnProperty('is_created')) {
                obj['is_created'] = ApiClient.convertToType(data['is_created'], 'Boolean');
            }
            if (data.hasOwnProperty('is_discoverable')) {
                obj['is_discoverable'] = ApiClient.convertToType(data['is_discoverable'], 'Boolean');
            }
            if (data.hasOwnProperty('is_distinct')) {
                obj['is_distinct'] = ApiClient.convertToType(data['is_distinct'], 'Boolean');
            }
            if (data.hasOwnProperty('is_ephemeral')) {
                obj['is_ephemeral'] = ApiClient.convertToType(data['is_ephemeral'], 'Boolean');
            }
            if (data.hasOwnProperty('is_frozen')) {
                obj['is_frozen'] = ApiClient.convertToType(data['is_frozen'], 'Boolean');
            }
            if (data.hasOwnProperty('is_hidden')) {
                obj['is_hidden'] = ApiClient.convertToType(data['is_hidden'], 'Boolean');
            }
            if (data.hasOwnProperty('is_public')) {
                obj['is_public'] = ApiClient.convertToType(data['is_public'], 'Boolean');
            }
            if (data.hasOwnProperty('is_push_enabled')) {
                obj['is_push_enabled'] = ApiClient.convertToType(data['is_push_enabled'], 'Boolean');
            }
            if (data.hasOwnProperty('is_super')) {
                obj['is_super'] = ApiClient.convertToType(data['is_super'], 'Boolean');
            }
            if (data.hasOwnProperty('joined_at')) {
                obj['joined_at'] = ApiClient.convertToType(data['joined_at'], 'Number');
            }
            if (data.hasOwnProperty('joined_member_count')) {
                obj['joined_member_count'] = ApiClient.convertToType(data['joined_member_count'], 'Number');
            }
            if (data.hasOwnProperty('last_message')) {
                obj['last_message'] = SendBirdMessageResponse.constructFromObject(data['last_message']);
            }
            if (data.hasOwnProperty('max_length_message')) {
                obj['max_length_message'] = ApiClient.convertToType(data['max_length_message'], 'Number');
            }
            if (data.hasOwnProperty('member_count')) {
                obj['member_count'] = ApiClient.convertToType(data['member_count'], 'Number');
            }
            if (data.hasOwnProperty('members')) {
                obj['members'] = ApiClient.convertToType(data['members'], [SendBirdMember]);
            }
            if (data.hasOwnProperty('message_offset_timestamp')) {
                obj['message_offset_timestamp'] = ApiClient.convertToType(data['message_offset_timestamp'], 'Number');
            }
            if (data.hasOwnProperty('message_survival_seconds')) {
                obj['message_survival_seconds'] = ApiClient.convertToType(data['message_survival_seconds'], 'Number');
            }
            if (data.hasOwnProperty('my_count_preference')) {
                obj['my_count_preference'] = ApiClient.convertToType(data['my_count_preference'], 'String');
            }
            if (data.hasOwnProperty('my_last_read')) {
                obj['my_last_read'] = ApiClient.convertToType(data['my_last_read'], 'Number');
            }
            if (data.hasOwnProperty('my_member_state')) {
                obj['my_member_state'] = ApiClient.convertToType(data['my_member_state'], 'String');
            }
            if (data.hasOwnProperty('my_muted_state')) {
                obj['my_muted_state'] = ApiClient.convertToType(data['my_muted_state'], 'String');
            }
            if (data.hasOwnProperty('my_push_trigger_option')) {
                obj['my_push_trigger_option'] = ApiClient.convertToType(data['my_push_trigger_option'], 'String');
            }
            if (data.hasOwnProperty('my_role')) {
                obj['my_role'] = ApiClient.convertToType(data['my_role'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('operators')) {
                obj['operators'] = ApiClient.convertToType(data['operators'], [SendBirdUser]);
            }
            if (data.hasOwnProperty('sms_fallback')) {
                obj['sms_fallback'] = SendBirdGroupChannelSmsFallback.constructFromObject(data['sms_fallback']);
            }
            if (data.hasOwnProperty('unread_mention_count')) {
                obj['unread_mention_count'] = ApiClient.convertToType(data['unread_mention_count'], 'Number');
            }
            if (data.hasOwnProperty('unread_message_count')) {
                obj['unread_message_count'] = ApiClient.convertToType(data['unread_message_count'], 'Number');
            }
            if (data.hasOwnProperty('is_dynamic_partitioned')) {
                obj['is_dynamic_partitioned'] = ApiClient.convertToType(data['is_dynamic_partitioned'], 'Boolean');
            }
            if (data.hasOwnProperty('participant_count')) {
                obj['participant_count'] = ApiClient.convertToType(data['participant_count'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} channel_url
 */
SendBirdChannelResponse.prototype['channel_url'] = undefined;

/**
 * @member {String} cover_url
 */
SendBirdChannelResponse.prototype['cover_url'] = undefined;

/**
 * @member {Number} created_at
 */
SendBirdChannelResponse.prototype['created_at'] = undefined;

/**
 * @member {module:model/SendBirdGroupChannelCreatedBy} created_by
 */
SendBirdChannelResponse.prototype['created_by'] = undefined;

/**
 * @member {module:model/SendBirdUser} creator
 */
SendBirdChannelResponse.prototype['creator'] = undefined;

/**
 * @member {String} custom_type
 */
SendBirdChannelResponse.prototype['custom_type'] = undefined;

/**
 * @member {String} data
 */
SendBirdChannelResponse.prototype['data'] = undefined;

/**
 * @member {module:model/SendBirdGroupChannelDisappearingMessage} disappearing_message
 */
SendBirdChannelResponse.prototype['disappearing_message'] = undefined;

/**
 * @member {Boolean} freeze
 */
SendBirdChannelResponse.prototype['freeze'] = undefined;

/**
 * @member {Boolean} ignore_profanity_filter
 */
SendBirdChannelResponse.prototype['ignore_profanity_filter'] = undefined;

/**
 * @member {module:model/SendBirdChannelResponse.HiddenStateEnum} hidden_state
 */
SendBirdChannelResponse.prototype['hidden_state'] = undefined;

/**
 * @member {Number} invited_at
 */
SendBirdChannelResponse.prototype['invited_at'] = undefined;

/**
 * @member {module:model/SendBirdUser} inviter
 */
SendBirdChannelResponse.prototype['inviter'] = undefined;

/**
 * @member {Boolean} is_access_code_required
 */
SendBirdChannelResponse.prototype['is_access_code_required'] = undefined;

/**
 * @member {Boolean} is_broadcast
 */
SendBirdChannelResponse.prototype['is_broadcast'] = undefined;

/**
 * @member {Boolean} is_created
 */
SendBirdChannelResponse.prototype['is_created'] = undefined;

/**
 * @member {Boolean} is_discoverable
 */
SendBirdChannelResponse.prototype['is_discoverable'] = undefined;

/**
 * @member {Boolean} is_distinct
 */
SendBirdChannelResponse.prototype['is_distinct'] = undefined;

/**
 * @member {Boolean} is_ephemeral
 */
SendBirdChannelResponse.prototype['is_ephemeral'] = undefined;

/**
 * @member {Boolean} is_frozen
 */
SendBirdChannelResponse.prototype['is_frozen'] = undefined;

/**
 * @member {Boolean} is_hidden
 */
SendBirdChannelResponse.prototype['is_hidden'] = undefined;

/**
 * @member {Boolean} is_public
 */
SendBirdChannelResponse.prototype['is_public'] = undefined;

/**
 * @member {Boolean} is_push_enabled
 */
SendBirdChannelResponse.prototype['is_push_enabled'] = undefined;

/**
 * @member {Boolean} is_super
 */
SendBirdChannelResponse.prototype['is_super'] = undefined;

/**
 * @member {Number} joined_at
 */
SendBirdChannelResponse.prototype['joined_at'] = undefined;

/**
 * @member {Number} joined_member_count
 */
SendBirdChannelResponse.prototype['joined_member_count'] = undefined;

/**
 * @member {module:model/SendBirdMessageResponse} last_message
 */
SendBirdChannelResponse.prototype['last_message'] = undefined;

/**
 * @member {Number} max_length_message
 */
SendBirdChannelResponse.prototype['max_length_message'] = undefined;

/**
 * @member {Number} member_count
 */
SendBirdChannelResponse.prototype['member_count'] = undefined;

/**
 * @member {Array.<module:model/SendBirdMember>} members
 */
SendBirdChannelResponse.prototype['members'] = undefined;

/**
 * @member {Number} message_offset_timestamp
 */
SendBirdChannelResponse.prototype['message_offset_timestamp'] = undefined;

/**
 * @member {Number} message_survival_seconds
 */
SendBirdChannelResponse.prototype['message_survival_seconds'] = undefined;

/**
 * @member {String} my_count_preference
 */
SendBirdChannelResponse.prototype['my_count_preference'] = undefined;

/**
 * @member {Number} my_last_read
 */
SendBirdChannelResponse.prototype['my_last_read'] = undefined;

/**
 * @member {module:model/SendBirdChannelResponse.MyMemberStateEnum} my_member_state
 */
SendBirdChannelResponse.prototype['my_member_state'] = undefined;

/**
 * @member {module:model/SendBirdChannelResponse.MyMutedStateEnum} my_muted_state
 */
SendBirdChannelResponse.prototype['my_muted_state'] = undefined;

/**
 * @member {module:model/SendBirdChannelResponse.MyPushTriggerOptionEnum} my_push_trigger_option
 */
SendBirdChannelResponse.prototype['my_push_trigger_option'] = undefined;

/**
 * @member {module:model/SendBirdChannelResponse.MyRoleEnum} my_role
 */
SendBirdChannelResponse.prototype['my_role'] = undefined;

/**
 * @member {String} name
 */
SendBirdChannelResponse.prototype['name'] = undefined;

/**
 * @member {Array.<module:model/SendBirdUser>} operators
 */
SendBirdChannelResponse.prototype['operators'] = undefined;

/**
 * @member {module:model/SendBirdGroupChannelSmsFallback} sms_fallback
 */
SendBirdChannelResponse.prototype['sms_fallback'] = undefined;

/**
 * @member {Number} unread_mention_count
 */
SendBirdChannelResponse.prototype['unread_mention_count'] = undefined;

/**
 * @member {Number} unread_message_count
 */
SendBirdChannelResponse.prototype['unread_message_count'] = undefined;

/**
 * @member {Boolean} is_dynamic_partitioned
 */
SendBirdChannelResponse.prototype['is_dynamic_partitioned'] = undefined;

/**
 * @member {Number} participant_count
 */
SendBirdChannelResponse.prototype['participant_count'] = undefined;


// Implement SendBirdGroupChannel interface:
/**
 * @member {String} channel_url
 */
SendBirdGroupChannel.prototype['channel_url'] = undefined;
/**
 * @member {String} cover_url
 */
SendBirdGroupChannel.prototype['cover_url'] = undefined;
/**
 * @member {Number} created_at
 */
SendBirdGroupChannel.prototype['created_at'] = undefined;
/**
 * @member {module:model/SendBirdGroupChannelCreatedBy} created_by
 */
SendBirdGroupChannel.prototype['created_by'] = undefined;
/**
 * @member {module:model/SendBirdUser} creator
 */
SendBirdGroupChannel.prototype['creator'] = undefined;
/**
 * @member {String} custom_type
 */
SendBirdGroupChannel.prototype['custom_type'] = undefined;
/**
 * @member {String} data
 */
SendBirdGroupChannel.prototype['data'] = undefined;
/**
 * @member {module:model/SendBirdGroupChannelDisappearingMessage} disappearing_message
 */
SendBirdGroupChannel.prototype['disappearing_message'] = undefined;
/**
 * @member {Boolean} freeze
 */
SendBirdGroupChannel.prototype['freeze'] = undefined;
/**
 * @member {Boolean} ignore_profanity_filter
 */
SendBirdGroupChannel.prototype['ignore_profanity_filter'] = undefined;
/**
 * @member {module:model/SendBirdGroupChannel.HiddenStateEnum} hidden_state
 */
SendBirdGroupChannel.prototype['hidden_state'] = undefined;
/**
 * @member {Number} invited_at
 */
SendBirdGroupChannel.prototype['invited_at'] = undefined;
/**
 * @member {module:model/SendBirdUser} inviter
 */
SendBirdGroupChannel.prototype['inviter'] = undefined;
/**
 * @member {Boolean} is_access_code_required
 */
SendBirdGroupChannel.prototype['is_access_code_required'] = undefined;
/**
 * @member {Boolean} is_broadcast
 */
SendBirdGroupChannel.prototype['is_broadcast'] = undefined;
/**
 * @member {Boolean} is_created
 */
SendBirdGroupChannel.prototype['is_created'] = undefined;
/**
 * @member {Boolean} is_discoverable
 */
SendBirdGroupChannel.prototype['is_discoverable'] = undefined;
/**
 * @member {Boolean} is_distinct
 */
SendBirdGroupChannel.prototype['is_distinct'] = undefined;
/**
 * @member {Boolean} is_ephemeral
 */
SendBirdGroupChannel.prototype['is_ephemeral'] = undefined;
/**
 * @member {Boolean} is_frozen
 */
SendBirdGroupChannel.prototype['is_frozen'] = undefined;
/**
 * @member {Boolean} is_hidden
 */
SendBirdGroupChannel.prototype['is_hidden'] = undefined;
/**
 * @member {Boolean} is_public
 */
SendBirdGroupChannel.prototype['is_public'] = undefined;
/**
 * @member {Boolean} is_push_enabled
 */
SendBirdGroupChannel.prototype['is_push_enabled'] = undefined;
/**
 * @member {Boolean} is_super
 */
SendBirdGroupChannel.prototype['is_super'] = undefined;
/**
 * @member {Number} joined_at
 */
SendBirdGroupChannel.prototype['joined_at'] = undefined;
/**
 * @member {Number} joined_member_count
 */
SendBirdGroupChannel.prototype['joined_member_count'] = undefined;
/**
 * @member {module:model/SendBirdMessageResponse} last_message
 */
SendBirdGroupChannel.prototype['last_message'] = undefined;
/**
 * @member {Number} max_length_message
 */
SendBirdGroupChannel.prototype['max_length_message'] = undefined;
/**
 * @member {Number} member_count
 */
SendBirdGroupChannel.prototype['member_count'] = undefined;
/**
 * @member {Array.<module:model/SendBirdMember>} members
 */
SendBirdGroupChannel.prototype['members'] = undefined;
/**
 * @member {Number} message_offset_timestamp
 */
SendBirdGroupChannel.prototype['message_offset_timestamp'] = undefined;
/**
 * @member {Number} message_survival_seconds
 */
SendBirdGroupChannel.prototype['message_survival_seconds'] = undefined;
/**
 * @member {String} my_count_preference
 */
SendBirdGroupChannel.prototype['my_count_preference'] = undefined;
/**
 * @member {Number} my_last_read
 */
SendBirdGroupChannel.prototype['my_last_read'] = undefined;
/**
 * @member {module:model/SendBirdGroupChannel.MyMemberStateEnum} my_member_state
 */
SendBirdGroupChannel.prototype['my_member_state'] = undefined;
/**
 * @member {module:model/SendBirdGroupChannel.MyMutedStateEnum} my_muted_state
 */
SendBirdGroupChannel.prototype['my_muted_state'] = undefined;
/**
 * @member {module:model/SendBirdGroupChannel.MyPushTriggerOptionEnum} my_push_trigger_option
 */
SendBirdGroupChannel.prototype['my_push_trigger_option'] = undefined;
/**
 * @member {module:model/SendBirdGroupChannel.MyRoleEnum} my_role
 */
SendBirdGroupChannel.prototype['my_role'] = undefined;
/**
 * @member {String} name
 */
SendBirdGroupChannel.prototype['name'] = undefined;
/**
 * @member {Array.<String>} operators
 */
SendBirdGroupChannel.prototype['operators'] = undefined;
/**
 * @member {module:model/SendBirdGroupChannelSmsFallback} sms_fallback
 */
SendBirdGroupChannel.prototype['sms_fallback'] = undefined;
/**
 * @member {Number} unread_mention_count
 */
SendBirdGroupChannel.prototype['unread_mention_count'] = undefined;
/**
 * @member {Number} unread_message_count
 */
SendBirdGroupChannel.prototype['unread_message_count'] = undefined;
// Implement SendBirdOpenChannel interface:
/**
 * @member {String} name
 */
SendBirdOpenChannel.prototype['name'] = undefined;
/**
 * @member {String} custom_type
 */
SendBirdOpenChannel.prototype['custom_type'] = undefined;
/**
 * @member {String} channel_url
 */
SendBirdOpenChannel.prototype['channel_url'] = undefined;
/**
 * @member {Number} created_at
 */
SendBirdOpenChannel.prototype['created_at'] = undefined;
/**
 * @member {String} cover_url
 */
SendBirdOpenChannel.prototype['cover_url'] = undefined;
/**
 * @member {module:model/SendBirdUser} creator
 */
SendBirdOpenChannel.prototype['creator'] = undefined;
/**
 * @member {String} data
 */
SendBirdOpenChannel.prototype['data'] = undefined;
/**
 * @member {Boolean} is_dynamic_partitioned
 */
SendBirdOpenChannel.prototype['is_dynamic_partitioned'] = undefined;
/**
 * @member {Boolean} is_ephemeral
 */
SendBirdOpenChannel.prototype['is_ephemeral'] = undefined;
/**
 * @member {Boolean} is_frozen
 */
SendBirdOpenChannel.prototype['is_frozen'] = undefined;
/**
 * @member {Number} max_length_message
 */
SendBirdOpenChannel.prototype['max_length_message'] = undefined;
/**
 * @member {Array.<module:model/SendBirdUser>} operators
 */
SendBirdOpenChannel.prototype['operators'] = undefined;
/**
 * @member {Number} participant_count
 */
SendBirdOpenChannel.prototype['participant_count'] = undefined;
/**
 * @member {Boolean} freeze
 */
SendBirdOpenChannel.prototype['freeze'] = undefined;



/**
 * Allowed values for the <code>hidden_state</code> property.
 * @enum {String}
 * @readonly
 */
SendBirdChannelResponse['HiddenStateEnum'] = {

    /**
     * value: "hidden_allow_auto_unhide"
     * @const
     */
    "hidden_allow_auto_unhide": "hidden_allow_auto_unhide",

    /**
     * value: "hidden_prevent_auto_unhide"
     * @const
     */
    "hidden_prevent_auto_unhide": "hidden_prevent_auto_unhide",

    /**
     * value: "unhidden"
     * @const
     */
    "unhidden": "unhidden"
};


/**
 * Allowed values for the <code>my_member_state</code> property.
 * @enum {String}
 * @readonly
 */
SendBirdChannelResponse['MyMemberStateEnum'] = {

    /**
     * value: "invited"
     * @const
     */
    "invited": "invited",

    /**
     * value: "joined"
     * @const
     */
    "joined": "joined",

    /**
     * value: "none"
     * @const
     */
    "none": "none"
};


/**
 * Allowed values for the <code>my_muted_state</code> property.
 * @enum {String}
 * @readonly
 */
SendBirdChannelResponse['MyMutedStateEnum'] = {

    /**
     * value: "muted"
     * @const
     */
    "muted": "muted",

    /**
     * value: "unmuted"
     * @const
     */
    "unmuted": "unmuted"
};


/**
 * Allowed values for the <code>my_push_trigger_option</code> property.
 * @enum {String}
 * @readonly
 */
SendBirdChannelResponse['MyPushTriggerOptionEnum'] = {

    /**
     * value: "all"
     * @const
     */
    "all": "all",

    /**
     * value: "default"
     * @const
     */
    "default": "default",

    /**
     * value: "mention_only"
     * @const
     */
    "mention_only": "mention_only",

    /**
     * value: "false"
     * @const
     */
    "false": "false"
};


/**
 * Allowed values for the <code>my_role</code> property.
 * @enum {String}
 * @readonly
 */
SendBirdChannelResponse['MyRoleEnum'] = {

    /**
     * value: "none"
     * @const
     */
    "none": "none",

    /**
     * value: "operator"
     * @const
     */
    "operator": "operator"
};



export default SendBirdChannelResponse;

