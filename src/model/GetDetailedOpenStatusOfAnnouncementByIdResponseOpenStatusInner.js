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

/**
 * The GetDetailedOpenStatusOfAnnouncementByIdResponseOpenStatusInner model module.
 * @module model/GetDetailedOpenStatusOfAnnouncementByIdResponseOpenStatusInner
 * @version 0.0.14
 */
class GetDetailedOpenStatusOfAnnouncementByIdResponseOpenStatusInner {
    /**
     * Constructs a new <code>GetDetailedOpenStatusOfAnnouncementByIdResponseOpenStatusInner</code>.
     * @alias module:model/GetDetailedOpenStatusOfAnnouncementByIdResponseOpenStatusInner
     */
    constructor() { 
        
        GetDetailedOpenStatusOfAnnouncementByIdResponseOpenStatusInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetDetailedOpenStatusOfAnnouncementByIdResponseOpenStatusInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetDetailedOpenStatusOfAnnouncementByIdResponseOpenStatusInner} obj Optional instance to populate.
     * @return {module:model/GetDetailedOpenStatusOfAnnouncementByIdResponseOpenStatusInner} The populated <code>GetDetailedOpenStatusOfAnnouncementByIdResponseOpenStatusInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetDetailedOpenStatusOfAnnouncementByIdResponseOpenStatusInner();

            if (data.hasOwnProperty('user_id')) {
                obj['user_id'] = ApiClient.convertToType(data['user_id'], 'String');
            }
            if (data.hasOwnProperty('channel_url')) {
                obj['channel_url'] = ApiClient.convertToType(data['channel_url'], 'String');
            }
            if (data.hasOwnProperty('has_opened')) {
                obj['has_opened'] = ApiClient.convertToType(data['has_opened'], 'Boolean');
            }
            if (data.hasOwnProperty('sent_at')) {
                obj['sent_at'] = ApiClient.convertToType(data['sent_at'], 'Number');
            }
            if (data.hasOwnProperty('open_at')) {
                obj['open_at'] = ApiClient.convertToType(data['open_at'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} user_id
 */
GetDetailedOpenStatusOfAnnouncementByIdResponseOpenStatusInner.prototype['user_id'] = undefined;

/**
 * @member {String} channel_url
 */
GetDetailedOpenStatusOfAnnouncementByIdResponseOpenStatusInner.prototype['channel_url'] = undefined;

/**
 * @member {Boolean} has_opened
 */
GetDetailedOpenStatusOfAnnouncementByIdResponseOpenStatusInner.prototype['has_opened'] = undefined;

/**
 * @member {Number} sent_at
 */
GetDetailedOpenStatusOfAnnouncementByIdResponseOpenStatusInner.prototype['sent_at'] = undefined;

/**
 * @member {Number} open_at
 */
GetDetailedOpenStatusOfAnnouncementByIdResponseOpenStatusInner.prototype['open_at'] = undefined;






export default GetDetailedOpenStatusOfAnnouncementByIdResponseOpenStatusInner;

