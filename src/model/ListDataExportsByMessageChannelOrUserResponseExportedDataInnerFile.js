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
 * The ListDataExportsByMessageChannelOrUserResponseExportedDataInnerFile model module.
 * @module model/ListDataExportsByMessageChannelOrUserResponseExportedDataInnerFile
 * @version 0.0.13
 */
class ListDataExportsByMessageChannelOrUserResponseExportedDataInnerFile {
    /**
     * Constructs a new <code>ListDataExportsByMessageChannelOrUserResponseExportedDataInnerFile</code>.
     * @alias module:model/ListDataExportsByMessageChannelOrUserResponseExportedDataInnerFile
     */
    constructor() { 
        
        ListDataExportsByMessageChannelOrUserResponseExportedDataInnerFile.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ListDataExportsByMessageChannelOrUserResponseExportedDataInnerFile</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListDataExportsByMessageChannelOrUserResponseExportedDataInnerFile} obj Optional instance to populate.
     * @return {module:model/ListDataExportsByMessageChannelOrUserResponseExportedDataInnerFile} The populated <code>ListDataExportsByMessageChannelOrUserResponseExportedDataInnerFile</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListDataExportsByMessageChannelOrUserResponseExportedDataInnerFile();

            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('expires_at')) {
                obj['expires_at'] = ApiClient.convertToType(data['expires_at'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} url
 */
ListDataExportsByMessageChannelOrUserResponseExportedDataInnerFile.prototype['url'] = undefined;

/**
 * @member {Number} expires_at
 */
ListDataExportsByMessageChannelOrUserResponseExportedDataInnerFile.prototype['expires_at'] = undefined;






export default ListDataExportsByMessageChannelOrUserResponseExportedDataInnerFile;

