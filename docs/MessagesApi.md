# SendbirdPlatformSdk.MessagesApi

All URIs are relative to *https://api-APP_ID.sendbird.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addExtraDataToMessage**](MessagesApi.md#addExtraDataToMessage) | **POST** /v3/{channel_type}/{channel_url}/messages/{message_id}/sorted_metaarray | Add extra data to a message
[**addReactionToAMessage**](MessagesApi.md#addReactionToAMessage) | **POST** /v3/{channel_type}/{channel_url}/messages/{message_id}/reactions | Add a reaction to a message
[**deleteMessageById**](MessagesApi.md#deleteMessageById) | **DELETE** /v3/{channel_type}/{channel_url}/messages/{message_id} | Delete a message
[**gcMarkAllMessagesAsDelivered**](MessagesApi.md#gcMarkAllMessagesAsDelivered) | **PUT** /v3/group_channels/{channel_url}/messages/mark_as_delivered | Mark all messages as delivered
[**gcMarkAllMessagesAsRead**](MessagesApi.md#gcMarkAllMessagesAsRead) | **PUT** /v3/group_channels/{channel_url}/messages/mark_as_read | Mark all messages as read
[**gcViewNumberOfEachMembersUnreadMessages**](MessagesApi.md#gcViewNumberOfEachMembersUnreadMessages) | **GET** /v3/group_channels/{channel_url}/messages/unread_count | View number of each member&#39;s unread messages
[**listMessages**](MessagesApi.md#listMessages) | **GET** /v3/{channel_type}/{channel_url}/messages | List messages
[**listReactionsOfMessage**](MessagesApi.md#listReactionsOfMessage) | **GET** /v3/{channel_type}/{channel_url}/messages/{message_id}/reactions | List reactions of a message
[**removeExtraDataFromMessage**](MessagesApi.md#removeExtraDataFromMessage) | **DELETE** /v3/{channel_type}/{channel_url}/messages/{message_id}/sorted_metaarray | Remove extra data from a message
[**removeReactionFromAMessage**](MessagesApi.md#removeReactionFromAMessage) | **DELETE** /v3/{channel_type}/{channel_url}/messages/{message_id}/reactions | Remove a reaction from a message
[**sendMessage**](MessagesApi.md#sendMessage) | **POST** /v3/{channel_type}/{channel_url}/messages | Send a message
[**translateMessageIntoOtherLanguages**](MessagesApi.md#translateMessageIntoOtherLanguages) | **POST** /v3/{channel_type}/{channel_url}/messages/{message_id}/translation | Translate a message into other languages
[**updateExtraDataInMessage**](MessagesApi.md#updateExtraDataInMessage) | **PUT** /v3/{channel_type}/{channel_url}/messages/{message_id}/sorted_metaarray | Update extra data in a message
[**updateMessageById**](MessagesApi.md#updateMessageById) | **PUT** /v3/{channel_type}/{channel_url}/messages/{message_id} | Update a message
[**viewMessageById**](MessagesApi.md#viewMessageById) | **GET** /v3/{channel_type}/{channel_url}/messages/{message_id} | View a message
[**viewTotalNumberOfMessagesInChannel**](MessagesApi.md#viewTotalNumberOfMessagesInChannel) | **GET** /v3/{channel_type}/{channel_url}/messages/total_count | View total number of messages in a channel



## addExtraDataToMessage

> AddExtraDataToMessageResponse addExtraDataToMessage(apiToken, channelType, channelUrl, messageId, opts)

Add extra data to a message

## Add extra data to a message  Adds one or more key-values items which store additional information for a message.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-add-extra-data-to-a-message ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.MessagesApi();
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

let apiInstance = new SendbirdPlatformSdk.MessagesApi();
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


## deleteMessageById

> Object deleteMessageById(apiToken, channelType, channelUrl, messageId)

Delete a message

## Delete a message  Deletes a message from a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-delete-a-message ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.MessagesApi();
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


## gcMarkAllMessagesAsDelivered

> GcMarkAllMessagesAsDeliveredResponse gcMarkAllMessagesAsDelivered(apiToken, channelUrl, opts)

Mark all messages as delivered

## Mark all messages as delivered  Marks all messages in a group channel as delivered for a given user. This action is only applicable for users in a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-mark-all-messages-as-delivered ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.MessagesApi();
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

let apiInstance = new SendbirdPlatformSdk.MessagesApi();
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

let apiInstance = new SendbirdPlatformSdk.MessagesApi();
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


## listMessages

> ListMessagesResponse listMessages(apiToken, channelType, channelUrl, opts)

List messages

## List messages  Retrieves a list of past messages of a channel.  &gt; This message retrieval is one of Sendbird&#39;s [premium features](https://sendbird.com/docs/chat/v3/platform-api/guides/application#-3-sendbird-s-premium-features). Contact our [sales team](https://get.sendbird.com/talk-to-sales.html) for further assistance.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-list-messages ----------------------------   &#x60;channel_type&#x60;      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  &#x60;channel_url&#x60;      Type: string      Description: Specifies the URL of the channel to retrieve a list of past messages.

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.MessagesApi();
let apiToken = {{API_TOKEN}}; // String | 
let channelType = "channelType_example"; // String | 
let channelUrl = "channelUrl_example"; // String | 
let opts = {
  'messageTs': 56, // Number | 
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
 **messageTs** | **Number**|  | [optional] 
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

let apiInstance = new SendbirdPlatformSdk.MessagesApi();
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


## removeExtraDataFromMessage

> Object removeExtraDataFromMessage(apiToken, channelType, channelUrl, messageId, opts)

Remove extra data from a message

## Remove extra data from a message  Removes specific items from a message by their keys.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-remove-extra-data-from-a-message ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.MessagesApi();
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

let apiInstance = new SendbirdPlatformSdk.MessagesApi();
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


## sendMessage

> SendBirdMessageResponse sendMessage(apiToken, channelType, channelUrl, opts)

Send a message

## Send a message  Sends a message to a channel. You can send a text message, a file message, and an admin message.  &gt;__Note__: With Sendbird Chat SDKs and the platform API, any type of files in messages can be uploaded to Sendbird server.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-send-a-message ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.MessagesApi();
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

let apiInstance = new SendbirdPlatformSdk.MessagesApi();
let apiToken = {{API_TOKEN}}; // String | 
let channelType = "channelType_example"; // String | 
let channelUrl = "channelUrl_example"; // String | 
let messageId = "messageId_example"; // String | 
let opts = {
  'body': {key: null} // Object | 
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
 **body** | **Object**|  | [optional] 

### Return type

[**SendBirdMessageResponse**](SendBirdMessageResponse.md)

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

let apiInstance = new SendbirdPlatformSdk.MessagesApi();
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

let apiInstance = new SendbirdPlatformSdk.MessagesApi();
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


## viewMessageById

> SendBirdMessageResponse viewMessageById(apiToken, channelType, channelUrl, messageId, opts)

View a message

## View a message  Retrieves information on a message.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-view-a-message ----------------------------   &#x60;channel_type&#x60;      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  &#x60;channel_url&#x60;      Type: string      Description: Specifies the URL of the target channel.  &#x60;message_id&#x60;      Type: long      Description: Specifies the unique ID of the message to retrieve.

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.MessagesApi();
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

let apiInstance = new SendbirdPlatformSdk.MessagesApi();
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

