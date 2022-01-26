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

            if (data.hasOwnProperty('coverUrl')) {
                obj['coverUrl'] = ApiClient.convertToType(data['coverUrl'], 'String');
            }
            if (data.hasOwnProperty('createdAt')) {
                obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'Number');
            }
            if (data.hasOwnProperty('creator')) {
                obj['creator'] = SendBirdUser.constructFromObject(data['creator']);
            }
            if (data.hasOwnProperty('customType')) {
                obj['customType'] = ApiClient.convertToType(data['customType'], 'String');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], 'String');
            }
            if (data.hasOwnProperty('hiddenState')) {
                obj['hiddenState'] = ApiClient.convertToType(data['hiddenState'], 'String');
            }
            if (data.hasOwnProperty('invitedAt')) {
                obj['invitedAt'] = ApiClient.convertToType(data['invitedAt'], 'Number');
            }
            if (data.hasOwnProperty('inviter')) {
                obj['inviter'] = SendBirdUser.constructFromObject(data['inviter']);
            }
            if (data.hasOwnProperty('isAccessCodeRequired')) {
                obj['isAccessCodeRequired'] = ApiClient.convertToType(data['isAccessCodeRequired'], 'Boolean');
            }
            if (data.hasOwnProperty('isBroadcast')) {
                obj['isBroadcast'] = ApiClient.convertToType(data['isBroadcast'], 'Boolean');
            }
            if (data.hasOwnProperty('isDiscoverable')) {
                obj['isDiscoverable'] = ApiClient.convertToType(data['isDiscoverable'], 'Boolean');
            }
            if (data.hasOwnProperty('isDistinct')) {
                obj['isDistinct'] = ApiClient.convertToType(data['isDistinct'], 'Boolean');
            }
            if (data.hasOwnProperty('isEphemeral')) {
                obj['isEphemeral'] = ApiClient.convertToType(data['isEphemeral'], 'Boolean');
            }
            if (data.hasOwnProperty('isFrozen')) {
                obj['isFrozen'] = ApiClient.convertToType(data['isFrozen'], 'Boolean');
            }
            if (data.hasOwnProperty('isHidden')) {
                obj['isHidden'] = ApiClient.convertToType(data['isHidden'], 'Boolean');
            }
            if (data.hasOwnProperty('isPublic')) {
                obj['isPublic'] = ApiClient.convertToType(data['isPublic'], 'Boolean');
            }
            if (data.hasOwnProperty('isPushEnabled')) {
                obj['isPushEnabled'] = ApiClient.convertToType(data['isPushEnabled'], 'Boolean');
            }
            if (data.hasOwnProperty('isSuper')) {
                obj['isSuper'] = ApiClient.convertToType(data['isSuper'], 'Boolean');
            }
            if (data.hasOwnProperty('joinedAt')) {
                obj['joinedAt'] = ApiClient.convertToType(data['joinedAt'], 'Number');
            }
            if (data.hasOwnProperty('joinedMemberCount')) {
                obj['joinedMemberCount'] = ApiClient.convertToType(data['joinedMemberCount'], 'Number');
            }
            if (data.hasOwnProperty('lastMessage')) {
                obj['lastMessage'] = SendBirdMessageResponse.constructFromObject(data['lastMessage']);
            }
            if (data.hasOwnProperty('memberCount')) {
                obj['memberCount'] = ApiClient.convertToType(data['memberCount'], 'Number');
            }
            if (data.hasOwnProperty('members')) {
                obj['members'] = ApiClient.convertToType(data['members'], [SendBirdMember]);
            }
            if (data.hasOwnProperty('messageOffsetTimestamp')) {
                obj['messageOffsetTimestamp'] = ApiClient.convertToType(data['messageOffsetTimestamp'], 'Number');
            }
            if (data.hasOwnProperty('messageSurvivalSeconds')) {
                obj['messageSurvivalSeconds'] = ApiClient.convertToType(data['messageSurvivalSeconds'], 'Number');
            }
            if (data.hasOwnProperty('myCountPreference')) {
                obj['myCountPreference'] = ApiClient.convertToType(data['myCountPreference'], 'String');
            }
            if (data.hasOwnProperty('myLastRead')) {
                obj['myLastRead'] = ApiClient.convertToType(data['myLastRead'], 'Number');
            }
            if (data.hasOwnProperty('myMemberState')) {
                obj['myMemberState'] = ApiClient.convertToType(data['myMemberState'], 'String');
            }
            if (data.hasOwnProperty('myMutedState')) {
                obj['myMutedState'] = ApiClient.convertToType(data['myMutedState'], 'String');
            }
            if (data.hasOwnProperty('myPushTriggerOption')) {
                obj['myPushTriggerOption'] = ApiClient.convertToType(data['myPushTriggerOption'], 'String');
            }
            if (data.hasOwnProperty('myRole')) {
                obj['myRole'] = ApiClient.convertToType(data['myRole'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('unreadMentionCount')) {
                obj['unreadMentionCount'] = ApiClient.convertToType(data['unreadMentionCount'], 'Number');
            }
            if (data.hasOwnProperty('unreadMessageCount')) {
                obj['unreadMessageCount'] = ApiClient.convertToType(data['unreadMessageCount'], 'Number');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('operators')) {
                obj['operators'] = ApiClient.convertToType(data['operators'], [SendBirdUser]);
            }
            if (data.hasOwnProperty('participantCount')) {
                obj['participantCount'] = ApiClient.convertToType(data['participantCount'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} coverUrl
 */
SendBirdChannelResponse.prototype['coverUrl'] = undefined;

/**
 * @member {Number} createdAt
 */
SendBirdChannelResponse.prototype['createdAt'] = undefined;

/**
 * @member {module:model/SendBirdUser} creator
 */
SendBirdChannelResponse.prototype['creator'] = undefined;

/**
 * @member {String} customType
 */
SendBirdChannelResponse.prototype['customType'] = undefined;

/**
 * @member {String} data
 */
SendBirdChannelResponse.prototype['data'] = undefined;

/**
 * @member {module:model/SendBirdChannelResponse.HiddenStateEnum} hiddenState
 */
SendBirdChannelResponse.prototype['hiddenState'] = undefined;

/**
 * @member {Number} invitedAt
 */
SendBirdChannelResponse.prototype['invitedAt'] = undefined;

/**
 * @member {module:model/SendBirdUser} inviter
 */
SendBirdChannelResponse.prototype['inviter'] = undefined;

/**
 * @member {Boolean} isAccessCodeRequired
 */
SendBirdChannelResponse.prototype['isAccessCodeRequired'] = undefined;

/**
 * @member {Boolean} isBroadcast
 */
SendBirdChannelResponse.prototype['isBroadcast'] = undefined;

/**
 * @member {Boolean} isDiscoverable
 */
SendBirdChannelResponse.prototype['isDiscoverable'] = undefined;

/**
 * @member {Boolean} isDistinct
 */
SendBirdChannelResponse.prototype['isDistinct'] = undefined;

/**
 * @member {Boolean} isEphemeral
 */
SendBirdChannelResponse.prototype['isEphemeral'] = undefined;

/**
 * @member {Boolean} isFrozen
 */
SendBirdChannelResponse.prototype['isFrozen'] = undefined;

/**
 * @member {Boolean} isHidden
 */
SendBirdChannelResponse.prototype['isHidden'] = undefined;

/**
 * @member {Boolean} isPublic
 */
SendBirdChannelResponse.prototype['isPublic'] = undefined;

/**
 * @member {Boolean} isPushEnabled
 */
SendBirdChannelResponse.prototype['isPushEnabled'] = undefined;

/**
 * @member {Boolean} isSuper
 */
SendBirdChannelResponse.prototype['isSuper'] = undefined;

/**
 * @member {Number} joinedAt
 */
SendBirdChannelResponse.prototype['joinedAt'] = undefined;

/**
 * @member {Number} joinedMemberCount
 */
SendBirdChannelResponse.prototype['joinedMemberCount'] = undefined;

/**
 * @member {module:model/SendBirdMessageResponse} lastMessage
 */
SendBirdChannelResponse.prototype['lastMessage'] = undefined;

/**
 * @member {Number} memberCount
 */
SendBirdChannelResponse.prototype['memberCount'] = undefined;

/**
 * @member {Array.<module:model/SendBirdMember>} members
 */
SendBirdChannelResponse.prototype['members'] = undefined;

/**
 * @member {Number} messageOffsetTimestamp
 */
SendBirdChannelResponse.prototype['messageOffsetTimestamp'] = undefined;

/**
 * @member {Number} messageSurvivalSeconds
 */
SendBirdChannelResponse.prototype['messageSurvivalSeconds'] = undefined;

/**
 * @member {String} myCountPreference
 */
SendBirdChannelResponse.prototype['myCountPreference'] = undefined;

/**
 * @member {Number} myLastRead
 */
SendBirdChannelResponse.prototype['myLastRead'] = undefined;

/**
 * @member {module:model/SendBirdChannelResponse.MyMemberStateEnum} myMemberState
 */
SendBirdChannelResponse.prototype['myMemberState'] = undefined;

/**
 * @member {module:model/SendBirdChannelResponse.MyMutedStateEnum} myMutedState
 */
SendBirdChannelResponse.prototype['myMutedState'] = undefined;

/**
 * @member {module:model/SendBirdChannelResponse.MyPushTriggerOptionEnum} myPushTriggerOption
 */
SendBirdChannelResponse.prototype['myPushTriggerOption'] = undefined;

/**
 * @member {module:model/SendBirdChannelResponse.MyRoleEnum} myRole
 */
SendBirdChannelResponse.prototype['myRole'] = undefined;

/**
 * @member {String} name
 */
SendBirdChannelResponse.prototype['name'] = undefined;

/**
 * @member {Number} unreadMentionCount
 */
SendBirdChannelResponse.prototype['unreadMentionCount'] = undefined;

/**
 * @member {Number} unreadMessageCount
 */
SendBirdChannelResponse.prototype['unreadMessageCount'] = undefined;

/**
 * @member {String} url
 */
SendBirdChannelResponse.prototype['url'] = undefined;

/**
 * @member {Array.<module:model/SendBirdUser>} operators
 */
SendBirdChannelResponse.prototype['operators'] = undefined;

/**
 * @member {Number} participantCount
 */
SendBirdChannelResponse.prototype['participantCount'] = undefined;


// Implement SendBirdGroupChannel interface:
/**
 * @member {String} coverUrl
 */
SendBirdGroupChannel.prototype['coverUrl'] = undefined;
/**
 * @member {Number} createdAt
 */
SendBirdGroupChannel.prototype['createdAt'] = undefined;
/**
 * @member {module:model/SendBirdUser} creator
 */
SendBirdGroupChannel.prototype['creator'] = undefined;
/**
 * @member {String} customType
 */
SendBirdGroupChannel.prototype['customType'] = undefined;
/**
 * @member {String} data
 */
SendBirdGroupChannel.prototype['data'] = undefined;
/**
 * @member {module:model/SendBirdGroupChannel.HiddenStateEnum} hiddenState
 */
SendBirdGroupChannel.prototype['hiddenState'] = undefined;
/**
 * @member {Number} invitedAt
 */
SendBirdGroupChannel.prototype['invitedAt'] = undefined;
/**
 * @member {module:model/SendBirdUser} inviter
 */
SendBirdGroupChannel.prototype['inviter'] = undefined;
/**
 * @member {Boolean} isAccessCodeRequired
 */
SendBirdGroupChannel.prototype['isAccessCodeRequired'] = undefined;
/**
 * @member {Boolean} isBroadcast
 */
SendBirdGroupChannel.prototype['isBroadcast'] = undefined;
/**
 * @member {Boolean} isDiscoverable
 */
SendBirdGroupChannel.prototype['isDiscoverable'] = undefined;
/**
 * @member {Boolean} isDistinct
 */
SendBirdGroupChannel.prototype['isDistinct'] = undefined;
/**
 * @member {Boolean} isEphemeral
 */
SendBirdGroupChannel.prototype['isEphemeral'] = undefined;
/**
 * @member {Boolean} isFrozen
 */
SendBirdGroupChannel.prototype['isFrozen'] = undefined;
/**
 * @member {Boolean} isHidden
 */
SendBirdGroupChannel.prototype['isHidden'] = undefined;
/**
 * @member {Boolean} isPublic
 */
SendBirdGroupChannel.prototype['isPublic'] = undefined;
/**
 * @member {Boolean} isPushEnabled
 */
SendBirdGroupChannel.prototype['isPushEnabled'] = undefined;
/**
 * @member {Boolean} isSuper
 */
SendBirdGroupChannel.prototype['isSuper'] = undefined;
/**
 * @member {Number} joinedAt
 */
SendBirdGroupChannel.prototype['joinedAt'] = undefined;
/**
 * @member {Number} joinedMemberCount
 */
SendBirdGroupChannel.prototype['joinedMemberCount'] = undefined;
/**
 * @member {module:model/SendBirdMessageResponse} lastMessage
 */
SendBirdGroupChannel.prototype['lastMessage'] = undefined;
/**
 * @member {Number} memberCount
 */
SendBirdGroupChannel.prototype['memberCount'] = undefined;
/**
 * @member {Array.<module:model/SendBirdMember>} members
 */
SendBirdGroupChannel.prototype['members'] = undefined;
/**
 * @member {Number} messageOffsetTimestamp
 */
SendBirdGroupChannel.prototype['messageOffsetTimestamp'] = undefined;
/**
 * @member {Number} messageSurvivalSeconds
 */
SendBirdGroupChannel.prototype['messageSurvivalSeconds'] = undefined;
/**
 * @member {String} myCountPreference
 */
SendBirdGroupChannel.prototype['myCountPreference'] = undefined;
/**
 * @member {Number} myLastRead
 */
SendBirdGroupChannel.prototype['myLastRead'] = undefined;
/**
 * @member {module:model/SendBirdGroupChannel.MyMemberStateEnum} myMemberState
 */
SendBirdGroupChannel.prototype['myMemberState'] = undefined;
/**
 * @member {module:model/SendBirdGroupChannel.MyMutedStateEnum} myMutedState
 */
SendBirdGroupChannel.prototype['myMutedState'] = undefined;
/**
 * @member {module:model/SendBirdGroupChannel.MyPushTriggerOptionEnum} myPushTriggerOption
 */
SendBirdGroupChannel.prototype['myPushTriggerOption'] = undefined;
/**
 * @member {module:model/SendBirdGroupChannel.MyRoleEnum} myRole
 */
SendBirdGroupChannel.prototype['myRole'] = undefined;
/**
 * @member {String} name
 */
SendBirdGroupChannel.prototype['name'] = undefined;
/**
 * @member {Number} unreadMentionCount
 */
SendBirdGroupChannel.prototype['unreadMentionCount'] = undefined;
/**
 * @member {Number} unreadMessageCount
 */
SendBirdGroupChannel.prototype['unreadMessageCount'] = undefined;
/**
 * @member {String} url
 */
SendBirdGroupChannel.prototype['url'] = undefined;
// Implement SendBirdOpenChannel interface:
/**
 * @member {String} coverUrl
 */
SendBirdOpenChannel.prototype['coverUrl'] = undefined;
/**
 * @member {Number} createdAt
 */
SendBirdOpenChannel.prototype['createdAt'] = undefined;
/**
 * @member {module:model/SendBirdUser} creator
 */
SendBirdOpenChannel.prototype['creator'] = undefined;
/**
 * @member {String} customType
 */
SendBirdOpenChannel.prototype['customType'] = undefined;
/**
 * @member {String} data
 */
SendBirdOpenChannel.prototype['data'] = undefined;
/**
 * @member {Boolean} isEphemeral
 */
SendBirdOpenChannel.prototype['isEphemeral'] = undefined;
/**
 * @member {Boolean} isFrozen
 */
SendBirdOpenChannel.prototype['isFrozen'] = undefined;
/**
 * @member {String} name
 */
SendBirdOpenChannel.prototype['name'] = undefined;
/**
 * @member {Array.<module:model/SendBirdUser>} operators
 */
SendBirdOpenChannel.prototype['operators'] = undefined;
/**
 * @member {Number} participantCount
 */
SendBirdOpenChannel.prototype['participantCount'] = undefined;
/**
 * @member {String} url
 */
SendBirdOpenChannel.prototype['url'] = undefined;



/**
 * Allowed values for the <code>hiddenState</code> property.
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
 * Allowed values for the <code>myMemberState</code> property.
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
 * Allowed values for the <code>myMutedState</code> property.
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
 * Allowed values for the <code>myPushTriggerOption</code> property.
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
 * Allowed values for the <code>myRole</code> property.
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

