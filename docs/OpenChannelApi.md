# SendbirdPlatformSdk.OpenChannelApi

All URIs are relative to *https://api-APP_ID.sendbird.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ocCancelTheRegistrationOfOperators**](OpenChannelApi.md#ocCancelTheRegistrationOfOperators) | **DELETE** /v3/open_channels/{channel_url}/operators | Cancel the registration of operators
[**ocCreateChannel**](OpenChannelApi.md#ocCreateChannel) | **POST** /v3/open_channels | Create a channel
[**ocDeleteChannelByUrl**](OpenChannelApi.md#ocDeleteChannelByUrl) | **DELETE** /v3/open_channels/{channel_url} | Delete a channel
[**ocListChannels**](OpenChannelApi.md#ocListChannels) | **GET** /v3/open_channels | List channels
[**ocListOperators**](OpenChannelApi.md#ocListOperators) | **GET** /v3/open_channels/{channel_url}/operators | List operators
[**ocListParticipants**](OpenChannelApi.md#ocListParticipants) | **GET** /v3/open_channels/{channel_url}/participants | List participants
[**ocRegisterOperators**](OpenChannelApi.md#ocRegisterOperators) | **POST** /v3/open_channels/{channel_url}/operators | Register operators
[**ocUpdateChannelByUrl**](OpenChannelApi.md#ocUpdateChannelByUrl) | **PUT** /v3/open_channels/{channel_url} | Update a channel
[**ocViewChannelByUrl**](OpenChannelApi.md#ocViewChannelByUrl) | **GET** /v3/open_channels/{channel_url} | View a channel



## ocCancelTheRegistrationOfOperators

> ocCancelTheRegistrationOfOperators(apiToken, channelUrl, operatorIds, opts)

Cancel the registration of operators

## Cancel the registration of operators  Cancels the registration of operators from an open channel but leave them as participants.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-cancel-the-registration-of-operators ----------------------------   &#x60;channel_url&#x60;      Type: string      Description: Specifies the URL of the channel to cancel the registration of operators.

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.OpenChannelApi();
let apiToken = {{API_TOKEN}}; // String | 
let channelUrl = "channelUrl_example"; // String | 
let operatorIds = ["null"]; // [String] | 
let opts = {
  'deleteAll': true // Boolean | 
};
apiInstance.ocCancelTheRegistrationOfOperators(apiToken, channelUrl, operatorIds, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | **String**|  | 
 **channelUrl** | **String**|  | 
 **operatorIds** | [**[String]**](String.md)|  | 
 **deleteAll** | **Boolean**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## ocCreateChannel

> SendBirdOpenChannel ocCreateChannel(apiToken, opts)

Create a channel

## Create a channel  Creates an open channel.  &gt;__Note__: Classic open channels created before the deprecation date of March 2021 will maintain their original form and functions. However, new applications created after December 15, 2020, will be able to create dynamic partitioning open channels only.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-create-a-channel

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.OpenChannelApi();
let apiToken = {{API_TOKEN}}; // String | 
let opts = {
  'ocCreateChannelData': new SendbirdPlatformSdk.OcCreateChannelData() // OcCreateChannelData | 
};
apiInstance.ocCreateChannel(apiToken, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | **String**|  | 
 **ocCreateChannelData** | [**OcCreateChannelData**](OcCreateChannelData.md)|  | [optional] 

### Return type

[**SendBirdOpenChannel**](SendBirdOpenChannel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## ocDeleteChannelByUrl

> OcDeleteChannelByUrl200Response ocDeleteChannelByUrl(apiToken, channelUrl)

Delete a channel

## Delete a channel  Deletes an open channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-delete-a-channel ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.OpenChannelApi();
let apiToken = {{API_TOKEN}}; // String | 
let channelUrl = "channelUrl_example"; // String | 
apiInstance.ocDeleteChannelByUrl(apiToken, channelUrl).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | **String**|  | 
 **channelUrl** | **String**|  | 

### Return type

[**OcDeleteChannelByUrl200Response**](OcDeleteChannelByUrl200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## ocListChannels

> OcListChannelsResponse ocListChannels(apiToken, opts)

List channels

## List channels  Retrieves a list of open channels. You can query the list using various parameters.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-list-channels ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.OpenChannelApi();
let apiToken = {{API_TOKEN}}; // String | 
let opts = {
  'token': "token_example", // String | 
  'limit': 56, // Number | 
  'customTypes': "customTypes_example", // String | 
  'nameContains': "nameContains_example", // String | 
  'urlContains': "urlContains_example", // String | 
  'showFrozen': true, // Boolean | 
  'showMetadata': true, // Boolean | 
  'customType': "customType_example" // String | 
};
apiInstance.ocListChannels(apiToken, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | **String**|  | 
 **token** | **String**|  | [optional] 
 **limit** | **Number**|  | [optional] 
 **customTypes** | **String**|  | [optional] 
 **nameContains** | **String**|  | [optional] 
 **urlContains** | **String**|  | [optional] 
 **showFrozen** | **Boolean**|  | [optional] 
 **showMetadata** | **Boolean**|  | [optional] 
 **customType** | **String**|  | [optional] 

### Return type

[**OcListChannelsResponse**](OcListChannelsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## ocListOperators

> OcListOperatorsResponse ocListOperators(apiToken, channelUrl, opts)

List operators

## List operators  Retrieves a list of operators of an open channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-list-operators ----------------------------   &#x60;channel_url&#x60;      Type: string      Description: Specifies the URL of the channel to retrieve a list of operators.

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.OpenChannelApi();
let apiToken = {{API_TOKEN}}; // String | 
let channelUrl = "channelUrl_example"; // String | 
let opts = {
  'token': "token_example", // String | 
  'limit': 56 // Number | 
};
apiInstance.ocListOperators(apiToken, channelUrl, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | **String**|  | 
 **channelUrl** | **String**|  | 
 **token** | **String**|  | [optional] 
 **limit** | **Number**|  | [optional] 

### Return type

[**OcListOperatorsResponse**](OcListOperatorsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## ocListParticipants

> OcListParticipantsResponse ocListParticipants(apiToken, channelUrl, opts)

List participants

## List participants  Retrieves a list of the participants of an open channel. A participant refers to a user who has entered the open channel and is currently online.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-list-participants ----------------------------   &#x60;channel_url&#x60;      Type: string      Description: Specifies the URL of the channel to retrieve a list of participants in.

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.OpenChannelApi();
let apiToken = {{API_TOKEN}}; // String | 
let channelUrl = "channelUrl_example"; // String | 
let opts = {
  'token': "token_example", // String | 
  'limit': 56 // Number | 
};
apiInstance.ocListParticipants(apiToken, channelUrl, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | **String**|  | 
 **channelUrl** | **String**|  | 
 **token** | **String**|  | [optional] 
 **limit** | **Number**|  | [optional] 

### Return type

[**OcListParticipantsResponse**](OcListParticipantsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## ocRegisterOperators

> OcDeleteChannelByUrl200Response ocRegisterOperators(apiToken, channelUrl, opts)

Register operators

## Register operators  Registers one or more operators to an open channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-register-operators ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.OpenChannelApi();
let apiToken = {{API_TOKEN}}; // String | 
let channelUrl = "channelUrl_example"; // String | 
let opts = {
  'ocRegisterOperatorsData': new SendbirdPlatformSdk.OcRegisterOperatorsData() // OcRegisterOperatorsData | 
};
apiInstance.ocRegisterOperators(apiToken, channelUrl, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | **String**|  | 
 **channelUrl** | **String**|  | 
 **ocRegisterOperatorsData** | [**OcRegisterOperatorsData**](OcRegisterOperatorsData.md)|  | [optional] 

### Return type

[**OcDeleteChannelByUrl200Response**](OcDeleteChannelByUrl200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## ocUpdateChannelByUrl

> SendBirdOpenChannel ocUpdateChannelByUrl(apiToken, channelUrl, opts)

Update a channel

## Update a channel  Updates information on an open channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-update-a-channel ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.OpenChannelApi();
let apiToken = {{API_TOKEN}}; // String | 
let channelUrl = "channelUrl_example"; // String | 
let opts = {
  'ocUpdateChannelByUrlData': new SendbirdPlatformSdk.OcUpdateChannelByUrlData() // OcUpdateChannelByUrlData | 
};
apiInstance.ocUpdateChannelByUrl(apiToken, channelUrl, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | **String**|  | 
 **channelUrl** | **String**|  | 
 **ocUpdateChannelByUrlData** | [**OcUpdateChannelByUrlData**](OcUpdateChannelByUrlData.md)|  | [optional] 

### Return type

[**SendBirdOpenChannel**](SendBirdOpenChannel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## ocViewChannelByUrl

> SendBirdOpenChannel ocViewChannelByUrl(apiToken, channelUrl)

View a channel

## View a channel  Retrieves information on a specific open channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-view-a-channel ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.OpenChannelApi();
let apiToken = {{API_TOKEN}}; // String | 
let channelUrl = "channelUrl_example"; // String | 
apiInstance.ocViewChannelByUrl(apiToken, channelUrl).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | **String**|  | 
 **channelUrl** | **String**|  | 

### Return type

[**SendBirdOpenChannel**](SendBirdOpenChannel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

