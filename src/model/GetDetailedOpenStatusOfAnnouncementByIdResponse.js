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
import GetDetailedOpenStatusOfAnnouncementByIdResponseOpenStatusInner from './GetDetailedOpenStatusOfAnnouncementByIdResponseOpenStatusInner';

/**
 * The GetDetailedOpenStatusOfAnnouncementByIdResponse model module.
 * @module model/GetDetailedOpenStatusOfAnnouncementByIdResponse
 * @version 0.0.14
 */
class GetDetailedOpenStatusOfAnnouncementByIdResponse {
    /**
     * Constructs a new <code>GetDetailedOpenStatusOfAnnouncementByIdResponse</code>.
     * @alias module:model/GetDetailedOpenStatusOfAnnouncementByIdResponse
     */
    constructor() { 
        
        GetDetailedOpenStatusOfAnnouncementByIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetDetailedOpenStatusOfAnnouncementByIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetDetailedOpenStatusOfAnnouncementByIdResponse} obj Optional instance to populate.
     * @return {module:model/GetDetailedOpenStatusOfAnnouncementByIdResponse} The populated <code>GetDetailedOpenStatusOfAnnouncementByIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetDetailedOpenStatusOfAnnouncementByIdResponse();

            if (data.hasOwnProperty('open_status')) {
                obj['open_status'] = ApiClient.convertToType(data['open_status'], [GetDetailedOpenStatusOfAnnouncementByIdResponseOpenStatusInner]);
            }
            if (data.hasOwnProperty('next')) {
                obj['next'] = ApiClient.convertToType(data['next'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/GetDetailedOpenStatusOfAnnouncementByIdResponseOpenStatusInner>} open_status
 */
GetDetailedOpenStatusOfAnnouncementByIdResponse.prototype['open_status'] = undefined;

/**
 * @member {String} next
 */
GetDetailedOpenStatusOfAnnouncementByIdResponse.prototype['next'] = undefined;






export default GetDetailedOpenStatusOfAnnouncementByIdResponse;

