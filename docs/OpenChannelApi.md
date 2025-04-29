# SendbirdPlatformSdk.OpenChannelApi

All URIs are relative to *https://api-APP_ID.sendbird.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAnOpenChannel**](OpenChannelApi.md#createAnOpenChannel) | **POST** /v3/open_channels | Create an open channel
[**deleteAnOpenChannel**](OpenChannelApi.md#deleteAnOpenChannel) | **DELETE** /v3/open_channels/{channel_url} | Delete an open channel
[**getAnOpenChannel**](OpenChannelApi.md#getAnOpenChannel) | **GET** /v3/open_channels/{channel_url} | Get an open channel
[**listChannelOperators**](OpenChannelApi.md#listChannelOperators) | **GET** /v3/open_channels/{channel_url}/operators | List operators of an open channel
[**listOpenChannels**](OpenChannelApi.md#listOpenChannels) | **GET** /v3/open_channels | List open channels
[**registerOperators**](OpenChannelApi.md#registerOperators) | **POST** /v3/open_channels/{channel_url}/operators | Register operators to an open channel
[**unregisterOperators**](OpenChannelApi.md#unregisterOperators) | **DELETE** /v3/open_channels/{channel_url}/operators | Unregister operators from an open channel
[**updateAnOpenChannel**](OpenChannelApi.md#updateAnOpenChannel) | **PUT** /v3/open_channels/{channel_url} | Update an open channel



## createAnOpenChannel

> SendbirdOpenChannel createAnOpenChannel(opts)

Create an open channel

## Create an open channel  You can create an [open channel](https://sendbird.com/docs/chat/platform-api/v3/channel/channel-overview#2-channel-types-3-open-channel) that facilitates conversations for millions of users. Open channels allow a seamless chat experience possible for all participants by using [dynamic partitioning](https://sendbird.com/docs/chat/platform-api/v3/channel/channel-overview#4-how-dynamic-partitioning-works) which creates subchannels that each handle up to tens of thousands of participants.  Because users don&#39;t need invitations to join open channels, short-lived live events like concerts or live streams that don&#39;t require a sustained membership are good use cases for open channels.  [https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-create-a-channel](https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-create-a-channel)

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.OpenChannelApi();
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'createAnOpenChannelRequest': new SendbirdPlatformSdk.CreateAnOpenChannelRequest() // CreateAnOpenChannelRequest | 
};
apiInstance.createAnOpenChannel(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | **String**|  | [optional] 
 **createAnOpenChannelRequest** | [**CreateAnOpenChannelRequest**](CreateAnOpenChannelRequest.md)|  | [optional] 

### Return type

[**SendbirdOpenChannel**](SendbirdOpenChannel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteAnOpenChannel

> Object deleteAnOpenChannel(channelUrl, opts)

Delete an open channel

## Delete an open channel  You can delete an open channel using this API. See [this page](https://sendbird.com/docs/chat/platform-api/v3/channel/channel-overview#2-channel-types-3-open-channel-vs-group-channel-vs-supergroup-channel) to learn more about channel types.  https://sendbird.com/docs/chat/platform-api/v3/channel/managing-a-channel/delete-an-open-channel#1-delete-an-open-channel

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.OpenChannelApi();
let channelUrl = "channelUrl_example"; // String | (Required) 
let opts = {
  'apiToken': {{API_TOKEN}} // String | 
};
apiInstance.deleteAnOpenChannel(channelUrl, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelUrl** | **String**| (Required)  | 
 **apiToken** | **String**|  | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAnOpenChannel

> SendbirdOpenChannel getAnOpenChannel(channelUrl, opts)

Get an open channel

## Get an open channel  This action retrieves information about a specific [open channel](https://sendbird.com/docs/chat/platform-api/v3/channel/channel-overview#2-channel-types-3-open-channel).  [https://sendbird.com/docs/chat/platform-api/v3/channel/listing-channels-in-an-application/get-an-open-channel#1-get-an-open-channel](https://sendbird.com/docs/chat/platform-api/v3/channel/listing-channels-in-an-application/get-an-open-channel#1-get-an-open-channel)

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.OpenChannelApi();
let channelUrl = "channelUrl_example"; // String | (Required) 
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'includeOperators': true // Boolean | Determines whether to include a list of operators in the response. (Default: false)
};
apiInstance.getAnOpenChannel(channelUrl, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelUrl** | **String**| (Required)  | 
 **apiToken** | **String**|  | [optional] 
 **includeOperators** | **Boolean**| Determines whether to include a list of operators in the response. (Default: false) | [optional] 

### Return type

[**SendbirdOpenChannel**](SendbirdOpenChannel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listChannelOperators

> ListOperatorsResponse listChannelOperators(channelUrl, opts)

List operators of an open channel

## List operators of an open channel  You can retrieve a list of operators of an open channel using this API.  https://sendbird.com/docs/chat/platform-api/v3/user/assigning-a-user-role/list-operators-of-an-open-channel#1-list-operators-of-an-open-channel  &#x60;channel_url&#x60;   Type: string   Description: Specifies the URL of the channel to retrieve a list of operators.

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.OpenChannelApi();
let channelUrl = "channelUrl_example"; // String | (Required) 
let opts = {
  'token': "token_example", // String | 
  'limit': 56, // Number | 
  'apiToken': {{API_TOKEN}} // String | 
};
apiInstance.listChannelOperators(channelUrl, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelUrl** | **String**| (Required)  | 
 **token** | **String**|  | [optional] 
 **limit** | **Number**|  | [optional] 
 **apiToken** | **String**|  | [optional] 

### Return type

[**ListOperatorsResponse**](ListOperatorsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listOpenChannels

> ListOpenChannelsResponse listOpenChannels(opts)

List open channels

## List open channels  This action retrieves a list of [open channels](https://sendbird.com/docs/chat/platform-api/v3/channel/channel-overview#2-channel-types-3-open-channel). You can use various query parameters to determine the search scope and select what kind of information you want to receive about the queried channels.  [https://sendbird.com/docs/chat/platform-api/v3/channel/listing-channels-in-an-application/list-open-channels#1-list-open-channels](https://sendbird.com/docs/chat/platform-api/v3/channel/listing-channels-in-an-application/list-open-channels#1-list-open-channels)

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.OpenChannelApi();
let opts = {
  'token': "token_example", // String | 
  'channelUrls': "channelUrls_example", // String | Specifies a comma-separated string of one or more open channel URLs to restrict the search scope. URL encoding each channel URL is recommended.
  'limit': 56, // Number | 
  'customTypes': "customTypes_example", // String | Specifies a comma-separated string of one or more custom types to filter open channels. Urlencoding each type is recommended (for example, ?custom_types=urlencoded_type_1,urlencoded_type_2). If not specified, all channels are returned, regardless of their custom type.
  'nameContains': "nameContains_example", // String | 
  'urlContains': "urlContains_example", // String | 
  'showFrozen': true, // Boolean | Determines whether to include frozen channels in the response. Frozen channels are channels where only channel operators are allowed to send messages. (Default: true)
  'showMetadata': true, // Boolean | Determines whether to include channel metadata in the response. (Default: false)
  'apiToken': {{API_TOKEN}} // String | 
};
apiInstance.listOpenChannels(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**|  | [optional] 
 **channelUrls** | **String**| Specifies a comma-separated string of one or more open channel URLs to restrict the search scope. URL encoding each channel URL is recommended. | [optional] 
 **limit** | **Number**|  | [optional] 
 **customTypes** | **String**| Specifies a comma-separated string of one or more custom types to filter open channels. Urlencoding each type is recommended (for example, ?custom_types&#x3D;urlencoded_type_1,urlencoded_type_2). If not specified, all channels are returned, regardless of their custom type. | [optional] 
 **nameContains** | **String**|  | [optional] 
 **urlContains** | **String**|  | [optional] 
 **showFrozen** | **Boolean**| Determines whether to include frozen channels in the response. Frozen channels are channels where only channel operators are allowed to send messages. (Default: true) | [optional] 
 **showMetadata** | **Boolean**| Determines whether to include channel metadata in the response. (Default: false) | [optional] 
 **apiToken** | **String**|  | [optional] 

### Return type

[**ListOpenChannelsResponse**](ListOpenChannelsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## registerOperators

> Object registerOperators(channelUrl, opts)

Register operators to an open channel

## Register operators to an open channel  You can register one or more operators to an open channel using this API.  https://sendbird.com/docs/chat/platform-api/v3/user/assigning-a-user-role/register-operators-to-an-open-channel#1-register-operators-to-an-open-channel

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.OpenChannelApi();
let channelUrl = "channelUrl_example"; // String | (Required) 
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'registerOperatorsToAGroupChannelRequest': new SendbirdPlatformSdk.RegisterOperatorsToAGroupChannelRequest() // RegisterOperatorsToAGroupChannelRequest | 
};
apiInstance.registerOperators(channelUrl, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelUrl** | **String**| (Required)  | 
 **apiToken** | **String**|  | [optional] 
 **registerOperatorsToAGroupChannelRequest** | [**RegisterOperatorsToAGroupChannelRequest**](RegisterOperatorsToAGroupChannelRequest.md)|  | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## unregisterOperators

> Object unregisterOperators(channelUrl, operatorIds, opts)

Unregister operators from an open channel

## Unregister operators from an open channel  You can unregister operators in an open channel but keep them in the channel as participants using this API.  https://sendbird.com/docs/chat/platform-api/v3/user/assigning-a-user-role/unregister-operators-from-an-open-channel#1-unregister-operators-from-an-open-channel  &#x60;channel_url&#x60;   Type: string   Description: Specifies the URL of the channel to cancel the registration of operators.

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.OpenChannelApi();
let channelUrl = "channelUrl_example"; // String | (Required) 
let operatorIds = "operatorIds_example"; // String | Specifies an array of one or more operator IDs to unregister from the channel. The operators in this array remain as participants of the channel after losing their operational roles. Urlencoding each operator ID is recommended. An example of a Urlencoded array would be ?operator_ids=urlencoded_id_1,urlencoded_id_2.
let opts = {
  'deleteAll': true, // Boolean | Determines whether to unregister all operators and leave them as the participants of the channel. When this is set to true, the operator_ids property isn't effective and doesn't need to be specified in the request. (Default: false)
  'apiToken': {{API_TOKEN}} // String | 
};
apiInstance.unregisterOperators(channelUrl, operatorIds, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelUrl** | **String**| (Required)  | 
 **operatorIds** | **String**| Specifies an array of one or more operator IDs to unregister from the channel. The operators in this array remain as participants of the channel after losing their operational roles. Urlencoding each operator ID is recommended. An example of a Urlencoded array would be ?operator_ids&#x3D;urlencoded_id_1,urlencoded_id_2. | 
 **deleteAll** | **Boolean**| Determines whether to unregister all operators and leave them as the participants of the channel. When this is set to true, the operator_ids property isn&#39;t effective and doesn&#39;t need to be specified in the request. (Default: false) | [optional] 
 **apiToken** | **String**|  | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateAnOpenChannel

> SendbirdOpenChannel updateAnOpenChannel(channelUrl, opts)

Update an open channel

## Update an open channel  You can update information about an open channel using this API. You can add a cover image to a channel to better identify the channel or specify a custom channel type for grouping channels by custom type. See [this page](https://sendbird.com/docs/chat/platform-api/v3/channel/channel-overview#2-channel-types-3-open-channel-vs-group-channel-vs-supergroup-channel) to learn more about channel types.  https://sendbird.com/docs/chat/platform-api/v3/channel/managing-a-channel/update-an-open-channel#1-update-an-open-channel

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.OpenChannelApi();
let channelUrl = "channelUrl_example"; // String | (Required) 
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'updateAnOpenChannelRequest': new SendbirdPlatformSdk.UpdateAnOpenChannelRequest() // UpdateAnOpenChannelRequest | 
};
apiInstance.updateAnOpenChannel(channelUrl, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelUrl** | **String**| (Required)  | 
 **apiToken** | **String**|  | [optional] 
 **updateAnOpenChannelRequest** | [**UpdateAnOpenChannelRequest**](UpdateAnOpenChannelRequest.md)|  | [optional] 

### Return type

[**SendbirdOpenChannel**](SendbirdOpenChannel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

