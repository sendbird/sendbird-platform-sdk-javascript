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

/**
 * The ListDataExportsByMessageChannelOrUserResponseFile model module.
 * @module model/ListDataExportsByMessageChannelOrUserResponseFile
 * @version 1.0.0
 */
class ListDataExportsByMessageChannelOrUserResponseFile {
    /**
     * Constructs a new <code>ListDataExportsByMessageChannelOrUserResponseFile</code>.
     * @alias module:model/ListDataExportsByMessageChannelOrUserResponseFile
     */
    constructor() { 
        
        ListDataExportsByMessageChannelOrUserResponseFile.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ListDataExportsByMessageChannelOrUserResponseFile</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListDataExportsByMessageChannelOrUserResponseFile} obj Optional instance to populate.
     * @return {module:model/ListDataExportsByMessageChannelOrUserResponseFile} The populated <code>ListDataExportsByMessageChannelOrUserResponseFile</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListDataExportsByMessageChannelOrUserResponseFile();

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
ListDataExportsByMessageChannelOrUserResponseFile.prototype['url'] = undefined;

/**
 * @member {Number} expires_at
 */
ListDataExportsByMessageChannelOrUserResponseFile.prototype['expires_at'] = undefined;






export default ListDataExportsByMessageChannelOrUserResponseFile;

