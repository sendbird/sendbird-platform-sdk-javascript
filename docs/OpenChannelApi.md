# SendbirdPlatformSdk.OpenChannelApi

All URIs are relative to *https://api-APP_ID.sendbird.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ocBanUser**](OpenChannelApi.md#ocBanUser) | **POST** /v3/open_channels/{channel_url}/ban | Ban a user
[**ocCancelTheRegistrationOfOperators**](OpenChannelApi.md#ocCancelTheRegistrationOfOperators) | **DELETE** /v3/open_channels/{channel_url}/operators | Cancel the registration of operators
[**ocCreateChannel**](OpenChannelApi.md#ocCreateChannel) | **POST** /v3/open_channels | Create a channel
[**ocDeleteChannelByUrl**](OpenChannelApi.md#ocDeleteChannelByUrl) | **DELETE** /v3/open_channels/{channel_url} | Delete a channel
[**ocFreezeChannel**](OpenChannelApi.md#ocFreezeChannel) | **PUT** /v3/open_channels/{channel_url}/freeze | Freeze a channel
[**ocListBannedUsers**](OpenChannelApi.md#ocListBannedUsers) | **GET** /v3/open_channels/{channel_url}/ban | List banned users
[**ocListChannels**](OpenChannelApi.md#ocListChannels) | **GET** /v3/open_channels | List channels
[**ocListMutedUsers**](OpenChannelApi.md#ocListMutedUsers) | **GET** /v3/open_channels/{channel_url}/mute | List muted users
[**ocListOperators**](OpenChannelApi.md#ocListOperators) | **GET** /v3/open_channels/{channel_url}/operators | List operators
[**ocListParticipants**](OpenChannelApi.md#ocListParticipants) | **GET** /v3/open_channels/{channel_url}/participants | List participants
[**ocMuteUser**](OpenChannelApi.md#ocMuteUser) | **POST** /v3/open_channels/{channel_url}/mute | Mute a user
[**ocRegisterOperators**](OpenChannelApi.md#ocRegisterOperators) | **POST** /v3/open_channels/{channel_url}/operators | Register operators
[**ocUnbanUserById**](OpenChannelApi.md#ocUnbanUserById) | **DELETE** /v3/open_channels/{channel_url}/ban/{banned_user_id} | Unban a user
[**ocUnmuteUserById**](OpenChannelApi.md#ocUnmuteUserById) | **DELETE** /v3/open_channels/{channel_url}/mute/{muted_user_id} | Unmute a user
[**ocUpdateBanById**](OpenChannelApi.md#ocUpdateBanById) | **PUT** /v3/open_channels/{channel_url}/ban/{banned_user_id} | Update a ban
[**ocUpdateChannelByUrl**](OpenChannelApi.md#ocUpdateChannelByUrl) | **PUT** /v3/open_channels/{channel_url} | Update a channel
[**ocViewBanById**](OpenChannelApi.md#ocViewBanById) | **GET** /v3/open_channels/{channel_url}/ban/{banned_user_id} | View a ban
[**ocViewChannelByUrl**](OpenChannelApi.md#ocViewChannelByUrl) | **GET** /v3/open_channels/{channel_url} | View a channel
[**ocViewMuteById**](OpenChannelApi.md#ocViewMuteById) | **GET** /v3/open_channels/{channel_url}/mute/{muted_user_id} | View a mute



## ocBanUser

> InlineResponse20034BannedList ocBanUser(channelUrl, opts)

Ban a user

## Ban a user  Bans a user from an open channel. A banned user is immediately expelled from a channel and allowed to participate in the channel again after a set time period.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-ban-a-user ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.OpenChannelApi();
let channelUrl = "channelUrl_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'ocBanUserData': new SendbirdPlatformSdk.OcBanUserData() // OcBanUserData | 
};
apiInstance.ocBanUser(channelUrl, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelUrl** | **String**|  | 
 **apiToken** | **String**|  | [optional] 
 **ocBanUserData** | [**OcBanUserData**](OcBanUserData.md)|  | [optional] 

### Return type

[**InlineResponse20034BannedList**](InlineResponse20034BannedList.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## ocCancelTheRegistrationOfOperators

> ocCancelTheRegistrationOfOperators(channelUrl, operatorIds, opts)

Cancel the registration of operators

## Cancel the registration of operators  Cancels the registration of operators from an open channel but leave them as participants.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-cancel-the-registration-of-operators ----------------------------   &#x60;channel_url&#x60;      Type: string      Description: Specifies the URL of the channel to cancel the registration of operators.

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.OpenChannelApi();
let channelUrl = "channelUrl_example"; // String | 
let operatorIds = ["null"]; // [String] | 
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'deleteAll': true // Boolean | 
};
apiInstance.ocCancelTheRegistrationOfOperators(channelUrl, operatorIds, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelUrl** | **String**|  | 
 **operatorIds** | [**[String]**](String.md)|  | 
 **apiToken** | **String**|  | [optional] 
 **deleteAll** | **Boolean**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## ocCreateChannel

> SendBirdOpenChannel ocCreateChannel(opts)

Create a channel

## Create a channel  Creates an open channel.  &gt;__Note__: Classic open channels created before the deprecation date of March 2021 will maintain their original form and functions. However, new applications created after December 15, 2020, will be able to create dynamic partitioning open channels only.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-create-a-channel

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.OpenChannelApi();
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'ocCreateChannelData': new SendbirdPlatformSdk.OcCreateChannelData() // OcCreateChannelData | 
};
apiInstance.ocCreateChannel(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | **String**|  | [optional] 
 **ocCreateChannelData** | [**OcCreateChannelData**](OcCreateChannelData.md)|  | [optional] 

### Return type

[**SendBirdOpenChannel**](SendBirdOpenChannel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## ocDeleteChannelByUrl

> ocDeleteChannelByUrl(channelUrl, opts)

Delete a channel

## Delete a channel  Deletes an open channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-delete-a-channel ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.OpenChannelApi();
let channelUrl = "channelUrl_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}} // String | 
};
apiInstance.ocDeleteChannelByUrl(channelUrl, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelUrl** | **String**|  | 
 **apiToken** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## ocFreezeChannel

> SendBirdOpenChannel ocFreezeChannel(channelUrl, opts)

Freeze a channel

## Freeze a channel  Freezes or unfreezes an open channel.  &gt; __Note__: Only users designated as channel operators are allowed to talk when a channel is frozen.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-freeze-a-channel ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.OpenChannelApi();
let channelUrl = "channelUrl_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'ocFreezeChannelData': new SendbirdPlatformSdk.OcFreezeChannelData() // OcFreezeChannelData | 
};
apiInstance.ocFreezeChannel(channelUrl, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelUrl** | **String**|  | 
 **apiToken** | **String**|  | [optional] 
 **ocFreezeChannelData** | [**OcFreezeChannelData**](OcFreezeChannelData.md)|  | [optional] 

### Return type

[**SendBirdOpenChannel**](SendBirdOpenChannel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## ocListBannedUsers

> InlineResponse20034 ocListBannedUsers(channelUrl, opts)

List banned users

## List banned users  Retrieves a list of banned users from a specific open channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-list-banned-users ----------------------------   &#x60;channel_url&#x60;      Type: string      Description: Specifies the URL of the channel where to retrieve a list of banned users.

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.OpenChannelApi();
let channelUrl = "channelUrl_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'token': "token_example", // String | 
  'limit': 56 // Number | 
};
apiInstance.ocListBannedUsers(channelUrl, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelUrl** | **String**|  | 
 **apiToken** | **String**|  | [optional] 
 **token** | **String**|  | [optional] 
 **limit** | **Number**|  | [optional] 

### Return type

[**InlineResponse20034**](InlineResponse20034.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## ocListChannels

> InlineResponse20031 ocListChannels(opts)

List channels

## List channels  Retrieves a list of open channels. You can query the list using various parameters.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-list-channels ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.OpenChannelApi();
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'token': "token_example", // String | 
  'limit': 56, // Number | 
  'customTypes': "customTypes_example", // String | 
  'nameContains': "nameContains_example", // String | 
  'urlContains': "urlContains_example", // String | 
  'showFrozen': true, // Boolean | 
  'showMetadata': true, // Boolean | 
  'customType': "customType_example" // String | 
};
apiInstance.ocListChannels(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | **String**|  | [optional] 
 **token** | **String**|  | [optional] 
 **limit** | **Number**|  | [optional] 
 **customTypes** | **String**|  | [optional] 
 **nameContains** | **String**|  | [optional] 
 **urlContains** | **String**|  | [optional] 
 **showFrozen** | **Boolean**|  | [optional] 
 **showMetadata** | **Boolean**|  | [optional] 
 **customType** | **String**|  | [optional] 

### Return type

[**InlineResponse20031**](InlineResponse20031.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## ocListMutedUsers

> InlineResponse20032 ocListMutedUsers(channelUrl, opts)

List muted users

## List muted users  Retrieves a list of muted users in the channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-list-muted-users ----------------------------   &#x60;channel_url&#x60;      Type: string      Description: Specifies the URL of the channel to retrieve a list of muted users.

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.OpenChannelApi();
let channelUrl = "channelUrl_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'token': "token_example", // String | 
  'limit': 56 // Number | 
};
apiInstance.ocListMutedUsers(channelUrl, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelUrl** | **String**|  | 
 **apiToken** | **String**|  | [optional] 
 **token** | **String**|  | [optional] 
 **limit** | **Number**|  | [optional] 

### Return type

[**InlineResponse20032**](InlineResponse20032.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## ocListOperators

> InlineResponse20035 ocListOperators(channelUrl, opts)

List operators

## List operators  Retrieves a list of operators of an open channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-list-operators ----------------------------   &#x60;channel_url&#x60;      Type: string      Description: Specifies the URL of the channel to retrieve a list of operators.

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.OpenChannelApi();
let channelUrl = "channelUrl_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'token': "token_example", // String | 
  'limit': 56 // Number | 
};
apiInstance.ocListOperators(channelUrl, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelUrl** | **String**|  | 
 **apiToken** | **String**|  | [optional] 
 **token** | **String**|  | [optional] 
 **limit** | **Number**|  | [optional] 

### Return type

[**InlineResponse20035**](InlineResponse20035.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## ocListParticipants

> InlineResponse20033 ocListParticipants(channelUrl, opts)

List participants

## List participants  Retrieves a list of the participants of an open channel. A participant refers to a user who has entered the open channel and is currently online.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-list-participants ----------------------------   &#x60;channel_url&#x60;      Type: string      Description: Specifies the URL of the channel to retrieve a list of participants in.

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.OpenChannelApi();
let channelUrl = "channelUrl_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'token': "token_example", // String | 
  'limit': 56 // Number | 
};
apiInstance.ocListParticipants(channelUrl, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelUrl** | **String**|  | 
 **apiToken** | **String**|  | [optional] 
 **token** | **String**|  | [optional] 
 **limit** | **Number**|  | [optional] 

### Return type

[**InlineResponse20033**](InlineResponse20033.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## ocMuteUser

> SendBirdOpenChannel ocMuteUser(channelUrl, opts)

Mute a user

## Mute a user  Mutes a user in the channel. A muted user remains in the channel and is allowed to view the messages, but can&#39;t send any messages until unmuted.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-mute-a-user

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.OpenChannelApi();
let channelUrl = "channelUrl_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'ocMuteUserData': new SendbirdPlatformSdk.OcMuteUserData() // OcMuteUserData | 
};
apiInstance.ocMuteUser(channelUrl, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelUrl** | **String**|  | 
 **apiToken** | **String**|  | [optional] 
 **ocMuteUserData** | [**OcMuteUserData**](OcMuteUserData.md)|  | [optional] 

### Return type

[**SendBirdOpenChannel**](SendBirdOpenChannel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## ocRegisterOperators

> ocRegisterOperators(channelUrl, opts)

Register operators

## Register operators  Registers one or more operators to an open channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-register-operators ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.OpenChannelApi();
let channelUrl = "channelUrl_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'ocRegisterOperatorsData': new SendbirdPlatformSdk.OcRegisterOperatorsData() // OcRegisterOperatorsData | 
};
apiInstance.ocRegisterOperators(channelUrl, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelUrl** | **String**|  | 
 **apiToken** | **String**|  | [optional] 
 **ocRegisterOperatorsData** | [**OcRegisterOperatorsData**](OcRegisterOperatorsData.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## ocUnbanUserById

> ocUnbanUserById(channelUrl, bannedUserId, opts)

Unban a user

## Unban a user  Unbans a user from an open channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-unban-a-user ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.OpenChannelApi();
let channelUrl = "channelUrl_example"; // String | 
let bannedUserId = "bannedUserId_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}} // String | 
};
apiInstance.ocUnbanUserById(channelUrl, bannedUserId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelUrl** | **String**|  | 
 **bannedUserId** | **String**|  | 
 **apiToken** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## ocUnmuteUserById

> ocUnmuteUserById(channelUrl, mutedUserId, opts)

Unmute a user

## Unmute a user  Unmutes a user from an open channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-unmute-a-user ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.OpenChannelApi();
let channelUrl = "channelUrl_example"; // String | 
let mutedUserId = "mutedUserId_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}} // String | 
};
apiInstance.ocUnmuteUserById(channelUrl, mutedUserId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelUrl** | **String**|  | 
 **mutedUserId** | **String**|  | 
 **apiToken** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## ocUpdateBanById

> SendBirdUser ocUpdateBanById(channelUrl, bannedUserId, opts)

Update a ban

## Update a ban  Updates details of a ban imposed on a user. You can change the length of a ban with this action, and also provide an updated description.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-update-a-ban ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.OpenChannelApi();
let channelUrl = "channelUrl_example"; // String | 
let bannedUserId = "bannedUserId_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'ocUpdateBanByIdData': new SendbirdPlatformSdk.OcUpdateBanByIdData() // OcUpdateBanByIdData | 
};
apiInstance.ocUpdateBanById(channelUrl, bannedUserId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelUrl** | **String**|  | 
 **bannedUserId** | **String**|  | 
 **apiToken** | **String**|  | [optional] 
 **ocUpdateBanByIdData** | [**OcUpdateBanByIdData**](OcUpdateBanByIdData.md)|  | [optional] 

### Return type

[**SendBirdUser**](SendBirdUser.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## ocUpdateChannelByUrl

> SendBirdOpenChannel ocUpdateChannelByUrl(channelUrl, opts)

Update a channel

## Update a channel  Updates information on an open channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-update-a-channel ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.OpenChannelApi();
let channelUrl = "channelUrl_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'ocUpdateChannelByUrlData': new SendbirdPlatformSdk.OcUpdateChannelByUrlData() // OcUpdateChannelByUrlData | 
};
apiInstance.ocUpdateChannelByUrl(channelUrl, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelUrl** | **String**|  | 
 **apiToken** | **String**|  | [optional] 
 **ocUpdateChannelByUrlData** | [**OcUpdateChannelByUrlData**](OcUpdateChannelByUrlData.md)|  | [optional] 

### Return type

[**SendBirdOpenChannel**](SendBirdOpenChannel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## ocViewBanById

> SendBirdUser ocViewBanById(channelUrl, bannedUserId, opts)

View a ban

## View a ban  Retrieves details of a ban imposed on a user.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-view-a-ban ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.OpenChannelApi();
let channelUrl = "channelUrl_example"; // String | 
let bannedUserId = "bannedUserId_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}} // String | 
};
apiInstance.ocViewBanById(channelUrl, bannedUserId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelUrl** | **String**|  | 
 **bannedUserId** | **String**|  | 
 **apiToken** | **String**|  | [optional] 

### Return type

[**SendBirdUser**](SendBirdUser.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## ocViewChannelByUrl

> SendBirdOpenChannel ocViewChannelByUrl(channelUrl, opts)

View a channel

## View a channel  Retrieves information on a specific open channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-view-a-channel ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.OpenChannelApi();
let channelUrl = "channelUrl_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}} // String | 
};
apiInstance.ocViewChannelByUrl(channelUrl, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelUrl** | **String**|  | 
 **apiToken** | **String**|  | [optional] 

### Return type

[**SendBirdOpenChannel**](SendBirdOpenChannel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## ocViewMuteById

> InlineResponse20036 ocViewMuteById(channelUrl, mutedUserId, opts)

View a mute

## View a mute  Checks if a user is muted in an open channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-view-a-mute ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.OpenChannelApi();
let channelUrl = "channelUrl_example"; // String | 
let mutedUserId = "mutedUserId_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}} // String | 
};
apiInstance.ocViewMuteById(channelUrl, mutedUserId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelUrl** | **String**|  | 
 **mutedUserId** | **String**|  | 
 **apiToken** | **String**|  | [optional] 

### Return type

[**InlineResponse20036**](InlineResponse20036.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

