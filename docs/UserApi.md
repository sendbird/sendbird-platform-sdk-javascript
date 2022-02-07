# SendbirdPlatformSdk.UserApi

All URIs are relative to *https://api-APP_ID.sendbird.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addRegistrationOrDeviceToken**](UserApi.md#addRegistrationOrDeviceToken) | **POST** /v3/users/{user_id}/push/{token_type} | Add a registration or device token
[**banFromChannelsWithCustomChannelTypes**](UserApi.md#banFromChannelsWithCustomChannelTypes) | **POST** /v3/users/{user_id}/banned_channel_custom_types | Ban from channels with custom channel types
[**blockUser**](UserApi.md#blockUser) | **POST** /v3/users/{user_id}/block | Block a user
[**choosePushNotificationContentTemplate**](UserApi.md#choosePushNotificationContentTemplate) | **PUT** /v3/users/{user_id}/push/template | Choose a push notification content template
[**createUser**](UserApi.md#createUser) | **POST** /v3/users | Create a user
[**deleteUserById**](UserApi.md#deleteUserById) | **DELETE** /v3/users/{user_id} | Delete a user
[**leaveMyGroupChannels**](UserApi.md#leaveMyGroupChannels) | **PUT** /v3/users/{user_id}/my_group_channels/leave | Leave my group channels
[**listBannedChannels**](UserApi.md#listBannedChannels) | **GET** /v3/users/{user_id}/ban | List banned channels
[**listBlockedUsers**](UserApi.md#listBlockedUsers) | **GET** /v3/users/{user_id}/block | List blocked users
[**listMutedChannels**](UserApi.md#listMutedChannels) | **GET** /v3/users/{user_id}/mute | List muted channels
[**listMyGroupChannels**](UserApi.md#listMyGroupChannels) | **GET** /v3/users/{user_id}/my_group_channels | List my group channels
[**listRegistrationOrDeviceTokens**](UserApi.md#listRegistrationOrDeviceTokens) | **GET** /v3/users/{user_id}/push/{token_type} | List registration or device tokens
[**listUsers**](UserApi.md#listUsers) | **GET** /v3/users | List users
[**markAllMessagesAsRead**](UserApi.md#markAllMessagesAsRead) | **PUT** /v3/users/{user_id}/mark_as_read_all | Mark all messages as read
[**muteInChannelsWithCustomChannelTypes**](UserApi.md#muteInChannelsWithCustomChannelTypes) | **POST** /v3/users/{user_id}/muted_channel_custom_types | Mute in channels with custom channel types
[**registerAsOperatorToChannelsWithCustomChannelTypes**](UserApi.md#registerAsOperatorToChannelsWithCustomChannelTypes) | **POST** /v3/users/{user_id}/operating_channel_custom_types | Register as an operator to channels with custom channel types
[**removeRegistrationOrDeviceToken**](UserApi.md#removeRegistrationOrDeviceToken) | **DELETE** /v3/users/{user_id}/push | Remove a registration or device token - When unregistering all device tokens
[**removeRegistrationOrDeviceTokenByToken**](UserApi.md#removeRegistrationOrDeviceTokenByToken) | **DELETE** /v3/users/{user_id}/push/{token_type}/{token} | Remove a registration or device token - When unregistering a specific token
[**removeRegistrationOrDeviceTokenFromOwnerByToken**](UserApi.md#removeRegistrationOrDeviceTokenFromOwnerByToken) | **DELETE** /v3/push/device_tokens/{token_type}/{token} | Remove a registration or device token from an owner
[**resetPushPreferences**](UserApi.md#resetPushPreferences) | **DELETE** /v3/users/{user_id}/push_preference | Reset push preferences
[**unblockUserById**](UserApi.md#unblockUserById) | **DELETE** /v3/users/{user_id}/block/{target_id} | Unblock a user
[**updateChannelInvitationPreference**](UserApi.md#updateChannelInvitationPreference) | **PUT** /v3/users/{user_id}/channel_invitation_preference | Update channel invitation preference
[**updateCountPreferenceOfChannelByUrl**](UserApi.md#updateCountPreferenceOfChannelByUrl) | **PUT** /v3/users/{user_id}/count_preference/{channel_url} | Update count preference of a channel
[**updatePushPreferences**](UserApi.md#updatePushPreferences) | **PUT** /v3/users/{user_id}/push_preference | Update push preferences
[**updatePushPreferencesForChannelByUrl**](UserApi.md#updatePushPreferencesForChannelByUrl) | **PUT** /v3/users/{user_id}/push_preference/{channel_url} | Update push preferences for a channel
[**updateUserById**](UserApi.md#updateUserById) | **PUT** /v3/users/{user_id} | Update a user
[**viewChannelInvitationPreference**](UserApi.md#viewChannelInvitationPreference) | **GET** /v3/users/{user_id}/channel_invitation_preference | View channel invitation preference
[**viewCountPreferenceOfChannelByUrl**](UserApi.md#viewCountPreferenceOfChannelByUrl) | **GET** /v3/users/{user_id}/count_preference/{channel_url} | View count preference of a channel
[**viewNumberOfChannelsByJoinStatus**](UserApi.md#viewNumberOfChannelsByJoinStatus) | **GET** /v3/users/{user_id}/group_channel_count | View number of channels by join status
[**viewNumberOfChannelsWithUnreadMessages**](UserApi.md#viewNumberOfChannelsWithUnreadMessages) | **GET** /v3/users/{user_id}/unread_channel_count | View number of channels with unread messages
[**viewNumberOfUnreadItems**](UserApi.md#viewNumberOfUnreadItems) | **GET** /v3/users/{user_id}/unread_item_count | View number of unread items
[**viewNumberOfUnreadMessages**](UserApi.md#viewNumberOfUnreadMessages) | **GET** /v3/users/{user_id}/unread_message_count | View number of unread messages
[**viewPushPreferences**](UserApi.md#viewPushPreferences) | **GET** /v3/users/{user_id}/push_preference | View push preferences
[**viewPushPreferencesForChannelByUrl**](UserApi.md#viewPushPreferencesForChannelByUrl) | **GET** /v3/users/{user_id}/push_preference/{channel_url} | View push preferences for a channel
[**viewUserById**](UserApi.md#viewUserById) | **GET** /v3/users/{user_id} | View a user
[**viewWhoOwnsRegistrationOrDeviceTokenByToken**](UserApi.md#viewWhoOwnsRegistrationOrDeviceTokenByToken) | **GET** /v3/push/device_tokens/{token_type}/{token} | View who owns a registration or device token



## addRegistrationOrDeviceToken

> InlineResponse20025 addRegistrationOrDeviceToken(userId, tokenType, opts)

Add a registration or device token

## Add a registration or device token  &gt; __Note__: A user can have up to 20 FCM registration tokens, 20 HMS device tokens, and 20 APNs device tokens each. The oldest token will be deleted before a new token is added for a user who already has 20 registration or device tokens. Only the 20 newest tokens will be maintained for users who already have more than 20 of each token type.  To send notification requests to push notification services on behalf of your server, adds a specific user&#39;s FCM registration token, HMS device token, or APNs device token to Sendbird server. Depending on which push service you are using, you can pass one of two values in &#x60;token_type&#x60;: &#x60;gcm&#x60;, &#x60;huawei&#x60;, or &#x60;apns&#x60;.  A FCM registration token and an APNs device token allow identification of each client app instance on each device, and are generated and registered by Android and iOS apps through the corresponding SDKs. Use this method if you need to register a token via your own server.  &gt; __Note__: For more information on the registration token and device token, visit the Google&#39;s [FCM](https://firebase.google.com/docs/auth/admin/verify-id-tokens) page, Huawei&#39;s [Push kit](https://developer.huawei.com/consumer/en/doc/development/HMSCore-Guides/service-introduction-0000001050040060) and Apple&#39;s [APNs](https://developer.apple.com/library/content/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/APNSOverview.html) page.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-add-a-registration-or-device-token ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.UserApi();
let userId = "userId_example"; // String | 
let tokenType = "tokenType_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'addRegistrationOrDeviceTokenData': new SendbirdPlatformSdk.AddRegistrationOrDeviceTokenData() // AddRegistrationOrDeviceTokenData | 
};
apiInstance.addRegistrationOrDeviceToken(userId, tokenType, opts, (error, data, response) => {
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
 **userId** | **String**|  | 
 **tokenType** | **String**|  | 
 **apiToken** | **String**|  | [optional] 
 **addRegistrationOrDeviceTokenData** | [**AddRegistrationOrDeviceTokenData**](AddRegistrationOrDeviceTokenData.md)|  | [optional] 

### Return type

[**InlineResponse20025**](InlineResponse20025.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## banFromChannelsWithCustomChannelTypes

> banFromChannelsWithCustomChannelTypes(userId, opts)

Ban from channels with custom channel types

## Ban from channels with custom channel types  Bans a user from channels with particular custom channel types.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-ban-from-channels-with-custom-channel-types ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.UserApi();
let userId = "userId_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'banFromChannelsWithCustomChannelTypesData': new SendbirdPlatformSdk.BanFromChannelsWithCustomChannelTypesData() // BanFromChannelsWithCustomChannelTypesData | 
};
apiInstance.banFromChannelsWithCustomChannelTypes(userId, opts, (error, data, response) => {
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
 **userId** | **String**|  | 
 **apiToken** | **String**|  | [optional] 
 **banFromChannelsWithCustomChannelTypesData** | [**BanFromChannelsWithCustomChannelTypesData**](BanFromChannelsWithCustomChannelTypesData.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## blockUser

> SendBirdUser blockUser(userId, opts)

Block a user

## Block a user  Allows a user to block another user. A user doesn&#39;t receive messages from someone they have blocked anymore. Also, blocking someone doesn&#39;t alert them that they have been blocked. Blocked users still can send messages as normal in the channel: however, they can&#39;t receive any messages from the users who have blocked them.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-block-a-user ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.UserApi();
let userId = "userId_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'blockUserData': new SendbirdPlatformSdk.BlockUserData() // BlockUserData | 
};
apiInstance.blockUser(userId, opts, (error, data, response) => {
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
 **userId** | **String**|  | 
 **apiToken** | **String**|  | [optional] 
 **blockUserData** | [**BlockUserData**](BlockUserData.md)|  | [optional] 

### Return type

[**SendBirdUser**](SendBirdUser.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## choosePushNotificationContentTemplate

> InlineResponse20029 choosePushNotificationContentTemplate(userId, opts)

Choose a push notification content template

## Choose a push notification content template  Chooses a push notification content template of a user&#39;s own. The push notifications feature is only available for group channels.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-choose-a-push-notification-content-template ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.UserApi();
let userId = "userId_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'body': {key: null} // Object | 
};
apiInstance.choosePushNotificationContentTemplate(userId, opts, (error, data, response) => {
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
 **userId** | **String**|  | 
 **apiToken** | **String**|  | [optional] 
 **body** | **Object**|  | [optional] 

### Return type

[**InlineResponse20029**](InlineResponse20029.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createUser

> SendBirdUser createUser(opts)

Create a user

## Create a user  Creates a new user in the application. A user is identified by its unique user ID, and additionally have a changeable nickname, profile image, and so on.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-create-a-user

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.UserApi();
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'createUserData': new SendbirdPlatformSdk.CreateUserData() // CreateUserData | 
};
apiInstance.createUser(opts, (error, data, response) => {
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
 **createUserData** | [**CreateUserData**](CreateUserData.md)|  | [optional] 

### Return type

[**SendBirdUser**](SendBirdUser.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteUserById

> deleteUserById(userId, opts)

Delete a user

## Delete a user  Deletes a user.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-delete-a-user ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.UserApi();
let userId = "userId_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}} // String | 
};
apiInstance.deleteUserById(userId, opts, (error, data, response) => {
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
 **userId** | **String**|  | 
 **apiToken** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## leaveMyGroupChannels

> leaveMyGroupChannels(userId, opts)

Leave my group channels

## Leave my group channels  Makes a user leave all joined group channels.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-leave-my-group-channels ----------------------------   &#x60;user_id&#x60;      Type: string      Description: Specifies the unique ID of the user to leave all joined group channels.

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.UserApi();
let userId = "userId_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'leaveMyGroupChannelsData': new SendbirdPlatformSdk.LeaveMyGroupChannelsData() // LeaveMyGroupChannelsData | 
};
apiInstance.leaveMyGroupChannels(userId, opts, (error, data, response) => {
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
 **userId** | **String**|  | 
 **apiToken** | **String**|  | [optional] 
 **leaveMyGroupChannelsData** | [**LeaveMyGroupChannelsData**](LeaveMyGroupChannelsData.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## listBannedChannels

> InlineResponse20022 listBannedChannels(userId, opts)

List banned channels

## List banned channels  Retrieves a list of open and group channels with additional information where a user is banned.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-list-banned-channels ----------------------------   &#x60;user_id&#x60;      Type: string      Description: Specifies the unique ID of the target user.

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.UserApi();
let userId = "userId_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'token': "token_example", // String | 
  'limit': 56 // Number | 
};
apiInstance.listBannedChannels(userId, opts, (error, data, response) => {
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
 **userId** | **String**|  | 
 **apiToken** | **String**|  | [optional] 
 **token** | **String**|  | [optional] 
 **limit** | **Number**|  | [optional] 

### Return type

[**InlineResponse20022**](InlineResponse20022.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listBlockedUsers

> InlineResponse20016 listBlockedUsers(userId, opts)

List blocked users

## List blocked users  Retrieves a list of other users that a user has blocked.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-list-blocked-users ----------------------------   &#x60;user_id&#x60;      Type: string      Description: Specifies the unique ID of the target user.

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.UserApi();
let userId = "userId_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'token': "token_example", // String | 
  'limit': 56, // Number | 
  'userIds': "userIds_example", // String | 
  'metadatakey': "metadatakey_example", // String | 
  'metadatavaluesIn': "metadatavaluesIn_example" // String | 
};
apiInstance.listBlockedUsers(userId, opts, (error, data, response) => {
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
 **userId** | **String**|  | 
 **apiToken** | **String**|  | [optional] 
 **token** | **String**|  | [optional] 
 **limit** | **Number**|  | [optional] 
 **userIds** | **String**|  | [optional] 
 **metadatakey** | **String**|  | [optional] 
 **metadatavaluesIn** | **String**|  | [optional] 

### Return type

[**InlineResponse20016**](InlineResponse20016.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listMutedChannels

> InlineResponse20023 listMutedChannels(userId, opts)

List muted channels

## List muted channels  Retrieves a list of open and group channels with additional information where a user is muted.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-list-muted-channels ----------------------------   &#x60;user_id&#x60;      Type: string      Description: Specifies the unique ID of the target user.

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.UserApi();
let userId = "userId_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'token': "token_example", // String | 
  'limit': 56 // Number | 
};
apiInstance.listMutedChannels(userId, opts, (error, data, response) => {
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
 **userId** | **String**|  | 
 **apiToken** | **String**|  | [optional] 
 **token** | **String**|  | [optional] 
 **limit** | **Number**|  | [optional] 

### Return type

[**InlineResponse20023**](InlineResponse20023.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listMyGroupChannels

> InlineResponse20017 listMyGroupChannels(userId, opts)

List my group channels

## List my group channels  Retrieves all group channels that the user has joined. You can create a request based on various query parameters.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-list-my-group-channels ----------------------------   &#x60;user_id&#x60;      Type: string      Description: Specifies the unique ID of the target user.

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.UserApi();
let userId = "userId_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'token': "token_example", // String | 
  'limit': 56, // Number | 
  'distinctMode': "distinctMode_example", // String | 
  'publicMode': "publicMode_example", // String | 
  'superMode': "superMode_example", // String | 
  'hiddenMode': "hiddenMode_example", // String | 
  'memberStateFilter': "memberStateFilter_example", // String | 
  'unreadFilter': "unreadFilter_example", // String | 
  'createdAfter': 56, // Number | 
  'createdBefore': 56, // Number | 
  'showEmpty': true, // Boolean | 
  'showFrozen': true, // Boolean | 
  'showMember': true, // Boolean | 
  'showDeliveryReceipt': true, // Boolean | 
  'showReadReceipt': true, // Boolean | 
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
  'searchQuery': "searchQuery_example", // String | 
  'searchFields': "searchFields_example", // String | 
  'metadataKey': "metadataKey_example", // String | 
  'metadataValues': "metadataValues_example", // String | 
  'metadataValueStartswith': "metadataValueStartswith_example", // String | 
  'metacounterKey': "metacounterKey_example", // String | 
  'metacounterValues': "metacounterValues_example", // String | 
  'metacounterValueGt': "metacounterValueGt_example", // String | 
  'metacounterValueGte': "metacounterValueGte_example", // String | 
  'metacounterValueLt': "metacounterValueLt_example", // String | 
  'metacounterValueLte': "metacounterValueLte_example", // String | 
  'customType': "customType_example" // String | 
};
apiInstance.listMyGroupChannels(userId, opts, (error, data, response) => {
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
 **userId** | **String**|  | 
 **apiToken** | **String**|  | [optional] 
 **token** | **String**|  | [optional] 
 **limit** | **Number**|  | [optional] 
 **distinctMode** | **String**|  | [optional] 
 **publicMode** | **String**|  | [optional] 
 **superMode** | **String**|  | [optional] 
 **hiddenMode** | **String**|  | [optional] 
 **memberStateFilter** | **String**|  | [optional] 
 **unreadFilter** | **String**|  | [optional] 
 **createdAfter** | **Number**|  | [optional] 
 **createdBefore** | **Number**|  | [optional] 
 **showEmpty** | **Boolean**|  | [optional] 
 **showFrozen** | **Boolean**|  | [optional] 
 **showMember** | **Boolean**|  | [optional] 
 **showDeliveryReceipt** | **Boolean**|  | [optional] 
 **showReadReceipt** | **Boolean**|  | [optional] 
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
 **searchQuery** | **String**|  | [optional] 
 **searchFields** | **String**|  | [optional] 
 **metadataKey** | **String**|  | [optional] 
 **metadataValues** | **String**|  | [optional] 
 **metadataValueStartswith** | **String**|  | [optional] 
 **metacounterKey** | **String**|  | [optional] 
 **metacounterValues** | **String**|  | [optional] 
 **metacounterValueGt** | **String**|  | [optional] 
 **metacounterValueGte** | **String**|  | [optional] 
 **metacounterValueLt** | **String**|  | [optional] 
 **metacounterValueLte** | **String**|  | [optional] 
 **customType** | **String**|  | [optional] 

### Return type

[**InlineResponse20017**](InlineResponse20017.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listRegistrationOrDeviceTokens

> InlineResponse20024 listRegistrationOrDeviceTokens(userId, tokenType, opts)

List registration or device tokens

## List registration or device tokens  Retrieves a list of a specific user&#39;s FCM registration tokens, HMS device tokens, or APNs device tokens. You can specify either &#x60;gcm&#x60;, &#x60;huawei&#x60;, or &#x60;apns&#x60; in the &#x60;token_type&#x60; parameter, depending on which push notification service you are using.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-list-registration-or-device-tokens ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.UserApi();
let userId = "userId_example"; // String | 
let tokenType = "tokenType_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}} // String | 
};
apiInstance.listRegistrationOrDeviceTokens(userId, tokenType, opts, (error, data, response) => {
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
 **userId** | **String**|  | 
 **tokenType** | **String**|  | 
 **apiToken** | **String**|  | [optional] 

### Return type

[**InlineResponse20024**](InlineResponse20024.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listUsers

> InlineResponse20016 listUsers(opts)

List users

## List users  Retrieves a list of users in your application. You can query the list using various parameters.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-list-users ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.UserApi();
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'token': "token_example", // String | 
  'limit': 56, // Number | 
  'activeMode': "activeMode_example", // String | 
  'showBot': true, // Boolean | 
  'userIds': "userIds_example", // String | 
  'nickname': "nickname_example", // String | 
  'nicknameStartswith': "nicknameStartswith_example", // String | 
  'metadatakey': "metadatakey_example", // String | 
  'metadatavaluesIn': "metadatavaluesIn_example" // String | 
};
apiInstance.listUsers(opts, (error, data, response) => {
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
 **activeMode** | **String**|  | [optional] 
 **showBot** | **Boolean**|  | [optional] 
 **userIds** | **String**|  | [optional] 
 **nickname** | **String**|  | [optional] 
 **nicknameStartswith** | **String**|  | [optional] 
 **metadatakey** | **String**|  | [optional] 
 **metadatavaluesIn** | **String**|  | [optional] 

### Return type

[**InlineResponse20016**](InlineResponse20016.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## markAllMessagesAsRead

> markAllMessagesAsRead(userId, opts)

Mark all messages as read

## Mark all messages as read  Marks all of a user&#39;s unread messages as read in the joined group channels.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-mark-all-messages-as-read ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.UserApi();
let userId = "userId_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'markAllMessagesAsReadData': new SendbirdPlatformSdk.MarkAllMessagesAsReadData() // MarkAllMessagesAsReadData | 
};
apiInstance.markAllMessagesAsRead(userId, opts, (error, data, response) => {
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
 **userId** | **String**|  | 
 **apiToken** | **String**|  | [optional] 
 **markAllMessagesAsReadData** | [**MarkAllMessagesAsReadData**](MarkAllMessagesAsReadData.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## muteInChannelsWithCustomChannelTypes

> muteInChannelsWithCustomChannelTypes(userId, opts)

Mute in channels with custom channel types

## Mute in channels with custom channel types  Mutes a user in channels with particular custom channel types.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-mute-in-channels-with-custom-channel-types ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.UserApi();
let userId = "userId_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'muteInChannelsWithCustomChannelTypesData': new SendbirdPlatformSdk.MuteInChannelsWithCustomChannelTypesData() // MuteInChannelsWithCustomChannelTypesData | 
};
apiInstance.muteInChannelsWithCustomChannelTypes(userId, opts, (error, data, response) => {
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
 **userId** | **String**|  | 
 **apiToken** | **String**|  | [optional] 
 **muteInChannelsWithCustomChannelTypesData** | [**MuteInChannelsWithCustomChannelTypesData**](MuteInChannelsWithCustomChannelTypesData.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## registerAsOperatorToChannelsWithCustomChannelTypes

> registerAsOperatorToChannelsWithCustomChannelTypes(userId, opts)

Register as an operator to channels with custom channel types

## Register as an operator to channels with custom channel types  Registers a user as an operator to channels with particular custom channel types.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-register-as-an-operator-to-channels-with-custom-channel-types ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.UserApi();
let userId = "userId_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'registerAsOperatorToChannelsWithCustomChannelTypesData': new SendbirdPlatformSdk.RegisterAsOperatorToChannelsWithCustomChannelTypesData() // RegisterAsOperatorToChannelsWithCustomChannelTypesData | 
};
apiInstance.registerAsOperatorToChannelsWithCustomChannelTypes(userId, opts, (error, data, response) => {
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
 **userId** | **String**|  | 
 **apiToken** | **String**|  | [optional] 
 **registerAsOperatorToChannelsWithCustomChannelTypesData** | [**RegisterAsOperatorToChannelsWithCustomChannelTypesData**](RegisterAsOperatorToChannelsWithCustomChannelTypesData.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## removeRegistrationOrDeviceToken

> InlineResponse20026 removeRegistrationOrDeviceToken(userId, opts)

Remove a registration or device token - When unregistering all device tokens

## Remove a registration or device token  Removes a specific user&#39;s one or more FCM registration tokens, HMS device tokens, or APNs device tokens.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-remove-a-registration-or-device-token ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.UserApi();
let userId = "userId_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}} // String | 
};
apiInstance.removeRegistrationOrDeviceToken(userId, opts, (error, data, response) => {
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
 **userId** | **String**|  | 
 **apiToken** | **String**|  | [optional] 

### Return type

[**InlineResponse20026**](InlineResponse20026.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## removeRegistrationOrDeviceTokenByToken

> InlineResponse20026 removeRegistrationOrDeviceTokenByToken(userId, tokenType, token, opts)

Remove a registration or device token - When unregistering a specific token

## Remove a registration or device token  Removes a specific user&#39;s one or more FCM registration tokens, HMS device tokens, or APNs device tokens.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-remove-a-registration-or-device-token ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.UserApi();
let userId = "userId_example"; // String | 
let tokenType = "tokenType_example"; // String | 
let token = "token_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}} // String | 
};
apiInstance.removeRegistrationOrDeviceTokenByToken(userId, tokenType, token, opts, (error, data, response) => {
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
 **userId** | **String**|  | 
 **tokenType** | **String**|  | 
 **token** | **String**|  | 
 **apiToken** | **String**|  | [optional] 

### Return type

[**InlineResponse20026**](InlineResponse20026.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## removeRegistrationOrDeviceTokenFromOwnerByToken

> InlineResponse20027 removeRegistrationOrDeviceTokenFromOwnerByToken(tokenType, token, opts)

Remove a registration or device token from an owner

## Remove a registration or device token from an owner  Removes a registration or device token from a user who owns it. You can pass one of two values in &#x60;token_type&#x60;: &#x60;gcm&#x60;, &#x60;huawei&#x60;, or &#x60;apns&#x60;, depending on which push service you are using.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-remove-a-registration-or-device-token-from-an-owner ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.UserApi();
let tokenType = "tokenType_example"; // String | 
let token = "token_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}} // String | 
};
apiInstance.removeRegistrationOrDeviceTokenFromOwnerByToken(tokenType, token, opts, (error, data, response) => {
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
 **tokenType** | **String**|  | 
 **token** | **String**|  | 
 **apiToken** | **String**|  | [optional] 

### Return type

[**InlineResponse20027**](InlineResponse20027.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## resetPushPreferences

> resetPushPreferences(userId, opts)

Reset push preferences

## Reset push preferences  Resets a user&#39;s push preferences. After performing this action,   &#x60;do_not_disturb&#x60; and &#x60;snooze_enabled&#x60; are set to false.  The values of the parameters associated with the time frame are all set to 0.  &#x60;timezone&#x60; is reset to &#x60;UTC&#x60;.  &#x60;push_sound&#x60; is reset to &#x60;default&#x60;.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-reset-push-preferences ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.UserApi();
let userId = "userId_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}} // String | 
};
apiInstance.resetPushPreferences(userId, opts, (error, data, response) => {
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
 **userId** | **String**|  | 
 **apiToken** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## unblockUserById

> unblockUserById(userId, targetId, opts)

Unblock a user

## Unblock a user  Unblocks the user.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-unblock-a-user ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.UserApi();
let userId = "userId_example"; // String | 
let targetId = "targetId_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}} // String | 
};
apiInstance.unblockUserById(userId, targetId, opts, (error, data, response) => {
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
 **userId** | **String**|  | 
 **targetId** | **String**|  | 
 **apiToken** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## updateChannelInvitationPreference

> InlineResponse2005 updateChannelInvitationPreference(userId, opts)

Update channel invitation preference

## Update channel invitation preference  Updates the channel invitation preference for a user&#39;s [private](https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#-3-private-vs-public) group channels.  &gt; __Note__: Using the [update default channel invitation preference](https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-update-default-channel-invitation-preference) action, you can update the value of channel invitation preference which is globally applied to all users within the application.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-update-channel-invitation-preference

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.UserApi();
let userId = "userId_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'updateChannelInvitationPreferenceData': new SendbirdPlatformSdk.UpdateChannelInvitationPreferenceData() // UpdateChannelInvitationPreferenceData | 
};
apiInstance.updateChannelInvitationPreference(userId, opts, (error, data, response) => {
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
 **userId** | **String**|  | 
 **apiToken** | **String**|  | [optional] 
 **updateChannelInvitationPreferenceData** | [**UpdateChannelInvitationPreferenceData**](UpdateChannelInvitationPreferenceData.md)|  | [optional] 

### Return type

[**InlineResponse2005**](InlineResponse2005.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateCountPreferenceOfChannelByUrl

> InlineResponse20021 updateCountPreferenceOfChannelByUrl(userId, channelUrl, opts)

Update count preference of a channel

## Update count preference of a channel  Updates count preference of a specific group channel of a user.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-update-count-preference-of-a-channel ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.UserApi();
let userId = "userId_example"; // String | 
let channelUrl = "channelUrl_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'updateCountPreferenceOfChannelByUrlData': new SendbirdPlatformSdk.UpdateCountPreferenceOfChannelByUrlData() // UpdateCountPreferenceOfChannelByUrlData | 
};
apiInstance.updateCountPreferenceOfChannelByUrl(userId, channelUrl, opts, (error, data, response) => {
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
 **userId** | **String**|  | 
 **channelUrl** | **String**|  | 
 **apiToken** | **String**|  | [optional] 
 **updateCountPreferenceOfChannelByUrlData** | [**UpdateCountPreferenceOfChannelByUrlData**](UpdateCountPreferenceOfChannelByUrlData.md)|  | [optional] 

### Return type

[**InlineResponse20021**](InlineResponse20021.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updatePushPreferences

> InlineResponse20028 updatePushPreferences(userId, opts)

Update push preferences

## Update push preferences  Updates a user&#39;s push preferences. Through this action, you can set &#x60;do_not_disturb&#x60; for a user, and update the time frame in which the setting applies.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-update-push-preferences ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.UserApi();
let userId = "userId_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'updatePushPreferencesData': new SendbirdPlatformSdk.UpdatePushPreferencesData() // UpdatePushPreferencesData | 
};
apiInstance.updatePushPreferences(userId, opts, (error, data, response) => {
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
 **userId** | **String**|  | 
 **apiToken** | **String**|  | [optional] 
 **updatePushPreferencesData** | [**UpdatePushPreferencesData**](UpdatePushPreferencesData.md)|  | [optional] 

### Return type

[**InlineResponse20028**](InlineResponse20028.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updatePushPreferencesForChannelByUrl

> InlineResponse20028 updatePushPreferencesForChannelByUrl(userId, channelUrl, opts)

Update push preferences for a channel

## Update push preferences for a channel  Updates push preferences for a user&#39;s specific group channel. The push notifications feature is only available for group channels.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-update-push-preferences-for-a-channel ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.UserApi();
let userId = "userId_example"; // String | 
let channelUrl = "channelUrl_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'updatePushPreferencesForChannelByUrlData': new SendbirdPlatformSdk.UpdatePushPreferencesForChannelByUrlData() // UpdatePushPreferencesForChannelByUrlData | 
};
apiInstance.updatePushPreferencesForChannelByUrl(userId, channelUrl, opts, (error, data, response) => {
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
 **userId** | **String**|  | 
 **channelUrl** | **String**|  | 
 **apiToken** | **String**|  | [optional] 
 **updatePushPreferencesForChannelByUrlData** | [**UpdatePushPreferencesForChannelByUrlData**](UpdatePushPreferencesForChannelByUrlData.md)|  | [optional] 

### Return type

[**InlineResponse20028**](InlineResponse20028.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateUserById

> SendBirdUser updateUserById(userId, opts)

Update a user

## Update a user  Updates information on a user. In addition to changing a user&#39;s nickname or profile image, you can issue a new access token for the user. The new access token replaces the previous one as the necessary token for authentication.  You can also deactivate or reactivate a user. If the &#x60;leave_all_when_deactivated&#x60; is true (which it is by default), a user leaves all joined group channels when deactivated.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-update-a-user ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.UserApi();
let userId = "userId_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'updateUserByIdData': new SendbirdPlatformSdk.UpdateUserByIdData() // UpdateUserByIdData | 
};
apiInstance.updateUserById(userId, opts, (error, data, response) => {
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
 **userId** | **String**|  | 
 **apiToken** | **String**|  | [optional] 
 **updateUserByIdData** | [**UpdateUserByIdData**](UpdateUserByIdData.md)|  | [optional] 

### Return type

[**SendBirdUser**](SendBirdUser.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## viewChannelInvitationPreference

> InlineResponse2005 viewChannelInvitationPreference(userId, opts)

View channel invitation preference

## View channel invitation preference  Retrieves channel invitation preference for a user&#39;s [private](https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#-3-private-vs-public) group channels.  &gt; __Note__: Using the [view default channel invitation preference](https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-view-default-channel-invitation-preference) action, you can retrieve the value of channel invitation preference which is globally applied to all users within the application.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-view-channel-invitation-preference

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.UserApi();
let userId = "userId_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}} // String | 
};
apiInstance.viewChannelInvitationPreference(userId, opts, (error, data, response) => {
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
 **userId** | **String**|  | 
 **apiToken** | **String**|  | [optional] 

### Return type

[**InlineResponse2005**](InlineResponse2005.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## viewCountPreferenceOfChannelByUrl

> InlineResponse20021 viewCountPreferenceOfChannelByUrl(userId, channelUrl, opts)

View count preference of a channel

## View count preference of a channel  Retrieves count preference of a specific group channel of a user.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-view-count-preference-of-a-channel ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.UserApi();
let userId = "userId_example"; // String | 
let channelUrl = "channelUrl_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}} // String | 
};
apiInstance.viewCountPreferenceOfChannelByUrl(userId, channelUrl, opts, (error, data, response) => {
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
 **userId** | **String**|  | 
 **channelUrl** | **String**|  | 
 **apiToken** | **String**|  | [optional] 

### Return type

[**InlineResponse20021**](InlineResponse20021.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## viewNumberOfChannelsByJoinStatus

> InlineResponse20020 viewNumberOfChannelsByJoinStatus(userId, opts)

View number of channels by join status

## View number of channels by join status  Retrieves the number of a user&#39;s group channels by their join status.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-view-number-of-channels-by-join-status ----------------------------   &#x60;user_id&#x60;      Type: string      Description: Specifies the unique ID of the user to retrieve the number.

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.UserApi();
let userId = "userId_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'state': "state_example" // String | 
};
apiInstance.viewNumberOfChannelsByJoinStatus(userId, opts, (error, data, response) => {
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
 **userId** | **String**|  | 
 **apiToken** | **String**|  | [optional] 
 **state** | **String**|  | [optional] 

### Return type

[**InlineResponse20020**](InlineResponse20020.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## viewNumberOfChannelsWithUnreadMessages

> InlineResponse20018 viewNumberOfChannelsWithUnreadMessages(userId, opts)

View number of channels with unread messages

## View number of channels with unread messages  Retrieves the total number of a user&#39;s group channels with unread messages.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-view-number-of-channels-with-unread-messages ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.UserApi();
let userId = "userId_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'customTypes': ["null"], // [String] | 
  'superMode': "superMode_example" // String | 
};
apiInstance.viewNumberOfChannelsWithUnreadMessages(userId, opts, (error, data, response) => {
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
 **userId** | **String**|  | 
 **apiToken** | **String**|  | [optional] 
 **customTypes** | [**[String]**](String.md)|  | [optional] 
 **superMode** | **String**|  | [optional] 

### Return type

[**InlineResponse20018**](InlineResponse20018.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## viewNumberOfUnreadItems

> InlineResponse20019 viewNumberOfUnreadItems(userId, opts)

View number of unread items

## View number of unread items  Retrieves a set of total numbers of a user&#39;s unread messages, unread mentioned messages, or received invitations in either super or non-super group channels. This action is only available for the group channels.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-view-number-of-unread-items ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.UserApi();
let userId = "userId_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'customType': "customType_example", // String | 
  'itemKeys': "itemKeys_example" // String | 
};
apiInstance.viewNumberOfUnreadItems(userId, opts, (error, data, response) => {
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
 **userId** | **String**|  | 
 **apiToken** | **String**|  | [optional] 
 **customType** | **String**|  | [optional] 
 **itemKeys** | **String**|  | [optional] 

### Return type

[**InlineResponse20019**](InlineResponse20019.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## viewNumberOfUnreadMessages

> InlineResponse20018 viewNumberOfUnreadMessages(userId, opts)

View number of unread messages

## View number of unread messages  Retrieves the total number of a user&#39;s currently unread messages in the group channels. The unread counts feature is only available for the group channels.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-view-number-of-unread-messages ----------------------------   &#x60;user_id&#x60;      Type: string      Description: Specifies the unique ID of the user to retrieve the number.

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.UserApi();
let userId = "userId_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'customTypes': "customTypes_example", // String | 
  'superMode': "superMode_example" // String | 
};
apiInstance.viewNumberOfUnreadMessages(userId, opts, (error, data, response) => {
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
 **userId** | **String**|  | 
 **apiToken** | **String**|  | [optional] 
 **customTypes** | **String**|  | [optional] 
 **superMode** | **String**|  | [optional] 

### Return type

[**InlineResponse20018**](InlineResponse20018.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## viewPushPreferences

> InlineResponse20028 viewPushPreferences(userId, opts)

View push preferences

## View push preferences  Retrieves a user&#39;s push preferences about whether the user has set &#x60;do_not_disturb&#x60; to pause notifications for a certain period of time, and the time frame in which the user has applied the setting.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-view-push-preferences ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.UserApi();
let userId = "userId_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}} // String | 
};
apiInstance.viewPushPreferences(userId, opts, (error, data, response) => {
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
 **userId** | **String**|  | 
 **apiToken** | **String**|  | [optional] 

### Return type

[**InlineResponse20028**](InlineResponse20028.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## viewPushPreferencesForChannelByUrl

> InlineResponse20028 viewPushPreferencesForChannelByUrl(userId, channelUrl, opts)

View push preferences for a channel

## View push preferences for a channel  Retrieves whether a user has turned on notification messages for a specific channel. The push notifications feature is only available for group channels.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-view-push-preferences-for-a-channel ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.UserApi();
let userId = "userId_example"; // String | 
let channelUrl = "channelUrl_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}} // String | 
};
apiInstance.viewPushPreferencesForChannelByUrl(userId, channelUrl, opts, (error, data, response) => {
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
 **userId** | **String**|  | 
 **channelUrl** | **String**|  | 
 **apiToken** | **String**|  | [optional] 

### Return type

[**InlineResponse20028**](InlineResponse20028.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## viewUserById

> SendBirdUser viewUserById(userId, opts)

View a user

## View a user  Retrieves information on a user.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-view-a-user ----------------------------   &#x60;user_id&#x60;      Type: string      Description: Specifies the unique ID of the user to retrieve.

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.UserApi();
let userId = "userId_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'includeUnreadCount': true, // Boolean | 
  'customTypes': "customTypes_example", // String | 
  'superMode': "superMode_example" // String | 
};
apiInstance.viewUserById(userId, opts, (error, data, response) => {
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
 **userId** | **String**|  | 
 **apiToken** | **String**|  | [optional] 
 **includeUnreadCount** | **Boolean**|  | [optional] 
 **customTypes** | **String**|  | [optional] 
 **superMode** | **String**|  | [optional] 

### Return type

[**SendBirdUser**](SendBirdUser.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## viewWhoOwnsRegistrationOrDeviceTokenByToken

> InlineResponse20027 viewWhoOwnsRegistrationOrDeviceTokenByToken(tokenType, token, opts)

View who owns a registration or device token

## View who owns a registration or device token  Retrieves a user who owns a FCM registration token, HMS device token, or APNs device token. You can pass one of two values in &#x60;token_type&#x60;: &#x60;gcm&#x60;, &#x60;huawei&#x60;, or &#x60;apns&#x60;, depending on which push service you are using.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-view-who-owns-a-registration-or-device-token ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.UserApi();
let tokenType = "tokenType_example"; // String | 
let token = "token_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}} // String | 
};
apiInstance.viewWhoOwnsRegistrationOrDeviceTokenByToken(tokenType, token, opts, (error, data, response) => {
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
 **tokenType** | **String**|  | 
 **token** | **String**|  | 
 **apiToken** | **String**|  | [optional] 

### Return type

[**InlineResponse20027**](InlineResponse20027.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

