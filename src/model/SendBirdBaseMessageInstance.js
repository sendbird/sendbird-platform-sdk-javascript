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
import AnyOfSendBirdAdminMessageSendBirdUserMessageSendBirdFileMessage from './AnyOfSendBirdAdminMessageSendBirdUserMessageSendBirdFileMessage';
import ModelObject from './ModelObject';
import SendBirdAppleCriticalAlertOptions from './SendBirdAppleCriticalAlertOptions';
import SendBirdMessageMetaArray from './SendBirdMessageMetaArray';
import SendBirdOGMetaData from './SendBirdOGMetaData';
import SendBirdReaction from './SendBirdReaction';
import SendBirdThreadInfo from './SendBirdThreadInfo';
import SendBirdUser from './SendBirdUser';

/**
 * The SendBirdBaseMessageInstance model module.
 * @module model/SendBirdBaseMessageInstance
 * @version 1.0.0
 */
class SendBirdBaseMessageInstance {
    /**
     * Constructs a new <code>SendBirdBaseMessageInstance</code>.
     * Message
     * @alias module:model/SendBirdBaseMessageInstance
     */
    constructor() { 
        
        SendBirdBaseMessageInstance.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SendBirdBaseMessageInstance</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SendBirdBaseMessageInstance} obj Optional instance to populate.
     * @return {module:model/SendBirdBaseMessageInstance} The populated <code>SendBirdBaseMessageInstance</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SendBirdBaseMessageInstance();

            if (data.hasOwnProperty('appleCriticalAlertOptions')) {
                obj['appleCriticalAlertOptions'] = SendBirdAppleCriticalAlertOptions.constructFromObject(data['appleCriticalAlertOptions']);
            }
            if (data.hasOwnProperty('channelType')) {
                obj['channelType'] = ApiClient.convertToType(data['channelType'], 'String');
            }
            if (data.hasOwnProperty('channelUrl')) {
                obj['channelUrl'] = ApiClient.convertToType(data['channelUrl'], 'String');
            }
            if (data.hasOwnProperty('createdAt')) {
                obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'Number');
            }
            if (data.hasOwnProperty('customType')) {
                obj['customType'] = ApiClient.convertToType(data['customType'], 'String');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], 'String');
            }
            if (data.hasOwnProperty('isReplyToChannel')) {
                obj['isReplyToChannel'] = ApiClient.convertToType(data['isReplyToChannel'], 'Boolean');
            }
            if (data.hasOwnProperty('mentionType')) {
                obj['mentionType'] = ApiClient.convertToType(data['mentionType'], 'String');
            }
            if (data.hasOwnProperty('mentionedUsers')) {
                obj['mentionedUsers'] = ApiClient.convertToType(data['mentionedUsers'], [SendBirdUser]);
            }
            if (data.hasOwnProperty('messageId')) {
                obj['messageId'] = ApiClient.convertToType(data['messageId'], 'Number');
            }
            if (data.hasOwnProperty('messageType')) {
                obj['messageType'] = ApiClient.convertToType(data['messageType'], 'String');
            }
            if (data.hasOwnProperty('metaArray')) {
                obj['metaArray'] = ModelObject.constructFromObject(data['metaArray']);
            }
            if (data.hasOwnProperty('metaArrays')) {
                obj['metaArrays'] = ApiClient.convertToType(data['metaArrays'], [SendBirdMessageMetaArray]);
            }
            if (data.hasOwnProperty('ogMetaData')) {
                obj['ogMetaData'] = SendBirdOGMetaData.constructFromObject(data['ogMetaData']);
            }
            if (data.hasOwnProperty('parentMessage')) {
                obj['parentMessage'] = ApiClient.convertToType(data['parentMessage'], AnyOfSendBirdAdminMessageSendBirdUserMessageSendBirdFileMessage);
            }
            if (data.hasOwnProperty('parentMessageId')) {
                obj['parentMessageId'] = ApiClient.convertToType(data['parentMessageId'], 'Number');
            }
            if (data.hasOwnProperty('parentMessageText')) {
                obj['parentMessageText'] = ApiClient.convertToType(data['parentMessageText'], 'String');
            }
            if (data.hasOwnProperty('reactions')) {
                obj['reactions'] = ApiClient.convertToType(data['reactions'], [SendBirdReaction]);
            }
            if (data.hasOwnProperty('sendingStatus')) {
                obj['sendingStatus'] = ApiClient.convertToType(data['sendingStatus'], 'String');
            }
            if (data.hasOwnProperty('silent')) {
                obj['silent'] = ApiClient.convertToType(data['silent'], 'Boolean');
            }
            if (data.hasOwnProperty('threadInfo')) {
                obj['threadInfo'] = SendBirdThreadInfo.constructFromObject(data['threadInfo']);
            }
            if (data.hasOwnProperty('updatedAt')) {
                obj['updatedAt'] = ApiClient.convertToType(data['updatedAt'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/SendBirdAppleCriticalAlertOptions} appleCriticalAlertOptions
 */
SendBirdBaseMessageInstance.prototype['appleCriticalAlertOptions'] = undefined;

/**
 * @member {String} channelType
 */
SendBirdBaseMessageInstance.prototype['channelType'] = undefined;

/**
 * @member {String} channelUrl
 */
SendBirdBaseMessageInstance.prototype['channelUrl'] = undefined;

/**
 * @member {Number} createdAt
 */
SendBirdBaseMessageInstance.prototype['createdAt'] = undefined;

/**
 * @member {String} customType
 */
SendBirdBaseMessageInstance.prototype['customType'] = undefined;

/**
 * @member {String} data
 */
SendBirdBaseMessageInstance.prototype['data'] = undefined;

/**
 * @member {Boolean} isReplyToChannel
 */
SendBirdBaseMessageInstance.prototype['isReplyToChannel'] = undefined;

/**
 * @member {String} mentionType
 */
SendBirdBaseMessageInstance.prototype['mentionType'] = undefined;

/**
 * @member {Array.<module:model/SendBirdUser>} mentionedUsers
 */
SendBirdBaseMessageInstance.prototype['mentionedUsers'] = undefined;

/**
 * @member {Number} messageId
 */
SendBirdBaseMessageInstance.prototype['messageId'] = undefined;

/**
 * @member {module:model/SendBirdBaseMessageInstance.MessageTypeEnum} messageType
 */
SendBirdBaseMessageInstance.prototype['messageType'] = undefined;

/**
 * @member {module:model/ModelObject} metaArray
 */
SendBirdBaseMessageInstance.prototype['metaArray'] = undefined;

/**
 * @member {Array.<module:model/SendBirdMessageMetaArray>} metaArrays
 */
SendBirdBaseMessageInstance.prototype['metaArrays'] = undefined;

/**
 * @member {module:model/SendBirdOGMetaData} ogMetaData
 */
SendBirdBaseMessageInstance.prototype['ogMetaData'] = undefined;

/**
 * @member {module:model/AnyOfSendBirdAdminMessageSendBirdUserMessageSendBirdFileMessage} parentMessage
 */
SendBirdBaseMessageInstance.prototype['parentMessage'] = undefined;

/**
 * @member {Number} parentMessageId
 */
SendBirdBaseMessageInstance.prototype['parentMessageId'] = undefined;

/**
 * @member {String} parentMessageText
 */
SendBirdBaseMessageInstance.prototype['parentMessageText'] = undefined;

/**
 * @member {Array.<module:model/SendBirdReaction>} reactions
 */
SendBirdBaseMessageInstance.prototype['reactions'] = undefined;

/**
 * @member {module:model/SendBirdBaseMessageInstance.SendingStatusEnum} sendingStatus
 */
SendBirdBaseMessageInstance.prototype['sendingStatus'] = undefined;

/**
 * @member {Boolean} silent
 */
SendBirdBaseMessageInstance.prototype['silent'] = undefined;

/**
 * @member {module:model/SendBirdThreadInfo} threadInfo
 */
SendBirdBaseMessageInstance.prototype['threadInfo'] = undefined;

/**
 * @member {Number} updatedAt
 */
SendBirdBaseMessageInstance.prototype['updatedAt'] = undefined;





/**
 * Allowed values for the <code>messageType</code> property.
 * @enum {String}
 * @readonly
 */
SendBirdBaseMessageInstance['MessageTypeEnum'] = {

    /**
     * value: "admin"
     * @const
     */
    "admin": "admin",

    /**
     * value: "base"
     * @const
     */
    "base": "base",

    /**
     * value: "file"
     * @const
     */
    "file": "file",

    /**
     * value: "user"
     * @const
     */
    "user": "user"
};


/**
 * Allowed values for the <code>sendingStatus</code> property.
 * @enum {String}
 * @readonly
 */
SendBirdBaseMessageInstance['SendingStatusEnum'] = {

    /**
     * value: "canceled"
     * @const
     */
    "canceled": "canceled",

    /**
     * value: "failed"
     * @const
     */
    "failed": "failed",

    /**
     * value: "none"
     * @const
     */
    "none": "none",

    /**
     * value: "pending"
     * @const
     */
    "pending": "pending",

    /**
     * value: "succeeded"
     * @const
     */
    "succeeded": "succeeded"
};



export default SendBirdBaseMessageInstance;

