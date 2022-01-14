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
import InlineResponse2005Template from './InlineResponse2005Template';

/**
 * The InlineResponse20016PushMessageTemplates model module.
 * @module model/InlineResponse20016PushMessageTemplates
 * @version 1.0.0
 */
class InlineResponse20016PushMessageTemplates {
    /**
     * Constructs a new <code>InlineResponse20016PushMessageTemplates</code>.
     * @alias module:model/InlineResponse20016PushMessageTemplates
     */
    constructor() { 
        
        InlineResponse20016PushMessageTemplates.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse20016PushMessageTemplates</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20016PushMessageTemplates} obj Optional instance to populate.
     * @return {module:model/InlineResponse20016PushMessageTemplates} The populated <code>InlineResponse20016PushMessageTemplates</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20016PushMessageTemplates();

            if (data.hasOwnProperty('template_name')) {
                obj['template_name'] = ApiClient.convertToType(data['template_name'], 'String');
            }
            if (data.hasOwnProperty('template')) {
                obj['template'] = InlineResponse2005Template.constructFromObject(data['template']);
            }
            if (data.hasOwnProperty('push_message_preview')) {
                obj['push_message_preview'] = InlineResponse2005Template.constructFromObject(data['push_message_preview']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} template_name
 */
InlineResponse20016PushMessageTemplates.prototype['template_name'] = undefined;

/**
 * @member {module:model/InlineResponse2005Template} template
 */
InlineResponse20016PushMessageTemplates.prototype['template'] = undefined;

/**
 * @member {module:model/InlineResponse2005Template} push_message_preview
 */
InlineResponse20016PushMessageTemplates.prototype['push_message_preview'] = undefined;






export default InlineResponse20016PushMessageTemplates;

