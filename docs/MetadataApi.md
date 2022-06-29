# SendbirdPlatformSdk.MetadataApi

All URIs are relative to *https://api-APP_ID.sendbird.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**viewChannelMetacounter**](MetadataApi.md#viewChannelMetacounter) | **GET** /v3/{channel_type}/{channel_url}/metacounter | View a channel metacounter - When retrieving all items of a channel metacounter
[**viewChannelMetacounterByKey**](MetadataApi.md#viewChannelMetacounterByKey) | **GET** /v3/{channel_type}/{channel_url}/metacounter/{key} | View a channel metacounter - When retrieving a specific item of a channel metacounter by its key
[**viewChannelMetadata**](MetadataApi.md#viewChannelMetadata) | **GET** /v3/{channel_type}/{channel_url}/metadata | View a channel metadata - When retrieving all items of a channel metadata
[**viewChannelMetadataByKey**](MetadataApi.md#viewChannelMetadataByKey) | **GET** /v3/{channel_type}/{channel_url}/metadata/{key} | View a channel metadata - When retrieving a specific item of a channel metadata by its key
[**viewUserMetadata**](MetadataApi.md#viewUserMetadata) | **GET** /v3/users/{user_id}/metadata | View a user metadata - When retrieving all items of a user metadata
[**viewUserMetadataByKey**](MetadataApi.md#viewUserMetadataByKey) | **GET** /v3/users/{user_id}/metadata/{key} | View a user metadata - When retrieving a specific item of a user metadata by its key



## viewChannelMetacounter

> {String: SendBirdAdditionalProperties} viewChannelMetacounter(apiToken, channelType, channelUrl, opts)

View a channel metacounter - When retrieving all items of a channel metacounter

## View a channel metacounter  Retrieves channel metacounter&#39;s one or more items that are stored in a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-view-a-channel-metacounter ----------------------------   &#x60;channel_type&#x60;      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  &#x60;channel_url&#x60;      Type: string      Description: Specifies the URL of the target channel.

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.MetadataApi();
let apiToken = {{API_TOKEN}}; // String | 
let channelType = "channelType_example"; // String | 
let channelUrl = "channelUrl_example"; // String | 
let opts = {
  'key': "key_example", // String | 
  'keys': ["null"] // [String] | 
};
apiInstance.viewChannelMetacounter(apiToken, channelType, channelUrl, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | **String**|  | 
 **channelType** | **String**|  | 
 **channelUrl** | **String**|  | 
 **key** | **String**|  | [optional] 
 **keys** | [**[String]**](String.md)|  | [optional] 

### Return type

[**{String: SendBirdAdditionalProperties}**](SendBirdAdditionalProperties.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## viewChannelMetacounterByKey

> {String: SendBirdAdditionalProperties} viewChannelMetacounterByKey(apiToken, channelType, channelUrl, key)

View a channel metacounter - When retrieving a specific item of a channel metacounter by its key

## View a channel metacounter  Retrieves channel metacounter&#39;s one or more items that are stored in a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-view-a-channel-metacounter ----------------------------   &#x60;channel_type&#x60;      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  &#x60;channel_url&#x60;      Type: string      Description: Specifies the URL of the target channel.

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.MetadataApi();
let apiToken = {{API_TOKEN}}; // String | 
let channelType = "channelType_example"; // String | 
let channelUrl = "channelUrl_example"; // String | 
let key = "key_example"; // String | 
apiInstance.viewChannelMetacounterByKey(apiToken, channelType, channelUrl, key).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | **String**|  | 
 **channelType** | **String**|  | 
 **channelUrl** | **String**|  | 
 **key** | **String**|  | 

### Return type

[**{String: SendBirdAdditionalProperties}**](SendBirdAdditionalProperties.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## viewChannelMetadata

> {String: String} viewChannelMetadata(apiToken, channelType, channelUrl, opts)

View a channel metadata - When retrieving all items of a channel metadata

## View a channel metadata  Retrieves a channel metadata&#39;s one or more items that are stored in a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-view-a-channel-metadata ----------------------------   &#x60;channel_type&#x60;      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  &#x60;channel_url&#x60;      Type: string      Description: Specifies the URL of the target channel.

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.MetadataApi();
let apiToken = {{API_TOKEN}}; // String | 
let channelType = "channelType_example"; // String | 
let channelUrl = "channelUrl_example"; // String | 
let opts = {
  'key': "key_example", // String | 
  'keys': ["null"] // [String] | 
};
apiInstance.viewChannelMetadata(apiToken, channelType, channelUrl, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | **String**|  | 
 **channelType** | **String**|  | 
 **channelUrl** | **String**|  | 
 **key** | **String**|  | [optional] 
 **keys** | [**[String]**](String.md)|  | [optional] 

### Return type

**{String: String}**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## viewChannelMetadataByKey

> {String: String} viewChannelMetadataByKey(apiToken, channelType, channelUrl, key)

View a channel metadata - When retrieving a specific item of a channel metadata by its key

## View a channel metadata  Retrieves a channel metadata&#39;s one or more items that are stored in a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-view-a-channel-metadata ----------------------------   &#x60;channel_type&#x60;      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  &#x60;channel_url&#x60;      Type: string      Description: Specifies the URL of the target channel.

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.MetadataApi();
let apiToken = {{API_TOKEN}}; // String | 
let channelType = "channelType_example"; // String | 
let channelUrl = "channelUrl_example"; // String | 
let key = "key_example"; // String | 
apiInstance.viewChannelMetadataByKey(apiToken, channelType, channelUrl, key).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | **String**|  | 
 **channelType** | **String**|  | 
 **channelUrl** | **String**|  | 
 **key** | **String**|  | 

### Return type

**{String: String}**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## viewUserMetadata

> ViewUserMetadataResponse viewUserMetadata(apiToken, userId, opts)

View a user metadata - When retrieving all items of a user metadata

## View a user metadata  Retrieves a user metadata&#39;s one or more items that are stored in a user.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-view-a-user-metadata ----------------------------   &#x60;user_id&#x60;      Type: string      Description: Specifies the ID of the user to retrieve the metadata in.

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.MetadataApi();
let apiToken = {{API_TOKEN}}; // String | 
let userId = "userId_example"; // String | 
let opts = {
  'key': "key_example", // String | 
  'keys': ["null"] // [String] | 
};
apiInstance.viewUserMetadata(apiToken, userId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | **String**|  | 
 **userId** | **String**|  | 
 **key** | **String**|  | [optional] 
 **keys** | [**[String]**](String.md)|  | [optional] 

### Return type

[**ViewUserMetadataResponse**](ViewUserMetadataResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## viewUserMetadataByKey

> {String: String} viewUserMetadataByKey(apiToken, userId, key)

View a user metadata - When retrieving a specific item of a user metadata by its key

## View a user metadata  Retrieves a user metadata&#39;s one or more items that are stored in a user.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-view-a-user-metadata ----------------------------   &#x60;user_id&#x60;      Type: string      Description: Specifies the ID of the user to retrieve the metadata in.

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.MetadataApi();
let apiToken = {{API_TOKEN}}; // String | 
let userId = "userId_example"; // String | 
let key = "key_example"; // String | 
apiInstance.viewUserMetadataByKey(apiToken, userId, key).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | **String**|  | 
 **userId** | **String**|  | 
 **key** | **String**|  | 

### Return type

**{String: String}**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

