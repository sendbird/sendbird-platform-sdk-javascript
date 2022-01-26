# SendbirdPlatformSdk.BotInterfaceApi

All URIs are relative to *https://api-APP_ID.sendbird.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createBot**](BotInterfaceApi.md#createBot) | **POST** /v3/bots | Create a bot
[**deleteBotById**](BotInterfaceApi.md#deleteBotById) | **DELETE** /v3/bots/{bot_userid} | Delete a bot
[**joinChannels**](BotInterfaceApi.md#joinChannels) | **POST** /v3/bots/{bot_userid}/channels | Join channels
[**leaveChannels**](BotInterfaceApi.md#leaveChannels) | **DELETE** /v3/bots/{bot_userid}/channels | Leave channels - When leaving all channels
[**leaveChannelsByUrl**](BotInterfaceApi.md#leaveChannelsByUrl) | **DELETE** /v3/bots/{bot_userid}/channels/{channel_url} | Leave channels - When leaving a channel by its channel URL
[**listBots**](BotInterfaceApi.md#listBots) | **GET** /v3/bots | List bots
[**sendBotsMessage**](BotInterfaceApi.md#sendBotsMessage) | **POST** /v3/bots/{bot_userid}/send | Send a bot&#39;s message
[**updateBotById**](BotInterfaceApi.md#updateBotById) | **PUT** /v3/bots/{bot_userid} | Update a bot
[**viewBotById**](BotInterfaceApi.md#viewBotById) | **GET** /v3/bots/{bot_userid} | View a bot



## createBot

> InlineResponse20066Bots createBot(opts)

Create a bot

## Create a bot  Creates a new bot within the application. Creating a bot is similar to creating a normal user, except that a callback URL is specified in order for the bot to receive events.  &gt; __Note__: The bot must [join](#2-join-channels) a group channel first to interact with users. In group channels, you can invite a bot through the [invite as members](https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-invite-as-members) action instead.  https://sendbird.com/docs/chat/v3/platform-api/guides/bot-interface#2-create-a-bot

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.BotInterfaceApi();
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'createBotData': new SendbirdPlatformSdk.CreateBotData() // CreateBotData | 
};
apiInstance.createBot(opts, (error, data, response) => {
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
 **createBotData** | [**CreateBotData**](CreateBotData.md)|  | [optional] 

### Return type

[**InlineResponse20066Bots**](InlineResponse20066Bots.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteBotById

> deleteBotById(botUserid, opts)

Delete a bot

## Delete a bot  Deletes a bot from an application.  https://sendbird.com/docs/chat/v3/platform-api/guides/bot-interface#2-delete-a-bot ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.BotInterfaceApi();
let botUserid = "botUserid_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}} // String | 
};
apiInstance.deleteBotById(botUserid, opts, (error, data, response) => {
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
 **botUserid** | **String**|  | 
 **apiToken** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## joinChannels

> SendBirdGroupChannelCollection joinChannels(botUserid, opts)

Join channels

## Join channels  Makes a bot join one or more channels.  https://sendbird.com/docs/chat/v3/platform-api/guides/bot-interface#2-join-channels ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.BotInterfaceApi();
let botUserid = "botUserid_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'joinChannelsData': new SendbirdPlatformSdk.JoinChannelsData() // JoinChannelsData | 
};
apiInstance.joinChannels(botUserid, opts, (error, data, response) => {
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
 **botUserid** | **String**|  | 
 **apiToken** | **String**|  | [optional] 
 **joinChannelsData** | [**JoinChannelsData**](JoinChannelsData.md)|  | [optional] 

### Return type

[**SendBirdGroupChannelCollection**](SendBirdGroupChannelCollection.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## leaveChannels

> leaveChannels(botUserid, opts)

Leave channels - When leaving all channels

## Leave channels  Makes a bot leave one or more group channels.  https://sendbird.com/docs/chat/v3/platform-api/guides/bot-interface#2-leave-channels ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.BotInterfaceApi();
let botUserid = "botUserid_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'channelUrl': "channelUrl_example" // String | 
};
apiInstance.leaveChannels(botUserid, opts, (error, data, response) => {
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
 **botUserid** | **String**|  | 
 **apiToken** | **String**|  | [optional] 
 **channelUrl** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## leaveChannelsByUrl

> leaveChannelsByUrl(botUserid, channelUrl, opts)

Leave channels - When leaving a channel by its channel URL

## Leave channels  Makes a bot leave one or more group channels.  https://sendbird.com/docs/chat/v3/platform-api/guides/bot-interface#2-leave-channels ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.BotInterfaceApi();
let botUserid = "botUserid_example"; // String | 
let channelUrl = "channelUrl_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}} // String | 
};
apiInstance.leaveChannelsByUrl(botUserid, channelUrl, opts, (error, data, response) => {
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
 **botUserid** | **String**|  | 
 **channelUrl** | **String**|  | 
 **apiToken** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listBots

> InlineResponse20066 listBots(opts)

List bots

## List bots  Retrieves a list of all bots within an application.  https://sendbird.com/docs/chat/v3/platform-api/guides/bot-interface#2-list-bots ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.BotInterfaceApi();
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'token': "token_example", // String | 
  'limit': 56 // Number | 
};
apiInstance.listBots(opts, (error, data, response) => {
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

### Return type

[**InlineResponse20066**](InlineResponse20066.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## sendBotsMessage

> SendBirdMessageResponse sendBotsMessage(botUserid, opts)

Send a bot&#39;s message

## Send a bot&#39;s message  Sends a bot&#39;s message to a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/bot-interface#2-send-a-bot-s-message ----------------------------   &#x60;bot_userid&#x60;      Type: string      Description: Specifies the ID of the bot to send a message.

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.BotInterfaceApi();
let botUserid = "botUserid_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'sendBotSMessageData': new SendbirdPlatformSdk.SendBotSMessageData() // SendBotSMessageData | 
};
apiInstance.sendBotsMessage(botUserid, opts, (error, data, response) => {
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
 **botUserid** | **String**|  | 
 **apiToken** | **String**|  | [optional] 
 **sendBotSMessageData** | [**SendBotSMessageData**](SendBotSMessageData.md)|  | [optional] 

### Return type

[**SendBirdMessageResponse**](SendBirdMessageResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateBotById

> InlineResponse20066Bots updateBotById(botUserid, opts)

Update a bot

## Update a bot  Updates information on a bot.  https://sendbird.com/docs/chat/v3/platform-api/guides/bot-interface#2-update-a-bot ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.BotInterfaceApi();
let botUserid = "botUserid_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'updateBotByIdData': new SendbirdPlatformSdk.UpdateBotByIdData() // UpdateBotByIdData | 
};
apiInstance.updateBotById(botUserid, opts, (error, data, response) => {
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
 **botUserid** | **String**|  | 
 **apiToken** | **String**|  | [optional] 
 **updateBotByIdData** | [**UpdateBotByIdData**](UpdateBotByIdData.md)|  | [optional] 

### Return type

[**InlineResponse20066Bots**](InlineResponse20066Bots.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## viewBotById

> InlineResponse20066Bots viewBotById(botUserid, opts)

View a bot

## View a bot  Retrieves information on a bot.  https://sendbird.com/docs/chat/v3/platform-api/guides/bot-interface#2-view-a-bot ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.BotInterfaceApi();
let botUserid = "botUserid_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}} // String | 
};
apiInstance.viewBotById(botUserid, opts, (error, data, response) => {
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
 **botUserid** | **String**|  | 
 **apiToken** | **String**|  | [optional] 

### Return type

[**InlineResponse20066Bots**](InlineResponse20066Bots.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

