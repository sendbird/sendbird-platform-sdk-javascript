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


import ApiClient from "../ApiClient";

/**
* Migration service.
* @module api/MigrationApi
* @version 1.0.0
*/
export default class MigrationApi {

    /**
    * Constructs a new MigrationApi. 
    * @alias module:api/MigrationApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the migrateMessagesByUrl operation.
     * @callback module:api/MigrationApi~migrateMessagesByUrlCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Migrate messages
     * ## Migrate messages  Using our migration API, you can migrate the messages from another system into a Sendbird system's [channel](https://sendbird.com/docs/chat/v3/platform-api/guides/channel-types) which consists of users, messages, and other chat-related data.  > To turn on this feature, [contact our support team](https://dashboard.sendbird.com/settings/contact_us).  There are three things to do in advance before the migration. Follow the instructions below:  1. Register the users of your current chat solution to your Sendbird application. You can migrate the users into the Sendbird system using the [user creation API](https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-create-a-user). 2. Create either an [open](https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-create-a-channel) or a [group](https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-create-a-channel) channel to migrate the messages of your chat solution. The Sendbird system doesn't create a channel for your migration automatically. 3. The maximum number of migrated messages per call is 100. To avoid the failure during your migration, you must adjust the number of messages to process at once via the API.  https://sendbird.com/docs/chat/v3/platform-api/guides/migration#2-migrate-messages ----------------------------
     * @param {String} targetChannelUrl 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {Object} opts.body 
     * @param {module:api/MigrationApi~migrateMessagesByUrlCallback} callback The callback function, accepting three arguments: error, data, response
     */
    migrateMessagesByUrl(targetChannelUrl, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'targetChannelUrl' is set
      if (targetChannelUrl === undefined || targetChannelUrl === null) {
        throw new Error("Missing the required parameter 'targetChannelUrl' when calling migrateMessagesByUrl");
      }

      let pathParams = {
        'target_channel_url': targetChannelUrl
      };
      let queryParams = {
      };
      let headerParams = {
        'Api-Token': opts['apiToken']
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/v3/migration/{target_channel_url}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
