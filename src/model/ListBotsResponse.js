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
import ListBotsResponseBotsInner from './ListBotsResponseBotsInner';

/**
 * The ListBotsResponse model module.
 * @module model/ListBotsResponse
 * @version 2.0.0
 */
class ListBotsResponse {
    /**
     * Constructs a new <code>ListBotsResponse</code>.
     * @alias module:model/ListBotsResponse
     */
    constructor() { 
        
        ListBotsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ListBotsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListBotsResponse} obj Optional instance to populate.
     * @return {module:model/ListBotsResponse} The populated <code>ListBotsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListBotsResponse();

            if (data.hasOwnProperty('bots')) {
                obj['bots'] = ApiClient.convertToType(data['bots'], [ListBotsResponseBotsInner]);
            }
            if (data.hasOwnProperty('next')) {
                obj['next'] = ApiClient.convertToType(data['next'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/ListBotsResponseBotsInner>} bots
 */
ListBotsResponse.prototype['bots'] = undefined;

/**
 * @member {String} next
 */
ListBotsResponse.prototype['next'] = undefined;






export default ListBotsResponse;

