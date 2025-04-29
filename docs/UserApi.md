# SendbirdPlatformSdk.UserApi

All URIs are relative to *https://api-APP_ID.sendbird.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addARegistrationOrDeviceToken**](UserApi.md#addARegistrationOrDeviceToken) | **POST** /v3/users/{user_id}/push/{token_type} | Add a registration or device token
[**chooseAPushNotificationContentTemplate**](UserApi.md#chooseAPushNotificationContentTemplate) | **PUT** /v3/users/{user_id}/push/template | Choose a push notification content template
[**createAUser**](UserApi.md#createAUser) | **POST** /v3/users | Create a user
[**createUserToken**](UserApi.md#createUserToken) | **POST** /v3/users/{user_id}/token | Create user token
[**deleteAUser**](UserApi.md#deleteAUser) | **DELETE** /v3/users/{user_id} | Delete a user
[**getChannelInvitationPreference**](UserApi.md#getChannelInvitationPreference) | **GET** /v3/users/{user_id}/channel_invitation_preference | Get channel invitation preference
[**leaveMyGroupChannels**](UserApi.md#leaveMyGroupChannels) | **PUT** /v3/users/{user_id}/my_group_channels/leave | Leave my group channels
[**listMyGroupChannels**](UserApi.md#listMyGroupChannels) | **GET** /v3/users/{user_id}/my_group_channels | List my group channels
[**listRegistrationOrDeviceTokens**](UserApi.md#listRegistrationOrDeviceTokens) | **GET** /v3/users/{user_id}/push/{token_type} | List registration or device tokens
[**listUsers**](UserApi.md#listUsers) | **GET** /v3/users | List users
[**markAllMessagesAsRead**](UserApi.md#markAllMessagesAsRead) | **PUT** /v3/users/{user_id}/mark_as_read_all | Mark all messages as read
[**removeARegistrationOrDeviceToken**](UserApi.md#removeARegistrationOrDeviceToken) | **DELETE** /v3/users/{user_id}/push/{token_type}/{token} | Remove a registration or device token - When unregistering a specific token
[**removeARegistrationOrDeviceTokenFromAnOwner**](UserApi.md#removeARegistrationOrDeviceTokenFromAnOwner) | **DELETE** /v3/push/device_tokens/{token_type}/{token} | Remove a registration or device token from an owner
[**removeAllRegistrationOrDeviceToken**](UserApi.md#removeAllRegistrationOrDeviceToken) | **DELETE** /v3/users/{user_id}/push | Remove a registration or device token - When unregistering all device tokens
[**resetPushPreferences**](UserApi.md#resetPushPreferences) | **DELETE** /v3/users/{user_id}/push_preference | Reset push preferences
[**updateAUser**](UserApi.md#updateAUser) | **PUT** /v3/users/{user_id} | Update a user
[**updateChannelInvitationPreference**](UserApi.md#updateChannelInvitationPreference) | **PUT** /v3/users/{user_id}/channel_invitation_preference | Update channel invitation preference
[**updateCountPreferenceOfAChannel**](UserApi.md#updateCountPreferenceOfAChannel) | **PUT** /v3/users/{user_id}/count_preference/{channel_url} | Update count preference of a channel
[**updatePushPreferences**](UserApi.md#updatePushPreferences) | **PUT** /v3/users/{user_id}/push_preference | Update push preferences
[**updatePushPreferencesForAChannel**](UserApi.md#updatePushPreferencesForAChannel) | **PUT** /v3/users/{user_id}/push_preference/{channel_url} | Update push preferences for a channel
[**viewAUser**](UserApi.md#viewAUser) | **GET** /v3/users/{user_id} | View a user
[**viewCountPreferenceOfAChannel**](UserApi.md#viewCountPreferenceOfAChannel) | **GET** /v3/users/{user_id}/count_preference/{channel_url} | View count preference of a channel
[**viewNumberOfChannelsWithUnreadMessages**](UserApi.md#viewNumberOfChannelsWithUnreadMessages) | **GET** /v3/users/{user_id}/unread_channel_count | View number of channels with unread messages
[**viewNumberOfUnreadMessages**](UserApi.md#viewNumberOfUnreadMessages) | **GET** /v3/users/{user_id}/unread_message_count | View number of unread messages
[**viewPushPreferences**](UserApi.md#viewPushPreferences) | **GET** /v3/users/{user_id}/push_preference | View push preferences
[**viewPushPreferencesForAChannel**](UserApi.md#viewPushPreferencesForAChannel) | **GET** /v3/users/{user_id}/push_preference/{channel_url} | View push preferences for a channel
[**viewWhoOwnsARegistrationOrDeviceToken**](UserApi.md#viewWhoOwnsARegistrationOrDeviceToken) | **GET** /v3/push/device_tokens/{token_type}/{token} | View who owns a registration or device token



## addARegistrationOrDeviceToken

> AddARegistrationOrDeviceTokenResponse addARegistrationOrDeviceToken(userId, tokenType, opts)

Add a registration or device token

## Add a registration or device token  &gt; __Note__: A user can have up to 20 FCM registration tokens, 20 HMS device tokens, and 20 APNs device tokens each. The oldest token will be deleted before a new token is added for a user who already has 20 registration or device tokens. Only the 20 newest tokens will be maintained for users who already have more than 20 of each token type.  To send notification requests to push notification services on behalf of your server, adds a specific user&#39;s FCM registration token, HMS device token, or APNs device token to Sendbird server. Depending on which push service you are using, you can pass one of two values in &#x60;token_type&#x60;: &#x60;gcm&#x60;, &#x60;huawei&#x60;, or &#x60;apns&#x60;.  A FCM registration token and an APNs device token allow identification of each client app instance on each device, and are generated and registered by Android and iOS apps through the corresponding SDKs. Use this method if you need to register a token via your own server.  &gt; __Note__: For more information on the registration token and device token, visit the Google&#39;s [FCM](https://firebase.google.com/docs/auth/admin/verify-id-tokens) page, Huawei&#39;s [Push kit](https://developer.huawei.com/consumer/en/doc/development/HMSCore-Guides/service-introduction-0000001050040060) and Apple&#39;s [APNs](https://developer.apple.com/library/content/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/APNSOverview.html) page.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-add-a-registration-or-device-token ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.UserApi();
let userId = "userId_example"; // String | (Required) 
let tokenType = "tokenType_example"; // String | (Required) 
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'addARegistrationOrDeviceTokenRequest': new SendbirdPlatformSdk.AddARegistrationOrDeviceTokenRequest() // AddARegistrationOrDeviceTokenRequest | 
};
apiInstance.addARegistrationOrDeviceToken(userId, tokenType, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| (Required)  | 
 **tokenType** | **String**| (Required)  | 
 **apiToken** | **String**|  | [optional] 
 **addARegistrationOrDeviceTokenRequest** | [**AddARegistrationOrDeviceTokenRequest**](AddARegistrationOrDeviceTokenRequest.md)|  | [optional] 

### Return type

[**AddARegistrationOrDeviceTokenResponse**](AddARegistrationOrDeviceTokenResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## chooseAPushNotificationContentTemplate

> ChooseAPushNotificationContentTemplateResponse chooseAPushNotificationContentTemplate(userId, opts)

Choose a push notification content template

## Choose a push notification content template  Users can choose a template to determine how push notifications appear to them. Push notification content templates are pre-formatted forms that can be customized to display your own push notification messages on a user&#39;s device. Sendbird provides two types: &#x60;default&#x60; and &#x60;alternative&#x60;. Go to **Settings** &gt; **Chat** &gt; **Push notifications** &gt; **Push notification content templates** on [Sendbird Dashboard](https://dashboard.sendbird.com/auth/signin) to customize the templates.  If the &#x60;push_message_template&#x60; property is specified when [sending a message](https://sendbird.com/docs/chat/platform-api/v3/message/messaging-basics/send-a-message), the content template customized for the message takes precedence over the user&#39;s choice.  &gt; **Note**: Push notifications are only available for group channels.      https://sendbird.com/docs/chat/platform-api/v3/user/configuring-notification-preferences/choose-a-push-notification-content-template#1-choose-a-push-notification-content-template

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.UserApi();
let userId = "userId_example"; // String | (Required) 
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'chooseAPushNotificationContentTemplateRequest': new SendbirdPlatformSdk.ChooseAPushNotificationContentTemplateRequest() // ChooseAPushNotificationContentTemplateRequest | 
};
apiInstance.chooseAPushNotificationContentTemplate(userId, opts).then((data) => {
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
 **chooseAPushNotificationContentTemplateRequest** | [**ChooseAPushNotificationContentTemplateRequest**](ChooseAPushNotificationContentTemplateRequest.md)|  | [optional] 

### Return type

[**ChooseAPushNotificationContentTemplateResponse**](ChooseAPushNotificationContentTemplateResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createAUser

> SendbirdUser createAUser(opts)

Create a user

## Create a user  You should create a user in your Sendbird application to initiate conversations in channels. A user is identified by its unique user ID, and additionally have a changeable nickname, profile image, and so on. Users are at the core of all conversations. Sendbird applications are made up of users who chat in either Open Channels or Group Channels. Using this API, it is possible to have fine grained control over your users and what those users can do. To learn more about users, see [User overview](https://sendbird.com/docs/chat/platform-api/v3/user/user-overview#2-resource-representation).  https://sendbird.com/docs/chat/platform-api/v3/user/creating-users/create-a-user#1-create-a-user

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.UserApi();
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'createAUserRequest': new SendbirdPlatformSdk.CreateAUserRequest() // CreateAUserRequest | 
};
apiInstance.createAUser(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | **String**|  | [optional] 
 **createAUserRequest** | [**CreateAUserRequest**](CreateAUserRequest.md)|  | [optional] 

### Return type

[**SendbirdUser**](SendbirdUser.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createUserToken

> CreateUserTokenResponse createUserToken(userId, opts)

Create user token

## Create user token  This action issues a session token for user authentication. Session tokens provide an efficient stateless authentication method by not storing the tokens in the Sendbird database, and thus improving the server&#39;s performance. See [access token vs. session token](https://sendbird.com/docs/chat/platform-api/v3/user/creating-users/create-a-user#2-access-token-vs-session-token) to learn more about authenticating users.  &gt; **Note**: The endpoint &#x60;/users/{user_id}&#x60; is deprecated. Use &#x60;/users/{user_id}/token&#x60; for greater efficiency.      https://sendbird.com/docs/chat/platform-api/v3/user/managing-session-tokens/issue-a-session-token#1-issue-a-session-token

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.UserApi();
let userId = "userId_example"; // String | (Required) 
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'createUserTokenRequest': new SendbirdPlatformSdk.CreateUserTokenRequest() // CreateUserTokenRequest | 
};
apiInstance.createUserToken(userId, opts).then((data) => {
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
 **createUserTokenRequest** | [**CreateUserTokenRequest**](CreateUserTokenRequest.md)|  | [optional] 

### Return type

[**CreateUserTokenResponse**](CreateUserTokenResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteAUser

> Object deleteAUser(userId, opts)

Delete a user

## Delete a user  You can delete a user from your Sendbird application using this API.  &gt; **Note**: This API deletes user data and metadata, except for their messages. If you wish to delete user data including their messages, use the [GDPR request](https://sendbird.com/docs/chat/platform-api/v3/privacy/privacy-overview).      [https://sendbird.com/docs/chat/platform-api/v3/user/managing-users/delete-a-user#1-delete-a-user](https://sendbird.com/docs/chat/platform-api/v3/user/managing-users/delete-a-user#1-delete-a-user)

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.UserApi();
let userId = "userId_example"; // String | (Required) 
let opts = {
  'apiToken': {{API_TOKEN}} // String | 
};
apiInstance.deleteAUser(userId, opts).then((data) => {
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

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getChannelInvitationPreference

> GetChannelInvitationPreferenceResponse getChannelInvitationPreference(userId, opts)

Get channel invitation preference

## Get channel invitation preference  This action retrieves a user&#39;s [group channel](https://sendbird.com/docs/chat/platform-api/v3/channel/channel-overview#2-channel-types-3-group-channel) invitation preference. Users are subject to both user-specific and application-wide invitation preferences. Of the two, the invitation preference set for a specific user takes precedence over [the default channel invitation preference](https://sendbird.com/docs/chat/platform-api/v3/channel/setting-up-channels/get-default-invitation-preference).  [https://sendbird.com/docs/chat/platform-api/v3/channel/managing-a-channel/get-channel-invitation-preference#1-get-channel-invitation-preference](https://sendbird.com/docs/chat/platform-api/v3/channel/managing-a-channel/get-channel-invitation-preference#1-get-channel-invitation-preference)

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.UserApi();
let userId = "userId_example"; // String | (Required) 
let opts = {
  'apiToken': {{API_TOKEN}} // String | 
};
apiInstance.getChannelInvitationPreference(userId, opts).then((data) => {
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

### Return type

[**GetChannelInvitationPreferenceResponse**](GetChannelInvitationPreferenceResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## leaveMyGroupChannels

> Object leaveMyGroupChannels(userId, opts)

Leave my group channels

## Leave my group channels  This action allows a user to leave all group channels or channels with a specific custom type. This API is useful if you want to let a user leave a set of channels at once. To let a user leave only one of their group channels, use the [leave a channel API](https://sendbird.com/docs/chat/platform-api/v3/channel/managing-a-channel/leave-a-channel) instead.  Since this API can&#39;t be called for a deactivated user, ensure that the [&lt;code&gt;leave_all_when_deactivated&lt;/code&gt;](https://sendbird.com/docs/chat/platform-api/v3/user/managing-users/update-a-user#2-request-body) property of the user is set to its default value of &#x60;true&#x60; to let the user leave all joined group channels upon deactivation.  https://sendbird.com/docs/chat/platform-api/v3/user/managing-joined-group-channels/leave-group-channels#1-leave-group-channels  &#x60;user_id&#x60;   Type: string   Description: Specifies the unique ID of the user to leave all joined group channels.

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.UserApi();
let userId = "userId_example"; // String | (Required) 
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'leaveMyGroupChannelsRequest': new SendbirdPlatformSdk.LeaveMyGroupChannelsRequest() // LeaveMyGroupChannelsRequest | 
};
apiInstance.leaveMyGroupChannels(userId, opts).then((data) => {
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
 **leaveMyGroupChannelsRequest** | [**LeaveMyGroupChannelsRequest**](LeaveMyGroupChannelsRequest.md)|  | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## listMyGroupChannels

> ListMyGroupChannelsResponse listMyGroupChannels(userId, apiToken, opts)

List my group channels

## List my group channels  This action retrieves a list of [group channels](https://sendbird.com/docs/chat/platform-api/v3/channel/channel-overview#2-channel-types-3-group-channel) that a specific user has joined. You can use various query parameters to determine the search scope and select what kind of information you want to receive about the queried channels.  If you&#39;re looking to retrieve a list of group channels in a specific application, visit the [list group channels](https://sendbird.com/docs/chat/platform-api/v3/channel/listing-channels-in-an-application/list-group-channels) page under the Channel section.  https://sendbird.com/docs/chat/platform-api/v3/user/managing-joined-group-channels/list-group-channels-by-user#1-list-group-channels-by-user  &#x60;user_id&#x60;   Type: string   Description: Specifies the unique ID of the target user.

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.UserApi();
let userId = "userId_example"; // String | (Required) 
let apiToken = {{API_TOKEN}}; // String | 
let opts = {
  'token': "token_example", // String | Specifies a page token that indicates the starting index of a chunk of results. If not specified, the index is set as 0.
  'limit': 10, // Number | Specifies the number of results to return per page. Acceptable values are 1 to 100, inclusive. (Default: 10)
  'distinctMode': all, // String | 
  'publicMode': all, // String | 
  'superMode': all, // String | 
  'createdAfter': 1234567890123, // Number | Restricts the search scope to only retrieve group channels which have been created after the specified time, in Unix milliseconds format.
  'createdBefore': 1234567890123, // Number | Restricts the search scope to only retrieve group channels which have been created before the specified time, in Unix milliseconds format.
  'showEmpty': false, // Boolean | 
  'showMember': false, // Boolean | 
  'showDeliveryReceipt': false, // Boolean | 
  'showReadReceipt': false, // Boolean | 
  'showMetadata': false, // Boolean | 
  'showFrozen': false, // Boolean | 
  'order': "order_example", // String | 
  'metadataOrderKey': "metadataOrderKey_example", // String | Specifies the key of an item in metadata. When a value of the order parameter is set to metadata_value_alphabetical, the results are alphabetically sorted by the value of the item specified by the key.
  'customTypes': "customTypes_example", // String | Specifies a comma-separated string of one or more custom types to filter group channels. URL encoding each type is recommended. If not specified, all channels are returned, regardless of their custom type.
  'customTypeStartswith': "customTypeStartswith_example", // String | Searches for group channels with the custom type which starts with the specified value. URL encoding the value is recommended.
  'channelUrls': "channelUrls_example", // String | Specifies a comma-separated string of one or more group channel URLs to restrict the search scope. URL encoding each channel URL is recommended.
  'name': "name_example", // String | Specifies one or more group channel names.
  'nameContains': "nameContains_example", // String | Searches for group channels whose names contain the specified value. Note that this parameter is case-insensitive. URL encoding the value is recommended.
  'nameStartswith': "nameStartswith_example", // String | Searches for group channels whose names start with the specified value. Note that this parameter is case-insensitive. URL encoding the value is recommended.
  'membersExactlyIn': "membersExactlyIn_example", // String | Searches for group channels with all the specified users as members. The parameter value should consist of user IDs separated by commas.  Only user IDs that match those of existing users are used for channel search. URL encoding each ID is recommended.
  'membersIncludeIn': "membersIncludeIn_example", // String | Searches for group channels that include one or more users as members among the specified users. The value should consist of user IDs separated by commas or %2C. You can specify up to 60 user IDs.  Only user IDs that match those of existing users are used for channel search. URL encoding each ID is recommended.
  'queryType': "queryType_example", // String | Specifies a logical condition applied to the members_include_in parameter. Acceptable values are either AND or OR. For example, if you specify three members, A, B, and C, in members_include_in, the value of AND returns all channels that include every one of {A. B, C} as members. The value of OR returns channels that include {A}, plus those that include {B}, plus those that include {C}. (Default: AND)
  'membersNickname': "membersNickname_example", // String | Searches for group channels with members whose nicknames match the specified value. URL encoding the value is recommended.
  'membersNicknameContains': "membersNicknameContains_example", // String | Searches for group channels with members whose nicknames contain the specified value. Note that this parameter is case-insensitive. URL encoding the value is recommended.  * We recommend using at least three characters for the parameter value for better search efficiency when you design and implement related features. If you would like to allow one or two characters for searching, use members_nickname instead to prevent performance issues.
  'metadataKey': "metadataKey_example", // String | Searches for group channels with metadata containing an item with the specified value as its key. To use this parameter, either the metadata_values parameter or the metadata_value_startswith parameter should be specified.
  'metadataValues': "metadataValues_example", // String | Searches for group channels with metadata containing an item with the key specified by the metadata_key parameter, and the value of that item matches one or more values specified by this parameter. The string should be specified with multiple values separated by commas. URL encoding each value is recommended. To use this parameter, the metadata_key parameter should be specified.
  'metadataValueStartswith': "metadataValueStartswith_example", // String | Searches for group channels with metadata containing an item with the key specified by the metadata_key parameter, and the values of that item that start with the specified value of this parameter. URL encoding the value is recommended. To use this parameter, the metadata_key parameter should be specified.
  'metacounterKey': "metacounterKey_example", // String | Searches for group channels with metacounter containing an item with the specified value as its key. To use this parameter, either the metacounter_values parameter or one of the metacounter_value_gt, metacounter_value_gte, metacounter_value_lt, and metacounter_value_lte parameters should be specified.
  'metacounterValues': "metacounterValues_example", // String | Searches for group channels with metacounter containing an item with the key specified by the metadata_key parameter, where the value of that item is equal to one or more values specified by this parameter. The string should be specified with multiple values separated by commas. To use this parameter, the metacounter_key parameter should be specified.
  'metacounterValueGt': "metacounterValueGt_example", // String | Searches for group channels with metacounter containing an item with the key specified by the metadata_key parameter, where the value of that item is greater than the value specified by this parameter. To use this parameter, the metacounter_key parameter should be specified.
  'metacounterValueGte': "metacounterValueGte_example", // String | Searches for group channels with metacounter containing an item with the key specified by the metadata_key parameter, where the value of that item is greater than or equal to the value specified by this parameter. To use this parameter, the metacounter_key parameter should be specified.
  'metacounterValueLt': "metacounterValueLt_example", // String | Searches for group channels with metacounter containing an item with the key specified by the metadata_key parameter, where the value of that item is lower than the value specified by this parameter. To use this parameter, the metacounter_key parameter should be specified.
  'metacounterValueLte': "metacounterValueLte_example", // String | Searches for group channels with metacounter containing an item with the key specified by the metadata_key parameter, where the value of that item is lower than or equal to the value specified by this parameter. To use this parameter, the metacounter_key parameter should be specified.
  'includeSortedMetaarrayInLastMessage': false, // Boolean | Determines whether to include the sorted_metaarray as one of the last_message’s properties in the response.
  'customType': ANNOUNCEMENT, // String | (Deprecated) Returns channels whose custom_type matches the given value. If this field is not specified, all channels are returned, regardless of their custom type. The string passed here must be urlencoded.
  'readReceipt': false, // Boolean | (Deprecated) Superseded by show_read_receipt.
  'member': true, // Boolean | (Deprecated) Superseded by show_member.
  'isDistinct': true, // Boolean | (Deprecated) Superseded by distinct_mode.
  'membersIn': "membersIn_example", // String | (Deprecated) Superseded by members_exactly_in.
  'userId2': "userId_example" // String | (Deprecated) Restricts the search scope to only retrieve the target user's group channels. It's recommended to use the list group channels by user action instead.
};
apiInstance.listMyGroupChannels(userId, apiToken, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| (Required)  | 
 **apiToken** | **String**|  | 
 **token** | **String**| Specifies a page token that indicates the starting index of a chunk of results. If not specified, the index is set as 0. | [optional] 
 **limit** | **Number**| Specifies the number of results to return per page. Acceptable values are 1 to 100, inclusive. (Default: 10) | [optional] 
 **distinctMode** | **String**|  | [optional] 
 **publicMode** | **String**|  | [optional] 
 **superMode** | **String**|  | [optional] 
 **createdAfter** | **Number**| Restricts the search scope to only retrieve group channels which have been created after the specified time, in Unix milliseconds format. | [optional] 
 **createdBefore** | **Number**| Restricts the search scope to only retrieve group channels which have been created before the specified time, in Unix milliseconds format. | [optional] 
 **showEmpty** | **Boolean**|  | [optional] 
 **showMember** | **Boolean**|  | [optional] 
 **showDeliveryReceipt** | **Boolean**|  | [optional] 
 **showReadReceipt** | **Boolean**|  | [optional] 
 **showMetadata** | **Boolean**|  | [optional] 
 **showFrozen** | **Boolean**|  | [optional] 
 **order** | **String**|  | [optional] 
 **metadataOrderKey** | **String**| Specifies the key of an item in metadata. When a value of the order parameter is set to metadata_value_alphabetical, the results are alphabetically sorted by the value of the item specified by the key. | [optional] 
 **customTypes** | **String**| Specifies a comma-separated string of one or more custom types to filter group channels. URL encoding each type is recommended. If not specified, all channels are returned, regardless of their custom type. | [optional] 
 **customTypeStartswith** | **String**| Searches for group channels with the custom type which starts with the specified value. URL encoding the value is recommended. | [optional] 
 **channelUrls** | **String**| Specifies a comma-separated string of one or more group channel URLs to restrict the search scope. URL encoding each channel URL is recommended. | [optional] 
 **name** | **String**| Specifies one or more group channel names. | [optional] 
 **nameContains** | **String**| Searches for group channels whose names contain the specified value. Note that this parameter is case-insensitive. URL encoding the value is recommended. | [optional] 
 **nameStartswith** | **String**| Searches for group channels whose names start with the specified value. Note that this parameter is case-insensitive. URL encoding the value is recommended. | [optional] 
 **membersExactlyIn** | **String**| Searches for group channels with all the specified users as members. The parameter value should consist of user IDs separated by commas.  Only user IDs that match those of existing users are used for channel search. URL encoding each ID is recommended. | [optional] 
 **membersIncludeIn** | **String**| Searches for group channels that include one or more users as members among the specified users. The value should consist of user IDs separated by commas or %2C. You can specify up to 60 user IDs.  Only user IDs that match those of existing users are used for channel search. URL encoding each ID is recommended. | [optional] 
 **queryType** | **String**| Specifies a logical condition applied to the members_include_in parameter. Acceptable values are either AND or OR. For example, if you specify three members, A, B, and C, in members_include_in, the value of AND returns all channels that include every one of {A. B, C} as members. The value of OR returns channels that include {A}, plus those that include {B}, plus those that include {C}. (Default: AND) | [optional] 
 **membersNickname** | **String**| Searches for group channels with members whose nicknames match the specified value. URL encoding the value is recommended. | [optional] 
 **membersNicknameContains** | **String**| Searches for group channels with members whose nicknames contain the specified value. Note that this parameter is case-insensitive. URL encoding the value is recommended.  * We recommend using at least three characters for the parameter value for better search efficiency when you design and implement related features. If you would like to allow one or two characters for searching, use members_nickname instead to prevent performance issues. | [optional] 
 **metadataKey** | **String**| Searches for group channels with metadata containing an item with the specified value as its key. To use this parameter, either the metadata_values parameter or the metadata_value_startswith parameter should be specified. | [optional] 
 **metadataValues** | **String**| Searches for group channels with metadata containing an item with the key specified by the metadata_key parameter, and the value of that item matches one or more values specified by this parameter. The string should be specified with multiple values separated by commas. URL encoding each value is recommended. To use this parameter, the metadata_key parameter should be specified. | [optional] 
 **metadataValueStartswith** | **String**| Searches for group channels with metadata containing an item with the key specified by the metadata_key parameter, and the values of that item that start with the specified value of this parameter. URL encoding the value is recommended. To use this parameter, the metadata_key parameter should be specified. | [optional] 
 **metacounterKey** | **String**| Searches for group channels with metacounter containing an item with the specified value as its key. To use this parameter, either the metacounter_values parameter or one of the metacounter_value_gt, metacounter_value_gte, metacounter_value_lt, and metacounter_value_lte parameters should be specified. | [optional] 
 **metacounterValues** | **String**| Searches for group channels with metacounter containing an item with the key specified by the metadata_key parameter, where the value of that item is equal to one or more values specified by this parameter. The string should be specified with multiple values separated by commas. To use this parameter, the metacounter_key parameter should be specified. | [optional] 
 **metacounterValueGt** | **String**| Searches for group channels with metacounter containing an item with the key specified by the metadata_key parameter, where the value of that item is greater than the value specified by this parameter. To use this parameter, the metacounter_key parameter should be specified. | [optional] 
 **metacounterValueGte** | **String**| Searches for group channels with metacounter containing an item with the key specified by the metadata_key parameter, where the value of that item is greater than or equal to the value specified by this parameter. To use this parameter, the metacounter_key parameter should be specified. | [optional] 
 **metacounterValueLt** | **String**| Searches for group channels with metacounter containing an item with the key specified by the metadata_key parameter, where the value of that item is lower than the value specified by this parameter. To use this parameter, the metacounter_key parameter should be specified. | [optional] 
 **metacounterValueLte** | **String**| Searches for group channels with metacounter containing an item with the key specified by the metadata_key parameter, where the value of that item is lower than or equal to the value specified by this parameter. To use this parameter, the metacounter_key parameter should be specified. | [optional] 
 **includeSortedMetaarrayInLastMessage** | **Boolean**| Determines whether to include the sorted_metaarray as one of the last_message’s properties in the response. | [optional] 
 **customType** | **String**| (Deprecated) Returns channels whose custom_type matches the given value. If this field is not specified, all channels are returned, regardless of their custom type. The string passed here must be urlencoded. | [optional] 
 **readReceipt** | **Boolean**| (Deprecated) Superseded by show_read_receipt. | [optional] 
 **member** | **Boolean**| (Deprecated) Superseded by show_member. | [optional] 
 **isDistinct** | **Boolean**| (Deprecated) Superseded by distinct_mode. | [optional] 
 **membersIn** | **String**| (Deprecated) Superseded by members_exactly_in. | [optional] 
 **userId2** | **String**| (Deprecated) Restricts the search scope to only retrieve the target user&#39;s group channels. It&#39;s recommended to use the list group channels by user action instead. | [optional] 

### Return type

[**ListMyGroupChannelsResponse**](ListMyGroupChannelsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listRegistrationOrDeviceTokens

> ListRegistrationOrDeviceTokensResponse listRegistrationOrDeviceTokens(userId, tokenType, opts)

List registration or device tokens

## List registration or device tokens  Retrieves a list of a user&#39;s registration or device tokens. You can pass &#x60;gcm&#x60;, &#x60;huawei&#x60;, or &#x60;apns&#x60; for FCM registration token, HMS device token, or APNs device token, respectively, in the &#x60;token_type&#x60; parameter for the push notification service you are using.  https://sendbird.com/docs/chat/platform-api/v3/user/managing-device-tokens/list-registration-or-device-tokens#1-list-registration-or-device-tokens

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.UserApi();
let userId = "userId_example"; // String | (Required) 
let tokenType = "tokenType_example"; // String | (Required) 
let opts = {
  'apiToken': {{API_TOKEN}} // String | 
};
apiInstance.listRegistrationOrDeviceTokens(userId, tokenType, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| (Required)  | 
 **tokenType** | **String**| (Required)  | 
 **apiToken** | **String**|  | [optional] 

### Return type

[**ListRegistrationOrDeviceTokensResponse**](ListRegistrationOrDeviceTokensResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listUsers

> ListUsersResponse listUsers(opts)

List users

## List users  You can retrieve a list of users in your Sendbird application using this API. You can generate a customized list using various parameter combinations.  https://sendbird.com/docs/chat/platform-api/v3/user/listing-users/list-users#1-list-users

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.UserApi();
let opts = {
  'token': "token_example", // String | 
  'limit': 56, // Number | 
  'activeMode': "activeMode_example", // String | Specifies the activation status of the users in the list. Acceptable values are `activated`, `deactivated`, and `all`. (Default: `activated`)
  'showBot': true, // Boolean | Determines whether to include bots in the list. (Default: true)
  'userIds': "userIds_example", // String | Specifies the user IDs. The value should be a comma-separated string that consists of multiple urlencoded user IDs. An example of a urlencoded string is ?user_ids=urlencoded_id_1,urlencoded_id_2. * The maximum number of user IDs in this parameter is 250. If you exceed the maximum number, your request may receive an HTTP 414 error indicating that the request URL is longer than what Sendbird server can interpret.
  'nickname': "nickname_example", // String | 
  'nicknameStartswith': "nicknameStartswith_example", // String | 
  'metadatakey': "metadatakey_example", // String | 
  'metadatavaluesIn': "metadatavaluesIn_example", // String | Searches for blocked users with metadata containing an item with the key specified by the metadatakey parameter above, and the value of that item matches one or more values specified by this parameter. The string should be specified with multiple urlencoded metadata values separated by commas (for example, `?metadatavalues_in=urlencoded_value_1, urlencoded_value_2`). This parameter should be specified in conjunction with the `metadatakey` above.
  'apiToken': {{API_TOKEN}} // String | 
};
apiInstance.listUsers(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**|  | [optional] 
 **limit** | **Number**|  | [optional] 
 **activeMode** | **String**| Specifies the activation status of the users in the list. Acceptable values are &#x60;activated&#x60;, &#x60;deactivated&#x60;, and &#x60;all&#x60;. (Default: &#x60;activated&#x60;) | [optional] 
 **showBot** | **Boolean**| Determines whether to include bots in the list. (Default: true) | [optional] 
 **userIds** | **String**| Specifies the user IDs. The value should be a comma-separated string that consists of multiple urlencoded user IDs. An example of a urlencoded string is ?user_ids&#x3D;urlencoded_id_1,urlencoded_id_2. * The maximum number of user IDs in this parameter is 250. If you exceed the maximum number, your request may receive an HTTP 414 error indicating that the request URL is longer than what Sendbird server can interpret. | [optional] 
 **nickname** | **String**|  | [optional] 
 **nicknameStartswith** | **String**|  | [optional] 
 **metadatakey** | **String**|  | [optional] 
 **metadatavaluesIn** | **String**| Searches for blocked users with metadata containing an item with the key specified by the metadatakey parameter above, and the value of that item matches one or more values specified by this parameter. The string should be specified with multiple urlencoded metadata values separated by commas (for example, &#x60;?metadatavalues_in&#x3D;urlencoded_value_1, urlencoded_value_2&#x60;). This parameter should be specified in conjunction with the &#x60;metadatakey&#x60; above. | [optional] 
 **apiToken** | **String**|  | [optional] 

### Return type

[**ListUsersResponse**](ListUsersResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## markAllMessagesAsRead

> Object markAllMessagesAsRead(userId, opts)

Mark all messages as read

## Mark all messages as read  This action marks all of a user&#39;s unread messages as read in certain group channels. If channels aren&#39;t specified, the user&#39;s unread messages in all group channels are marked as read.  https://sendbird.com/docs/chat/platform-api/v3/user/marking-messages-as-read/mark-all-of-a-users-messages-as-read#1-mark-all-of-a-user-s-messages-as-read

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.UserApi();
let userId = "userId_example"; // String | (Required) 
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'markAllMessagesAsReadRequest': new SendbirdPlatformSdk.MarkAllMessagesAsReadRequest() // MarkAllMessagesAsReadRequest | 
};
apiInstance.markAllMessagesAsRead(userId, opts).then((data) => {
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
 **markAllMessagesAsReadRequest** | [**MarkAllMessagesAsReadRequest**](MarkAllMessagesAsReadRequest.md)|  | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## removeARegistrationOrDeviceToken

> RemoveARegistrationOrDeviceTokenResponse removeARegistrationOrDeviceToken(userId, tokenType, token, opts)

Remove a registration or device token - When unregistering a specific token

## Remove a registration or device token  Removes a user&#39;s specific registration or device token or all tokens. You can pass &#x60;gcm&#x60;, &#x60;huawei&#x60;, or &#x60;apns&#x60; for FCM registration token, HMS device token, or APNs device token, respectively, in the &#x60;token_type&#x60; parameter for the push notification service you are using.  https://sendbird.com/docs/chat/platform-api/v3/user/managing-device-tokens/remove-a-registration-or-device-token#1-remove-a-registration-or-device-token

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.UserApi();
let userId = "userId_example"; // String | (Required) 
let tokenType = "tokenType_example"; // String | (Required) 
let token = "token_example"; // String | (Required) 
let opts = {
  'apiToken': {{API_TOKEN}} // String | 
};
apiInstance.removeARegistrationOrDeviceToken(userId, tokenType, token, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| (Required)  | 
 **tokenType** | **String**| (Required)  | 
 **token** | **String**| (Required)  | 
 **apiToken** | **String**|  | [optional] 

### Return type

[**RemoveARegistrationOrDeviceTokenResponse**](RemoveARegistrationOrDeviceTokenResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## removeARegistrationOrDeviceTokenFromAnOwner

> [MarkChannelMessagesAsReadRequest] removeARegistrationOrDeviceTokenFromAnOwner(tokenType, token, opts)

Remove a registration or device token from an owner

## Remove a registration or device token from an owner  Removes a registration or device token from a user who is the owner of the token. You can pass &#x60;gcm&#x60;, &#x60;huawei&#x60;, or &#x60;apns&#x60; for FCM registration token, HMS device token, or APNs device token, respectively, in the &#x60;token_type&#x60; parameter for the push notification service you are using.  https://sendbird.com/docs/chat/platform-api/v3/user/managing-device-tokens/remove-a-registration-or-device-token-from-an-owner#1-remove-a-registration-or-device-token-from-an-owner

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.UserApi();
let tokenType = "tokenType_example"; // String | (Required) 
let token = "token_example"; // String | (Required) 
let opts = {
  'apiToken': {{API_TOKEN}} // String | 
};
apiInstance.removeARegistrationOrDeviceTokenFromAnOwner(tokenType, token, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tokenType** | **String**| (Required)  | 
 **token** | **String**| (Required)  | 
 **apiToken** | **String**|  | [optional] 

### Return type

[**[MarkChannelMessagesAsReadRequest]**](MarkChannelMessagesAsReadRequest.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## removeAllRegistrationOrDeviceToken

> RemoveAllRegistrationOrDeviceTokenResponse removeAllRegistrationOrDeviceToken(userId, opts)

Remove a registration or device token - When unregistering all device tokens

## Remove a registration or device token  Removes a user&#39;s specific registration or device token or all tokens. You can pass &#x60;gcm&#x60;, &#x60;huawei&#x60;, or &#x60;apns&#x60; for FCM registration token, HMS device token, or APNs device token, respectively, in the &#x60;token_type&#x60; parameter for the push notification service you are using.  https://sendbird.com/docs/chat/platform-api/v3/user/managing-device-tokens/remove-a-registration-or-device-token#1-remove-a-registration-or-device-token

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.UserApi();
let userId = "userId_example"; // String | (Required) 
let opts = {
  'apiToken': {{API_TOKEN}} // String | 
};
apiInstance.removeAllRegistrationOrDeviceToken(userId, opts).then((data) => {
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

### Return type

[**RemoveAllRegistrationOrDeviceTokenResponse**](RemoveAllRegistrationOrDeviceTokenResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## resetPushPreferences

> Object resetPushPreferences(userId, opts)

Reset push preferences

## Reset push preferences  You can reset a user&#39;s notifications preferences. The values are reset to the default as the following.  - The values for the &#x60;do_not_disturb&#x60; and &#x60;snooze_enabled&#x60; properties are set to &#x60;false&#x60;.      - The values of the parameters associated with the time frame are all set to &#x60;0&#x60;.      - The value for the &#x60;timezone&#x60; property is set to &#x60;UTC&#x60;.      - The value for the &#x60;push_sound&#x60; property is set to &#x60;default&#x60;.       &gt; **Note**: Push notifications are only available for group channels.      [https://sendbird.com/docs/chat/platform-api/v3/user/configuring-notification-preferences/reset-push-notification-preferences#1-reset-push-notification-preferences](https://sendbird.com/docs/chat/platform-api/v3/user/configuring-notification-preferences/reset-push-notification-preferences#1-reset-push-notification-preferences)

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.UserApi();
let userId = "userId_example"; // String | (Required) 
let opts = {
  'apiToken': {{API_TOKEN}} // String | 
};
apiInstance.resetPushPreferences(userId, opts).then((data) => {
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

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateAUser

> SendbirdUser updateAUser(userId, opts)

Update a user

## Update a user  You can update information about a user using this API. In addition to changing a user&#39;s nickname or profile image, you can issue a new access token for the user. The new access token replaces the previous one as the necessary token for authentication.  You can also deactivate or reactivate a user using this API request. If the &#x60;leave_all_when_deactivated&#x60; is set to &#x60;true&#x60;, a user leaves all joined group channels and becomes deactivated.  &gt; **Note**: Issuing session tokens through the &#x60;/users/{user_id}&#x60; endpoint is now deprecated and it&amp;apos;s replaced with [&amp;lt;code&amp;gt;/users/{user_id}/token&amp;lt;/code&amp;gt;](https://sendbird.com/docs/chat/platform-api/v3/user/managing-session-tokens/issue-a-session-token) endpoint for greater efficiency. For those who are currently using the old endpoint, you can start issuing tokens using the new endpoint.      [https://sendbird.com/docs/chat/platform-api/v3/user/managing-users/update-a-user#1-update-a-user](https://sendbird.com/docs/chat/platform-api/v3/user/managing-users/update-a-user#1-update-a-user)

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.UserApi();
let userId = "userId_example"; // String | (Required) 
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'updateAUserRequest': new SendbirdPlatformSdk.UpdateAUserRequest() // UpdateAUserRequest | 
};
apiInstance.updateAUser(userId, opts).then((data) => {
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
 **updateAUserRequest** | [**UpdateAUserRequest**](UpdateAUserRequest.md)|  | [optional] 

### Return type

[**SendbirdUser**](SendbirdUser.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateChannelInvitationPreference

> UpdateChannelInvitationPreferenceResponse updateChannelInvitationPreference(userId, opts)

Update channel invitation preference

## Update channel invitation preference  This action updates a user&#39;s [group channel](https://sendbird.com/docs/chat/platform-api/v3/channel/channel-overview#2-channel-types-3-group-channel) invitation preference. Updating the [application&#39;s default channel invitation preference](https://sendbird.com/docs/chat/platform-api/v3/channel/setting-up-channels/update-default-invitation-preference) won&#39;t override existing users&#39; individual channel invitation preferences. The changed preference only affects the users created after the update.  https://sendbird.com/docs/chat/platform-api/v3/channel/managing-a-channel/update-channel-invitation-preference#1-update-channel-invitation-preference

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.UserApi();
let userId = "userId_example"; // String | (Required) 
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'updateChannelInvitationPreferenceRequest': new SendbirdPlatformSdk.UpdateChannelInvitationPreferenceRequest() // UpdateChannelInvitationPreferenceRequest | 
};
apiInstance.updateChannelInvitationPreference(userId, opts).then((data) => {
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
 **updateChannelInvitationPreferenceRequest** | [**UpdateChannelInvitationPreferenceRequest**](UpdateChannelInvitationPreferenceRequest.md)|  | [optional] 

### Return type

[**UpdateChannelInvitationPreferenceResponse**](UpdateChannelInvitationPreferenceResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateCountPreferenceOfAChannel

> UpdateCountPreferenceOfChannelByUrlResponse updateCountPreferenceOfAChannel(userId, channelUrl, opts)

Update count preference of a channel

## Update count preference of a channel  This action updates a user&#39;s count preference of a specific group channel. The count preference allows a user to either update the number of unread messages or the number of unread mentioned messages, or both in a specific group channel.  If you want to retrieve the total number count of a specific group channel, go to the [get count preference of a channel](https://sendbird.com/docs/chat/platform-api/v3/user/managing-unread-count/get-count-preference-of-a-channel) page.  https://sendbird.com/docs/chat/platform-api/v3/user/managing-unread-count/update-count-preference-of-a-channel#1-update-count-preference-of-a-channel

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.UserApi();
let userId = "userId_example"; // String | (Required) 
let channelUrl = "channelUrl_example"; // String | (Required) 
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'updateCountPreferenceOfAChannelRequest': new SendbirdPlatformSdk.UpdateCountPreferenceOfAChannelRequest() // UpdateCountPreferenceOfAChannelRequest | 
};
apiInstance.updateCountPreferenceOfAChannel(userId, channelUrl, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| (Required)  | 
 **channelUrl** | **String**| (Required)  | 
 **apiToken** | **String**|  | [optional] 
 **updateCountPreferenceOfAChannelRequest** | [**UpdateCountPreferenceOfAChannelRequest**](UpdateCountPreferenceOfAChannelRequest.md)|  | [optional] 

### Return type

[**UpdateCountPreferenceOfChannelByUrlResponse**](UpdateCountPreferenceOfChannelByUrlResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updatePushPreferences

> UpdatePushPreferencesResponse updatePushPreferences(userId, opts)

Update push preferences

## Update push preferences  You can update a user&#39;s notifications preferences. A push notification is a message that is immediately delivered to a user&#39;s device when the device is either idle or running the client app in the background.  &gt; **Note**: Push notifications are only available for group channels.      [https://sendbird.com/docs/chat/platform-api/v3/user/configuring-notification-preferences/update-push-notification-preferences#1-update-push-notification-preferences](https://sendbird.com/docs/chat/platform-api/v3/user/configuring-notification-preferences/update-push-notification-preferences#1-update-push-notification-preferences)

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.UserApi();
let userId = "userId_example"; // String | (Required) 
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'updatePushPreferencesRequest': new SendbirdPlatformSdk.UpdatePushPreferencesRequest() // UpdatePushPreferencesRequest | 
};
apiInstance.updatePushPreferences(userId, opts).then((data) => {
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
 **updatePushPreferencesRequest** | [**UpdatePushPreferencesRequest**](UpdatePushPreferencesRequest.md)|  | [optional] 

### Return type

[**UpdatePushPreferencesResponse**](UpdatePushPreferencesResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updatePushPreferencesForAChannel

> UpdatePushPreferencesForAChannelResponse updatePushPreferencesForAChannel(userId, channelUrl, opts)

Update push preferences for a channel

## Update push preferences for a channel  You can update a user&#39;s notifications preferences for a specific channel. A push notification is a message that is immediately delivered to a user&#39;s device when the device is either idle or running the client app in the background.  &gt; **Note**: Push notifications are only available for group channels.      [https://sendbird.com/docs/chat/platform-api/v3/user/configuring-notification-preferences/update-push-notification-preferences-for-a-channel#1-update-push-notification-preferences-for-a-channel](https://sendbird.com/docs/chat/platform-api/v3/user/configuring-notification-preferences/update-push-notification-preferences-for-a-channel#1-update-push-notification-preferences-for-a-channel)

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.UserApi();
let userId = "userId_example"; // String | (Required) 
let channelUrl = "channelUrl_example"; // String | (Required) 
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'updatePushPreferencesForAChannelRequest': new SendbirdPlatformSdk.UpdatePushPreferencesForAChannelRequest() // UpdatePushPreferencesForAChannelRequest | 
};
apiInstance.updatePushPreferencesForAChannel(userId, channelUrl, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| (Required)  | 
 **channelUrl** | **String**| (Required)  | 
 **apiToken** | **String**|  | [optional] 
 **updatePushPreferencesForAChannelRequest** | [**UpdatePushPreferencesForAChannelRequest**](UpdatePushPreferencesForAChannelRequest.md)|  | [optional] 

### Return type

[**UpdatePushPreferencesForAChannelResponse**](UpdatePushPreferencesForAChannelResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## viewAUser

> SendbirdUser viewAUser(userId, opts)

View a user

## View a user  You can retrieve information about a user using this API.  https://sendbird.com/docs/chat/platform-api/v3/user/listing-users/get-a-user#1-get-a-user  &#x60;user_id&#x60;   Type: string   Description: Specifies the unique ID of the user to retrieve.

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.UserApi();
let userId = "userId_example"; // String | (Required) 
let opts = {
  'includeUnreadCount': true, // Boolean | 
  'customTypes': "customTypes_example", // String | 
  'superMode': "superMode_example", // String | Restricts the search scope to retrieve only Supergroup or non-Supergroup channels. Acceptable values are `all`, `super`, and `nonsuper`. This parameter should be specified in conjunction with `include_unread_count` above. (Default: `all`)
  'apiToken': {{API_TOKEN}} // String | 
};
apiInstance.viewAUser(userId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| (Required)  | 
 **includeUnreadCount** | **Boolean**|  | [optional] 
 **customTypes** | **String**|  | [optional] 
 **superMode** | **String**| Restricts the search scope to retrieve only Supergroup or non-Supergroup channels. Acceptable values are &#x60;all&#x60;, &#x60;super&#x60;, and &#x60;nonsuper&#x60;. This parameter should be specified in conjunction with &#x60;include_unread_count&#x60; above. (Default: &#x60;all&#x60;) | [optional] 
 **apiToken** | **String**|  | [optional] 

### Return type

[**SendbirdUser**](SendbirdUser.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## viewCountPreferenceOfAChannel

> ViewCountPreferenceOfAChannelResponse viewCountPreferenceOfAChannel(userId, channelUrl, opts)

View count preference of a channel

## View count preference of a channel  This action retrieves a user&#39;s count preference of a specific group channel. The count preference allows a user to either retrieve the number of unread messages or unread mentioned messages, or both in a specific group channel.  If you want to update the total number count of a specific group channel, visit the [update count preference of a channel](https://sendbird.com/docs/chat/platform-api/v3/user/managing-unread-count/update-count-preference-of-a-channel).  https://sendbird.com/docs/chat/platform-api/v3/user/managing-unread-count/get-count-preference-of-a-channel#1-get-count-preference-of-a-channel

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.UserApi();
let userId = "userId_example"; // String | (Required) 
let channelUrl = "channelUrl_example"; // String | (Required) 
let opts = {
  'apiToken': {{API_TOKEN}} // String | 
};
apiInstance.viewCountPreferenceOfAChannel(userId, channelUrl, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| (Required)  | 
 **channelUrl** | **String**| (Required)  | 
 **apiToken** | **String**|  | [optional] 

### Return type

[**ViewCountPreferenceOfAChannelResponse**](ViewCountPreferenceOfAChannelResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## viewNumberOfChannelsWithUnreadMessages

> ViewNumberOfChannelsWithUnreadMessagesResponse viewNumberOfChannelsWithUnreadMessages(userId, opts)

View number of channels with unread messages

## View number of channels with unread messages  This action retrieves the total number of group channels in which a user has unread messages. You can use various query parameters to determine the search scope of group channels.  https://sendbird.com/docs/chat/platform-api/v3/user/managing-unread-count/get-number-of-channels-with-unread-messages#1-get-number-of-channels-with-unread-messages

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.UserApi();
let userId = "userId_example"; // String | (Required) 
let opts = {
  'customTypes': "customTypes_example", // String | 
  'superMode': "superMode_example", // String | Restricts the search scope to either Supergroup channels or non-Supergroup channels or both. Acceptable values are all, super, and nonsuper. (Default: all)
  'apiToken': {{API_TOKEN}} // String | 
};
apiInstance.viewNumberOfChannelsWithUnreadMessages(userId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| (Required)  | 
 **customTypes** | **String**|  | [optional] 
 **superMode** | **String**| Restricts the search scope to either Supergroup channels or non-Supergroup channels or both. Acceptable values are all, super, and nonsuper. (Default: all) | [optional] 
 **apiToken** | **String**|  | [optional] 

### Return type

[**ViewNumberOfChannelsWithUnreadMessagesResponse**](ViewNumberOfChannelsWithUnreadMessagesResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## viewNumberOfUnreadMessages

> ViewNumberOfUnreadMessagesResponse viewNumberOfUnreadMessages(userId, opts)

View number of unread messages

## View number of unread messages  This action retrieves a user&#39;s total number of unread messages in group channels.  &gt; **Note**: The unread count feature is only available for group channels.      [https://sendbird.com/docs/chat/platform-api/v3/user/managing-unread-count/get-number-of-unread-messages#1-get-number-of-unread-messages](https://sendbird.com/docs/chat/platform-api/v3/user/managing-unread-count/get-number-of-unread-messages#1-get-number-of-unread-messages)  &#x60;user_id&#x60;   Type: string   Description: Specifies the unique ID of a user.

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.UserApi();
let userId = "userId_example"; // String | (Required) 
let opts = {
  'customTypes': "customTypes_example", // String | Specifies a comma-separated string of one or more custom types to filter group channels. URL encoding each type is recommended. If not specified, all channels are returned, regardless of their custom type.
  'superMode': "superMode_example", // String | Restricts the search scope to either Supergroup channels or non-Supergroup channels or both. Acceptable values are `all`, `super`, and `nonsuper`. (Default: `all`)
  'apiToken': {{API_TOKEN}} // String | 
};
apiInstance.viewNumberOfUnreadMessages(userId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| (Required)  | 
 **customTypes** | **String**| Specifies a comma-separated string of one or more custom types to filter group channels. URL encoding each type is recommended. If not specified, all channels are returned, regardless of their custom type. | [optional] 
 **superMode** | **String**| Restricts the search scope to either Supergroup channels or non-Supergroup channels or both. Acceptable values are &#x60;all&#x60;, &#x60;super&#x60;, and &#x60;nonsuper&#x60;. (Default: &#x60;all&#x60;) | [optional] 
 **apiToken** | **String**|  | [optional] 

### Return type

[**ViewNumberOfUnreadMessagesResponse**](ViewNumberOfUnreadMessagesResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## viewPushPreferences

> ViewPushPreferencesResponse viewPushPreferences(userId, opts)

View push preferences

## View push preferences  You can retrieves a user&#39;s notifications preferences. A push notification is a message that is immediately delivered to a user&#39;s device when the device is either idle or running the client app in the background.  &gt; **Note**: Push notifications are only available for group channels.      [https://sendbird.com/docs/chat/platform-api/v3/user/configuring-notification-preferences/get-push-notification-preferences#1-get-push-notification-preferences](https://sendbird.com/docs/chat/platform-api/v3/user/configuring-notification-preferences/get-push-notification-preferences#1-get-push-notification-preferences)

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.UserApi();
let userId = "userId_example"; // String | (Required) 
let opts = {
  'apiToken': {{API_TOKEN}} // String | 
};
apiInstance.viewPushPreferences(userId, opts).then((data) => {
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

### Return type

[**ViewPushPreferencesResponse**](ViewPushPreferencesResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## viewPushPreferencesForAChannel

> ViewPushPreferencesForAChannelResponse viewPushPreferencesForAChannel(userId, channelUrl, opts)

View push preferences for a channel

## View push preferences for a channel  You can retrieve a user&#39;s notifications preferences for a specific channel. A push notification is a message that is immediately delivered to a user&#39;s device when the device is either idle or running the client app in the background. These notifications preferences can be configured.  &gt; **Note**: Push notifications are only available for group channels.      [https://sendbird.com/docs/chat/platform-api/v3/user/configuring-notification-preferences/get-push-notification-preferences-for-a-channel#1-get-push-notification-preferences-for-a-channel](https://sendbird.com/docs/chat/platform-api/v3/user/configuring-notification-preferences/get-push-notification-preferences-for-a-channel#1-get-push-notification-preferences-for-a-channel)

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.UserApi();
let userId = "userId_example"; // String | (Required) 
let channelUrl = "channelUrl_example"; // String | (Required) 
let opts = {
  'apiToken': {{API_TOKEN}} // String | 
};
apiInstance.viewPushPreferencesForAChannel(userId, channelUrl, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| (Required)  | 
 **channelUrl** | **String**| (Required)  | 
 **apiToken** | **String**|  | [optional] 

### Return type

[**ViewPushPreferencesForAChannelResponse**](ViewPushPreferencesForAChannelResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## viewWhoOwnsARegistrationOrDeviceToken

> [MarkChannelMessagesAsReadRequest] viewWhoOwnsARegistrationOrDeviceToken(tokenType, token, opts)

View who owns a registration or device token

## View who owns a registration or device token  Retrieves a user who owns a FCM registration token, HMS device token, or APNs device token. You can pass one of two values in &#x60;token_type&#x60;: &#x60;gcm&#x60;, &#x60;huawei&#x60;, or &#x60;apns&#x60;, depending on which push service you are using.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-view-who-owns-a-registration-or-device-token ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.UserApi();
let tokenType = "tokenType_example"; // String | (Required) 
let token = "token_example"; // String | (Required) 
let opts = {
  'apiToken': {{API_TOKEN}} // String | 
};
apiInstance.viewWhoOwnsARegistrationOrDeviceToken(tokenType, token, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tokenType** | **String**| (Required)  | 
 **token** | **String**| (Required)  | 
 **apiToken** | **String**|  | [optional] 

### Return type

[**[MarkChannelMessagesAsReadRequest]**](MarkChannelMessagesAsReadRequest.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

