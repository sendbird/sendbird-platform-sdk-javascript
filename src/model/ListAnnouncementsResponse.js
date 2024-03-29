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
import ListAnnouncementsResponseAnnouncementsInner from './ListAnnouncementsResponseAnnouncementsInner';

/**
 * The ListAnnouncementsResponse model module.
 * @module model/ListAnnouncementsResponse
 * @version 0.0.16
 */
class ListAnnouncementsResponse {
    /**
     * Constructs a new <code>ListAnnouncementsResponse</code>.
     * @alias module:model/ListAnnouncementsResponse
     */
    constructor() { 
        
        ListAnnouncementsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ListAnnouncementsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListAnnouncementsResponse} obj Optional instance to populate.
     * @return {module:model/ListAnnouncementsResponse} The populated <code>ListAnnouncementsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListAnnouncementsResponse();

            if (data.hasOwnProperty('announcements')) {
                obj['announcements'] = ApiClient.convertToType(data['announcements'], [ListAnnouncementsResponseAnnouncementsInner]);
            }
            if (data.hasOwnProperty('next')) {
                obj['next'] = ApiClient.convertToType(data['next'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/ListAnnouncementsResponseAnnouncementsInner>} announcements
 */
ListAnnouncementsResponse.prototype['announcements'] = undefined;

/**
 * @member {String} next
 */
ListAnnouncementsResponse.prototype['next'] = undefined;






export default ListAnnouncementsResponse;

