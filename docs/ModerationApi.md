# SendbirdPlatformSdk.ModerationApi

All URIs are relative to *https://api-APP_ID.sendbird.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**banFromChannelsWithCustomChannelTypes**](ModerationApi.md#banFromChannelsWithCustomChannelTypes) | **POST** /v3/users/{user_id}/banned_channel_custom_types | Ban from channels with custom channel types
[**blockUser**](ModerationApi.md#blockUser) | **POST** /v3/users/{user_id}/block | Block a user
[**gcBanUser**](ModerationApi.md#gcBanUser) | **POST** /v3/group_channels/{channel_url}/ban | Ban a user
[**gcFreezeChannel**](ModerationApi.md#gcFreezeChannel) | **PUT** /v3/group_channels/{channel_url}/freeze | Freeze a channel
[**gcListBannedUsers**](ModerationApi.md#gcListBannedUsers) | **GET** /v3/group_channels/{channel_url}/ban | List banned users
[**gcListMutedUsers**](ModerationApi.md#gcListMutedUsers) | **GET** /v3/group_channels/{channel_url}/mute | List muted users
[**gcMuteUser**](ModerationApi.md#gcMuteUser) | **POST** /v3/group_channels/{channel_url}/mute | Mute a user
[**gcUnbanUserById**](ModerationApi.md#gcUnbanUserById) | **DELETE** /v3/group_channels/{channel_url}/ban/{banned_user_id} | Unban a user
[**gcUnmuteUserById**](ModerationApi.md#gcUnmuteUserById) | **DELETE** /v3/group_channels/{channel_url}/mute/{muted_user_id} | Unmute a user
[**gcUpdateBanById**](ModerationApi.md#gcUpdateBanById) | **PUT** /v3/group_channels/{channel_url}/ban/{banned_user_id} | Update a ban
[**gcViewBanById**](ModerationApi.md#gcViewBanById) | **GET** /v3/group_channels/{channel_url}/ban/{banned_user_id} | View a ban
[**gcViewMuteById**](ModerationApi.md#gcViewMuteById) | **GET** /v3/group_channels/{channel_url}/mute/{muted_user_id} | View a mute
[**listBannedChannels**](ModerationApi.md#listBannedChannels) | **GET** /v3/users/{user_id}/ban | List banned channels
[**listBlockedUsers**](ModerationApi.md#listBlockedUsers) | **GET** /v3/users/{user_id}/block | List blocked users
[**listMutedChannels**](ModerationApi.md#listMutedChannels) | **GET** /v3/users/{user_id}/mute | List muted channels
[**muteInChannelsWithCustomChannelTypes**](ModerationApi.md#muteInChannelsWithCustomChannelTypes) | **POST** /v3/users/{user_id}/muted_channel_custom_types | Mute in channels with custom channel types
[**ocBanUser**](ModerationApi.md#ocBanUser) | **POST** /v3/open_channels/{channel_url}/ban | Ban a user
[**ocFreezeChannel**](ModerationApi.md#ocFreezeChannel) | **PUT** /v3/open_channels/{channel_url}/freeze | Freeze a channel
[**ocListBannedUsers**](ModerationApi.md#ocListBannedUsers) | **GET** /v3/open_channels/{channel_url}/ban | List banned users
[**ocListMutedUsers**](ModerationApi.md#ocListMutedUsers) | **GET** /v3/open_channels/{channel_url}/mute | List muted users
[**ocMuteUser**](ModerationApi.md#ocMuteUser) | **POST** /v3/open_channels/{channel_url}/mute | Mute a user
[**ocUnbanUserById**](ModerationApi.md#ocUnbanUserById) | **DELETE** /v3/open_channels/{channel_url}/ban/{banned_user_id} | Unban a user
[**ocUnmuteUserById**](ModerationApi.md#ocUnmuteUserById) | **DELETE** /v3/open_channels/{channel_url}/mute/{muted_user_id} | Unmute a user
[**ocUpdateBanById**](ModerationApi.md#ocUpdateBanById) | **PUT** /v3/open_channels/{channel_url}/ban/{banned_user_id} | Update a ban
[**ocViewBanById**](ModerationApi.md#ocViewBanById) | **GET** /v3/open_channels/{channel_url}/ban/{banned_user_id} | View a ban
[**ocViewMuteById**](ModerationApi.md#ocViewMuteById) | **GET** /v3/open_channels/{channel_url}/mute/{muted_user_id} | View a mute
[**unblockUserById**](ModerationApi.md#unblockUserById) | **DELETE** /v3/users/{user_id}/block/{target_id} | Unblock a user



## banFromChannelsWithCustomChannelTypes

> Object banFromChannelsWithCustomChannelTypes(apiToken, userId, opts)

Ban from channels with custom channel types

## Ban from channels with custom channel types  Bans a user from channels with particular custom channel types.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-ban-from-channels-with-custom-channel-types ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.ModerationApi();
let apiToken = {{API_TOKEN}}; // String | 
let userId = "userId_example"; // String | 
let opts = {
  'banFromChannelsWithCustomChannelTypesData': new SendbirdPlatformSdk.BanFromChannelsWithCustomChannelTypesData() // BanFromChannelsWithCustomChannelTypesData | 
};
apiInstance.banFromChannelsWithCustomChannelTypes(apiToken, userId, opts).then((data) => {
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
 **banFromChannelsWithCustomChannelTypesData** | [**BanFromChannelsWithCustomChannelTypesData**](BanFromChannelsWithCustomChannelTypesData.md)|  | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## blockUser

> BlockUserResponse blockUser(apiToken, userId, opts)

Block a user

## Block a user  Allows a user to block another user. A user doesn&#39;t receive messages from someone they have blocked anymore. Also, blocking someone doesn&#39;t alert them that they have been blocked. Blocked users still can send messages as normal in the channel: however, they can&#39;t receive any messages from the users who have blocked them.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-block-a-user ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.ModerationApi();
let apiToken = {{API_TOKEN}}; // String | 
let userId = "userId_example"; // String | 
let opts = {
  'blockUserData': new SendbirdPlatformSdk.BlockUserData() // BlockUserData | 
};
apiInstance.blockUser(apiToken, userId, opts).then((data) => {
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
 **blockUserData** | [**BlockUserData**](BlockUserData.md)|  | [optional] 

### Return type

[**BlockUserResponse**](BlockUserResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## gcBanUser

> GcBanUserResponse gcBanUser(apiToken, channelUrl, opts)

Ban a user

## Ban a user  Bans a user from a group channel. A banned user is immediately expelled from a channel and allowed to join the channel again after a set time period.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-ban-a-user ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.ModerationApi();
let apiToken = {{API_TOKEN}}; // String | 
let channelUrl = "channelUrl_example"; // String | 
let opts = {
  'gcBanUserData': new SendbirdPlatformSdk.GcBanUserData() // GcBanUserData | 
};
apiInstance.gcBanUser(apiToken, channelUrl, opts).then((data) => {
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
 **gcBanUserData** | [**GcBanUserData**](GcBanUserData.md)|  | [optional] 

### Return type

[**GcBanUserResponse**](GcBanUserResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## gcFreezeChannel

> SendBirdGroupChannel gcFreezeChannel(apiToken, channelUrl, opts)

Freeze a channel

## Freeze a channel  Freezes or unfreezes a group channel.  &gt; __Note__: Only users designated as channel operators are allowed to talk when a channel is frozen.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-freeze-a-channel ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.ModerationApi();
let apiToken = {{API_TOKEN}}; // String | 
let channelUrl = "channelUrl_example"; // String | 
let opts = {
  'gcFreezeChannelData': new SendbirdPlatformSdk.GcFreezeChannelData() // GcFreezeChannelData | 
};
apiInstance.gcFreezeChannel(apiToken, channelUrl, opts).then((data) => {
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
 **gcFreezeChannelData** | [**GcFreezeChannelData**](GcFreezeChannelData.md)|  | [optional] 

### Return type

[**SendBirdGroupChannel**](SendBirdGroupChannel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## gcListBannedUsers

> GcListBannedUsersResponse gcListBannedUsers(apiToken, channelUrl, opts)

List banned users

## List banned users  Retrieves a list of the banned users from a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-list-banned-users ----------------------------   &#x60;channel_url&#x60;      Type: string      Description: Specifies the URL of the channel where to retrieve a list of banned users.

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.ModerationApi();
let apiToken = {{API_TOKEN}}; // String | 
let channelUrl = "channelUrl_example"; // String | 
let opts = {
  'token': "token_example", // String | 
  'limit': 56 // Number | 
};
apiInstance.gcListBannedUsers(apiToken, channelUrl, opts).then((data) => {
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

[**GcListBannedUsersResponse**](GcListBannedUsersResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gcListMutedUsers

> GcListMutedUsersResponse gcListMutedUsers(apiToken, channelUrl, opts)

List muted users

## List muted users  Retrieves a list of the muted users in a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-list-muted-users ----------------------------   &#x60;channel_url&#x60;      Type: string      Description: Specifies the URL of the channel to retrieve a list of muted users.

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.ModerationApi();
let apiToken = {{API_TOKEN}}; // String | 
let channelUrl = "channelUrl_example"; // String | 
let opts = {
  'token': "token_example", // String | 
  'limit': 56 // Number | 
};
apiInstance.gcListMutedUsers(apiToken, channelUrl, opts).then((data) => {
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

[**GcListMutedUsersResponse**](GcListMutedUsersResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gcMuteUser

> SendBirdGroupChannel gcMuteUser(apiToken, channelUrl, opts)

Mute a user

## Mute a user  Mutes a user in a group channel. A muted user remains in the channel and is allowed to view the messages, but can&#39;t send any messages until unmuted.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-mute-a-user ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.ModerationApi();
let apiToken = {{API_TOKEN}}; // String | 
let channelUrl = "channelUrl_example"; // String | 
let opts = {
  'gcMuteUserData': new SendbirdPlatformSdk.GcMuteUserData() // GcMuteUserData | 
};
apiInstance.gcMuteUser(apiToken, channelUrl, opts).then((data) => {
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
 **gcMuteUserData** | [**GcMuteUserData**](GcMuteUserData.md)|  | [optional] 

### Return type

[**SendBirdGroupChannel**](SendBirdGroupChannel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## gcUnbanUserById

> OcDeleteChannelByUrl200Response gcUnbanUserById(apiToken, channelUrl, bannedUserId)

Unban a user

## Unban a user  Unbans a user from a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-unban-a-user ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.ModerationApi();
let apiToken = {{API_TOKEN}}; // String | 
let channelUrl = "channelUrl_example"; // String | 
let bannedUserId = "bannedUserId_example"; // String | 
apiInstance.gcUnbanUserById(apiToken, channelUrl, bannedUserId).then((data) => {
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
 **bannedUserId** | **String**|  | 

### Return type

[**OcDeleteChannelByUrl200Response**](OcDeleteChannelByUrl200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gcUnmuteUserById

> OcDeleteChannelByUrl200Response gcUnmuteUserById(apiToken, channelUrl, mutedUserId)

Unmute a user

## Unmute a user  Unmutes a user within a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-unmute-a-user ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.ModerationApi();
let apiToken = {{API_TOKEN}}; // String | 
let channelUrl = "channelUrl_example"; // String | 
let mutedUserId = "mutedUserId_example"; // String | 
apiInstance.gcUnmuteUserById(apiToken, channelUrl, mutedUserId).then((data) => {
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
 **mutedUserId** | **String**|  | 

### Return type

[**OcDeleteChannelByUrl200Response**](OcDeleteChannelByUrl200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gcUpdateBanById

> GcUpdateBanByIdResponse gcUpdateBanById(apiToken, channelUrl, bannedUserId, opts)

Update a ban

## Update a ban  Updates details of a ban imposed on a user. You can change the length of the ban with this action, and also provide an updated description.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-update-a-ban ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.ModerationApi();
let apiToken = {{API_TOKEN}}; // String | 
let channelUrl = "channelUrl_example"; // String | 
let bannedUserId = "bannedUserId_example"; // String | 
let opts = {
  'gcUpdateBanByIdData': new SendbirdPlatformSdk.GcUpdateBanByIdData() // GcUpdateBanByIdData | 
};
apiInstance.gcUpdateBanById(apiToken, channelUrl, bannedUserId, opts).then((data) => {
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
 **bannedUserId** | **String**|  | 
 **gcUpdateBanByIdData** | [**GcUpdateBanByIdData**](GcUpdateBanByIdData.md)|  | [optional] 

### Return type

[**GcUpdateBanByIdResponse**](GcUpdateBanByIdResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## gcViewBanById

> GcViewBanByIdResponse gcViewBanById(apiToken, channelUrl, bannedUserId)

View a ban

## View a ban  Retrieves details of a ban imposed on a user.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-view-a-ban ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.ModerationApi();
let apiToken = {{API_TOKEN}}; // String | 
let channelUrl = "channelUrl_example"; // String | 
let bannedUserId = "bannedUserId_example"; // String | 
apiInstance.gcViewBanById(apiToken, channelUrl, bannedUserId).then((data) => {
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
 **bannedUserId** | **String**|  | 

### Return type

[**GcViewBanByIdResponse**](GcViewBanByIdResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gcViewMuteById

> GcViewMuteByIdResponse gcViewMuteById(apiToken, channelUrl, mutedUserId)

View a mute

## View a mute  Checks if a user is muted in a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-view-a-mute ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.ModerationApi();
let apiToken = {{API_TOKEN}}; // String | 
let channelUrl = "channelUrl_example"; // String | 
let mutedUserId = "mutedUserId_example"; // String | 
apiInstance.gcViewMuteById(apiToken, channelUrl, mutedUserId).then((data) => {
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
 **mutedUserId** | **String**|  | 

### Return type

[**GcViewMuteByIdResponse**](GcViewMuteByIdResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listBannedChannels

> ListBannedChannelsResponse listBannedChannels(apiToken, userId, opts)

List banned channels

## List banned channels  Retrieves a list of open and group channels with additional information where a user is banned.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-list-banned-channels ----------------------------   &#x60;user_id&#x60;      Type: string      Description: Specifies the unique ID of the target user.

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.ModerationApi();
let apiToken = {{API_TOKEN}}; // String | 
let userId = "userId_example"; // String | 
let opts = {
  'token': "token_example", // String | 
  'limit': 56 // Number | 
};
apiInstance.listBannedChannels(apiToken, userId, opts).then((data) => {
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
 **token** | **String**|  | [optional] 
 **limit** | **Number**|  | [optional] 

### Return type

[**ListBannedChannelsResponse**](ListBannedChannelsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listBlockedUsers

> ListBlockedUsersResponse listBlockedUsers(apiToken, userId, opts)

List blocked users

## List blocked users  Retrieves a list of other users that a user has blocked.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-list-blocked-users ----------------------------   &#x60;user_id&#x60;      Type: string      Description: Specifies the unique ID of the target user.

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.ModerationApi();
let apiToken = {{API_TOKEN}}; // String | 
let userId = "userId_example"; // String | 
let opts = {
  'token': "token_example", // String | 
  'limit': 56, // Number | 
  'userIds': "userIds_example", // String | 
  'metadatakey': "metadatakey_example", // String | 
  'metadatavaluesIn': "metadatavaluesIn_example" // String | 
};
apiInstance.listBlockedUsers(apiToken, userId, opts).then((data) => {
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
 **token** | **String**|  | [optional] 
 **limit** | **Number**|  | [optional] 
 **userIds** | **String**|  | [optional] 
 **metadatakey** | **String**|  | [optional] 
 **metadatavaluesIn** | **String**|  | [optional] 

### Return type

[**ListBlockedUsersResponse**](ListBlockedUsersResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listMutedChannels

> ListMutedChannelsResponse listMutedChannels(apiToken, userId, opts)

List muted channels

## List muted channels  Retrieves a list of open and group channels with additional information where a user is muted.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-list-muted-channels ----------------------------   &#x60;user_id&#x60;      Type: string      Description: Specifies the unique ID of the target user.

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.ModerationApi();
let apiToken = {{API_TOKEN}}; // String | 
let userId = "userId_example"; // String | 
let opts = {
  'token': "token_example", // String | 
  'limit': 56 // Number | 
};
apiInstance.listMutedChannels(apiToken, userId, opts).then((data) => {
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
 **token** | **String**|  | [optional] 
 **limit** | **Number**|  | [optional] 

### Return type

[**ListMutedChannelsResponse**](ListMutedChannelsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## muteInChannelsWithCustomChannelTypes

> Object muteInChannelsWithCustomChannelTypes(apiToken, userId, opts)

Mute in channels with custom channel types

## Mute in channels with custom channel types  Mutes a user in channels with particular custom channel types.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-mute-in-channels-with-custom-channel-types ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.ModerationApi();
let apiToken = {{API_TOKEN}}; // String | 
let userId = "userId_example"; // String | 
let opts = {
  'muteInChannelsWithCustomChannelTypesData': new SendbirdPlatformSdk.MuteInChannelsWithCustomChannelTypesData() // MuteInChannelsWithCustomChannelTypesData | 
};
apiInstance.muteInChannelsWithCustomChannelTypes(apiToken, userId, opts).then((data) => {
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
 **muteInChannelsWithCustomChannelTypesData** | [**MuteInChannelsWithCustomChannelTypesData**](MuteInChannelsWithCustomChannelTypesData.md)|  | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## ocBanUser

> OcBanUserResponse ocBanUser(apiToken, channelUrl, opts)

Ban a user

## Ban a user  Bans a user from an open channel. A banned user is immediately expelled from a channel and allowed to participate in the channel again after a set time period.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-ban-a-user ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.ModerationApi();
let apiToken = {{API_TOKEN}}; // String | 
let channelUrl = "channelUrl_example"; // String | 
let opts = {
  'ocBanUserData': new SendbirdPlatformSdk.OcBanUserData() // OcBanUserData | 
};
apiInstance.ocBanUser(apiToken, channelUrl, opts).then((data) => {
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
 **ocBanUserData** | [**OcBanUserData**](OcBanUserData.md)|  | [optional] 

### Return type

[**OcBanUserResponse**](OcBanUserResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## ocFreezeChannel

> SendBirdOpenChannel ocFreezeChannel(apiToken, channelUrl, opts)

Freeze a channel

## Freeze a channel  Freezes or unfreezes an open channel.  &gt; __Note__: Only users designated as channel operators are allowed to talk when a channel is frozen.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-freeze-a-channel ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.ModerationApi();
let apiToken = {{API_TOKEN}}; // String | 
let channelUrl = "channelUrl_example"; // String | 
let opts = {
  'ocFreezeChannelData': new SendbirdPlatformSdk.OcFreezeChannelData() // OcFreezeChannelData | 
};
apiInstance.ocFreezeChannel(apiToken, channelUrl, opts).then((data) => {
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
 **ocFreezeChannelData** | [**OcFreezeChannelData**](OcFreezeChannelData.md)|  | [optional] 

### Return type

[**SendBirdOpenChannel**](SendBirdOpenChannel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## ocListBannedUsers

> OcListBannedUsersResponse ocListBannedUsers(apiToken, channelUrl, opts)

List banned users

## List banned users  Retrieves a list of banned users from a specific open channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-list-banned-users ----------------------------   &#x60;channel_url&#x60;      Type: string      Description: Specifies the URL of the channel where to retrieve a list of banned users.

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.ModerationApi();
let apiToken = {{API_TOKEN}}; // String | 
let channelUrl = "channelUrl_example"; // String | 
let opts = {
  'token': "token_example", // String | 
  'limit': 56 // Number | 
};
apiInstance.ocListBannedUsers(apiToken, channelUrl, opts).then((data) => {
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

[**OcListBannedUsersResponse**](OcListBannedUsersResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## ocListMutedUsers

> OcListMutedUsersResponse ocListMutedUsers(apiToken, channelUrl, opts)

List muted users

## List muted users  Retrieves a list of muted users in the channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-list-muted-users ----------------------------   &#x60;channel_url&#x60;      Type: string      Description: Specifies the URL of the channel to retrieve a list of muted users.

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.ModerationApi();
let apiToken = {{API_TOKEN}}; // String | 
let channelUrl = "channelUrl_example"; // String | 
let opts = {
  'token': "token_example", // String | 
  'limit': 56 // Number | 
};
apiInstance.ocListMutedUsers(apiToken, channelUrl, opts).then((data) => {
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

[**OcListMutedUsersResponse**](OcListMutedUsersResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## ocMuteUser

> SendBirdOpenChannel ocMuteUser(apiToken, channelUrl, opts)

Mute a user

## Mute a user  Mutes a user in the channel. A muted user remains in the channel and is allowed to view the messages, but can&#39;t send any messages until unmuted.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-mute-a-user

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.ModerationApi();
let apiToken = {{API_TOKEN}}; // String | 
let channelUrl = "channelUrl_example"; // String | 
let opts = {
  'ocMuteUserData': new SendbirdPlatformSdk.OcMuteUserData() // OcMuteUserData | 
};
apiInstance.ocMuteUser(apiToken, channelUrl, opts).then((data) => {
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
 **ocMuteUserData** | [**OcMuteUserData**](OcMuteUserData.md)|  | [optional] 

### Return type

[**SendBirdOpenChannel**](SendBirdOpenChannel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## ocUnbanUserById

> OcDeleteChannelByUrl200Response ocUnbanUserById(apiToken, channelUrl, bannedUserId)

Unban a user

## Unban a user  Unbans a user from an open channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-unban-a-user ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.ModerationApi();
let apiToken = {{API_TOKEN}}; // String | 
let channelUrl = "channelUrl_example"; // String | 
let bannedUserId = "bannedUserId_example"; // String | 
apiInstance.ocUnbanUserById(apiToken, channelUrl, bannedUserId).then((data) => {
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
 **bannedUserId** | **String**|  | 

### Return type

[**OcDeleteChannelByUrl200Response**](OcDeleteChannelByUrl200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## ocUnmuteUserById

> OcDeleteChannelByUrl200Response ocUnmuteUserById(apiToken, channelUrl, mutedUserId)

Unmute a user

## Unmute a user  Unmutes a user from an open channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-unmute-a-user ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.ModerationApi();
let apiToken = {{API_TOKEN}}; // String | 
let channelUrl = "channelUrl_example"; // String | 
let mutedUserId = "mutedUserId_example"; // String | 
apiInstance.ocUnmuteUserById(apiToken, channelUrl, mutedUserId).then((data) => {
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
 **mutedUserId** | **String**|  | 

### Return type

[**OcDeleteChannelByUrl200Response**](OcDeleteChannelByUrl200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## ocUpdateBanById

> OcUpdateBanByIdResponse ocUpdateBanById(apiToken, channelUrl, bannedUserId, opts)

Update a ban

## Update a ban  Updates details of a ban imposed on a user. You can change the length of a ban with this action, and also provide an updated description.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-update-a-ban ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.ModerationApi();
let apiToken = {{API_TOKEN}}; // String | 
let channelUrl = "channelUrl_example"; // String | 
let bannedUserId = "bannedUserId_example"; // String | 
let opts = {
  'ocUpdateBanByIdData': new SendbirdPlatformSdk.OcUpdateBanByIdData() // OcUpdateBanByIdData | 
};
apiInstance.ocUpdateBanById(apiToken, channelUrl, bannedUserId, opts).then((data) => {
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
 **bannedUserId** | **String**|  | 
 **ocUpdateBanByIdData** | [**OcUpdateBanByIdData**](OcUpdateBanByIdData.md)|  | [optional] 

### Return type

[**OcUpdateBanByIdResponse**](OcUpdateBanByIdResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## ocViewBanById

> OcViewBanByIdResponse ocViewBanById(apiToken, channelUrl, bannedUserId)

View a ban

## View a ban  Retrieves details of a ban imposed on a user.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-view-a-ban ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.ModerationApi();
let apiToken = {{API_TOKEN}}; // String | 
let channelUrl = "channelUrl_example"; // String | 
let bannedUserId = "bannedUserId_example"; // String | 
apiInstance.ocViewBanById(apiToken, channelUrl, bannedUserId).then((data) => {
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
 **bannedUserId** | **String**|  | 

### Return type

[**OcViewBanByIdResponse**](OcViewBanByIdResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## ocViewMuteById

> OcViewMuteByIdResponse ocViewMuteById(apiToken, channelUrl, mutedUserId)

View a mute

## View a mute  Checks if a user is muted in an open channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-view-a-mute ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.ModerationApi();
let apiToken = {{API_TOKEN}}; // String | 
let channelUrl = "channelUrl_example"; // String | 
let mutedUserId = "mutedUserId_example"; // String | 
apiInstance.ocViewMuteById(apiToken, channelUrl, mutedUserId).then((data) => {
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
 **mutedUserId** | **String**|  | 

### Return type

[**OcViewMuteByIdResponse**](OcViewMuteByIdResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## unblockUserById

> Object unblockUserById(apiToken, userId, targetId)

Unblock a user

## Unblock a user  Unblocks the user.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-unblock-a-user ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.ModerationApi();
let apiToken = {{API_TOKEN}}; // String | 
let userId = "userId_example"; // String | 
let targetId = "targetId_example"; // String | 
apiInstance.unblockUserById(apiToken, userId, targetId).then((data) => {
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
 **targetId** | **String**|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

