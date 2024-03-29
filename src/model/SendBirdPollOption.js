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
import SendBirdUser from './SendBirdUser';

/**
 * The SendBirdPollOption model module.
 * @module model/SendBirdPollOption
 * @version 0.0.16
 */
class SendBirdPollOption {
    /**
     * Constructs a new <code>SendBirdPollOption</code>.
     * @alias module:model/SendBirdPollOption
     */
    constructor() { 
        
        SendBirdPollOption.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SendBirdPollOption</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SendBirdPollOption} obj Optional instance to populate.
     * @return {module:model/SendBirdPollOption} The populated <code>SendBirdPollOption</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SendBirdPollOption();

            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Number');
            }
            if (data.hasOwnProperty('created_by')) {
                obj['created_by'] = ApiClient.convertToType(data['created_by'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('partial_voters')) {
                obj['partial_voters'] = ApiClient.convertToType(data['partial_voters'], [SendBirdUser]);
            }
            if (data.hasOwnProperty('poll_id')) {
                obj['poll_id'] = ApiClient.convertToType(data['poll_id'], 'Number');
            }
            if (data.hasOwnProperty('text')) {
                obj['text'] = ApiClient.convertToType(data['text'], 'String');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Number');
            }
            if (data.hasOwnProperty('vote_count')) {
                obj['vote_count'] = ApiClient.convertToType(data['vote_count'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} created_at
 */
SendBirdPollOption.prototype['created_at'] = undefined;

/**
 * @member {String} created_by
 */
SendBirdPollOption.prototype['created_by'] = undefined;

/**
 * @member {Number} id
 */
SendBirdPollOption.prototype['id'] = undefined;

/**
 * @member {Array.<module:model/SendBirdUser>} partial_voters
 */
SendBirdPollOption.prototype['partial_voters'] = undefined;

/**
 * @member {Number} poll_id
 */
SendBirdPollOption.prototype['poll_id'] = undefined;

/**
 * @member {String} text
 */
SendBirdPollOption.prototype['text'] = undefined;

/**
 * @member {Number} updated_at
 */
SendBirdPollOption.prototype['updated_at'] = undefined;

/**
 * @member {Number} vote_count
 */
SendBirdPollOption.prototype['vote_count'] = undefined;






export default SendBirdPollOption;

