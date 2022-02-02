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
 * The InlineResponse20046 model module.
 * @module model/InlineResponse20046
 * @version 1.0.0
 */
class InlineResponse20046 {
    /**
     * Constructs a new <code>InlineResponse20046</code>.
     * @alias module:model/InlineResponse20046
     */
    constructor() { 
        
        InlineResponse20046.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse20046</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20046} obj Optional instance to populate.
     * @return {module:model/InlineResponse20046} The populated <code>InlineResponse20046</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20046();

            if (data.hasOwnProperty('unique_id')) {
                obj['unique_id'] = ApiClient.convertToType(data['unique_id'], 'String');
            }
            if (data.hasOwnProperty('announcement_group')) {
                obj['announcement_group'] = ApiClient.convertToType(data['announcement_group'], 'String');
            }
            if (data.hasOwnProperty('open_counts')) {
                obj['open_counts'] = ApiClient.convertToType(data['open_counts'], ['Number']);
            }
            if (data.hasOwnProperty('open_rates')) {
                obj['open_rates'] = ApiClient.convertToType(data['open_rates'], ['Number']);
            }
            if (data.hasOwnProperty('cumulative_open_counts')) {
                obj['cumulative_open_counts'] = ApiClient.convertToType(data['cumulative_open_counts'], ['Number']);
            }
            if (data.hasOwnProperty('cumulative_open_rates')) {
                obj['cumulative_open_rates'] = ApiClient.convertToType(data['cumulative_open_rates'], ['Number']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} unique_id
 */
InlineResponse20046.prototype['unique_id'] = undefined;

/**
 * @member {String} announcement_group
 */
InlineResponse20046.prototype['announcement_group'] = undefined;

/**
 * @member {Array.<Number>} open_counts
 */
InlineResponse20046.prototype['open_counts'] = undefined;

/**
 * @member {Array.<Number>} open_rates
 */
InlineResponse20046.prototype['open_rates'] = undefined;

/**
 * @member {Array.<Number>} cumulative_open_counts
 */
InlineResponse20046.prototype['cumulative_open_counts'] = undefined;

/**
 * @member {Array.<Number>} cumulative_open_rates
 */
InlineResponse20046.prototype['cumulative_open_rates'] = undefined;






export default InlineResponse20046;

