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
import InlineResponse20048OgTag from './InlineResponse20048OgTag';
import InlineResponse20048SortedMetaarray from './InlineResponse20048SortedMetaarray';
import InlineResponse20048User from './InlineResponse20048User';

/**
 * The InlineResponse20048Messages model module.
 * @module model/InlineResponse20048Messages
 * @version 1.0.0
 */
class InlineResponse20048Messages {
    /**
     * Constructs a new <code>InlineResponse20048Messages</code>.
     * @alias module:model/InlineResponse20048Messages
     */
    constructor() { 
        
        InlineResponse20048Messages.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse20048Messages</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20048Messages} obj Optional instance to populate.
     * @return {module:model/InlineResponse20048Messages} The populated <code>InlineResponse20048Messages</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20048Messages();

            if (data.hasOwnProperty('message_id')) {
                obj['message_id'] = ApiClient.convertToType(data['message_id'], 'Number');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('custom_type')) {
                obj['custom_type'] = ApiClient.convertToType(data['custom_type'], 'String');
            }
            if (data.hasOwnProperty('channel_url')) {
                obj['channel_url'] = ApiClient.convertToType(data['channel_url'], 'String');
            }
            if (data.hasOwnProperty('user')) {
                obj['user'] = InlineResponse20048User.constructFromObject(data['user']);
            }
            if (data.hasOwnProperty('mention_type')) {
                obj['mention_type'] = ApiClient.convertToType(data['mention_type'], 'String');
            }
            if (data.hasOwnProperty('mentioned_users')) {
                obj['mentioned_users'] = ApiClient.convertToType(data['mentioned_users'], [InlineResponse20048User]);
            }
            if (data.hasOwnProperty('is_removed')) {
                obj['is_removed'] = ApiClient.convertToType(data['is_removed'], 'Boolean');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('translations')) {
                obj['translations'] = ApiClient.convertToType(data['translations'], Object);
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], 'String');
            }
            if (data.hasOwnProperty('sorted_metaarray')) {
                obj['sorted_metaarray'] = ApiClient.convertToType(data['sorted_metaarray'], [InlineResponse20048SortedMetaarray]);
            }
            if (data.hasOwnProperty('og_tag')) {
                obj['og_tag'] = InlineResponse20048OgTag.constructFromObject(data['og_tag']);
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Number');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Number');
            }
            if (data.hasOwnProperty('file')) {
                obj['file'] = ApiClient.convertToType(data['file'], Object);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} message_id
 */
InlineResponse20048Messages.prototype['message_id'] = undefined;

/**
 * @member {String} type
 */
InlineResponse20048Messages.prototype['type'] = undefined;

/**
 * @member {String} custom_type
 */
InlineResponse20048Messages.prototype['custom_type'] = undefined;

/**
 * @member {String} channel_url
 */
InlineResponse20048Messages.prototype['channel_url'] = undefined;

/**
 * @member {module:model/InlineResponse20048User} user
 */
InlineResponse20048Messages.prototype['user'] = undefined;

/**
 * @member {String} mention_type
 */
InlineResponse20048Messages.prototype['mention_type'] = undefined;

/**
 * @member {Array.<module:model/InlineResponse20048User>} mentioned_users
 */
InlineResponse20048Messages.prototype['mentioned_users'] = undefined;

/**
 * @member {Boolean} is_removed
 */
InlineResponse20048Messages.prototype['is_removed'] = undefined;

/**
 * @member {String} message
 */
InlineResponse20048Messages.prototype['message'] = undefined;

/**
 * @member {Object} translations
 */
InlineResponse20048Messages.prototype['translations'] = undefined;

/**
 * @member {String} data
 */
InlineResponse20048Messages.prototype['data'] = undefined;

/**
 * @member {Array.<module:model/InlineResponse20048SortedMetaarray>} sorted_metaarray
 */
InlineResponse20048Messages.prototype['sorted_metaarray'] = undefined;

/**
 * @member {module:model/InlineResponse20048OgTag} og_tag
 */
InlineResponse20048Messages.prototype['og_tag'] = undefined;

/**
 * @member {Number} created_at
 */
InlineResponse20048Messages.prototype['created_at'] = undefined;

/**
 * @member {Number} updated_at
 */
InlineResponse20048Messages.prototype['updated_at'] = undefined;

/**
 * @member {Object} file
 */
InlineResponse20048Messages.prototype['file'] = undefined;






export default InlineResponse20048Messages;

