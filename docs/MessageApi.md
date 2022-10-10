# SendbirdPlatformSdk.MessageApi

All URIs are relative to *https://api-APP_ID.sendbird.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addEmojiCategories**](MessageApi.md#addEmojiCategories) | **POST** /v3/emoji_categories | Add emoji categories
[**addEmojis**](MessageApi.md#addEmojis) | **POST** /v3/emojis | Add emojis
[**addExtraDataToMessage**](MessageApi.md#addExtraDataToMessage) | **POST** /v3/{channel_type}/{channel_url}/messages/{message_id}/sorted_metaarray | Add extra data to a message
[**addReactionToAMessage**](MessageApi.md#addReactionToAMessage) | **POST** /v3/{channel_type}/{channel_url}/messages/{message_id}/reactions | Add a reaction to a message
[**deleteEmojiByKey**](MessageApi.md#deleteEmojiByKey) | **DELETE** /v3/emojis/{emoji_key} | Delete an emoji
[**deleteEmojiCategoryById**](MessageApi.md#deleteEmojiCategoryById) | **DELETE** /v3/emoji_categories/{emoji_category_id} | Delete an emoji category
[**deleteMessageById**](MessageApi.md#deleteMessageById) | **DELETE** /v3/{channel_type}/{channel_url}/messages/{message_id} | Delete a message
[**enableReactions**](MessageApi.md#enableReactions) | **PUT** /v3/applications/settings/reactions | Enable reactions
[**gcMarkAllMessagesAsDelivered**](MessageApi.md#gcMarkAllMessagesAsDelivered) | **PUT** /v3/group_channels/{channel_url}/messages/mark_as_delivered | Mark all messages as delivered
[**gcMarkAllMessagesAsRead**](MessageApi.md#gcMarkAllMessagesAsRead) | **PUT** /v3/group_channels/{channel_url}/messages/mark_as_read | Mark all messages as read
[**gcViewNumberOfEachMembersUnreadMessages**](MessageApi.md#gcViewNumberOfEachMembersUnreadMessages) | **GET** /v3/group_channels/{channel_url}/messages/unread_count | View number of each member&#39;s unread messages
[**getEmojiByKey**](MessageApi.md#getEmojiByKey) | **GET** /v3/emojis/{emoji_key} | Get an emoji
[**getEmojiCategoryById**](MessageApi.md#getEmojiCategoryById) | **GET** /v3/emoji_categories/{emoji_category_id} | Get an emoji category
[**getStatistics**](MessageApi.md#getStatistics) | **GET** /v3/announcement_stats/weekly | Get statistics - weekly
[**getStatisticsDaily**](MessageApi.md#getStatisticsDaily) | **GET** /v3/announcement_stats/daily | Get statistics - daily
[**getStatisticsMonthly**](MessageApi.md#getStatisticsMonthly) | **GET** /v3/announcement_stats/monthly | Get statistics - monthly
[**listAllEmojisAndEmojiCategories**](MessageApi.md#listAllEmojisAndEmojiCategories) | **GET** /v3/emoji_categories | List all emojis and emoji categories
[**listAnnouncementGroups**](MessageApi.md#listAnnouncementGroups) | **GET** /v3/announcement_group | List announcement groups
[**listAnnouncements**](MessageApi.md#listAnnouncements) | **GET** /v3/announcements | List announcements
[**listEmojis**](MessageApi.md#listEmojis) | **GET** /v3/emojis | List emojis
[**listMessages**](MessageApi.md#listMessages) | **GET** /v3/{channel_type}/{channel_url}/messages | List messages
[**listReactionsOfMessage**](MessageApi.md#listReactionsOfMessage) | **GET** /v3/{channel_type}/{channel_url}/messages/{message_id}/reactions | List reactions of a message
[**migrateMessagesByUrl**](MessageApi.md#migrateMessagesByUrl) | **POST** /v3/migration/{target_channel_url} | Migrate messages
[**removeExtraDataFromMessage**](MessageApi.md#removeExtraDataFromMessage) | **DELETE** /v3/{channel_type}/{channel_url}/messages/{message_id}/sorted_metaarray | Remove extra data from a message
[**removeReactionFromAMessage**](MessageApi.md#removeReactionFromAMessage) | **DELETE** /v3/{channel_type}/{channel_url}/messages/{message_id}/reactions | Remove a reaction from a message
[**scheduleAnnouncement**](MessageApi.md#scheduleAnnouncement) | **POST** /v3/announcements | Schedule an announcement
[**sendMessage**](MessageApi.md#sendMessage) | **POST** /v3/{channel_type}/{channel_url}/messages | Send a message
[**translateMessageIntoOtherLanguages**](MessageApi.md#translateMessageIntoOtherLanguages) | **POST** /v3/{channel_type}/{channel_url}/messages/{message_id}/translation | Translate a message into other languages
[**updateAnnouncementById**](MessageApi.md#updateAnnouncementById) | **PUT** /v3/announcements/{unique_id} | Update an announcement
[**updateEmojiCategoryUrlById**](MessageApi.md#updateEmojiCategoryUrlById) | **PUT** /v3/emoji_categories/{emoji_category_id} | Update an emoji category URL
[**updateEmojiUrlByKey**](MessageApi.md#updateEmojiUrlByKey) | **PUT** /v3/emojis/{emoji_key} | Update an emoji URL
[**updateExtraDataInMessage**](MessageApi.md#updateExtraDataInMessage) | **PUT** /v3/{channel_type}/{channel_url}/messages/{message_id}/sorted_metaarray | Update extra data in a message
[**updateMessageById**](MessageApi.md#updateMessageById) | **PUT** /v3/{channel_type}/{channel_url}/messages/{message_id} | Update a message
[**useDefaultEmojis**](MessageApi.md#useDefaultEmojis) | **PUT** /v3/applications/settings/use_default_emoji | Use default emojis
[**viewMessageById**](MessageApi.md#viewMessageById) | **GET** /v3/{channel_type}/{channel_url}/messages/{message_id} | View a message
[**viewTotalNumberOfMessagesInChannel**](MessageApi.md#viewTotalNumberOfMessagesInChannel) | **GET** /v3/{channel_type}/{channel_url}/messages/total_count | View total number of messages in a channel



## addEmojiCategories

> AddEmojiCategoriesResponse addEmojiCategories(apiToken, opts)

Add emoji categories

## Add emoji categories  Adds a list of one or more new emoji categories to the application.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-add-emoji-categories

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.MessageApi();
let apiToken = {{API_TOKEN}}; // String | 
let opts = {
  'body': {key: null} // Object | 
};
apiInstance.addEmojiCategories(apiToken, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | **String**|  | 
 **body** | **Object**|  | [optional] 

### Return type

[**AddEmojiCategoriesResponse**](AddEmojiCategoriesResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## addEmojis

> AddEmojisResponse addEmojis(apiToken, opts)

Add emojis

## Add emojis  Adds a list of one or more new emojis to the application.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-add-emojis

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.MessageApi();
let apiToken = {{API_TOKEN}}; // String | 
let opts = {
  'addEmojisData': new SendbirdPlatformSdk.AddEmojisData() // AddEmojisData | 
};
apiInstance.addEmojis(apiToken, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | **String**|  | 
 **addEmojisData** | [**AddEmojisData**](AddEmojisData.md)|  | [optional] 

### Return type

[**AddEmojisResponse**](AddEmojisResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## addExtraDataToMessage

> AddExtraDataToMessageResponse addExtraDataToMessage(apiToken, channelType, channelUrl, messageId, opts)

Add extra data to a message

## Add extra data to a message  Adds one or more key-values items which store additional information for a message.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-add-extra-data-to-a-message ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.MessageApi();
let apiToken = {{API_TOKEN}}; // String | 
let channelType = "channelType_example"; // String | 
let channelUrl = "channelUrl_example"; // String | 
let messageId = "messageId_example"; // String | 
let opts = {
  'addExtraDataToMessageData': new SendbirdPlatformSdk.AddExtraDataToMessageData() // AddExtraDataToMessageData | 
};
apiInstance.addExtraDataToMessage(apiToken, channelType, channelUrl, messageId, opts).then((data) => {
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
 **messageId** | **String**|  | 
 **addExtraDataToMessageData** | [**AddExtraDataToMessageData**](AddExtraDataToMessageData.md)|  | [optional] 

### Return type

[**AddExtraDataToMessageResponse**](AddExtraDataToMessageResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## addReactionToAMessage

> AddReactionToAMessageResponse addReactionToAMessage(apiToken, channelType, channelUrl, messageId, opts)

Add a reaction to a message

## Add a reaction to a message  Adds a specific reaction to a message.  &gt; __Note__: Currently, this action is only available in group channels.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-add-a-reaction-to-a-message ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.MessageApi();
let apiToken = {{API_TOKEN}}; // String | 
let channelType = "channelType_example"; // String | 
let channelUrl = "channelUrl_example"; // String | 
let messageId = "messageId_example"; // String | 
let opts = {
  'addReactionToAMessageData': new SendbirdPlatformSdk.AddReactionToAMessageData() // AddReactionToAMessageData | 
};
apiInstance.addReactionToAMessage(apiToken, channelType, channelUrl, messageId, opts).then((data) => {
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
 **messageId** | **String**|  | 
 **addReactionToAMessageData** | [**AddReactionToAMessageData**](AddReactionToAMessageData.md)|  | [optional] 

### Return type

[**AddReactionToAMessageResponse**](AddReactionToAMessageResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteEmojiByKey

> deleteEmojiByKey(apiToken, emojiKey)

Delete an emoji

## Delete an emoji  Deletes an emoji from the application.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-delete-an-emoji ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.MessageApi();
let apiToken = {{API_TOKEN}}; // String | 
let emojiKey = "emojiKey_example"; // String | 
apiInstance.deleteEmojiByKey(apiToken, emojiKey).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | **String**|  | 
 **emojiKey** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteEmojiCategoryById

> Object deleteEmojiCategoryById(apiToken, emojiCategoryId)

Delete an emoji category

## Delete an emoji category  Deletes an emoji category with the specified ID.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-delete-an-emoji-category ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.MessageApi();
let apiToken = {{API_TOKEN}}; // String | 
let emojiCategoryId = "emojiCategoryId_example"; // String | 
apiInstance.deleteEmojiCategoryById(apiToken, emojiCategoryId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | **String**|  | 
 **emojiCategoryId** | **String**|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteMessageById

> Object deleteMessageById(apiToken, channelType, channelUrl, messageId)

Delete a message

## Delete a message  Deletes a message from a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-delete-a-message ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.MessageApi();
let apiToken = {{API_TOKEN}}; // String | 
let channelType = "channelType_example"; // String | 
let channelUrl = "channelUrl_example"; // String | 
let messageId = "messageId_example"; // String | 
apiInstance.deleteMessageById(apiToken, channelType, channelUrl, messageId).then((data) => {
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
 **messageId** | **String**|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## enableReactions

> EnableReactionsResponse enableReactions(apiToken, opts)

Enable reactions

## Enable reactions  Turn on or off reactions in a Sendbird application.  &gt; __Note__: This action also allows reactions in UIKit.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-enable-reactions

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.MessageApi();
let apiToken = {{API_TOKEN}}; // String | 
let opts = {
  'enableReactionsData': new SendbirdPlatformSdk.EnableReactionsData() // EnableReactionsData | 
};
apiInstance.enableReactions(apiToken, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | **String**|  | 
 **enableReactionsData** | [**EnableReactionsData**](EnableReactionsData.md)|  | [optional] 

### Return type

[**EnableReactionsResponse**](EnableReactionsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## gcMarkAllMessagesAsDelivered

> GcMarkAllMessagesAsDeliveredResponse gcMarkAllMessagesAsDelivered(apiToken, channelUrl, opts)

Mark all messages as delivered

## Mark all messages as delivered  Marks all messages in a group channel as delivered for a given user. This action is only applicable for users in a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-mark-all-messages-as-delivered ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.MessageApi();
let apiToken = {{API_TOKEN}}; // String | 
let channelUrl = "channelUrl_example"; // String | 
let opts = {
  'gcMarkAllMessagesAsDeliveredData': new SendbirdPlatformSdk.GcMarkAllMessagesAsDeliveredData() // GcMarkAllMessagesAsDeliveredData | 
};
apiInstance.gcMarkAllMessagesAsDelivered(apiToken, channelUrl, opts).then((data) => {
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
 **gcMarkAllMessagesAsDeliveredData** | [**GcMarkAllMessagesAsDeliveredData**](GcMarkAllMessagesAsDeliveredData.md)|  | [optional] 

### Return type

[**GcMarkAllMessagesAsDeliveredResponse**](GcMarkAllMessagesAsDeliveredResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## gcMarkAllMessagesAsRead

> Object gcMarkAllMessagesAsRead(apiToken, channelUrl, opts)

Mark all messages as read

## Mark all messages as read  Marks all messages in a group channel as read for a given user. This action is only applicable for users in a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-mark-all-messages-as-read ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.MessageApi();
let apiToken = {{API_TOKEN}}; // String | 
let channelUrl = "channelUrl_example"; // String | 
let opts = {
  'gcMarkAllMessagesAsReadData': new SendbirdPlatformSdk.GcMarkAllMessagesAsReadData() // GcMarkAllMessagesAsReadData | 
};
apiInstance.gcMarkAllMessagesAsRead(apiToken, channelUrl, opts).then((data) => {
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
 **gcMarkAllMessagesAsReadData** | [**GcMarkAllMessagesAsReadData**](GcMarkAllMessagesAsReadData.md)|  | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## gcViewNumberOfEachMembersUnreadMessages

> GcViewNumberOfEachMembersUnreadMessagesResponse gcViewNumberOfEachMembersUnreadMessages(apiToken, channelUrl, opts)

View number of each member&#39;s unread messages

## View number of each member&#39;s unread messages  Retrieves the total number of each member&#39;s unread messages in a group channel. This action is only applicable for users in a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-view-number-of-each-member-s-unread-messages ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.MessageApi();
let apiToken = {{API_TOKEN}}; // String | 
let channelUrl = "channelUrl_example"; // String | 
let opts = {
  'userIds': "userIds_example" // String | 
};
apiInstance.gcViewNumberOfEachMembersUnreadMessages(apiToken, channelUrl, opts).then((data) => {
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
 **userIds** | **String**|  | [optional] 

### Return type

[**GcViewNumberOfEachMembersUnreadMessagesResponse**](GcViewNumberOfEachMembersUnreadMessagesResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEmojiByKey

> SendBirdEmoji getEmojiByKey(apiToken, emojiKey)

Get an emoji

## Get an emoji  Retrieves an emoji with the specified key.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-get-an-emoji ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.MessageApi();
let apiToken = {{API_TOKEN}}; // String | 
let emojiKey = "emojiKey_example"; // String | 
apiInstance.getEmojiByKey(apiToken, emojiKey).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | **String**|  | 
 **emojiKey** | **String**|  | 

### Return type

[**SendBirdEmoji**](SendBirdEmoji.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEmojiCategoryById

> SendBirdEmojiCategory getEmojiCategoryById(apiToken, emojiCategoryId)

Get an emoji category

## Get an emoji category  Retrieves an emoji category with the specified ID, including its emojis.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-get-an-emoji-category ----------------------------   &#x60;emoji_category_id&#x60;      Type: int      Description: Specifies the unique ID of the emoji category to retrieve.

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.MessageApi();
let apiToken = {{API_TOKEN}}; // String | 
let emojiCategoryId = "emojiCategoryId_example"; // String | 
apiInstance.getEmojiCategoryById(apiToken, emojiCategoryId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | **String**|  | 
 **emojiCategoryId** | **String**|  | 

### Return type

[**SendBirdEmojiCategory**](SendBirdEmojiCategory.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getStatistics

> GetStatisticsResponse getStatistics(apiToken)

Get statistics - weekly

## Get statistics  Retrieves the daily, weekly or monthly statistics of an announcement or an announcement group.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-get-statistics ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.MessageApi();
let apiToken = {{API_TOKEN}}; // String | 
apiInstance.getStatistics(apiToken).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | **String**|  | 

### Return type

[**GetStatisticsResponse**](GetStatisticsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getStatisticsDaily

> GetStatisticsDailyResponse getStatisticsDaily(apiToken, startDate, endDate, startWeek, endWeek, startMonth, endMonth, opts)

Get statistics - daily

## Get statistics  Retrieves the daily, weekly or monthly statistics of an announcement or an announcement group.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-get-statistics ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.MessageApi();
let apiToken = {{API_TOKEN}}; // String | 
let startDate = "startDate_example"; // String | 
let endDate = "endDate_example"; // String | 
let startWeek = "startWeek_example"; // String | 
let endWeek = "endWeek_example"; // String | 
let startMonth = "startMonth_example"; // String | 
let endMonth = "endMonth_example"; // String | 
let opts = {
  'announcementGroup': "announcementGroup_example" // String | 
};
apiInstance.getStatisticsDaily(apiToken, startDate, endDate, startWeek, endWeek, startMonth, endMonth, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | **String**|  | 
 **startDate** | **String**|  | 
 **endDate** | **String**|  | 
 **startWeek** | **String**|  | 
 **endWeek** | **String**|  | 
 **startMonth** | **String**|  | 
 **endMonth** | **String**|  | 
 **announcementGroup** | **String**|  | [optional] 

### Return type

[**GetStatisticsDailyResponse**](GetStatisticsDailyResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getStatisticsMonthly

> GetStatisticsMonthlyResponse getStatisticsMonthly(apiToken)

Get statistics - monthly

## Get statistics  Retrieves the daily, weekly or monthly statistics of an announcement or an announcement group.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-get-statistics ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.MessageApi();
let apiToken = {{API_TOKEN}}; // String | 
apiInstance.getStatisticsMonthly(apiToken).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | **String**|  | 

### Return type

[**GetStatisticsMonthlyResponse**](GetStatisticsMonthlyResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listAllEmojisAndEmojiCategories

> ListAllEmojisAndEmojiCategoriesResponse listAllEmojisAndEmojiCategories(apiToken)

List all emojis and emoji categories

## List all emojis and emoji categories  Retrieves a list of all emoji categories registered to the application, including their emojis.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-list-all-emojis-and-emoji-categories

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.MessageApi();
let apiToken = {{API_TOKEN}}; // String | 
apiInstance.listAllEmojisAndEmojiCategories(apiToken).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | **String**|  | 

### Return type

[**ListAllEmojisAndEmojiCategoriesResponse**](ListAllEmojisAndEmojiCategoriesResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listAnnouncementGroups

> ListAnnouncementGroupsResponse listAnnouncementGroups(apiToken, opts)

List announcement groups

## List announcement groups  Retrieves a list of announcement groups.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-list-announcement-groups ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.MessageApi();
let apiToken = {{API_TOKEN}}; // String | 
let opts = {
  'token': "token_example", // String | 
  'limit': 56 // Number | 
};
apiInstance.listAnnouncementGroups(apiToken, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | **String**|  | 
 **token** | **String**|  | [optional] 
 **limit** | **Number**|  | [optional] 

### Return type

[**ListAnnouncementGroupsResponse**](ListAnnouncementGroupsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listAnnouncements

> ListAnnouncementsResponse listAnnouncements(apiToken, opts)

List announcements

## List announcements  Retrieves a list of announcements.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-list-announcements ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.MessageApi();
let apiToken = {{API_TOKEN}}; // String | 
let opts = {
  'token': "token_example", // String | 
  'limit': 56, // Number | 
  'order': "order_example", // String | 
  'status': "status_example", // String | 
  'announcementGroup': "announcementGroup_example" // String | 
};
apiInstance.listAnnouncements(apiToken, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | **String**|  | 
 **token** | **String**|  | [optional] 
 **limit** | **Number**|  | [optional] 
 **order** | **String**|  | [optional] 
 **status** | **String**|  | [optional] 
 **announcementGroup** | **String**|  | [optional] 

### Return type

[**ListAnnouncementsResponse**](ListAnnouncementsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listEmojis

> ListEmojisResponse listEmojis(apiToken)

List emojis

## List emojis  Retrieves a list of all emojis registered to the application.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-list-emojis

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.MessageApi();
let apiToken = {{API_TOKEN}}; // String | 
apiInstance.listEmojis(apiToken).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | **String**|  | 

### Return type

[**ListEmojisResponse**](ListEmojisResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listMessages

> ListMessagesResponse listMessages(apiToken, channelType, channelUrl, opts)

List messages

## List messages  Retrieves a list of past messages of a channel.  &gt; This message retrieval is one of Sendbird&#39;s [premium features](https://sendbird.com/docs/chat/v3/platform-api/guides/application#-3-sendbird-s-premium-features). Contact our [sales team](https://get.sendbird.com/talk-to-sales.html) for further assistance.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-list-messages ----------------------------   &#x60;channel_type&#x60;      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  &#x60;channel_url&#x60;      Type: string      Description: Specifies the URL of the channel to retrieve a list of past messages.

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.MessageApi();
let apiToken = {{API_TOKEN}}; // String | 
let channelType = "channelType_example"; // String | 
let channelUrl = "channelUrl_example"; // String | 
let opts = {
  'messageTs': "messageTs_example", // String | 
  'messageId': 56, // Number | 
  'prevLimit': 56, // Number | 
  'nextLimit': 56, // Number | 
  'include': true, // Boolean | 
  'reverse': true, // Boolean | 
  'senderId': "senderId_example", // String | 
  'senderIds': "senderIds_example", // String | 
  'operatorFilter': "operatorFilter_example", // String | 
  'customTypes': "customTypes_example", // String | 
  'messageType': "messageType_example", // String | 
  'includingRemoved': true, // Boolean | 
  'includeReactions': true, // Boolean | 
  'withSortedMetaArray': true, // Boolean | 
  'showSubchannelMessagesOnly': true, // Boolean | 
  'userId': "userId_example", // String | 
  'customType': "customType_example", // String | 
  'withMetaArray': true // Boolean | 
};
apiInstance.listMessages(apiToken, channelType, channelUrl, opts).then((data) => {
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
 **messageTs** | **String**|  | [optional] 
 **messageId** | **Number**|  | [optional] 
 **prevLimit** | **Number**|  | [optional] 
 **nextLimit** | **Number**|  | [optional] 
 **include** | **Boolean**|  | [optional] 
 **reverse** | **Boolean**|  | [optional] 
 **senderId** | **String**|  | [optional] 
 **senderIds** | **String**|  | [optional] 
 **operatorFilter** | **String**|  | [optional] 
 **customTypes** | **String**|  | [optional] 
 **messageType** | **String**|  | [optional] 
 **includingRemoved** | **Boolean**|  | [optional] 
 **includeReactions** | **Boolean**|  | [optional] 
 **withSortedMetaArray** | **Boolean**|  | [optional] 
 **showSubchannelMessagesOnly** | **Boolean**|  | [optional] 
 **userId** | **String**|  | [optional] 
 **customType** | **String**|  | [optional] 
 **withMetaArray** | **Boolean**|  | [optional] 

### Return type

[**ListMessagesResponse**](ListMessagesResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listReactionsOfMessage

> ListReactionsOfMessageResponse listReactionsOfMessage(apiToken, channelType, channelUrl, messageId, opts)

List reactions of a message

## List reactions of a message  Retrieves a list of reactions made to a message.  &gt; __Note__: Currently, this action is only available in group channels.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-list-reactions-of-a-message ----------------------------   &#x60;channel_type&#x60;      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  &#x60;channel_url&#x60;      Type: string      Description: Specifies the URL of the target channel.  &#x60;message_id&#x60;      Type: long      Description: Specifies the unique ID of the message to add a reaction to.

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.MessageApi();
let apiToken = {{API_TOKEN}}; // String | 
let channelType = "channelType_example"; // String | 
let channelUrl = "channelUrl_example"; // String | 
let messageId = "messageId_example"; // String | 
let opts = {
  'listUsers': true // Boolean | 
};
apiInstance.listReactionsOfMessage(apiToken, channelType, channelUrl, messageId, opts).then((data) => {
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
 **messageId** | **String**|  | 
 **listUsers** | **Boolean**|  | [optional] 

### Return type

[**ListReactionsOfMessageResponse**](ListReactionsOfMessageResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## migrateMessagesByUrl

> migrateMessagesByUrl(apiToken, targetChannelUrl, opts)

Migrate messages

## Migrate messages  Using our migration API, you can migrate the messages from another system into a Sendbird system&#39;s [channel](https://sendbird.com/docs/chat/v3/platform-api/guides/channel-types) which consists of users, messages, and other chat-related data.  &gt; To turn on this feature, [contact our support team](https://dashboard.sendbird.com/settings/contact_us).  There are three things to do in advance before the migration. Follow the instructions below:  1. Register the users of your current chat solution to your Sendbird application. You can migrate the users into the Sendbird system using the [user creation API](https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-create-a-user). 2. Create either an [open](https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-create-a-channel) or a [group](https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-create-a-channel) channel to migrate the messages of your chat solution. The Sendbird system doesn&#39;t create a channel for your migration automatically. 3. The maximum number of migrated messages per call is 100. To avoid the failure during your migration, you must adjust the number of messages to process at once via the API.  https://sendbird.com/docs/chat/v3/platform-api/guides/migration#2-migrate-messages ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.MessageApi();
let apiToken = {{API_TOKEN}}; // String | 
let targetChannelUrl = "targetChannelUrl_example"; // String | 
let opts = {
  'body': {key: null} // Object | 
};
apiInstance.migrateMessagesByUrl(apiToken, targetChannelUrl, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | **String**|  | 
 **targetChannelUrl** | **String**|  | 
 **body** | **Object**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## removeExtraDataFromMessage

> Object removeExtraDataFromMessage(apiToken, channelType, channelUrl, messageId, opts)

Remove extra data from a message

## Remove extra data from a message  Removes specific items from a message by their keys.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-remove-extra-data-from-a-message ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.MessageApi();
let apiToken = {{API_TOKEN}}; // String | 
let channelType = "channelType_example"; // String | 
let channelUrl = "channelUrl_example"; // String | 
let messageId = "messageId_example"; // String | 
let opts = {
  'keys': ["null"] // [String] | 
};
apiInstance.removeExtraDataFromMessage(apiToken, channelType, channelUrl, messageId, opts).then((data) => {
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
 **messageId** | **String**|  | 
 **keys** | [**[String]**](String.md)|  | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## removeReactionFromAMessage

> RemoveReactionFromAMessageResponse removeReactionFromAMessage(apiToken, channelType, channelUrl, messageId, opts)

Remove a reaction from a message

## Remove a reaction from a message  Removes a specific reaction from a message.  &gt; __Note__: Currently, this action is only available in group channels.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-remove-a-reaction-from-a-message ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.MessageApi();
let apiToken = {{API_TOKEN}}; // String | 
let channelType = "channelType_example"; // String | 
let channelUrl = "channelUrl_example"; // String | 
let messageId = "messageId_example"; // String | 
let opts = {
  'userId': "userId_example", // String | 
  'reaction': "reaction_example" // String | 
};
apiInstance.removeReactionFromAMessage(apiToken, channelType, channelUrl, messageId, opts).then((data) => {
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
 **messageId** | **String**|  | 
 **userId** | **String**|  | [optional] 
 **reaction** | **String**|  | [optional] 

### Return type

[**RemoveReactionFromAMessageResponse**](RemoveReactionFromAMessageResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## scheduleAnnouncement

> ScheduleAnnouncementResponse scheduleAnnouncement(apiToken, opts)

Schedule an announcement

## Schedule an announcement  Schedules a new announcement. You can also schedule an announcement in the [Sendbird Dashboard](https://dashboard.sendbird.com).  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-schedule-an-announcement

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.MessageApi();
let apiToken = {{API_TOKEN}}; // String | 
let opts = {
  'scheduleAnnouncementData': new SendbirdPlatformSdk.ScheduleAnnouncementData() // ScheduleAnnouncementData | 
};
apiInstance.scheduleAnnouncement(apiToken, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | **String**|  | 
 **scheduleAnnouncementData** | [**ScheduleAnnouncementData**](ScheduleAnnouncementData.md)|  | [optional] 

### Return type

[**ScheduleAnnouncementResponse**](ScheduleAnnouncementResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## sendMessage

> SendBirdMessageResponse sendMessage(apiToken, channelType, channelUrl, opts)

Send a message

## Send a message  Sends a message to a channel. You can send a text message, a file message, and an admin message.  &gt;__Note__: With Sendbird Chat SDKs and the platform API, any type of files in messages can be uploaded to Sendbird server.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-send-a-message ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.MessageApi();
let apiToken = {{API_TOKEN}}; // String | 
let channelType = "channelType_example"; // String | 
let channelUrl = "channelUrl_example"; // String | 
let opts = {
  'sendMessageData': new SendbirdPlatformSdk.SendMessageData() // SendMessageData | 
};
apiInstance.sendMessage(apiToken, channelType, channelUrl, opts).then((data) => {
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
 **sendMessageData** | [**SendMessageData**](SendMessageData.md)|  | [optional] 

### Return type

[**SendBirdMessageResponse**](SendBirdMessageResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## translateMessageIntoOtherLanguages

> SendBirdMessageResponse translateMessageIntoOtherLanguages(apiToken, channelType, channelUrl, messageId, opts)

Translate a message into other languages

## Translate a message into other languages  Translates a message into specific languages. Only text messages of which type is MESG can be translated into other languages.  &gt; __Note__: Message translation is powered by [Google Cloud Translation API recognition engine](https://cloud.google.com/translate/). Find language codes supported by the engine in the [Miscellaneous](https://sendbird.com/docs/chat/v3/platform-api/guides/Miscellaneous) page or visit the [Language Support](https://cloud.google.com/translate/docs/languages) for Google Cloud Translation.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-translate-a-message-into-other-languages ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.MessageApi();
let apiToken = {{API_TOKEN}}; // String | 
let channelType = "channelType_example"; // String | 
let channelUrl = "channelUrl_example"; // String | 
let messageId = "messageId_example"; // String | 
let opts = {
  'translateMessageIntoOtherLanguagesData': new SendbirdPlatformSdk.TranslateMessageIntoOtherLanguagesData() // TranslateMessageIntoOtherLanguagesData | 
};
apiInstance.translateMessageIntoOtherLanguages(apiToken, channelType, channelUrl, messageId, opts).then((data) => {
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
 **messageId** | **String**|  | 
 **translateMessageIntoOtherLanguagesData** | [**TranslateMessageIntoOtherLanguagesData**](TranslateMessageIntoOtherLanguagesData.md)|  | [optional] 

### Return type

[**SendBirdMessageResponse**](SendBirdMessageResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateAnnouncementById

> UpdateAnnouncementByIdResponse updateAnnouncementById(apiToken, uniqueId, opts)

Update an announcement

## Update an announcement  Updates information of a specific announcement before it starts or changes the status of a specific announcement after it starts. For the 2 different applications, refer to the request body below.  &gt;__Note__: Updating information of an announcement is possible only when the announcement status is scheduled, indicating it hasn&#39;t started yet.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-update-an-announcement ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.MessageApi();
let apiToken = {{API_TOKEN}}; // String | 
let uniqueId = "uniqueId_example"; // String | 
let opts = {
  'updateAnnouncementByIdData': new SendbirdPlatformSdk.UpdateAnnouncementByIdData() // UpdateAnnouncementByIdData | 
};
apiInstance.updateAnnouncementById(apiToken, uniqueId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | **String**|  | 
 **uniqueId** | **String**|  | 
 **updateAnnouncementByIdData** | [**UpdateAnnouncementByIdData**](UpdateAnnouncementByIdData.md)|  | [optional] 

### Return type

[**UpdateAnnouncementByIdResponse**](UpdateAnnouncementByIdResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateEmojiCategoryUrlById

> SendBirdEmojiCategory updateEmojiCategoryUrlById(apiToken, emojiCategoryId, opts)

Update an emoji category URL

## Update an emoji category URL  Updates the URL of an emoji category with the specified ID.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-update-an-emoji-category-url ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.MessageApi();
let apiToken = {{API_TOKEN}}; // String | 
let emojiCategoryId = "emojiCategoryId_example"; // String | 
let opts = {
  'updateEmojiCategoryUrlByIdData': new SendbirdPlatformSdk.UpdateEmojiCategoryUrlByIdData() // UpdateEmojiCategoryUrlByIdData | 
};
apiInstance.updateEmojiCategoryUrlById(apiToken, emojiCategoryId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | **String**|  | 
 **emojiCategoryId** | **String**|  | 
 **updateEmojiCategoryUrlByIdData** | [**UpdateEmojiCategoryUrlByIdData**](UpdateEmojiCategoryUrlByIdData.md)|  | [optional] 

### Return type

[**SendBirdEmojiCategory**](SendBirdEmojiCategory.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateEmojiUrlByKey

> SendBirdEmoji updateEmojiUrlByKey(apiToken, emojiKey, opts)

Update an emoji URL

## Update an emoji URL  Updates the image URL of an emoji with the specified key.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-update-an-emoji-url ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.MessageApi();
let apiToken = {{API_TOKEN}}; // String | 
let emojiKey = "emojiKey_example"; // String | 
let opts = {
  'updateEmojiUrlByKeyData': new SendbirdPlatformSdk.UpdateEmojiUrlByKeyData() // UpdateEmojiUrlByKeyData | 
};
apiInstance.updateEmojiUrlByKey(apiToken, emojiKey, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | **String**|  | 
 **emojiKey** | **String**|  | 
 **updateEmojiUrlByKeyData** | [**UpdateEmojiUrlByKeyData**](UpdateEmojiUrlByKeyData.md)|  | [optional] 

### Return type

[**SendBirdEmoji**](SendBirdEmoji.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateExtraDataInMessage

> UpdateExtraDataInMessageResponse updateExtraDataInMessage(apiToken, channelType, channelUrl, messageId, opts)

Update extra data in a message

## Update extra data in a message  Updates the values of specific items by their keys.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-update-extra-data-in-a-message ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.MessageApi();
let apiToken = {{API_TOKEN}}; // String | 
let channelType = "channelType_example"; // String | 
let channelUrl = "channelUrl_example"; // String | 
let messageId = "messageId_example"; // String | 
let opts = {
  'updateExtraDataInMessageData': new SendbirdPlatformSdk.UpdateExtraDataInMessageData() // UpdateExtraDataInMessageData | 
};
apiInstance.updateExtraDataInMessage(apiToken, channelType, channelUrl, messageId, opts).then((data) => {
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
 **messageId** | **String**|  | 
 **updateExtraDataInMessageData** | [**UpdateExtraDataInMessageData**](UpdateExtraDataInMessageData.md)|  | [optional] 

### Return type

[**UpdateExtraDataInMessageResponse**](UpdateExtraDataInMessageResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateMessageById

> SendBirdMessageResponse updateMessageById(apiToken, channelType, channelUrl, messageId, opts)

Update a message

## Update a message  Updates information on a message in a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-update-a-message ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.MessageApi();
let apiToken = {{API_TOKEN}}; // String | 
let channelType = "channelType_example"; // String | 
let channelUrl = "channelUrl_example"; // String | 
let messageId = "messageId_example"; // String | 
let opts = {
  'updateMessageByIdData': new SendbirdPlatformSdk.UpdateMessageByIdData() // UpdateMessageByIdData | 
};
apiInstance.updateMessageById(apiToken, channelType, channelUrl, messageId, opts).then((data) => {
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
 **messageId** | **String**|  | 
 **updateMessageByIdData** | [**UpdateMessageByIdData**](UpdateMessageByIdData.md)|  | [optional] 

### Return type

[**SendBirdMessageResponse**](SendBirdMessageResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## useDefaultEmojis

> UseDefaultEmojisResponse useDefaultEmojis(apiToken, opts)

Use default emojis

## Use default emojis  Determines whether to use the 7 default emojis initially provided.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-use-default-emojis

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.MessageApi();
let apiToken = {{API_TOKEN}}; // String | 
let opts = {
  'useDefaultEmojisData': new SendbirdPlatformSdk.UseDefaultEmojisData() // UseDefaultEmojisData | 
};
apiInstance.useDefaultEmojis(apiToken, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | **String**|  | 
 **useDefaultEmojisData** | [**UseDefaultEmojisData**](UseDefaultEmojisData.md)|  | [optional] 

### Return type

[**UseDefaultEmojisResponse**](UseDefaultEmojisResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## viewMessageById

> SendBirdMessageResponse viewMessageById(apiToken, channelType, channelUrl, messageId, opts)

View a message

## View a message  Retrieves information on a message.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-view-a-message ----------------------------   &#x60;channel_type&#x60;      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  &#x60;channel_url&#x60;      Type: string      Description: Specifies the URL of the target channel.  &#x60;message_id&#x60;      Type: long      Description: Specifies the unique ID of the message to retrieve.

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.MessageApi();
let apiToken = {{API_TOKEN}}; // String | 
let channelType = "channelType_example"; // String | 
let channelUrl = "channelUrl_example"; // String | 
let messageId = "messageId_example"; // String | 
let opts = {
  'withSortedMetaArray': true, // Boolean | 
  'withMetaArray': true // Boolean | 
};
apiInstance.viewMessageById(apiToken, channelType, channelUrl, messageId, opts).then((data) => {
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
 **messageId** | **String**|  | 
 **withSortedMetaArray** | **Boolean**|  | [optional] 
 **withMetaArray** | **Boolean**|  | [optional] 

### Return type

[**SendBirdMessageResponse**](SendBirdMessageResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## viewTotalNumberOfMessagesInChannel

> ViewTotalNumberOfMessagesInChannelResponse viewTotalNumberOfMessagesInChannel(apiToken, channelType, channelUrl)

View total number of messages in a channel

## View total number of messages in a channel  Retrieves the total number of messages in a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-view-total-number-of-messages-in-a-channel ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.MessageApi();
let apiToken = {{API_TOKEN}}; // String | 
let channelType = "channelType_example"; // String | 
let channelUrl = "channelUrl_example"; // String | 
apiInstance.viewTotalNumberOfMessagesInChannel(apiToken, channelType, channelUrl).then((data) => {
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

### Return type

[**ViewTotalNumberOfMessagesInChannelResponse**](ViewTotalNumberOfMessagesInChannelResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

