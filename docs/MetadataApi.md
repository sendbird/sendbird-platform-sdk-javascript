# SendbirdPlatformSdk.MetadataApi

All URIs are relative to *https://api-APP_ID.sendbird.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAChannelMetadata**](MetadataApi.md#createAChannelMetadata) | **POST** /v3/{channel_type}/{channel_url}/metadata | Create a channel metadata
[**deleteAChannelMetadataWhenDeletingAllItemsOfAChannelMetadata**](MetadataApi.md#deleteAChannelMetadataWhenDeletingAllItemsOfAChannelMetadata) | **DELETE** /v3/{channel_type}/{channel_url}/metadata | Delete a channel metadata - When deleting all items of a channel metadata
[**updateAChannelMetadata**](MetadataApi.md#updateAChannelMetadata) | **PUT** /v3/{channel_type}/{channel_url}/metadata | Update a channel metadata - When updating existing items of a channel metadata by their keys or adding new items to the metadata
[**viewAChannelMetadataWhenRetrievingAllItemsOfAChannelMetadata**](MetadataApi.md#viewAChannelMetadataWhenRetrievingAllItemsOfAChannelMetadata) | **GET** /v3/{channel_type}/{channel_url}/metadata | View a channel metadata - When retrieving all items of a channel metadata



## createAChannelMetadata

> CreateAChannelMetadataResponse createAChannelMetadata(channelType, channelUrl, opts)

Create a channel metadata

## Create a channel metadata  Creates a channel metadata&#39;s items to store in a channel.  https://sendbird.com/docs/chat/platform-api/v3/channel/managing-metadata/channel-create-metadata#1-create-metadata ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.MetadataApi();
let channelType = "channelType_example"; // String | (Required) 
let channelUrl = "channelUrl_example"; // String | (Required) 
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'createAChannelMetadataRequest': new SendbirdPlatformSdk.CreateAChannelMetadataRequest() // CreateAChannelMetadataRequest | 
};
apiInstance.createAChannelMetadata(channelType, channelUrl, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelType** | **String**| (Required)  | 
 **channelUrl** | **String**| (Required)  | 
 **apiToken** | **String**|  | [optional] 
 **createAChannelMetadataRequest** | [**CreateAChannelMetadataRequest**](CreateAChannelMetadataRequest.md)|  | [optional] 

### Return type

[**CreateAChannelMetadataResponse**](CreateAChannelMetadataResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteAChannelMetadataWhenDeletingAllItemsOfAChannelMetadata

> Object deleteAChannelMetadataWhenDeletingAllItemsOfAChannelMetadata(channelType, channelUrl, opts)

Delete a channel metadata - When deleting all items of a channel metadata

## Delete a channel metadata  Deletes a channel metadata&#39;s one or all items that are stored in a channel.  https://sendbird.com/docs/chat/platform-api/v3/channel/managing-metadata/channel-delete-metadata#1-delete-metadata ----------------------------   &#x60;channel_type&#x60;      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  &#x60;channel_url&#x60;      Type: string      Description: Specifies the URL of the channel which has the metadata to delete.

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.MetadataApi();
let channelType = "channelType_example"; // String | (Required) 
let channelUrl = "channelUrl_example"; // String | (Required) 
let opts = {
  'key': "key_example", // String | 
  'apiToken': {{API_TOKEN}} // String | 
};
apiInstance.deleteAChannelMetadataWhenDeletingAllItemsOfAChannelMetadata(channelType, channelUrl, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelType** | **String**| (Required)  | 
 **channelUrl** | **String**| (Required)  | 
 **key** | **String**|  | [optional] 
 **apiToken** | **String**|  | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateAChannelMetadata

> Object updateAChannelMetadata(channelType, channelUrl, opts)

Update a channel metadata - When updating existing items of a channel metadata by their keys or adding new items to the metadata

## Update a channel metadata  Updates existing items of a channel metadata by their keys, or adds new items to the metadata.  https://sendbird.com/docs/chat/platform-api/v3/channel/managing-metadata/channel-update-metadata#1-update-metadata ----------------------------   &#x60;channel_type&#x60;      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  &#x60;channel_url&#x60;      Type: string      Description: Specifies the URL of the target channel.

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.MetadataApi();
let channelType = "channelType_example"; // String | (Required) 
let channelUrl = "channelUrl_example"; // String | (Required) 
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'updateAChannelMetadataRequest': new SendbirdPlatformSdk.UpdateAChannelMetadataRequest() // UpdateAChannelMetadataRequest | 
};
apiInstance.updateAChannelMetadata(channelType, channelUrl, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelType** | **String**| (Required)  | 
 **channelUrl** | **String**| (Required)  | 
 **apiToken** | **String**|  | [optional] 
 **updateAChannelMetadataRequest** | [**UpdateAChannelMetadataRequest**](UpdateAChannelMetadataRequest.md)|  | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## viewAChannelMetadataWhenRetrievingAllItemsOfAChannelMetadata

> Object viewAChannelMetadataWhenRetrievingAllItemsOfAChannelMetadata(channelType, channelUrl, opts)

View a channel metadata - When retrieving all items of a channel metadata

## View a channel metadata  Retrieves a channel metadata&#39;s one or more items that are stored in a channel.  https://sendbird.com/docs/chat/platform-api/v3/channel/managing-metadata/channel-get-metadata#1-get-metadata ----------------------------   &#x60;channel_type&#x60;      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  &#x60;channel_url&#x60;      Type: string      Description: Specifies the URL of the target channel.

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.MetadataApi();
let channelType = "channelType_example"; // String | (Required) 
let channelUrl = "channelUrl_example"; // String | (Required) 
let opts = {
  'key': "key_example", // String | 
  'keys': "keys_example", // String | In a query string, specifies an array of one or more keys of the metadata items. If not specified, all items of the metadata are returned. If specified, only the items that match the parameter values are returned. URL encoding each key is recommended.
  'apiToken': {{API_TOKEN}} // String | 
};
apiInstance.viewAChannelMetadataWhenRetrievingAllItemsOfAChannelMetadata(channelType, channelUrl, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelType** | **String**| (Required)  | 
 **channelUrl** | **String**| (Required)  | 
 **key** | **String**|  | [optional] 
 **keys** | **String**| In a query string, specifies an array of one or more keys of the metadata items. If not specified, all items of the metadata are returned. If specified, only the items that match the parameter values are returned. URL encoding each key is recommended. | [optional] 
 **apiToken** | **String**|  | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

