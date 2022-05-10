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
import RetrieveListOfSubscribedEventsResponseWebhook from './RetrieveListOfSubscribedEventsResponseWebhook';

/**
 * The RetrieveListOfSubscribedEventsResponse model module.
 * @module model/RetrieveListOfSubscribedEventsResponse
 * @version 1.0.1
 */
class RetrieveListOfSubscribedEventsResponse {
    /**
     * Constructs a new <code>RetrieveListOfSubscribedEventsResponse</code>.
     * @alias module:model/RetrieveListOfSubscribedEventsResponse
     */
    constructor() { 
        
        RetrieveListOfSubscribedEventsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RetrieveListOfSubscribedEventsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RetrieveListOfSubscribedEventsResponse} obj Optional instance to populate.
     * @return {module:model/RetrieveListOfSubscribedEventsResponse} The populated <code>RetrieveListOfSubscribedEventsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RetrieveListOfSubscribedEventsResponse();

            if (data.hasOwnProperty('webhook')) {
                obj['webhook'] = RetrieveListOfSubscribedEventsResponseWebhook.constructFromObject(data['webhook']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/RetrieveListOfSubscribedEventsResponseWebhook} webhook
 */
RetrieveListOfSubscribedEventsResponse.prototype['webhook'] = undefined;






export default RetrieveListOfSubscribedEventsResponse;

