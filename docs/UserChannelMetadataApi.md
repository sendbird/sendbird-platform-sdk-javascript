# SendbirdPlatformSdk.UserChannelMetadataApi

All URIs are relative to *https://api-APP_ID.sendbird.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createChannelMetacounter**](UserChannelMetadataApi.md#createChannelMetacounter) | **POST** /v3/{channel_type}/{channel_url}/metacounter | Create a channel metacounter
[**createChannelMetadata**](UserChannelMetadataApi.md#createChannelMetadata) | **POST** /v3/{channel_type}/{channel_url}/metadata | Create a channel metadata
[**createUserMetadata**](UserChannelMetadataApi.md#createUserMetadata) | **POST** /v3/users/{user_id}/metadata | Create a user metadata
[**deleteChannelMetacounter**](UserChannelMetadataApi.md#deleteChannelMetacounter) | **DELETE** /v3/{channel_type}/{channel_url}/metacounter | Delete a channel metacounter - When deleting all items of a channel metacounter
[**deleteChannelMetacounterByKey**](UserChannelMetadataApi.md#deleteChannelMetacounterByKey) | **DELETE** /v3/{channel_type}/{channel_url}/metacounter/{key} | Delete a channel metacounter - When deleting a specific item of a channel metacounter by its key
[**deleteChannelMetadata**](UserChannelMetadataApi.md#deleteChannelMetadata) | **DELETE** /v3/{channel_type}/{channel_url}/metadata | Delete a channel metadata - When deleting all items of a channel metadata
[**deleteChannelMetadataByKey**](UserChannelMetadataApi.md#deleteChannelMetadataByKey) | **DELETE** /v3/{channel_type}/{channel_url}/metadata/{key} | Delete a channel metadata - When deleting a specific item of a channel metadata by its key
[**deleteUserMetadata**](UserChannelMetadataApi.md#deleteUserMetadata) | **DELETE** /v3/users/{user_id}/metadata | Delete a user metadata - When deleting all items of a user metadata
[**deleteUserMetadataByKey**](UserChannelMetadataApi.md#deleteUserMetadataByKey) | **DELETE** /v3/users/{user_id}/metadata/{key} | Delete a user metadata - When deleting a specific item of a user metadata by its key
[**updateChannelMetacounter**](UserChannelMetadataApi.md#updateChannelMetacounter) | **PUT** /v3/{channel_type}/{channel_url}/metacounter | Update a channel metacounter - When updating existing items of a channel metacounter by their keys or adding new items to the metacounter
[**updateChannelMetacounterByKey**](UserChannelMetadataApi.md#updateChannelMetacounterByKey) | **PUT** /v3/{channel_type}/{channel_url}/metacounter/{key} | Update a channel metacounter - When updating a specific item of a channel metacounter by its key
[**updateChannelMetadata**](UserChannelMetadataApi.md#updateChannelMetadata) | **PUT** /v3/{channel_type}/{channel_url}/metadata | Update a channel metadata - When updating existing items of a channel metadata by their keys or adding new items to the metadata
[**updateChannelMetadataByKey**](UserChannelMetadataApi.md#updateChannelMetadataByKey) | **PUT** /v3/{channel_type}/{channel_url}/metadata/{key} | Update a channel metadata - When updating a specific item of a channel metadata by its key
[**updateUserMetadata**](UserChannelMetadataApi.md#updateUserMetadata) | **PUT** /v3/users/{user_id}/metadata | Update a user metadata - When updating existing items of a user metadata by their keys or adding new items to the metadata
[**updateUserMetadataByKey**](UserChannelMetadataApi.md#updateUserMetadataByKey) | **PUT** /v3/users/{user_id}/metadata/{key} | Update a user metadata - When updating a specific item of a user metadata by its key
[**viewChannelMetacounter**](UserChannelMetadataApi.md#viewChannelMetacounter) | **GET** /v3/{channel_type}/{channel_url}/metacounter | View a channel metacounter - When retrieving all items of a channel metacounter
[**viewChannelMetacounterByKey**](UserChannelMetadataApi.md#viewChannelMetacounterByKey) | **GET** /v3/{channel_type}/{channel_url}/metacounter/{key} | View a channel metacounter - When retrieving a specific item of a channel metacounter by its key
[**viewChannelMetadata**](UserChannelMetadataApi.md#viewChannelMetadata) | **GET** /v3/{channel_type}/{channel_url}/metadata | View a channel metadata - When retrieving all items of a channel metadata
[**viewChannelMetadataByKey**](UserChannelMetadataApi.md#viewChannelMetadataByKey) | **GET** /v3/{channel_type}/{channel_url}/metadata/{key} | View a channel metadata - When retrieving a specific item of a channel metadata by its key
[**viewUserMetadata**](UserChannelMetadataApi.md#viewUserMetadata) | **GET** /v3/users/{user_id}/metadata | View a user metadata - When retrieving all items of a user metadata
[**viewUserMetadataByKey**](UserChannelMetadataApi.md#viewUserMetadataByKey) | **GET** /v3/users/{user_id}/metadata/{key} | View a user metadata - When retrieving a specific item of a user metadata by its key



## createChannelMetacounter

> {String: SendBirdAdditionalProperties} createChannelMetacounter(channelType, channelUrl, opts)

Create a channel metacounter

## Create a channel metacounter  Creates a channel metacounter&#39;s items to store in a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-create-a-channel-metacounter ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.UserChannelMetadataApi();
let channelType = "channelType_example"; // String | 
let channelUrl = "channelUrl_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'createChannelMetacounterData': new SendbirdPlatformSdk.CreateChannelMetacounterData() // CreateChannelMetacounterData | 
};
apiInstance.createChannelMetacounter(channelType, channelUrl, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelType** | **String**|  | 
 **channelUrl** | **String**|  | 
 **apiToken** | **String**|  | [optional] 
 **createChannelMetacounterData** | [**CreateChannelMetacounterData**](CreateChannelMetacounterData.md)|  | [optional] 

### Return type

[**{String: SendBirdAdditionalProperties}**](SendBirdAdditionalProperties.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createChannelMetadata

> CreateChannelMetadataResponse createChannelMetadata(channelType, channelUrl, opts)

Create a channel metadata

## Create a channel metadata  Creates a channel metadata&#39;s items to store in a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-create-a-channel-metadata ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.UserChannelMetadataApi();
let channelType = "channelType_example"; // String | 
let channelUrl = "channelUrl_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'createChannelMetadataData': new SendbirdPlatformSdk.CreateChannelMetadataData() // CreateChannelMetadataData | 
};
apiInstance.createChannelMetadata(channelType, channelUrl, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelType** | **String**|  | 
 **channelUrl** | **String**|  | 
 **apiToken** | **String**|  | [optional] 
 **createChannelMetadataData** | [**CreateChannelMetadataData**](CreateChannelMetadataData.md)|  | [optional] 

### Return type

[**CreateChannelMetadataResponse**](CreateChannelMetadataResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createUserMetadata

> CreateUserMetadataResponse createUserMetadata(userId, opts)

Create a user metadata

## Create a user metadata  Creates a user metadata&#39;s items to store in a user.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-create-a-user-metadata ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.UserChannelMetadataApi();
let userId = "userId_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'createUserMetadataData': new SendbirdPlatformSdk.CreateUserMetadataData() // CreateUserMetadataData | 
};
apiInstance.createUserMetadata(userId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**|  | 
 **apiToken** | **String**|  | [optional] 
 **createUserMetadataData** | [**CreateUserMetadataData**](CreateUserMetadataData.md)|  | [optional] 

### Return type

[**CreateUserMetadataResponse**](CreateUserMetadataResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteChannelMetacounter

> deleteChannelMetacounter(channelType, channelUrl, opts)

Delete a channel metacounter - When deleting all items of a channel metacounter

## Delete a channel metacounter  Deletes a channel metacounter&#39;s item that is stored in a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-delete-a-channel-metacounter ----------------------------   &#x60;channel_type&#x60;      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  &#x60;channel_url&#x60;      Type: string      Description: Specifies the URL of the channel which has the metacounter to delete.

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.UserChannelMetadataApi();
let channelType = "channelType_example"; // String | 
let channelUrl = "channelUrl_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}} // String | 
};
apiInstance.deleteChannelMetacounter(channelType, channelUrl, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelType** | **String**|  | 
 **channelUrl** | **String**|  | 
 **apiToken** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteChannelMetacounterByKey

> deleteChannelMetacounterByKey(channelType, channelUrl, key, opts)

Delete a channel metacounter - When deleting a specific item of a channel metacounter by its key

## Delete a channel metacounter  Deletes a channel metacounter&#39;s item that is stored in a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-delete-a-channel-metacounter ----------------------------   &#x60;channel_type&#x60;      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  &#x60;channel_url&#x60;      Type: string      Description: Specifies the URL of the channel which has the metacounter to delete.

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.UserChannelMetadataApi();
let channelType = "channelType_example"; // String | 
let channelUrl = "channelUrl_example"; // String | 
let key = "key_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}} // String | 
};
apiInstance.deleteChannelMetacounterByKey(channelType, channelUrl, key, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelType** | **String**|  | 
 **channelUrl** | **String**|  | 
 **key** | **String**|  | 
 **apiToken** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteChannelMetadata

> deleteChannelMetadata(channelType, channelUrl, opts)

Delete a channel metadata - When deleting all items of a channel metadata

## Delete a channel metadata  Deletes a channel metadata&#39;s one or all items that are stored in a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-delete-a-channel-metadata ----------------------------   &#x60;channel_type&#x60;      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  &#x60;channel_url&#x60;      Type: string      Description: Specifies the URL of the channel which has the metadata to delete.

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.UserChannelMetadataApi();
let channelType = "channelType_example"; // String | 
let channelUrl = "channelUrl_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'key': "key_example" // String | 
};
apiInstance.deleteChannelMetadata(channelType, channelUrl, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelType** | **String**|  | 
 **channelUrl** | **String**|  | 
 **apiToken** | **String**|  | [optional] 
 **key** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteChannelMetadataByKey

> deleteChannelMetadataByKey(channelType, channelUrl, key, opts)

Delete a channel metadata - When deleting a specific item of a channel metadata by its key

## Delete a channel metadata  Deletes a channel metadata&#39;s one or all items that are stored in a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-delete-a-channel-metadata ----------------------------   &#x60;channel_type&#x60;      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  &#x60;channel_url&#x60;      Type: string      Description: Specifies the URL of the channel which has the metadata to delete.

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.UserChannelMetadataApi();
let channelType = "channelType_example"; // String | 
let channelUrl = "channelUrl_example"; // String | 
let key = "key_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}} // String | 
};
apiInstance.deleteChannelMetadataByKey(channelType, channelUrl, key, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelType** | **String**|  | 
 **channelUrl** | **String**|  | 
 **key** | **String**|  | 
 **apiToken** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteUserMetadata

> deleteUserMetadata(userId, opts)

Delete a user metadata - When deleting all items of a user metadata

## Delete a user metadata  Deletes a user metadata&#39;s one or all items that are stored in a user.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-delete-a-user-metadata ----------------------------   &#x60;user_id&#x60;      Type: string      Description: Specifies the ID of the user who has the metadata to delete.

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.UserChannelMetadataApi();
let userId = "userId_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'key': "key_example" // String | 
};
apiInstance.deleteUserMetadata(userId, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**|  | 
 **apiToken** | **String**|  | [optional] 
 **key** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteUserMetadataByKey

> deleteUserMetadataByKey(userId, key, opts)

Delete a user metadata - When deleting a specific item of a user metadata by its key

## Delete a user metadata  Deletes a user metadata&#39;s one or all items that are stored in a user.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-delete-a-user-metadata ----------------------------   &#x60;user_id&#x60;      Type: string      Description: Specifies the ID of the user who has the metadata to delete.

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.UserChannelMetadataApi();
let userId = "userId_example"; // String | 
let key = "key_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}} // String | 
};
apiInstance.deleteUserMetadataByKey(userId, key, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**|  | 
 **key** | **String**|  | 
 **apiToken** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## updateChannelMetacounter

> {String: SendBirdAdditionalProperties} updateChannelMetacounter(channelType, channelUrl, opts)

Update a channel metacounter - When updating existing items of a channel metacounter by their keys or adding new items to the metacounter

## Update a channel metacounter  Updates existing items of a channel metacounter by their keys, or adds new items to the metacounter.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-update-a-channel-metacounter ----------------------------   &#x60;channel_type&#x60;      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  &#x60;channel_url&#x60;      Type: string      Description: Specifies the URL of the target channel.

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.UserChannelMetadataApi();
let channelType = "channelType_example"; // String | 
let channelUrl = "channelUrl_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'updateChannelMetacounterData': new SendbirdPlatformSdk.UpdateChannelMetacounterData() // UpdateChannelMetacounterData | 
};
apiInstance.updateChannelMetacounter(channelType, channelUrl, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelType** | **String**|  | 
 **channelUrl** | **String**|  | 
 **apiToken** | **String**|  | [optional] 
 **updateChannelMetacounterData** | [**UpdateChannelMetacounterData**](UpdateChannelMetacounterData.md)|  | [optional] 

### Return type

[**{String: SendBirdAdditionalProperties}**](SendBirdAdditionalProperties.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateChannelMetacounterByKey

> {String: String} updateChannelMetacounterByKey(channelType, channelUrl, key, opts)

Update a channel metacounter - When updating a specific item of a channel metacounter by its key

## Update a channel metacounter  Updates existing items of a channel metacounter by their keys, or adds new items to the metacounter.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-update-a-channel-metacounter ----------------------------   &#x60;channel_type&#x60;      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  &#x60;channel_url&#x60;      Type: string      Description: Specifies the URL of the target channel.

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.UserChannelMetadataApi();
let channelType = "channelType_example"; // String | 
let channelUrl = "channelUrl_example"; // String | 
let key = "key_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'body': {key: null} // Object | 
};
apiInstance.updateChannelMetacounterByKey(channelType, channelUrl, key, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelType** | **String**|  | 
 **channelUrl** | **String**|  | 
 **key** | **String**|  | 
 **apiToken** | **String**|  | [optional] 
 **body** | **Object**|  | [optional] 

### Return type

**{String: String}**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateChannelMetadata

> {String: String} updateChannelMetadata(channelType, channelUrl, opts)

Update a channel metadata - When updating existing items of a channel metadata by their keys or adding new items to the metadata

## Update a channel metadata  Updates existing items of a channel metadata by their keys, or adds new items to the metadata.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-update-a-channel-metadata ----------------------------   &#x60;channel_type&#x60;      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  &#x60;channel_url&#x60;      Type: string      Description: Specifies the URL of the target channel.

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.UserChannelMetadataApi();
let channelType = "channelType_example"; // String | 
let channelUrl = "channelUrl_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'updateChannelMetadataData': new SendbirdPlatformSdk.UpdateChannelMetadataData() // UpdateChannelMetadataData | 
};
apiInstance.updateChannelMetadata(channelType, channelUrl, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelType** | **String**|  | 
 **channelUrl** | **String**|  | 
 **apiToken** | **String**|  | [optional] 
 **updateChannelMetadataData** | [**UpdateChannelMetadataData**](UpdateChannelMetadataData.md)|  | [optional] 

### Return type

**{String: String}**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateChannelMetadataByKey

> {String: String} updateChannelMetadataByKey(channelType, channelUrl, key, opts)

Update a channel metadata - When updating a specific item of a channel metadata by its key

## Update a channel metadata  Updates existing items of a channel metadata by their keys, or adds new items to the metadata.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-update-a-channel-metadata ----------------------------   &#x60;channel_type&#x60;      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  &#x60;channel_url&#x60;      Type: string      Description: Specifies the URL of the target channel.

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.UserChannelMetadataApi();
let channelType = "channelType_example"; // String | 
let channelUrl = "channelUrl_example"; // String | 
let key = "key_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'body': {key: null} // Object | 
};
apiInstance.updateChannelMetadataByKey(channelType, channelUrl, key, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelType** | **String**|  | 
 **channelUrl** | **String**|  | 
 **key** | **String**|  | 
 **apiToken** | **String**|  | [optional] 
 **body** | **Object**|  | [optional] 

### Return type

**{String: String}**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateUserMetadata

> UpdateUserMetadataResponse updateUserMetadata(userId, opts)

Update a user metadata - When updating existing items of a user metadata by their keys or adding new items to the metadata

## Update a user metadata  Updates existing items of a user metadata by their keys, or adds new items to the metadata.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-update-a-user-metadata ----------------------------   &#x60;user_id&#x60;      Type: string      Description: Specifies the ID of the user to update the metadata in.

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.UserChannelMetadataApi();
let userId = "userId_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'updateUserMetadataData': new SendbirdPlatformSdk.UpdateUserMetadataData() // UpdateUserMetadataData | 
};
apiInstance.updateUserMetadata(userId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**|  | 
 **apiToken** | **String**|  | [optional] 
 **updateUserMetadataData** | [**UpdateUserMetadataData**](UpdateUserMetadataData.md)|  | [optional] 

### Return type

[**UpdateUserMetadataResponse**](UpdateUserMetadataResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateUserMetadataByKey

> {String: String} updateUserMetadataByKey(userId, key, opts)

Update a user metadata - When updating a specific item of a user metadata by its key

## Update a user metadata  Updates existing items of a user metadata by their keys, or adds new items to the metadata.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-update-a-user-metadata ----------------------------   &#x60;user_id&#x60;      Type: string      Description: Specifies the ID of the user to update the metadata in.

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.UserChannelMetadataApi();
let userId = "userId_example"; // String | 
let key = "key_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'body': {key: null} // Object | 
};
apiInstance.updateUserMetadataByKey(userId, key, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**|  | 
 **key** | **String**|  | 
 **apiToken** | **String**|  | [optional] 
 **body** | **Object**|  | [optional] 

### Return type

**{String: String}**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## viewChannelMetacounter

> {String: SendBirdAdditionalProperties} viewChannelMetacounter(channelType, channelUrl, opts)

View a channel metacounter - When retrieving all items of a channel metacounter

## View a channel metacounter  Retrieves channel metacounter&#39;s one or more items that are stored in a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-view-a-channel-metacounter ----------------------------   &#x60;channel_type&#x60;      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  &#x60;channel_url&#x60;      Type: string      Description: Specifies the URL of the target channel.

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.UserChannelMetadataApi();
let channelType = "channelType_example"; // String | 
let channelUrl = "channelUrl_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'key': "key_example", // String | 
  'keys': ["null"] // [String] | 
};
apiInstance.viewChannelMetacounter(channelType, channelUrl, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelType** | **String**|  | 
 **channelUrl** | **String**|  | 
 **apiToken** | **String**|  | [optional] 
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

> {String: SendBirdAdditionalProperties} viewChannelMetacounterByKey(channelType, channelUrl, key, opts)

View a channel metacounter - When retrieving a specific item of a channel metacounter by its key

## View a channel metacounter  Retrieves channel metacounter&#39;s one or more items that are stored in a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-view-a-channel-metacounter ----------------------------   &#x60;channel_type&#x60;      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  &#x60;channel_url&#x60;      Type: string      Description: Specifies the URL of the target channel.

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.UserChannelMetadataApi();
let channelType = "channelType_example"; // String | 
let channelUrl = "channelUrl_example"; // String | 
let key = "key_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}} // String | 
};
apiInstance.viewChannelMetacounterByKey(channelType, channelUrl, key, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelType** | **String**|  | 
 **channelUrl** | **String**|  | 
 **key** | **String**|  | 
 **apiToken** | **String**|  | [optional] 

### Return type

[**{String: SendBirdAdditionalProperties}**](SendBirdAdditionalProperties.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## viewChannelMetadata

> {String: String} viewChannelMetadata(channelType, channelUrl, opts)

View a channel metadata - When retrieving all items of a channel metadata

## View a channel metadata  Retrieves a channel metadata&#39;s one or more items that are stored in a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-view-a-channel-metadata ----------------------------   &#x60;channel_type&#x60;      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  &#x60;channel_url&#x60;      Type: string      Description: Specifies the URL of the target channel.

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.UserChannelMetadataApi();
let channelType = "channelType_example"; // String | 
let channelUrl = "channelUrl_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'key': "key_example", // String | 
  'keys': ["null"] // [String] | 
};
apiInstance.viewChannelMetadata(channelType, channelUrl, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelType** | **String**|  | 
 **channelUrl** | **String**|  | 
 **apiToken** | **String**|  | [optional] 
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

> {String: String} viewChannelMetadataByKey(channelType, channelUrl, key, opts)

View a channel metadata - When retrieving a specific item of a channel metadata by its key

## View a channel metadata  Retrieves a channel metadata&#39;s one or more items that are stored in a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-view-a-channel-metadata ----------------------------   &#x60;channel_type&#x60;      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  &#x60;channel_url&#x60;      Type: string      Description: Specifies the URL of the target channel.

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.UserChannelMetadataApi();
let channelType = "channelType_example"; // String | 
let channelUrl = "channelUrl_example"; // String | 
let key = "key_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}} // String | 
};
apiInstance.viewChannelMetadataByKey(channelType, channelUrl, key, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelType** | **String**|  | 
 **channelUrl** | **String**|  | 
 **key** | **String**|  | 
 **apiToken** | **String**|  | [optional] 

### Return type

**{String: String}**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## viewUserMetadata

> ViewUserMetadataResponse viewUserMetadata(userId, opts)

View a user metadata - When retrieving all items of a user metadata

## View a user metadata  Retrieves a user metadata&#39;s one or more items that are stored in a user.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-view-a-user-metadata ----------------------------   &#x60;user_id&#x60;      Type: string      Description: Specifies the ID of the user to retrieve the metadata in.

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.UserChannelMetadataApi();
let userId = "userId_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'key': "key_example", // String | 
  'keys': ["null"] // [String] | 
};
apiInstance.viewUserMetadata(userId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**|  | 
 **apiToken** | **String**|  | [optional] 
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

> {String: String} viewUserMetadataByKey(userId, key, opts)

View a user metadata - When retrieving a specific item of a user metadata by its key

## View a user metadata  Retrieves a user metadata&#39;s one or more items that are stored in a user.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-view-a-user-metadata ----------------------------   &#x60;user_id&#x60;      Type: string      Description: Specifies the ID of the user to retrieve the metadata in.

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.UserChannelMetadataApi();
let userId = "userId_example"; // String | 
let key = "key_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}} // String | 
};
apiInstance.viewUserMetadataByKey(userId, key, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**|  | 
 **key** | **String**|  | 
 **apiToken** | **String**|  | [optional] 

### Return type

**{String: String}**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

