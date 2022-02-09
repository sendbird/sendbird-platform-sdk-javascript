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
import ListDataExportsByMessageChannelOrUserResponseExportedData from './ListDataExportsByMessageChannelOrUserResponseExportedData';

/**
 * The ListDataExportsByMessageChannelOrUserResponse model module.
 * @module model/ListDataExportsByMessageChannelOrUserResponse
 * @version 1.0.0
 */
class ListDataExportsByMessageChannelOrUserResponse {
    /**
     * Constructs a new <code>ListDataExportsByMessageChannelOrUserResponse</code>.
     * @alias module:model/ListDataExportsByMessageChannelOrUserResponse
     */
    constructor() { 
        
        ListDataExportsByMessageChannelOrUserResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ListDataExportsByMessageChannelOrUserResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListDataExportsByMessageChannelOrUserResponse} obj Optional instance to populate.
     * @return {module:model/ListDataExportsByMessageChannelOrUserResponse} The populated <code>ListDataExportsByMessageChannelOrUserResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListDataExportsByMessageChannelOrUserResponse();

            if (data.hasOwnProperty('exported_data')) {
                obj['exported_data'] = ApiClient.convertToType(data['exported_data'], [ListDataExportsByMessageChannelOrUserResponseExportedData]);
            }
            if (data.hasOwnProperty('next')) {
                obj['next'] = ApiClient.convertToType(data['next'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/ListDataExportsByMessageChannelOrUserResponseExportedData>} exported_data
 */
ListDataExportsByMessageChannelOrUserResponse.prototype['exported_data'] = undefined;

/**
 * @member {String} next
 */
ListDataExportsByMessageChannelOrUserResponse.prototype['next'] = undefined;






export default ListDataExportsByMessageChannelOrUserResponse;

