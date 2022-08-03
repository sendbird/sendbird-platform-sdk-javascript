# SendbirdPlatformSdk.WebhookApi

All URIs are relative to *https://api-APP_ID.sendbird.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**chooseWhichEventsToSubscribeTo**](WebhookApi.md#chooseWhichEventsToSubscribeTo) | **PUT** /v3/applications/settings/webhook | Choose which events to subscribe to
[**retrieveListOfSubscribedEvents**](WebhookApi.md#retrieveListOfSubscribedEvents) | **GET** /v3/applications/settings/webhook | Retrieve a list of subscribed events



## chooseWhichEventsToSubscribeTo

> ChooseWhichEventsToSubscribeToResponse chooseWhichEventsToSubscribeTo(apiToken, opts)

Choose which events to subscribe to

## Choose which events to subscribe to  Chooses which events for your webhook server to receive payloads for. By subscribing to specific events based on your own needs, you can control the number of HTTP requests to your webhook server.  https://sendbird.com/docs/chat/v3/platform-api/guides/webhooks#2-choose-which-events-to-subscribe-to

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.WebhookApi();
let apiToken = {{API_TOKEN}}; // String | 
let opts = {
  'chooseWhichEventsToSubscribeToData': new SendbirdPlatformSdk.ChooseWhichEventsToSubscribeToData() // ChooseWhichEventsToSubscribeToData | 
};
apiInstance.chooseWhichEventsToSubscribeTo(apiToken, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | **String**|  | 
 **chooseWhichEventsToSubscribeToData** | [**ChooseWhichEventsToSubscribeToData**](ChooseWhichEventsToSubscribeToData.md)|  | [optional] 

### Return type

[**ChooseWhichEventsToSubscribeToResponse**](ChooseWhichEventsToSubscribeToResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## retrieveListOfSubscribedEvents

> RetrieveListOfSubscribedEventsResponse retrieveListOfSubscribedEvents(apiToken, opts)

Retrieve a list of subscribed events

## Retrieve a list of subscribed events  Retrieves a list of events for your webhook server to receive payloads for.  https://sendbird.com/docs/chat/v3/platform-api/guides/webhooks#2-retrieve-a-list-of-subscribed-events ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.WebhookApi();
let apiToken = {{API_TOKEN}}; // String | 
let opts = {
  'displayAllWebhookCategories': true // Boolean | 
};
apiInstance.retrieveListOfSubscribedEvents(apiToken, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | **String**|  | 
 **displayAllWebhookCategories** | **Boolean**|  | [optional] 

### Return type

[**RetrieveListOfSubscribedEventsResponse**](RetrieveListOfSubscribedEventsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

