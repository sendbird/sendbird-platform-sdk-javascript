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


import ApiClient from "../ApiClient";
import ChooseWhichEventsToSubscribeToData from '../model/ChooseWhichEventsToSubscribeToData';
import ChooseWhichEventsToSubscribeToResponse from '../model/ChooseWhichEventsToSubscribeToResponse';
import RetrieveListOfSubscribedEventsResponse from '../model/RetrieveListOfSubscribedEventsResponse';

/**
* Webhook service.
* @module api/WebhookApi
* @version 0.0.16
*/
export default class WebhookApi {

    /**
    * Constructs a new WebhookApi. 
    * @alias module:api/WebhookApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Choose which events to subscribe to
     * ## Choose which events to subscribe to  Chooses which events for your webhook server to receive payloads for. By subscribing to specific events based on your own needs, you can control the number of HTTP requests to your webhook server.  https://sendbird.com/docs/chat/v3/platform-api/guides/webhooks#2-choose-which-events-to-subscribe-to
     * @param {String} apiToken 
     * @param {Object} opts Optional parameters
     * @param {module:model/ChooseWhichEventsToSubscribeToData} opts.chooseWhichEventsToSubscribeToData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ChooseWhichEventsToSubscribeToResponse} and HTTP response
     */
    chooseWhichEventsToSubscribeToWithHttpInfo(apiToken, opts) {
      opts = opts || {};
      let postBody = opts['chooseWhichEventsToSubscribeToData'];
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling chooseWhichEventsToSubscribeTo");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'Api-Token': apiToken
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ChooseWhichEventsToSubscribeToResponse;
      return this.apiClient.callApi(
        '/v3/applications/settings/webhook', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Choose which events to subscribe to
     * ## Choose which events to subscribe to  Chooses which events for your webhook server to receive payloads for. By subscribing to specific events based on your own needs, you can control the number of HTTP requests to your webhook server.  https://sendbird.com/docs/chat/v3/platform-api/guides/webhooks#2-choose-which-events-to-subscribe-to
     * @param {String} apiToken 
     * @param {Object} opts Optional parameters
     * @param {module:model/ChooseWhichEventsToSubscribeToData} opts.chooseWhichEventsToSubscribeToData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ChooseWhichEventsToSubscribeToResponse}
     */
    chooseWhichEventsToSubscribeTo(apiToken, opts) {
      return this.chooseWhichEventsToSubscribeToWithHttpInfo(apiToken, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Retrieve a list of subscribed events
     * ## Retrieve a list of subscribed events  Retrieves a list of events for your webhook server to receive payloads for.  https://sendbird.com/docs/chat/v3/platform-api/guides/webhooks#2-retrieve-a-list-of-subscribed-events ----------------------------
     * @param {String} apiToken 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.displayAllWebhookCategories 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RetrieveListOfSubscribedEventsResponse} and HTTP response
     */
    retrieveListOfSubscribedEventsWithHttpInfo(apiToken, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling retrieveListOfSubscribedEvents");
      }

      let pathParams = {
      };
      let queryParams = {
        'display_all_webhook_categories': opts['displayAllWebhookCategories']
      };
      let headerParams = {
        'Api-Token': apiToken
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = RetrieveListOfSubscribedEventsResponse;
      return this.apiClient.callApi(
        '/v3/applications/settings/webhook', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Retrieve a list of subscribed events
     * ## Retrieve a list of subscribed events  Retrieves a list of events for your webhook server to receive payloads for.  https://sendbird.com/docs/chat/v3/platform-api/guides/webhooks#2-retrieve-a-list-of-subscribed-events ----------------------------
     * @param {String} apiToken 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.displayAllWebhookCategories 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RetrieveListOfSubscribedEventsResponse}
     */
    retrieveListOfSubscribedEvents(apiToken, opts) {
      return this.retrieveListOfSubscribedEventsWithHttpInfo(apiToken, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
