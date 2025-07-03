# SendbirdPlatformSdk.ModerationApi

All URIs are relative to *https://api-APP_ID.sendbird.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**blockAUser**](ModerationApi.md#blockAUser) | **POST** /v3/users/{user_id}/block | Block a user
[**freezeAGroupChannel**](ModerationApi.md#freezeAGroupChannel) | **PUT** /v3/group_channels/{channel_url}/freeze | Freeze a group channel
[**freezeAnOpenChannel**](ModerationApi.md#freezeAnOpenChannel) | **PUT** /v3/open_channels/{channel_url}/freeze | Freeze an open channel
[**listBlockedUsers**](ModerationApi.md#listBlockedUsers) | **GET** /v3/users/{user_id}/block | List blocked users
[**unblockAUser**](ModerationApi.md#unblockAUser) | **DELETE** /v3/users/{user_id}/block/{target_id} | Unblock a user



## blockAUser

> BlockAUserResponse blockAUser(userId, opts)

Block a user

## Block a user  A user can block another user if the user doesn&#39;t wish to receive any messages or notifications from the blocked user in a 1-to-1 group channel. In a 1-to-N group channel, the user can still receive messages from the blocked user, but this depends on the UI settings of the chat view. In any case, notifications from the blocked user won&#39;t be delivered to the 1-to-N group channel. You can choose whether or not the user can view [which users are blocked](https://sendbird.com/docs/chat/platform-api/v3/moderation/listing-blocked-and-blocking-users/list-blocked-and-blocking-users) in the channel UI.  Sendbird application provides two blocking options: include or exclude blocked users when sending invitations, and turn on or off notifications from blocked users. [Explicit and classic block modes](https://sendbird.com/docs/chat/platform-api/v3/deprecated#2-explicit-and-classic-block-modes) have been deprecated and are only supported for customers who started using them before they were deprecated.  - **Include or exclude blocked users when sending invitations**: Determines whether or not to automatically filter out blocked users when a user invites a group of users to a new group channel. By default, blocked users are included when sending invitations. The value of this option can be changed by Sendbird if your Sendbird application isn&#39;t integrated to the client app. If you want to change the value, [contact our sales team](https://get.sendbird.com/talk-to-sales.html).      - **Turn on or off notifications from blocked users**: Determines whether or not to receive message notifications from the blocked user in a specific 1-to-N group channel where they are both members. By default, a user doesn&#39;t receive notifications from blocked users. The value of this option can be set individually per channel. If you want to use this option, [contact our sales team](https://get.sendbird.com/talk-to-sales.html).       &gt; **Note**: To learn more about other available moderation tools, see [Moderation Overview](https://sendbird.com/docs/chat/platform-api/v3/moderation/moderation-overview#2-actions).      The following tables explain what happens to a user&#39;s chat experience when the user blocks another user in a 1-to-1 or 1-to-N group channel. In the case of a 1-to-1 group channel, the block mode is only maintained with the original members. If other than the original members are added, the rules for 1-to-N group channel begin to apply.  [https://sendbird.com/docs/chat/platform-api/v3/moderation/blocking-users/block-users#1-block-users](https://sendbird.com/docs/chat/platform-api/v3/moderation/blocking-users/block-users#1-block-users)

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.ModerationApi();
let userId = "userId_example"; // String | (Required) 
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'blockAUserRequest': new SendbirdPlatformSdk.BlockAUserRequest() // BlockAUserRequest | 
};
apiInstance.blockAUser(userId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| (Required)  | 
 **apiToken** | **String**|  | [optional] 
 **blockAUserRequest** | [**BlockAUserRequest**](BlockAUserRequest.md)|  | [optional] 

### Return type

[**BlockAUserResponse**](BlockAUserResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## freezeAGroupChannel

> SendbirdGroupChannelDetail freezeAGroupChannel(channelUrl, opts)

Freeze a group channel

## Freeze a group channel  Freezes or unfreezes a group channel.  &gt; **Note**: To learn more about other available moderation tools, see [Moderation Overview](https://sendbird.com/docs/chat/platform-api/v3/moderation/moderation-overview#2-actions).      [https://sendbird.com/docs/chat/platform-api/v3/moderation/freezing-a-channel/freeze-a-group-channel#1-freeze-a-group-channel](https://sendbird.com/docs/chat/platform-api/v3/moderation/freezing-a-channel/freeze-a-group-channel#1-freeze-a-group-channel)

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.ModerationApi();
let channelUrl = "channelUrl_example"; // String | (Required) 
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'freezeAGroupChannelRequest': new SendbirdPlatformSdk.FreezeAGroupChannelRequest() // FreezeAGroupChannelRequest | 
};
apiInstance.freezeAGroupChannel(channelUrl, opts).then((data) => {
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
 **freezeAGroupChannelRequest** | [**FreezeAGroupChannelRequest**](FreezeAGroupChannelRequest.md)|  | [optional] 

### Return type

[**SendbirdGroupChannelDetail**](SendbirdGroupChannelDetail.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## freezeAnOpenChannel

> SendbirdOpenChannel freezeAnOpenChannel(channelUrl, opts)

Freeze an open channel

## Freeze an open channel  Freezes or unfreezes an open channel.  &gt; **Note**: To learn more about other available moderation tools, see [Moderation Overview](https://sendbird.com/docs/chat/platform-api/v3/moderation/moderation-overview#2-actions).      [https://sendbird.com/docs/chat/platform-api/v3/moderation/freezing-a-channel/freeze-an-open-channel#1-freeze-an-open-channel](https://sendbird.com/docs/chat/platform-api/v3/moderation/freezing-a-channel/freeze-an-open-channel#1-freeze-an-open-channel)

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.ModerationApi();
let channelUrl = "channelUrl_example"; // String | (Required) 
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'freezeAnOpenChannelRequest': new SendbirdPlatformSdk.FreezeAnOpenChannelRequest() // FreezeAnOpenChannelRequest | 
};
apiInstance.freezeAnOpenChannel(channelUrl, opts).then((data) => {
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
 **freezeAnOpenChannelRequest** | [**FreezeAnOpenChannelRequest**](FreezeAnOpenChannelRequest.md)|  | [optional] 

### Return type

[**SendbirdOpenChannel**](SendbirdOpenChannel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## listBlockedUsers

> ListBlockedUsersResponse listBlockedUsers(userId, opts)

List blocked users

## List blocked by and blocking users  This action retrieves a list of users who are either blocked by a specific user or a list of users who are blocking a specific user.  [https://sendbird.com/docs/chat/platform-api/v3/moderation/listing-blocked-and-blocking-users/list-blocked-and-blocking-users#1-list-blocked-by-and-blocking-users](https://sendbird.com/docs/chat/platform-api/v3/moderation/listing-blocked-and-blocking-users/list-blocked-and-blocking-users#1-list-blocked-by-and-blocking-users)  &#x60;user_id&#x60;   Type: string   Description: Specifies the unique ID of the target user.

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.ModerationApi();
let userId = "userId_example"; // String | (Required) 
let opts = {
  'list': "list_example", // String | Specifies whether to retrieve a list of users who are blocked by the specified user or a list of users who are blocking the specified user. Acceptable values are blocked_by_me and blocking_me. The `me` in the values refers to the user specified in the parameter. (Default: blocked_by_me)
  'token': "token_example", // String | 
  'limit': 56, // Number | 
  'userIds': "userIds_example", // String | Specifies the user IDs of the blocked or blocking users to search for. The value should be a comma-separated string that consists of multiple URL encoded user IDs.
  'metadatakey': "metadatakey_example", // String | 
  'metadatavaluesIn': "metadatavaluesIn_example", // String | 
  'apiToken': {{API_TOKEN}} // String | 
};
apiInstance.listBlockedUsers(userId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| (Required)  | 
 **list** | **String**| Specifies whether to retrieve a list of users who are blocked by the specified user or a list of users who are blocking the specified user. Acceptable values are blocked_by_me and blocking_me. The &#x60;me&#x60; in the values refers to the user specified in the parameter. (Default: blocked_by_me) | [optional] 
 **token** | **String**|  | [optional] 
 **limit** | **Number**|  | [optional] 
 **userIds** | **String**| Specifies the user IDs of the blocked or blocking users to search for. The value should be a comma-separated string that consists of multiple URL encoded user IDs. | [optional] 
 **metadatakey** | **String**|  | [optional] 
 **metadatavaluesIn** | **String**|  | [optional] 
 **apiToken** | **String**|  | [optional] 

### Return type

[**ListBlockedUsersResponse**](ListBlockedUsersResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## unblockAUser

> Object unblockAUser(userId, targetId, opts)

Unblock a user

## Unblock a user  Unblocks the user.  https://sendbird.com/docs/chat/platform-api/v3/moderation/blocking-users/unblock-a-user#1-unblock-a-user

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.ModerationApi();
let userId = "userId_example"; // String | (Required) 
let targetId = "targetId_example"; // String | (Required) 
let opts = {
  'apiToken': {{API_TOKEN}} // String | 
};
apiInstance.unblockAUser(userId, targetId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| (Required)  | 
 **targetId** | **String**| (Required)  | 
 **apiToken** | **String**|  | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

