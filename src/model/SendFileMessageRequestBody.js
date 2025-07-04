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
import SendbirdFile from './SendbirdFile';
import SendbirdSortedMetaarrayInner from './SendbirdSortedMetaarrayInner';

/**
 * The SendFileMessageRequestBody model module.
 * @module model/SendFileMessageRequestBody
 * @version 2.0.0
 */
class SendFileMessageRequestBody {
    /**
     * Constructs a new <code>SendFileMessageRequestBody</code>.
     * @alias module:model/SendFileMessageRequestBody
     * @param files {module:model/SendbirdFile} 
     * @param messageType {module:model/SendFileMessageRequestBody.MessageTypeEnum} Specifies the type of the message. The value of FILE represents a file message.
     */
    constructor(files, messageType) { 
        
        SendFileMessageRequestBody.initialize(this, files, messageType);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, files, messageType) { 
        obj['files'] = files;
        obj['message_type'] = messageType;
    }

    /**
     * Constructs a <code>SendFileMessageRequestBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SendFileMessageRequestBody} obj Optional instance to populate.
     * @return {module:model/SendFileMessageRequestBody} The populated <code>SendFileMessageRequestBody</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SendFileMessageRequestBody();

            if (data.hasOwnProperty('apns_bundle_id')) {
                obj['apns_bundle_id'] = ApiClient.convertToType(data['apns_bundle_id'], 'String');
            }
            if (data.hasOwnProperty('apple_critical_alert_options')) {
                obj['apple_critical_alert_options'] = ApiClient.convertToType(data['apple_critical_alert_options'], Object);
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Number');
            }
            if (data.hasOwnProperty('custom_type')) {
                obj['custom_type'] = ApiClient.convertToType(data['custom_type'], 'String');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], 'String');
            }
            if (data.hasOwnProperty('dedup_id')) {
                obj['dedup_id'] = ApiClient.convertToType(data['dedup_id'], 'String');
            }
            if (data.hasOwnProperty('files')) {
                obj['files'] = SendbirdFile.constructFromObject(data['files']);
            }
            if (data.hasOwnProperty('is_silent')) {
                obj['is_silent'] = ApiClient.convertToType(data['is_silent'], 'Boolean');
            }
            if (data.hasOwnProperty('mark_as_read')) {
                obj['mark_as_read'] = ApiClient.convertToType(data['mark_as_read'], 'Boolean');
            }
            if (data.hasOwnProperty('mention_type')) {
                obj['mention_type'] = ApiClient.convertToType(data['mention_type'], 'String');
            }
            if (data.hasOwnProperty('mentioned_user_ids')) {
                obj['mentioned_user_ids'] = ApiClient.convertToType(data['mentioned_user_ids'], ['String']);
            }
            if (data.hasOwnProperty('message_type')) {
                obj['message_type'] = ApiClient.convertToType(data['message_type'], 'String');
            }
            if (data.hasOwnProperty('require_auth')) {
                obj['require_auth'] = ApiClient.convertToType(data['require_auth'], 'Boolean');
            }
            if (data.hasOwnProperty('send_push')) {
                obj['send_push'] = ApiClient.convertToType(data['send_push'], 'Boolean');
            }
            if (data.hasOwnProperty('sorted_metaarray')) {
                obj['sorted_metaarray'] = ApiClient.convertToType(data['sorted_metaarray'], [SendbirdSortedMetaarrayInner]);
            }
            if (data.hasOwnProperty('sound')) {
                obj['sound'] = ApiClient.convertToType(data['sound'], 'String');
            }
            if (data.hasOwnProperty('thumbnail1')) {
                obj['thumbnail1'] = ApiClient.convertToType(data['thumbnail1'], 'String');
            }
            if (data.hasOwnProperty('thumbnail2')) {
                obj['thumbnail2'] = ApiClient.convertToType(data['thumbnail2'], 'String');
            }
            if (data.hasOwnProperty('thumbnail3')) {
                obj['thumbnail3'] = ApiClient.convertToType(data['thumbnail3'], 'String');
            }
            if (data.hasOwnProperty('thumbnails')) {
                obj['thumbnails'] = ApiClient.convertToType(data['thumbnails'], ['String']);
            }
            if (data.hasOwnProperty('volume')) {
                obj['volume'] = ApiClient.convertToType(data['volume'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} apns_bundle_id
 */
SendFileMessageRequestBody.prototype['apns_bundle_id'] = undefined;

/**
 * @member {Object} apple_critical_alert_options
 */
SendFileMessageRequestBody.prototype['apple_critical_alert_options'] = undefined;

/**
 * @member {Number} created_at
 */
SendFileMessageRequestBody.prototype['created_at'] = undefined;

/**
 * @member {String} custom_type
 */
SendFileMessageRequestBody.prototype['custom_type'] = undefined;

/**
 * @member {String} data
 */
SendFileMessageRequestBody.prototype['data'] = undefined;

/**
 * @member {String} dedup_id
 */
SendFileMessageRequestBody.prototype['dedup_id'] = undefined;

/**
 * @member {module:model/SendbirdFile} files
 */
SendFileMessageRequestBody.prototype['files'] = undefined;

/**
 * @member {Boolean} is_silent
 */
SendFileMessageRequestBody.prototype['is_silent'] = undefined;

/**
 * @member {Boolean} mark_as_read
 */
SendFileMessageRequestBody.prototype['mark_as_read'] = undefined;

/**
 * @member {module:model/SendFileMessageRequestBody.MentionTypeEnum} mention_type
 */
SendFileMessageRequestBody.prototype['mention_type'] = undefined;

/**
 * @member {Array.<String>} mentioned_user_ids
 */
SendFileMessageRequestBody.prototype['mentioned_user_ids'] = undefined;

/**
 * Specifies the type of the message. The value of FILE represents a file message.
 * @member {module:model/SendFileMessageRequestBody.MessageTypeEnum} message_type
 */
SendFileMessageRequestBody.prototype['message_type'] = undefined;

/**
 * Determines whether to require an authentication key to verify if the file is being properly accessed. Only the user who uploaded the file or users who are in the channel where the file was uploaded should have access. The authentication key managed internally by the Sendbird system is generated every time a user logs in to the Sendbird server and is valid for three days starting from the last login. If set to false, Sendbird tries to access a file without any key. To access encrypted files, such as the files in the Sendbird server which are by default encrypted, the property must be set to true. (Default: false) The require_auth parameter only works if the file or URL is managed by Sendbird, which means that when you upload files using multipart format or provide URLs that point to the files hosted on the Sendbird server. However, if the file is hosted on a server or service that is not managed by Sendbird, access control and authentication for the file should be handled by the respective server or service hosting the file.
 * @member {Boolean} require_auth
 */
SendFileMessageRequestBody.prototype['require_auth'] = undefined;

/**
 * @member {Boolean} send_push
 */
SendFileMessageRequestBody.prototype['send_push'] = undefined;

/**
 * @member {Array.<module:model/SendbirdSortedMetaarrayInner>} sorted_metaarray
 */
SendFileMessageRequestBody.prototype['sorted_metaarray'] = undefined;

/**
 * @member {String} sound
 */
SendFileMessageRequestBody.prototype['sound'] = undefined;

/**
 * @member {String} thumbnail1
 */
SendFileMessageRequestBody.prototype['thumbnail1'] = undefined;

/**
 * @member {String} thumbnail2
 */
SendFileMessageRequestBody.prototype['thumbnail2'] = undefined;

/**
 * @member {String} thumbnail3
 */
SendFileMessageRequestBody.prototype['thumbnail3'] = undefined;

/**
 * @member {Array.<String>} thumbnails
 */
SendFileMessageRequestBody.prototype['thumbnails'] = undefined;

/**
 * @member {Number} volume
 */
SendFileMessageRequestBody.prototype['volume'] = undefined;





/**
 * Allowed values for the <code>mention_type</code> property.
 * @enum {String}
 * @readonly
 */
SendFileMessageRequestBody['MentionTypeEnum'] = {

    /**
     * value: "users"
     * @const
     */
    "users": "users",

    /**
     * value: "channel"
     * @const
     */
    "channel": "channel"
};


/**
 * Allowed values for the <code>message_type</code> property.
 * @enum {String}
 * @readonly
 */
SendFileMessageRequestBody['MessageTypeEnum'] = {

    /**
     * value: "FILE"
     * @const
     */
    "FILE": "FILE"
};



export default SendFileMessageRequestBody;

