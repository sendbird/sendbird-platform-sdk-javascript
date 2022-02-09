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
 * The ViewNumberOfPeakConnectionsResponsePeakConnections model module.
 * @module model/ViewNumberOfPeakConnectionsResponsePeakConnections
 * @version 1.0.0
 */
class ViewNumberOfPeakConnectionsResponsePeakConnections {
    /**
     * Constructs a new <code>ViewNumberOfPeakConnectionsResponsePeakConnections</code>.
     * @alias module:model/ViewNumberOfPeakConnectionsResponsePeakConnections
     */
    constructor() { 
        
        ViewNumberOfPeakConnectionsResponsePeakConnections.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ViewNumberOfPeakConnectionsResponsePeakConnections</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ViewNumberOfPeakConnectionsResponsePeakConnections} obj Optional instance to populate.
     * @return {module:model/ViewNumberOfPeakConnectionsResponsePeakConnections} The populated <code>ViewNumberOfPeakConnectionsResponsePeakConnections</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ViewNumberOfPeakConnectionsResponsePeakConnections();

            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'String');
            }
            if (data.hasOwnProperty('peak_connections')) {
                obj['peak_connections'] = ApiClient.convertToType(data['peak_connections'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} date
 */
ViewNumberOfPeakConnectionsResponsePeakConnections.prototype['date'] = undefined;

/**
 * @member {Number} peak_connections
 */
ViewNumberOfPeakConnectionsResponsePeakConnections.prototype['peak_connections'] = undefined;






export default ViewNumberOfPeakConnectionsResponsePeakConnections;

