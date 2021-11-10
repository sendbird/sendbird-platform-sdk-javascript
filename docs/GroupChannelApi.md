# SendbirdPlatformSdk.GroupChannelApi

All URIs are relative to *https://api-.sendbird.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**gcAcceptInvitation**](GroupChannelApi.md#gcAcceptInvitation) | **PUT** /v3/group_channels/{channel_url}/accept | Accept an invitation
[**gcBanUser**](GroupChannelApi.md#gcBanUser) | **POST** /v3/group_channels/{channel_url}/ban | Ban a user
[**gcCancelTheRegistrationOfOperators**](GroupChannelApi.md#gcCancelTheRegistrationOfOperators) | **DELETE** /v3/group_channels/{channel_url}/operators | Cancel the registration of operators
[**gcCheckIfMemberById**](GroupChannelApi.md#gcCheckIfMemberById) | **GET** /v3/group_channels/{channel_url}/members/{user_id} | Check if member
[**gcCreateChannel**](GroupChannelApi.md#gcCreateChannel) | **POST** /v3/group_channels | Create a channel
[**gcDeclineInvitation**](GroupChannelApi.md#gcDeclineInvitation) | **PUT** /v3/group_channels/{channel_url}/decline | Decline an invitation
[**gcDeleteChannelByUrl**](GroupChannelApi.md#gcDeleteChannelByUrl) | **DELETE** /v3/group_channels/{channel_url} | Delete a channel
[**gcFreezeChannel**](GroupChannelApi.md#gcFreezeChannel) | **PUT** /v3/group_channels/{channel_url}/freeze | Freeze a channel
[**gcHideOrArchiveChannel**](GroupChannelApi.md#gcHideOrArchiveChannel) | **PUT** /v3/group_channels/{channel_url}/hide | Hide or archive a channel
[**gcInviteAsMembers**](GroupChannelApi.md#gcInviteAsMembers) | **POST** /v3/group_channels/{channel_url}/invite | Invite as members
[**gcJoinChannel**](GroupChannelApi.md#gcJoinChannel) | **PUT** /v3/group_channels/{channel_url}/join | Join a channel
[**gcLeaveChannel**](GroupChannelApi.md#gcLeaveChannel) | **PUT** /v3/group_channels/{channel_url}/leave | Leave a channel
[**gcListBannedUsers**](GroupChannelApi.md#gcListBannedUsers) | **GET** /v3/group_channels/{channel_url}/ban | List banned users
[**gcListChannels**](GroupChannelApi.md#gcListChannels) | **GET** /v3/group_channels | List channels
[**gcListMembers**](GroupChannelApi.md#gcListMembers) | **GET** /v3/group_channels/{channel_url}/members | List members
[**gcListMutedUsers**](GroupChannelApi.md#gcListMutedUsers) | **GET** /v3/group_channels/{channel_url}/mute | List muted users
[**gcListOperators**](GroupChannelApi.md#gcListOperators) | **GET** /v3/group_channels/{channel_url}/operators | List operators
[**gcMuteUser**](GroupChannelApi.md#gcMuteUser) | **POST** /v3/group_channels/{channel_url}/mute | Mute a user
[**gcRegisterOperators**](GroupChannelApi.md#gcRegisterOperators) | **POST** /v3/group_channels/{channel_url}/operators | Register operators
[**gcResetChatHistory**](GroupChannelApi.md#gcResetChatHistory) | **PUT** /v3/group_channels/{channel_url}/reset_user_history | Reset chat history
[**gcUnbanUserById**](GroupChannelApi.md#gcUnbanUserById) | **DELETE** /v3/group_channels/{channel_url}/ban/{banned_user_id} | Unban a user
[**gcUnhideOrUnarchiveChannel**](GroupChannelApi.md#gcUnhideOrUnarchiveChannel) | **DELETE** /v3/group_channels/{channel_url}/hide | Unhide or unarchive a channel
[**gcUnmuteUserById**](GroupChannelApi.md#gcUnmuteUserById) | **DELETE** /v3/group_channels/{channel_url}/mute/{muted_user_id} | Unmute a user
[**gcUpdateBanById**](GroupChannelApi.md#gcUpdateBanById) | **PUT** /v3/group_channels/{channel_url}/ban/{banned_user_id} | Update a ban
[**gcUpdateChannelByUrl**](GroupChannelApi.md#gcUpdateChannelByUrl) | **PUT** /v3/group_channels/{channel_url} | Update a channel
[**gcViewBanById**](GroupChannelApi.md#gcViewBanById) | **GET** /v3/group_channels/{channel_url}/ban/{banned_user_id} | View a ban
[**gcViewChannelByUrl**](GroupChannelApi.md#gcViewChannelByUrl) | **GET** /v3/group_channels/{channel_url} | View a channel
[**gcViewMuteById**](GroupChannelApi.md#gcViewMuteById) | **GET** /v3/group_channels/{channel_url}/mute/{muted_user_id} | View a mute



## gcAcceptInvitation

> gcAcceptInvitation(channelUrl, opts)

Accept an invitation

## Accept an invitation  Accepts an invitation from a [private](#4-private-vs-public) group channel for a user to join. Since a user is allowed to join up to 2,000 group channels, the invitation to a user who already belongs to a maximum number of group channels will be canceled automatically.  &gt; __Note__: This action is effective only when the &#x60;auto_accept&#x60; property of an application is set to false. You can change the value of the property using the [update default channel invitation preference](https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-update-default-channel-invitation-preference) action, or [update a user&#39;s channel invitation preference](https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-update-channel-invitation-preference) action.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-accept-an-invitation ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.GroupChannelApi();
let channelUrl = "channelUrl_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'gcAcceptInvitationData': new SendbirdPlatformSdk.GcAcceptInvitationData() // GcAcceptInvitationData | 
};
apiInstance.gcAcceptInvitation(channelUrl, opts, (error, data, response) => {
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
 **gcAcceptInvitationData** | [**GcAcceptInvitationData**](GcAcceptInvitationData.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## gcBanUser

> gcBanUser(channelUrl, opts)

Ban a user

## Ban a user  Bans a user from a group channel. A banned user is immediately expelled from a channel and allowed to join the channel again after a set time period.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-ban-a-user ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.GroupChannelApi();
let channelUrl = "channelUrl_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'gcBanUserData': new SendbirdPlatformSdk.GcBanUserData() // GcBanUserData | 
};
apiInstance.gcBanUser(channelUrl, opts, (error, data, response) => {
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
 **gcBanUserData** | [**GcBanUserData**](GcBanUserData.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## gcCancelTheRegistrationOfOperators

> gcCancelTheRegistrationOfOperators(channelUrl, operatorIds, opts)

Cancel the registration of operators

## Cancel the registration of operators  Cancels the registration of operators from a group channel but leave them as members.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-cancel-the-registration-of-operators ----------------------------   &#x60;channel_url&#x60;      Type: string      Description: Specifies the URL of the channel to cancel the registration of operators.

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.GroupChannelApi();
let channelUrl = "channelUrl_example"; // String | 
let operatorIds = null; // Array | 
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'deleteAll': true // Boolean | 
};
apiInstance.gcCancelTheRegistrationOfOperators(channelUrl, operatorIds, opts, (error, data, response) => {
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
 **operatorIds** | [**Array**](.md)|  | 
 **apiToken** | **String**|  | [optional] 
 **deleteAll** | **Boolean**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gcCheckIfMemberById

> gcCheckIfMemberById(channelUrl, userId, opts)

Check if member

## Check if member  Checks whether the user is a member of the group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-check-if-member ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.GroupChannelApi();
let channelUrl = "channelUrl_example"; // String | 
let userId = "userId_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}} // String | 
};
apiInstance.gcCheckIfMemberById(channelUrl, userId, opts, (error, data, response) => {
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
 **userId** | **String**|  | 
 **apiToken** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gcCreateChannel

> gcCreateChannel(opts)

Create a channel

## Create a channel  Creates a new group channel.  &gt; If you are creating a 1-on-1 direct messaging channel for a user, it is recommended that you turn on the &#x60;distinct&#x60; property. If the property is turned off, a user can create a new channel even if they have had the previous chat between them, and therefore can&#39;t see previously sent messages or data in the new channel. On the other hand, if the &#x60;distinct&#x60; property is turned on, every 1-on-1 conversation between the same two users occurs within the same channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-create-a-channel

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.GroupChannelApi();
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'gcCreateChannelData': new SendbirdPlatformSdk.GcCreateChannelData() // GcCreateChannelData | 
};
apiInstance.gcCreateChannel(opts, (error, data, response) => {
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
 **apiToken** | **String**|  | [optional] 
 **gcCreateChannelData** | [**GcCreateChannelData**](GcCreateChannelData.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## gcDeclineInvitation

> gcDeclineInvitation(channelUrl, opts)

Decline an invitation

## Decline an invitation  Declines an invitation for a user to not join a [private](#4-private-vs-public) group channel.  &gt; __Note__: This action is effective only when the &#x60;auto_accept&#x60; property of an application is set to false. You can change the value of the property using the [update default channel invitation preference](https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-update-default-channel-invitation-preference) action, or [update a user&#39;s channel invitation preference](https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-update-channel-invitation-preference) action.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-decline-an-invitation ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.GroupChannelApi();
let channelUrl = "channelUrl_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'gcDeclineInvitationData': new SendbirdPlatformSdk.GcDeclineInvitationData() // GcDeclineInvitationData | 
};
apiInstance.gcDeclineInvitation(channelUrl, opts, (error, data, response) => {
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
 **gcDeclineInvitationData** | [**GcDeclineInvitationData**](GcDeclineInvitationData.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## gcDeleteChannelByUrl

> gcDeleteChannelByUrl(channelUrl, opts)

Delete a channel

## Delete a channel  Deletes a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-delete-a-channel ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.GroupChannelApi();
let channelUrl = "channelUrl_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}} // String | 
};
apiInstance.gcDeleteChannelByUrl(channelUrl, opts, (error, data, response) => {
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


## gcFreezeChannel

> gcFreezeChannel(channelUrl, opts)

Freeze a channel

## Freeze a channel  Freezes or unfreezes a group channel.  &gt; __Note__: Only users designated as channel operators are allowed to talk when a channel is frozen.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-freeze-a-channel ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.GroupChannelApi();
let channelUrl = "channelUrl_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'gcFreezeChannelData': new SendbirdPlatformSdk.GcFreezeChannelData() // GcFreezeChannelData | 
};
apiInstance.gcFreezeChannel(channelUrl, opts, (error, data, response) => {
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
 **gcFreezeChannelData** | [**GcFreezeChannelData**](GcFreezeChannelData.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## gcHideOrArchiveChannel

> gcHideOrArchiveChannel(channelUrl, opts)

Hide or archive a channel

## Hide or archive a channel  Hides or archives a channel from the channel list of either a specific user or entire channel members. Normally, a hidden channel comes back and shows up in the channel list when a member in the channel sends a new message. This automatically-triggered behavior is intended for users who want to temporarily remove a channel from their list because [leaving the channel](#2-leave-the-channel) would delete all the past messages and stored data.  You can also leave out a channel from the list and archive the channel. The channel doesn&#39;t appear even when receiving a new message from other member.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-hide-or-archive-a-channel ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.GroupChannelApi();
let channelUrl = "channelUrl_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'gcHideOrArchiveChannelData': new SendbirdPlatformSdk.GcHideOrArchiveChannelData() // GcHideOrArchiveChannelData | 
};
apiInstance.gcHideOrArchiveChannel(channelUrl, opts, (error, data, response) => {
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
 **gcHideOrArchiveChannelData** | [**GcHideOrArchiveChannelData**](GcHideOrArchiveChannelData.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## gcInviteAsMembers

> gcInviteAsMembers(channelUrl, opts)

Invite as members

## Invite as members  Invites one or more users as members into the group channel.  &gt; __Note__: By default, users in your application automatically join a [private](#4-private-vs-public) group channel promptly from an invitation without having to accept it. If you want to give them the option to decide whether to accept or decline an invitation, you should set the value of channel invitation preference to false through the [update default channel invitation preference](https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-update-default-channel-invitation-preference) action. Or using the [update a user&#39;s channel invitation preference](https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-update-channel-invitation-preference) action, you can also allow the option individually by user.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-invite-as-members ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.GroupChannelApi();
let channelUrl = "channelUrl_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'gcInviteAsMembersData': new SendbirdPlatformSdk.GcInviteAsMembersData() // GcInviteAsMembersData | 
};
apiInstance.gcInviteAsMembers(channelUrl, opts, (error, data, response) => {
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
 **gcInviteAsMembersData** | [**GcInviteAsMembersData**](GcInviteAsMembersData.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## gcJoinChannel

> gcJoinChannel(channelUrl, opts)

Join a channel

## Join a channel  Allows a user to join a [public](#4-private-vs-public) group channel. Since a user is allowed to join up to 2,000 group channels, a user who already belongs to a maximum number of group channels can’t join a new channel.  &gt; __Note__: This action is only permitted for public group channels where the &#x60;is_public&#x60; property is true.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-join-a-channel ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.GroupChannelApi();
let channelUrl = "channelUrl_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'gcJoinChannelData': new SendbirdPlatformSdk.GcJoinChannelData() // GcJoinChannelData | 
};
apiInstance.gcJoinChannel(channelUrl, opts, (error, data, response) => {
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
 **gcJoinChannelData** | [**GcJoinChannelData**](GcJoinChannelData.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## gcLeaveChannel

> gcLeaveChannel(channelUrl, opts)

Leave a channel

## Leave a channel  Makes one or more members leave a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-leave-a-channel ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.GroupChannelApi();
let channelUrl = "channelUrl_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'gcLeaveChannelData': new SendbirdPlatformSdk.GcLeaveChannelData() // GcLeaveChannelData | 
};
apiInstance.gcLeaveChannel(channelUrl, opts, (error, data, response) => {
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
 **gcLeaveChannelData** | [**GcLeaveChannelData**](GcLeaveChannelData.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## gcListBannedUsers

> gcListBannedUsers(channelUrl, opts)

List banned users

## List banned users  Retrieves a list of the banned users from a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-list-banned-users ----------------------------   &#x60;channel_url&#x60;      Type: string      Description: Specifies the URL of the channel where to retrieve a list of banned users.

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.GroupChannelApi();
let channelUrl = "channelUrl_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'token': "token_example", // String | 
  'limit': 56 // Number | 
};
apiInstance.gcListBannedUsers(channelUrl, opts, (error, data, response) => {
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
 **token** | **String**|  | [optional] 
 **limit** | **Number**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gcListChannels

> gcListChannels(opts)

List channels

## List channels  Retrieves a list of group channels in the application.  &gt; __Note__: If you want to get a list of a specific user&#39;s group channels, use the [list my group channels](https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-list-my-group-channels) action instead.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-list-channels ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.GroupChannelApi();
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'token': "token_example", // String | 
  'limit': 56, // Number | 
  'distinctMode': "distinctMode_example", // String | 
  'publicMode': "publicMode_example", // String | 
  'superMode': "superMode_example", // String | 
  'createdAfter': 56, // Number | 
  'createdBefore': 56, // Number | 
  'showEmpty': true, // Boolean | 
  'showMember': true, // Boolean | 
  'showDeliveryReceipt': true, // Boolean | 
  'showReadReceipt': true, // Boolean | 
  'showMetadata': true, // Boolean | 
  'showFrozen': true, // Boolean | 
  'order': "order_example", // String | 
  'metadataOrderKey': "metadataOrderKey_example", // String | 
  'customTypes': "customTypes_example", // String | 
  'customTypeStartswith': "customTypeStartswith_example", // String | 
  'channelUrls': "channelUrls_example", // String | 
  'name': "name_example", // String | 
  'nameContains': "nameContains_example", // String | 
  'nameStartswith': "nameStartswith_example", // String | 
  'membersExactlyIn': "membersExactlyIn_example", // String | 
  'membersIncludeIn': "membersIncludeIn_example", // String | 
  'queryType': "queryType_example", // String | 
  'membersNickname': "membersNickname_example", // String | 
  'membersNicknameContains': "membersNicknameContains_example", // String | 
  'metadataKey': "metadataKey_example", // String | 
  'metadataValues': "metadataValues_example", // String | 
  'metadataValueStartswith': "metadataValueStartswith_example", // String | 
  'metacounterKey': "metacounterKey_example", // String | 
  'metacounterValues': "metacounterValues_example", // String | 
  'metacounterValueGt': "metacounterValueGt_example", // String | 
  'metacounterValueGte': "metacounterValueGte_example", // String | 
  'metacounterValueLt': "metacounterValueLt_example", // String | 
  'metacounterValueLte': "metacounterValueLte_example", // String | 
  'includeSortedMetaarrayInLastMessage': true, // Boolean | 
  'customType': "customType_example", // String | 
  'readReceipt': true, // Boolean | 
  'member': true, // Boolean | 
  'isDistinct': true, // Boolean | 
  'membersIn': "membersIn_example", // String | 
  'userId': "userId_example" // String | 
};
apiInstance.gcListChannels(opts, (error, data, response) => {
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
 **apiToken** | **String**|  | [optional] 
 **token** | **String**|  | [optional] 
 **limit** | **Number**|  | [optional] 
 **distinctMode** | **String**|  | [optional] 
 **publicMode** | **String**|  | [optional] 
 **superMode** | **String**|  | [optional] 
 **createdAfter** | **Number**|  | [optional] 
 **createdBefore** | **Number**|  | [optional] 
 **showEmpty** | **Boolean**|  | [optional] 
 **showMember** | **Boolean**|  | [optional] 
 **showDeliveryReceipt** | **Boolean**|  | [optional] 
 **showReadReceipt** | **Boolean**|  | [optional] 
 **showMetadata** | **Boolean**|  | [optional] 
 **showFrozen** | **Boolean**|  | [optional] 
 **order** | **String**|  | [optional] 
 **metadataOrderKey** | **String**|  | [optional] 
 **customTypes** | **String**|  | [optional] 
 **customTypeStartswith** | **String**|  | [optional] 
 **channelUrls** | **String**|  | [optional] 
 **name** | **String**|  | [optional] 
 **nameContains** | **String**|  | [optional] 
 **nameStartswith** | **String**|  | [optional] 
 **membersExactlyIn** | **String**|  | [optional] 
 **membersIncludeIn** | **String**|  | [optional] 
 **queryType** | **String**|  | [optional] 
 **membersNickname** | **String**|  | [optional] 
 **membersNicknameContains** | **String**|  | [optional] 
 **metadataKey** | **String**|  | [optional] 
 **metadataValues** | **String**|  | [optional] 
 **metadataValueStartswith** | **String**|  | [optional] 
 **metacounterKey** | **String**|  | [optional] 
 **metacounterValues** | **String**|  | [optional] 
 **metacounterValueGt** | **String**|  | [optional] 
 **metacounterValueGte** | **String**|  | [optional] 
 **metacounterValueLt** | **String**|  | [optional] 
 **metacounterValueLte** | **String**|  | [optional] 
 **includeSortedMetaarrayInLastMessage** | **Boolean**|  | [optional] 
 **customType** | **String**|  | [optional] 
 **readReceipt** | **Boolean**|  | [optional] 
 **member** | **Boolean**|  | [optional] 
 **isDistinct** | **Boolean**|  | [optional] 
 **membersIn** | **String**|  | [optional] 
 **userId** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gcListMembers

> gcListMembers(channelUrl, opts)

List members

## List members  Retrieves a list of members of a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-list-members ----------------------------   &#x60;channel_url&#x60;      Type: string      Description: Specifies the URL of the channel to retrieve a list of members of.

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.GroupChannelApi();
let channelUrl = "channelUrl_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'token': "token_example", // String | 
  'limit': 56, // Number | 
  'showDeliveryReceipt': true, // Boolean | 
  'showReadReceipt': true, // Boolean | 
  'order': "order_example", // String | 
  'operatorFilter': "operatorFilter_example", // String | 
  'memberStateFilter': "memberStateFilter_example", // String | 
  'mutedMemberFilter': "mutedMemberFilter_example", // String | 
  'nicknameStartswith': "nicknameStartswith_example" // String | 
};
apiInstance.gcListMembers(channelUrl, opts, (error, data, response) => {
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
 **token** | **String**|  | [optional] 
 **limit** | **Number**|  | [optional] 
 **showDeliveryReceipt** | **Boolean**|  | [optional] 
 **showReadReceipt** | **Boolean**|  | [optional] 
 **order** | **String**|  | [optional] 
 **operatorFilter** | **String**|  | [optional] 
 **memberStateFilter** | **String**|  | [optional] 
 **mutedMemberFilter** | **String**|  | [optional] 
 **nicknameStartswith** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gcListMutedUsers

> gcListMutedUsers(channelUrl, opts)

List muted users

## List muted users  Retrieves a list of the muted users in a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-list-muted-users ----------------------------   &#x60;channel_url&#x60;      Type: string      Description: Specifies the URL of the channel to retrieve a list of muted users.

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.GroupChannelApi();
let channelUrl = "channelUrl_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'token': "token_example", // String | 
  'limit': 56 // Number | 
};
apiInstance.gcListMutedUsers(channelUrl, opts, (error, data, response) => {
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
 **token** | **String**|  | [optional] 
 **limit** | **Number**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gcListOperators

> gcListOperators(channelUrl, opts)

List operators

## List operators  Retrieves a list of operators of a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-list-operators ----------------------------   &#x60;channel_url&#x60;      Type: string      Description: Specifies the URL of the channel to retrieve a list of operators.

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.GroupChannelApi();
let channelUrl = "channelUrl_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'token': "token_example", // String | 
  'limit': 56 // Number | 
};
apiInstance.gcListOperators(channelUrl, opts, (error, data, response) => {
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
 **token** | **String**|  | [optional] 
 **limit** | **Number**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gcMuteUser

> gcMuteUser(channelUrl, opts)

Mute a user

## Mute a user  Mutes a user in a group channel. A muted user remains in the channel and is allowed to view the messages, but can&#39;t send any messages until unmuted.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-mute-a-user ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.GroupChannelApi();
let channelUrl = "channelUrl_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'gcMuteUserData': new SendbirdPlatformSdk.GcMuteUserData() // GcMuteUserData | 
};
apiInstance.gcMuteUser(channelUrl, opts, (error, data, response) => {
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
 **gcMuteUserData** | [**GcMuteUserData**](GcMuteUserData.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## gcRegisterOperators

> gcRegisterOperators(channelUrl, opts)

Register operators

## Register operators  Registers one or more operators to a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-register-operators ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.GroupChannelApi();
let channelUrl = "channelUrl_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'gcRegisterOperatorsData': new SendbirdPlatformSdk.GcRegisterOperatorsData() // GcRegisterOperatorsData | 
};
apiInstance.gcRegisterOperators(channelUrl, opts, (error, data, response) => {
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
 **gcRegisterOperatorsData** | [**GcRegisterOperatorsData**](GcRegisterOperatorsData.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## gcResetChatHistory

> gcResetChatHistory(channelUrl, opts)

Reset chat history

## Reset chat history  Resets the properties related to a user’s chat history in a group channel, then clears the existing messages in the channel on the user’s side only. A user can no longer see the messages in a group channel once this action is called, but those messages are not deleted from the database of the Sendbird system. All other members in the channel can retrieve and see the messages.  This action simply clears the messages for the user by updating the &#x60;last_message&#x60; and &#x60;read_receipt&#x60; properties of the [channel](#2-types-of-a-channel-3-resource-representation) resource in addition to other internally managed data such as the number of the user’s unread message.  Using the &#x60;reset_all&#x60; property, you can also reset the properties related to all users&#39; chat history in a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-reset-chat-history ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.GroupChannelApi();
let channelUrl = "channelUrl_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'gcResetChatHistoryData': new SendbirdPlatformSdk.GcResetChatHistoryData() // GcResetChatHistoryData | 
};
apiInstance.gcResetChatHistory(channelUrl, opts, (error, data, response) => {
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
 **gcResetChatHistoryData** | [**GcResetChatHistoryData**](GcResetChatHistoryData.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## gcUnbanUserById

> gcUnbanUserById(channelUrl, bannedUserId, opts)

Unban a user

## Unban a user  Unbans a user from a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-unban-a-user ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.GroupChannelApi();
let channelUrl = "channelUrl_example"; // String | 
let bannedUserId = "bannedUserId_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}} // String | 
};
apiInstance.gcUnbanUserById(channelUrl, bannedUserId, opts, (error, data, response) => {
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


## gcUnhideOrUnarchiveChannel

> gcUnhideOrUnarchiveChannel(channelUrl, userId, opts)

Unhide or unarchive a channel

## Unhide or unarchive a channel  Makes a hidden or archived channel reappear in the channel list of either a specific user or entire channel members.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-unhide-or-unarchive-a-channel ----------------------------   &#x60;channel_url&#x60;      Type: string      Description: Specifies the URL of the channel to unhide or unarchive.

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.GroupChannelApi();
let channelUrl = "channelUrl_example"; // String | 
let userId = "userId_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'shouldUnhideAll': true // Boolean | 
};
apiInstance.gcUnhideOrUnarchiveChannel(channelUrl, userId, opts, (error, data, response) => {
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
 **userId** | **String**|  | 
 **apiToken** | **String**|  | [optional] 
 **shouldUnhideAll** | **Boolean**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gcUnmuteUserById

> gcUnmuteUserById(channelUrl, mutedUserId, opts)

Unmute a user

## Unmute a user  Unmutes a user within a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-unmute-a-user ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.GroupChannelApi();
let channelUrl = "channelUrl_example"; // String | 
let mutedUserId = "mutedUserId_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}} // String | 
};
apiInstance.gcUnmuteUserById(channelUrl, mutedUserId, opts, (error, data, response) => {
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


## gcUpdateBanById

> gcUpdateBanById(channelUrl, bannedUserId, opts)

Update a ban

## Update a ban  Updates details of a ban imposed on a user. You can change the length of the ban with this action, and also provide an updated description.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-update-a-ban ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.GroupChannelApi();
let channelUrl = "channelUrl_example"; // String | 
let bannedUserId = "bannedUserId_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'gcUpdateBanByIdData': new SendbirdPlatformSdk.GcUpdateBanByIdData() // GcUpdateBanByIdData | 
};
apiInstance.gcUpdateBanById(channelUrl, bannedUserId, opts, (error, data, response) => {
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
 **gcUpdateBanByIdData** | [**GcUpdateBanByIdData**](GcUpdateBanByIdData.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## gcUpdateChannelByUrl

> gcUpdateChannelByUrl(channelUrl, opts)

Update a channel

## Update a channel  Updates information on a group channel.  &gt; __Note__: You can&#39;t change the members of the channel here. To do so, see [invite as members](#2-invite-as-members) action below.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-update-a-channel ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.GroupChannelApi();
let channelUrl = "channelUrl_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'gcUpdateChannelByUrlData': new SendbirdPlatformSdk.GcUpdateChannelByUrlData() // GcUpdateChannelByUrlData | 
};
apiInstance.gcUpdateChannelByUrl(channelUrl, opts, (error, data, response) => {
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
 **gcUpdateChannelByUrlData** | [**GcUpdateChannelByUrlData**](GcUpdateChannelByUrlData.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## gcViewBanById

> gcViewBanById(channelUrl, bannedUserId, opts)

View a ban

## View a ban  Retrieves details of a ban imposed on a user.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-view-a-ban ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.GroupChannelApi();
let channelUrl = "channelUrl_example"; // String | 
let bannedUserId = "bannedUserId_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}} // String | 
};
apiInstance.gcViewBanById(channelUrl, bannedUserId, opts, (error, data, response) => {
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


## gcViewChannelByUrl

> gcViewChannelByUrl(channelUrl, opts)

View a channel

## View a channel  Retrieves information on a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-view-a-channel ----------------------------   &#x60;channel_url&#x60;      Type: string      Description: Specifies the URL of the channel to retrieve.

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.GroupChannelApi();
let channelUrl = "channelUrl_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'showDeliveryReceipt': true, // Boolean | 
  'showReadReceipt': true, // Boolean | 
  'showMember': true, // Boolean | 
  'readReceipt': true, // Boolean | 
  'member': true // Boolean | 
};
apiInstance.gcViewChannelByUrl(channelUrl, opts, (error, data, response) => {
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
 **showDeliveryReceipt** | **Boolean**|  | [optional] 
 **showReadReceipt** | **Boolean**|  | [optional] 
 **showMember** | **Boolean**|  | [optional] 
 **readReceipt** | **Boolean**|  | [optional] 
 **member** | **Boolean**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gcViewMuteById

> gcViewMuteById(channelUrl, mutedUserId, opts)

View a mute

## View a mute  Checks if a user is muted in a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-view-a-mute ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.GroupChannelApi();
let channelUrl = "channelUrl_example"; // String | 
let mutedUserId = "mutedUserId_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}} // String | 
};
apiInstance.gcViewMuteById(channelUrl, mutedUserId, opts, (error, data, response) => {
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

