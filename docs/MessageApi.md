# SendbirdPlatformSdk.MessageApi

All URIs are relative to *https://api-APP_ID.sendbird.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addExtraDataToAMessage**](MessageApi.md#addExtraDataToAMessage) | **POST** /v3/{channel_type}/{channel_url}/messages/{message_id}/sorted_metaarray | Add extra data to a message
[**deleteAMessage**](MessageApi.md#deleteAMessage) | **DELETE** /v3/{channel_type}/{channel_url}/messages/{message_id} | Delete a message
[**getAMessage**](MessageApi.md#getAMessage) | **GET** /v3/{channel_type}/{channel_url}/messages/{message_id} | Get a message
[**getTotalNumberOfMessagesInAChannel**](MessageApi.md#getTotalNumberOfMessagesInAChannel) | **GET** /v3/{channel_type}/{channel_url}/messages/total_count | Get total number of messages in a channel
[**listMessages**](MessageApi.md#listMessages) | **GET** /v3/{channel_type}/{channel_url}/messages | List messages
[**markChannelMessagesAsRead**](MessageApi.md#markChannelMessagesAsRead) | **PUT** /v3/group_channels/{channel_url}/messages/mark_as_read | Mark all messages as read
[**migrateMessages**](MessageApi.md#migrateMessages) | **POST** /v3/migration/{target_channel_url} | Migrate messages
[**removeExtraDataFromAMessage**](MessageApi.md#removeExtraDataFromAMessage) | **DELETE** /v3/{channel_type}/{channel_url}/messages/{message_id}/sorted_metaarray | Remove extra data from a message
[**sendAMessage**](MessageApi.md#sendAMessage) | **POST** /v3/{channel_type}/{channel_url}/messages | Send a message
[**updateAMessage**](MessageApi.md#updateAMessage) | **PUT** /v3/{channel_type}/{channel_url}/messages/{message_id} | Update a message
[**updateExtraDataInAMessage**](MessageApi.md#updateExtraDataInAMessage) | **PUT** /v3/{channel_type}/{channel_url}/messages/{message_id}/sorted_metaarray | Update extra data in a message



## addExtraDataToAMessage

> AddExtraDataToAMessageResponse addExtraDataToAMessage(channelType, channelUrl, messageId, opts)

Add extra data to a message

## Add extra data to a message  Adds one or more key-values items which store additional information for a message.  https://sendbird.com/docs/chat/platform-api/v3/message/messaging-basics/message-add-metadata#1-add-metadata ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.MessageApi();
let channelType = "channelType_example"; // String | (Required) 
let channelUrl = "channelUrl_example"; // String | (Required) 
let messageId = "messageId_example"; // String | (Required) 
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'addExtraDataToAMessageRequest': new SendbirdPlatformSdk.AddExtraDataToAMessageRequest() // AddExtraDataToAMessageRequest | 
};
apiInstance.addExtraDataToAMessage(channelType, channelUrl, messageId, opts).then((data) => {
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
 **messageId** | **String**| (Required)  | 
 **apiToken** | **String**|  | [optional] 
 **addExtraDataToAMessageRequest** | [**AddExtraDataToAMessageRequest**](AddExtraDataToAMessageRequest.md)|  | [optional] 

### Return type

[**AddExtraDataToAMessageResponse**](AddExtraDataToAMessageResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteAMessage

> Object deleteAMessage(channelType, channelUrl, messageId, opts)

Delete a message

## Delete a message  Deletes a message from a channel.  https://sendbird.com/docs/chat/platform-api/v3/message/messaging-basics/delete-a-message#1-delete-a-message ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.MessageApi();
let channelType = "channelType_example"; // String | (Required) 
let channelUrl = "channelUrl_example"; // String | (Required) 
let messageId = "messageId_example"; // String | (Required) 
let opts = {
  'apiToken': {{API_TOKEN}} // String | 
};
apiInstance.deleteAMessage(channelType, channelUrl, messageId, opts).then((data) => {
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
 **messageId** | **String**| (Required)  | 
 **apiToken** | **String**|  | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAMessage

> SendbirdMessageResponse getAMessage(channelType, channelUrl, messageId, opts)

Get a message

## Get a message  Retrieves information on a specific message.  https://sendbird.com/docs/chat/platform-api/v3/message/messaging-basics/get-a-message#1-get-a-message ----------------------------   &#x60;channel_type&#x60;      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  &#x60;channel_url&#x60;      Type: string      Description: Specifies the URL of the target channel.  &#x60;message_id&#x60;      Type: long      Description: Specifies the unique ID of the message to retrieve.

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.MessageApi();
let channelType = "channelType_example"; // String | (Required) 
let channelUrl = "channelUrl_example"; // String | (Required) 
let messageId = "messageId_example"; // String | (Required) 
let opts = {
  'includeReactions': true, // Boolean | 
  'includeThreadInfo': true, // Boolean | 
  'includeParentMessageInfo': true, // Boolean | 
  'includePollDetails': true, // Boolean | Determines whether to include all properties of a poll resource with a full list of options in the results. If set to false, a selection of poll resource properties consisting of id, title, close_at, created_at, updated_at, status, and message_id are returned. (Default: false) * To use this property, the polls feature should be turned on in Settings > Chat > Features on Sendbird Dashboard.
  'withSortedMetaArray': true, // Boolean | 
  'apiToken': {{API_TOKEN}} // String | 
};
apiInstance.getAMessage(channelType, channelUrl, messageId, opts).then((data) => {
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
 **messageId** | **String**| (Required)  | 
 **includeReactions** | **Boolean**|  | [optional] 
 **includeThreadInfo** | **Boolean**|  | [optional] 
 **includeParentMessageInfo** | **Boolean**|  | [optional] 
 **includePollDetails** | **Boolean**| Determines whether to include all properties of a poll resource with a full list of options in the results. If set to false, a selection of poll resource properties consisting of id, title, close_at, created_at, updated_at, status, and message_id are returned. (Default: false) * To use this property, the polls feature should be turned on in Settings &gt; Chat &gt; Features on Sendbird Dashboard. | [optional] 
 **withSortedMetaArray** | **Boolean**|  | [optional] 
 **apiToken** | **String**|  | [optional] 

### Return type

[**SendbirdMessageResponse**](SendbirdMessageResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTotalNumberOfMessagesInAChannel

> GetTotalNumberOfMessagesInAChannelResponse getTotalNumberOfMessagesInAChannel(channelType, channelUrl, opts)

Get total number of messages in a channel

## Get total number of messages in a channel  Retrieves the total number of messages in a specific channel.  https://sendbird.com/docs/chat/platform-api/v3/message/messaging-basics/get-total-number-of-messages-in-a-channel#1-get-total-number-of-messages-in-a-channel ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.MessageApi();
let channelType = "channelType_example"; // String | (Required) 
let channelUrl = "channelUrl_example"; // String | (Required) 
let opts = {
  'apiToken': {{API_TOKEN}} // String | 
};
apiInstance.getTotalNumberOfMessagesInAChannel(channelType, channelUrl, opts).then((data) => {
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

### Return type

[**GetTotalNumberOfMessagesInAChannelResponse**](GetTotalNumberOfMessagesInAChannelResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listMessages

> ListMessagesResponse listMessages(channelType, channelUrl, messageTs, messageId, opts)

List messages

## List messages  You can retrieve a list of past messages of a specific channel with this API.  By default, this action returns a list of messages in the order they were created. Replies in threaded messages are also listed in the chronological order of their creation like other messages, not grouped with their parent messages.  https://sendbird.com/docs/chat/platform-api/v3/message/messaging-basics/list-messages#1-list-messages  &#x60;channel_type&#x60;   Type: string   Description: Specifies the type of the channel. Either open_channels or group_channels.   &#x60;channel_url&#x60;   Type: string   Description: Specifies the URL of the channel to retrieve a list of past messages.

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.MessageApi();
let channelType = "channelType_example"; // String | (Required) 
let channelUrl = "channelUrl_example"; // String | (Required) 
let messageTs = 789; // Number | Specifies the timestamp to be the reference point of the query in Unix milliseconds. Either this or the message_id parameter below should be specified in your query URL to retrieve a list. It fetches messages that were sent prior to and after the specified message_ts and the default value for both prev_limit and next_limit is 15.
let messageId = 789; // Number | Specifies the unique ID of the message to be the reference point of the query. Either this or the message_ts parameter above should be specified in your query URL to retrieve a list. It fetches messages that were sent prior to and after the specified message_id and the default value for both prev_limit and next_limit is 15.
let opts = {
  'prevLimit': 56, // Number | Specifies the number of previously sent messages to retrieve before message_ts. For example, if message_ts=1484202848298, then prev_limit=50 returns 50 messages sent by 1484202848297 (message_ts - 1). Acceptable values range from 0 to 200. (Default: 15)
  'nextLimit': 56, // Number | Specifies the number of sent messages to retrieve after message_ts. For example, if message_ts=1484202848298, then next_limit=50 returns 50 messages sent from 1484202848299 (message_ts + 1). Acceptable values range from 0 to 200. (Default: 15)
  'include': true, // Boolean | Determines whether to include messages sent exactly on the specified message_ts in the results. (Default: true)
  'reverse': true, // Boolean | Determines whether to sort the results in reverse chronological order. If set to true, messages appear in reverse chronological order where the newest comes first and the oldest last. (Default: false)
  'senderId': "senderId_example", // String | Restricts the search scope to only retrieve messages sent by the user with the specified ID.
  'senderIds': "senderIds_example", // String | Restricts the search scope to only retrieve messages sent by one or more users with the specified IDs listed in a comma-separated string.
  'operatorFilter': "operatorFilter_example", // String | 
  'customTypes': "customTypes_example", // String | Specifies a comma-separated string of one or more custom message types to retrieve. The value set to this parameter can serve as a filter as follows: - A string of specific custom types: Messages with the corresponding custom types are returned. - Empty like &custom_types=&...: Messages whose custom_type property is empty or has a value of null are returned. - An asterisk (\\*) (default): All messages are returned regardless of their custom_type.
  'messageType': "messageType_example", // String | 
  'includingRemoved': true, // Boolean | 
  'includeReactions': true, // Boolean | 
  'includeReplyType': "includeReplyType_example", // String | One of following values: NONE, ALL, ONLY_REPLY_TO_CHANNEL
  'includeParentMessageInfo': true, // Boolean | 
  'includeThreadInfo': true, // Boolean | 
  'includePollDetails': true, // Boolean | Determines whether to include all properties of a poll resource with a full list of options in the results. If set to false, a selection of poll resource properties consisting of id, title, close_at, created_at, updated_at, status, and message_id are returned. (Default: false) * To use this property, the polls feature should be turned on in Settings > Chat > Features on Sendbird Dashboard.
  'withSortedMetaArray': true, // Boolean | Determines whether to include the sorted_metaarray property in the response. (Default: false)
  'showSubchannelMessagesOnly': true, // Boolean | 
  'userId': "userId_example", // String | 
  'apiToken': {{API_TOKEN}} // String | 
};
apiInstance.listMessages(channelType, channelUrl, messageTs, messageId, opts).then((data) => {
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
 **messageTs** | **Number**| Specifies the timestamp to be the reference point of the query in Unix milliseconds. Either this or the message_id parameter below should be specified in your query URL to retrieve a list. It fetches messages that were sent prior to and after the specified message_ts and the default value for both prev_limit and next_limit is 15. | 
 **messageId** | **Number**| Specifies the unique ID of the message to be the reference point of the query. Either this or the message_ts parameter above should be specified in your query URL to retrieve a list. It fetches messages that were sent prior to and after the specified message_id and the default value for both prev_limit and next_limit is 15. | 
 **prevLimit** | **Number**| Specifies the number of previously sent messages to retrieve before message_ts. For example, if message_ts&#x3D;1484202848298, then prev_limit&#x3D;50 returns 50 messages sent by 1484202848297 (message_ts - 1). Acceptable values range from 0 to 200. (Default: 15) | [optional] 
 **nextLimit** | **Number**| Specifies the number of sent messages to retrieve after message_ts. For example, if message_ts&#x3D;1484202848298, then next_limit&#x3D;50 returns 50 messages sent from 1484202848299 (message_ts + 1). Acceptable values range from 0 to 200. (Default: 15) | [optional] 
 **include** | **Boolean**| Determines whether to include messages sent exactly on the specified message_ts in the results. (Default: true) | [optional] 
 **reverse** | **Boolean**| Determines whether to sort the results in reverse chronological order. If set to true, messages appear in reverse chronological order where the newest comes first and the oldest last. (Default: false) | [optional] 
 **senderId** | **String**| Restricts the search scope to only retrieve messages sent by the user with the specified ID. | [optional] 
 **senderIds** | **String**| Restricts the search scope to only retrieve messages sent by one or more users with the specified IDs listed in a comma-separated string. | [optional] 
 **operatorFilter** | **String**|  | [optional] 
 **customTypes** | **String**| Specifies a comma-separated string of one or more custom message types to retrieve. The value set to this parameter can serve as a filter as follows: - A string of specific custom types: Messages with the corresponding custom types are returned. - Empty like &amp;custom_types&#x3D;&amp;...: Messages whose custom_type property is empty or has a value of null are returned. - An asterisk (\\*) (default): All messages are returned regardless of their custom_type. | [optional] 
 **messageType** | **String**|  | [optional] 
 **includingRemoved** | **Boolean**|  | [optional] 
 **includeReactions** | **Boolean**|  | [optional] 
 **includeReplyType** | **String**| One of following values: NONE, ALL, ONLY_REPLY_TO_CHANNEL | [optional] 
 **includeParentMessageInfo** | **Boolean**|  | [optional] 
 **includeThreadInfo** | **Boolean**|  | [optional] 
 **includePollDetails** | **Boolean**| Determines whether to include all properties of a poll resource with a full list of options in the results. If set to false, a selection of poll resource properties consisting of id, title, close_at, created_at, updated_at, status, and message_id are returned. (Default: false) * To use this property, the polls feature should be turned on in Settings &gt; Chat &gt; Features on Sendbird Dashboard. | [optional] 
 **withSortedMetaArray** | **Boolean**| Determines whether to include the sorted_metaarray property in the response. (Default: false) | [optional] 
 **showSubchannelMessagesOnly** | **Boolean**|  | [optional] 
 **userId** | **String**|  | [optional] 
 **apiToken** | **String**|  | [optional] 

### Return type

[**ListMessagesResponse**](ListMessagesResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## markChannelMessagesAsRead

> Object markChannelMessagesAsRead(channelUrl, opts)

Mark all messages as read

## Mark all messages as read  Marks all messages in a group channel as read for a specific user. This action is only applicable for users in a group channel.  https://sendbird.com/docs/chat/platform-api/v3/message/read-receipts/mark-all-messages-as-read-message#1-mark-all-messages-as-read

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.MessageApi();
let channelUrl = "channelUrl_example"; // String | (Required) 
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'markChannelMessagesAsReadRequest': new SendbirdPlatformSdk.MarkChannelMessagesAsReadRequest() // MarkChannelMessagesAsReadRequest | 
};
apiInstance.markChannelMessagesAsRead(channelUrl, opts).then((data) => {
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
 **markChannelMessagesAsReadRequest** | [**MarkChannelMessagesAsReadRequest**](MarkChannelMessagesAsReadRequest.md)|  | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## migrateMessages

> Object migrateMessages(targetChannelUrl, opts)

Migrate messages

## Migrate messages  Using our migration API, you can migrate the messages from another system into a Sendbird system&#39;s [channel](https://sendbird.com/docs/chat/v3/platform-api/guides/channel-types) which consists of users, messages, and other chat-related data.  &gt; To turn on this feature, [contact our support team](https://dashboard.sendbird.com/settings/contact_us).      There are three things to do in advance before the migration. Follow the instructions below:  1. Register the users of your current chat solution to your Sendbird application. You can migrate the users into the Sendbird system using the [user creation API](https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-create-a-user).      2. Create either an [open](https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-create-a-channel) or a [group](https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-create-a-channel) channel to migrate the messages of your chat solution. The Sendbird system doesn&#39;t create a channel for your migration automatically.      3. The maximum number of migrated messages per call is 100. To avoid the failure during your migration, you must adjust the number of messages to process at once via the API.       https://sendbird.com/docs/chat/platform-api/v3/message/migration/migrate-messages#1-migrate-messages

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.MessageApi();
let targetChannelUrl = "targetChannelUrl_example"; // String | (Required) 
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'migrateMessagesRequest': new SendbirdPlatformSdk.MigrateMessagesRequest() // MigrateMessagesRequest | 
};
apiInstance.migrateMessages(targetChannelUrl, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **targetChannelUrl** | **String**| (Required)  | 
 **apiToken** | **String**|  | [optional] 
 **migrateMessagesRequest** | [**MigrateMessagesRequest**](MigrateMessagesRequest.md)|  | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## removeExtraDataFromAMessage

> Object removeExtraDataFromAMessage(channelType, channelUrl, messageId, opts)

Remove extra data from a message

## Remove extra data from a message  Removes specific items from a message by their keys.  https://sendbird.com/docs/chat/platform-api/v3/message/messaging-basics/message-remove-metadata#1-remove-metadata ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.MessageApi();
let channelType = "channelType_example"; // String | (Required) 
let channelUrl = "channelUrl_example"; // String | (Required) 
let messageId = "messageId_example"; // String | (Required) 
let opts = {
  'keys': "keys_example", // String | 
  'apiToken': {{API_TOKEN}} // String | 
};
apiInstance.removeExtraDataFromAMessage(channelType, channelUrl, messageId, opts).then((data) => {
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
 **messageId** | **String**| (Required)  | 
 **keys** | **String**|  | [optional] 
 **apiToken** | **String**|  | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## sendAMessage

> SendbirdMessageResponse sendAMessage(channelType, channelUrl, opts)

Send a message

## Send a message  You can use this action to send a text message, a file message, or an admin message to a specific channel. Sendbird Chat SDKs and the platform API allows you to upload any type of files in messages to the Sendbird server. See [Message Overview](https://sendbird.com/docs/chat/platform-api/v3/message/message-overview) for more information on each message type. Messages are sent between client devices running the Sendbird Chat SDK or UIKit as well as programmatically from businesses to their customers. For instance, a delivery app can automatically send a message like \&quot;Arriving in one minute!\&quot; on behalf of a delivery driver.  https://sendbird.com/docs/chat/platform-api/v3/message/messaging-basics/send-a-message#1-send-a-message ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.MessageApi();
let channelType = "channelType_example"; // String | (Required) 
let channelUrl = "channelUrl_example"; // String | (Required) 
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'sendAMessageRequest': new SendbirdPlatformSdk.SendAMessageRequest() // SendAMessageRequest | 
};
apiInstance.sendAMessage(channelType, channelUrl, opts).then((data) => {
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
 **sendAMessageRequest** | [**SendAMessageRequest**](SendAMessageRequest.md)|  | [optional] 

### Return type

[**SendbirdMessageResponse**](SendbirdMessageResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateAMessage

> SendbirdMessageResponse updateAMessage(channelType, channelUrl, messageId, opts)

Update a message

## Update a message  Updates specific information on a message.  https://sendbird.com/docs/chat/platform-api/v3/message/messaging-basics/update-a-message#1-update-a-message ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.MessageApi();
let channelType = "channelType_example"; // String | (Required) 
let channelUrl = "channelUrl_example"; // String | (Required) 
let messageId = "messageId_example"; // String | (Required) 
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'updateAMessageRequest': new SendbirdPlatformSdk.UpdateAMessageRequest() // UpdateAMessageRequest | 
};
apiInstance.updateAMessage(channelType, channelUrl, messageId, opts).then((data) => {
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
 **messageId** | **String**| (Required)  | 
 **apiToken** | **String**|  | [optional] 
 **updateAMessageRequest** | [**UpdateAMessageRequest**](UpdateAMessageRequest.md)|  | [optional] 

### Return type

[**SendbirdMessageResponse**](SendbirdMessageResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateExtraDataInAMessage

> UpdateExtraDataInAMessageResponse updateExtraDataInAMessage(channelType, channelUrl, messageId, opts)

Update extra data in a message

## Update extra data in a message  Updates the values of specific items by their keys.  https://sendbird.com/docs/chat/platform-api/v3/message/messaging-basics/message-update-metadata#1-update-metadata ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.MessageApi();
let channelType = "channelType_example"; // String | (Required) 
let channelUrl = "channelUrl_example"; // String | (Required) 
let messageId = "messageId_example"; // String | (Required) 
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'updateExtraDataInAMessageRequest': new SendbirdPlatformSdk.UpdateExtraDataInAMessageRequest() // UpdateExtraDataInAMessageRequest | 
};
apiInstance.updateExtraDataInAMessage(channelType, channelUrl, messageId, opts).then((data) => {
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
 **messageId** | **String**| (Required)  | 
 **apiToken** | **String**|  | [optional] 
 **updateExtraDataInAMessageRequest** | [**UpdateExtraDataInAMessageRequest**](UpdateExtraDataInAMessageRequest.md)|  | [optional] 

### Return type

[**UpdateExtraDataInAMessageResponse**](UpdateExtraDataInAMessageResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

