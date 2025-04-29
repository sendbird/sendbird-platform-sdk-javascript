# SendbirdPlatformSdk.BotApi

All URIs are relative to *https://api-APP_ID.sendbird.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createABot**](BotApi.md#createABot) | **POST** /v3/bots | Create a bot
[**joinChannels**](BotApi.md#joinChannels) | **POST** /v3/bots/{bot_userid}/channels | Join channels
[**leaveAGroupChannel**](BotApi.md#leaveAGroupChannel) | **DELETE** /v3/bots/{bot_userid}/channels/{channel_url} | Leave channels - When leaving a specific channel
[**leaveGroupChannels**](BotApi.md#leaveGroupChannels) | **DELETE** /v3/bots/{bot_userid}/channels | Leave channels - When leaving all channels
[**listBots**](BotApi.md#listBots) | **GET** /v3/bots | List bots
[**sendABotMessage**](BotApi.md#sendABotMessage) | **POST** /v3/bots/{bot_userid}/send | Send a bot&#39;s message



## createABot

> CreateABotResponse createABot(opts)

Create a bot

## Create a bot  Creates a new bot within an application. Creating a bot is similar to creating a normal user, except a callback URL should be specified for a bot to receive events.  &gt; **Note**: The bot must first [join a group channel](https://sendbird.com/docs/chat/platform-api/v3/bot/managing-a-bot/join-channels) to interact with users. In group channels, you can also invite a bot through the [invite as members](https://sendbird.com/docs/chat/platform-api/v3/channel/inviting-a-user/invite-as-members-channel) action.      [https://sendbird.com/docs/chat/platform-api/v3/bot/creating-a-bot/create-a-bot#1-create-a-bot](https://sendbird.com/docs/chat/platform-api/v3/bot/creating-a-bot/create-a-bot#1-create-a-bot)

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.BotApi();
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'createABotRequest': new SendbirdPlatformSdk.CreateABotRequest() // CreateABotRequest | 
};
apiInstance.createABot(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | **String**|  | [optional] 
 **createABotRequest** | [**CreateABotRequest**](CreateABotRequest.md)|  | [optional] 

### Return type

[**CreateABotResponse**](CreateABotResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## joinChannels

> SendbirdGroupChannelDetail joinChannels(botUserid, opts)

Join channels

## Join channels  Makes a bot join one or more group channels.  [https://sendbird.com/docs/chat/platform-api/v3/bot/managing-a-bot/join-channels#1-join-channels](https://sendbird.com/docs/chat/platform-api/v3/bot/managing-a-bot/join-channels#1-join-channels)

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.BotApi();
let botUserid = "botUserid_example"; // String | (Required) 
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'joinChannelsRequest': new SendbirdPlatformSdk.JoinChannelsRequest() // JoinChannelsRequest | 
};
apiInstance.joinChannels(botUserid, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **botUserid** | **String**| (Required)  | 
 **apiToken** | **String**|  | [optional] 
 **joinChannelsRequest** | [**JoinChannelsRequest**](JoinChannelsRequest.md)|  | [optional] 

### Return type

[**SendbirdGroupChannelDetail**](SendbirdGroupChannelDetail.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## leaveAGroupChannel

> Object leaveAGroupChannel(channelUrl, botUserid, opts)

Leave channels - When leaving a specific channel

## Leave channels  Makes a bot leave a specific channel  [https://sendbird.com/docs/chat/platform-api/v3/bot/managing-a-bot/leave-channels#1-leave-channels](https://sendbird.com/docs/chat/platform-api/v3/bot/managing-a-bot/leave-channels#1-leave-channels)

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.BotApi();
let channelUrl = "channelUrl_example"; // String | 
let botUserid = "botUserid_example"; // String | (Required) 
let opts = {
  'apiToken': {{API_TOKEN}} // String | 
};
apiInstance.leaveAGroupChannel(channelUrl, botUserid, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelUrl** | **String**|  | 
 **botUserid** | **String**| (Required)  | 
 **apiToken** | **String**|  | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## leaveGroupChannels

> Object leaveGroupChannels(botUserid, opts)

Leave channels - When leaving all channels

## Leave channels  Makes a bot leave all group channels.  [https://sendbird.com/docs/chat/platform-api/v3/bot/managing-a-bot/leave-channels#1-leave-channels](https://sendbird.com/docs/chat/platform-api/v3/bot/managing-a-bot/leave-channels#1-leave-channels)

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.BotApi();
let botUserid = "botUserid_example"; // String | (Required) 
let opts = {
  'apiToken': {{API_TOKEN}} // String | 
};
apiInstance.leaveGroupChannels(botUserid, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **botUserid** | **String**| (Required)  | 
 **apiToken** | **String**|  | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listBots

> ListBotsResponse listBots(opts)

List bots

## List bots  Retrieves a list of all bots within an application.  https://sendbird.com/docs/chat/platform-api/v3/bot/listing-bots/list-bots#1-list-bots

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.BotApi();
let opts = {
  'token': "token_example", // String | 
  'limit': 56, // Number | 
  'apiToken': {{API_TOKEN}} // String | 
};
apiInstance.listBots(opts).then((data) => {
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
 **apiToken** | **String**|  | [optional] 

### Return type

[**ListBotsResponse**](ListBotsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## sendABotMessage

> SendbirdMessageResponse sendABotMessage(botUserid, opts)

Send a bot&#39;s message

## Send a bot message  Sends a bot message to a group channel.  [https://sendbird.com/docs/chat/platform-api/v3/bot/sending-a-bot-message/send-a-bot-message#1-send-a-bot-message](https://sendbird.com/docs/chat/platform-api/v3/bot/sending-a-bot-message/send-a-bot-message#1-send-a-bot-message)  &#x60;bot_userid&#x60;   Type: string   Description: Specifies the ID of the bot to send a message.

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.BotApi();
let botUserid = "botUserid_example"; // String | (Required) 
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'sendABotMessageRequest': new SendbirdPlatformSdk.SendABotMessageRequest() // SendABotMessageRequest | 
};
apiInstance.sendABotMessage(botUserid, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **botUserid** | **String**| (Required)  | 
 **apiToken** | **String**|  | [optional] 
 **sendABotMessageRequest** | [**SendABotMessageRequest**](SendABotMessageRequest.md)|  | [optional] 

### Return type

[**SendbirdMessageResponse**](SendbirdMessageResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

