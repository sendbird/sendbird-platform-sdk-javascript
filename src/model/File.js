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
 * The File model module.
 * @module model/File
 * @version 1.0.3
 */
class File {
    /**
     * Constructs a new <code>File</code>.
     * @alias module:model/File
     */
    constructor() { 
        
        File.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>File</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/File} obj Optional instance to populate.
     * @return {module:model/File} The populated <code>File</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new File();

            if (data.hasOwnProperty('last_modified')) {
                obj['last_modified'] = ApiClient.convertToType(data['last_modified'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'Number');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('webkit_relative_path')) {
                obj['webkit_relative_path'] = ApiClient.convertToType(data['webkit_relative_path'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} last_modified
 */
File.prototype['last_modified'] = undefined;

/**
 * @member {String} name
 */
File.prototype['name'] = undefined;

/**
 * @member {Number} size
 */
File.prototype['size'] = undefined;

/**
 * @member {String} type
 */
File.prototype['type'] = undefined;

/**
 * @member {String} webkit_relative_path
 */
File.prototype['webkit_relative_path'] = undefined;






export default File;

