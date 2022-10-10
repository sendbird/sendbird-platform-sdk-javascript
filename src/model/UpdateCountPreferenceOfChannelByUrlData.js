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
 * The UpdateCountPreferenceOfChannelByUrlData model module.
 * @module model/UpdateCountPreferenceOfChannelByUrlData
 * @version 0.0.13
 */
class UpdateCountPreferenceOfChannelByUrlData {
    /**
     * Constructs a new <code>UpdateCountPreferenceOfChannelByUrlData</code>.
     * @alias module:model/UpdateCountPreferenceOfChannelByUrlData
     * @param countPreference {String} Determines whether to only count the number of unread messages or the number of unread mentioned messages in the specified group channel. Only the one that is chosen to be preferenced will be counted and added to the total number count after the action. A value of off indicates that both read statuses will not be counted, while all indicates that both read statuses will be counted by the system. A value of unread_message_count_only indicates that only the user's unread messages will be counted in the channel while unread_mentioned_count_only indicates that only the user's unread mentioned messages will be counted. (Default: all)
     */
    constructor(countPreference) { 
        
        UpdateCountPreferenceOfChannelByUrlData.initialize(this, countPreference);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, countPreference) { 
        obj['count_preference'] = countPreference;
    }

    /**
     * Constructs a <code>UpdateCountPreferenceOfChannelByUrlData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateCountPreferenceOfChannelByUrlData} obj Optional instance to populate.
     * @return {module:model/UpdateCountPreferenceOfChannelByUrlData} The populated <code>UpdateCountPreferenceOfChannelByUrlData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateCountPreferenceOfChannelByUrlData();

            if (data.hasOwnProperty('count_preference')) {
                obj['count_preference'] = ApiClient.convertToType(data['count_preference'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Determines whether to only count the number of unread messages or the number of unread mentioned messages in the specified group channel. Only the one that is chosen to be preferenced will be counted and added to the total number count after the action. A value of off indicates that both read statuses will not be counted, while all indicates that both read statuses will be counted by the system. A value of unread_message_count_only indicates that only the user's unread messages will be counted in the channel while unread_mentioned_count_only indicates that only the user's unread mentioned messages will be counted. (Default: all)
 * @member {String} count_preference
 */
UpdateCountPreferenceOfChannelByUrlData.prototype['count_preference'] = undefined;






export default UpdateCountPreferenceOfChannelByUrlData;

