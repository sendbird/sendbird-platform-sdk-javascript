/**
 * Sendbird Platform SDK
 * Sendbird Platform API SDK  https://sendbird.com/docs/chat/v3/platform-api/getting-started/prepare-to-use-api
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
import SendBirdChannelResponse from './SendBirdChannelResponse';

/**
 * The ListBannedChannelsResponseBannedChannelsInner model module.
 * @module model/ListBannedChannelsResponseBannedChannelsInner
 * @version 0.0.14
 */
class ListBannedChannelsResponseBannedChannelsInner {
    /**
     * Constructs a new <code>ListBannedChannelsResponseBannedChannelsInner</code>.
     * @alias module:model/ListBannedChannelsResponseBannedChannelsInner
     */
    constructor() { 
        
        ListBannedChannelsResponseBannedChannelsInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ListBannedChannelsResponseBannedChannelsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListBannedChannelsResponseBannedChannelsInner} obj Optional instance to populate.
     * @return {module:model/ListBannedChannelsResponseBannedChannelsInner} The populated <code>ListBannedChannelsResponseBannedChannelsInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListBannedChannelsResponseBannedChannelsInner();

            if (data.hasOwnProperty('start_at')) {
                obj['start_at'] = ApiClient.convertToType(data['start_at'], 'Number');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('channel')) {
                obj['channel'] = SendBirdChannelResponse.constructFromObject(data['channel']);
            }
            if (data.hasOwnProperty('end_at')) {
                obj['end_at'] = ApiClient.convertToType(data['end_at'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} start_at
 */
ListBannedChannelsResponseBannedChannelsInner.prototype['start_at'] = undefined;

/**
 * @member {String} description
 */
ListBannedChannelsResponseBannedChannelsInner.prototype['description'] = undefined;

/**
 * @member {module:model/SendBirdChannelResponse} channel
 */
ListBannedChannelsResponseBannedChannelsInner.prototype['channel'] = undefined;

/**
 * @member {Number} end_at
 */
ListBannedChannelsResponseBannedChannelsInner.prototype['end_at'] = undefined;






export default ListBannedChannelsResponseBannedChannelsInner;

