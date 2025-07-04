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

/**
 * The UpdateAMessageRequest model module.
 * @module model/UpdateAMessageRequest
 * @version 2.0.0
 */
class UpdateAMessageRequest {
    /**
     * Constructs a new <code>UpdateAMessageRequest</code>.
     * @alias module:model/UpdateAMessageRequest
     * @param messageType {module:model/UpdateAMessageRequest.MessageTypeEnum} 
     */
    constructor(messageType) { 
        
        UpdateAMessageRequest.initialize(this, messageType);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, messageType) { 
        obj['message_type'] = messageType;
    }

    /**
     * Constructs a <code>UpdateAMessageRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateAMessageRequest} obj Optional instance to populate.
     * @return {module:model/UpdateAMessageRequest} The populated <code>UpdateAMessageRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateAMessageRequest();

            if (data.hasOwnProperty('custom_type')) {
                obj['custom_type'] = ApiClient.convertToType(data['custom_type'], 'String');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], 'String');
            }
            if (data.hasOwnProperty('mention_type')) {
                obj['mention_type'] = ApiClient.convertToType(data['mention_type'], 'String');
            }
            if (data.hasOwnProperty('mentioned_user_ids')) {
                obj['mentioned_user_ids'] = ApiClient.convertToType(data['mentioned_user_ids'], ['String']);
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('message_type')) {
                obj['message_type'] = ApiClient.convertToType(data['message_type'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} custom_type
 */
UpdateAMessageRequest.prototype['custom_type'] = undefined;

/**
 * @member {String} data
 */
UpdateAMessageRequest.prototype['data'] = undefined;

/**
 * @member {String} mention_type
 */
UpdateAMessageRequest.prototype['mention_type'] = undefined;

/**
 * @member {Array.<String>} mentioned_user_ids
 */
UpdateAMessageRequest.prototype['mentioned_user_ids'] = undefined;

/**
 * @member {String} message
 */
UpdateAMessageRequest.prototype['message'] = undefined;

/**
 * @member {String} url
 */
UpdateAMessageRequest.prototype['url'] = undefined;

/**
 * @member {module:model/UpdateAMessageRequest.MessageTypeEnum} message_type
 */
UpdateAMessageRequest.prototype['message_type'] = undefined;





/**
 * Allowed values for the <code>message_type</code> property.
 * @enum {String}
 * @readonly
 */
UpdateAMessageRequest['MessageTypeEnum'] = {

    /**
     * value: "MESG"
     * @const
     */
    "MESG": "MESG",

    /**
     * value: "ADMM"
     * @const
     */
    "ADMM": "ADMM",

    /**
     * value: "FILE"
     * @const
     */
    "FILE": "FILE"
};



export default UpdateAMessageRequest;

