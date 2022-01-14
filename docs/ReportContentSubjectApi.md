# SendbirdPlatformSdk.ReportContentSubjectApi

All URIs are relative to *https://api-APP_ID.sendbird.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listReports**](ReportContentSubjectApi.md#listReports) | **GET** /v3/report | List reports
[**listReportsOnChannelByUrl**](ReportContentSubjectApi.md#listReportsOnChannelByUrl) | **GET** /v3/report/{channel_type}/{channel_url} | List reports on a channel
[**listReportsOnMessageById**](ReportContentSubjectApi.md#listReportsOnMessageById) | **GET** /v3/report/{channel_type}/{channel_url}/messages/{message_id} | List reports on a message
[**listReportsOnUserById**](ReportContentSubjectApi.md#listReportsOnUserById) | **GET** /v3/report/users/{offending_user_id} | List reports on a user
[**reportChannelByUrl**](ReportContentSubjectApi.md#reportChannelByUrl) | **POST** /v3/report/{channel_type}/{channel_url} | Report a channel
[**reportMessageById**](ReportContentSubjectApi.md#reportMessageById) | **POST** /v3/report/{channel_type}/{channel_url}/messages/{message_id} | Report a message
[**reportUserById**](ReportContentSubjectApi.md#reportUserById) | **POST** /v3/report/users/{offending_user_id} | Report a user
[**viewModeratedMessageById**](ReportContentSubjectApi.md#viewModeratedMessageById) | **GET** /v3/report/{channel_type}/{channel_url}/profanity_messages/{message_id} | View a moderated message



## listReports

> InlineResponse20071 listReports(opts)

List reports

## List reports  Retrieves a list of reports within an application regardless of object types.  https://sendbird.com/docs/chat/v3/platform-api/guides/report-content-and-subject#2-list-reports ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.ReportContentSubjectApi();
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'token': "token_example", // String | 
  'limit': 56, // Number | 
  'startTs': 56, // Number | 
  'endTs': 56 // Number | 
};
apiInstance.listReports(opts, (error, data, response) => {
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
 **startTs** | **Number**|  | [optional] 
 **endTs** | **Number**|  | [optional] 

### Return type

[**InlineResponse20071**](InlineResponse20071.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listReportsOnChannelByUrl

> InlineResponse20072 listReportsOnChannelByUrl(channelType, channelUrl, opts)

List reports on a channel

## List reports on a channel  Retrieves a list of reports on a channel that has offensive messages or abusive activities.  https://sendbird.com/docs/chat/v3/platform-api/guides/report-content-and-subject#2-list-reports-on-a-channel ----------------------------   &#x60;channel_type&#x60;      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  &#x60;channel_url&#x60;      Type: string      Description: Specifies the URL of the channel which is reported for offensive messages or inappropriate activities.

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.ReportContentSubjectApi();
let channelType = "channelType_example"; // String | 
let channelUrl = "channelUrl_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'token': "token_example", // String | 
  'limit': 56 // Number | 
};
apiInstance.listReportsOnChannelByUrl(channelType, channelUrl, opts, (error, data, response) => {
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
 **channelType** | **String**|  | 
 **channelUrl** | **String**|  | 
 **apiToken** | **String**|  | [optional] 
 **token** | **String**|  | [optional] 
 **limit** | **Number**|  | [optional] 

### Return type

[**InlineResponse20072**](InlineResponse20072.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listReportsOnMessageById

> InlineResponse20072 listReportsOnMessageById(channelType, channelUrl, messageId, opts)

List reports on a message

## List reports on a message  Retrieves a list of reports on a message which contains suspicious, harassing, or inappropriate content.  https://sendbird.com/docs/chat/v3/platform-api/guides/report-content-and-subject#2-list-reports-on-a-message ----------------------------   &#x60;channel_type&#x60;      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  &#x60;channel_url&#x60;      Type: string      Description: Specifies the URL of the channel where the reported message is in.  &#x60;message_id&#x60;      Type: string      Description: Specifies the unique ID of the reported message.

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.ReportContentSubjectApi();
let channelType = "channelType_example"; // String | 
let channelUrl = "channelUrl_example"; // String | 
let messageId = "messageId_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'token': "token_example", // String | 
  'limit': 56 // Number | 
};
apiInstance.listReportsOnMessageById(channelType, channelUrl, messageId, opts, (error, data, response) => {
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
 **channelType** | **String**|  | 
 **channelUrl** | **String**|  | 
 **messageId** | **String**|  | 
 **apiToken** | **String**|  | [optional] 
 **token** | **String**|  | [optional] 
 **limit** | **Number**|  | [optional] 

### Return type

[**InlineResponse20072**](InlineResponse20072.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listReportsOnUserById

> InlineResponse20072 listReportsOnUserById(offendingUserId, opts)

List reports on a user

## List reports on a user  Retrieves a list of reports on a user who sends an offensive message.  https://sendbird.com/docs/chat/v3/platform-api/guides/report-content-and-subject#2-list-reports-on-a-user ----------------------------   &#x60;offending_user_id&#x60;      Type: string      Description: Specifies the unique ID of the user who has sent the message to report.

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.ReportContentSubjectApi();
let offendingUserId = "offendingUserId_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'token': "token_example", // String | 
  'limit': 56 // Number | 
};
apiInstance.listReportsOnUserById(offendingUserId, opts, (error, data, response) => {
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
 **offendingUserId** | **String**|  | 
 **apiToken** | **String**|  | [optional] 
 **token** | **String**|  | [optional] 
 **limit** | **Number**|  | [optional] 

### Return type

[**InlineResponse20072**](InlineResponse20072.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## reportChannelByUrl

> InlineResponse20072ReportLogs reportChannelByUrl(channelType, channelUrl, opts)

Report a channel

## Report a channel  Reports a channel that has offensive messages or abusive activities.  https://sendbird.com/docs/chat/v3/platform-api/guides/report-content-and-subject#2-report-a-channel ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.ReportContentSubjectApi();
let channelType = "channelType_example"; // String | 
let channelUrl = "channelUrl_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'reportChannelByUrlData': new SendbirdPlatformSdk.ReportChannelByUrlData() // ReportChannelByUrlData | 
};
apiInstance.reportChannelByUrl(channelType, channelUrl, opts, (error, data, response) => {
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
 **channelType** | **String**|  | 
 **channelUrl** | **String**|  | 
 **apiToken** | **String**|  | [optional] 
 **reportChannelByUrlData** | [**ReportChannelByUrlData**](ReportChannelByUrlData.md)|  | [optional] 

### Return type

[**InlineResponse20072ReportLogs**](InlineResponse20072ReportLogs.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## reportMessageById

> InlineResponse20072ReportLogs reportMessageById(channelType, channelUrl, messageId, opts)

Report a message

## Report a message  Reports a message which contains suspicious, harassing, or inappropriate content.  https://sendbird.com/docs/chat/v3/platform-api/guides/report-content-and-subject#2-report-a-message ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.ReportContentSubjectApi();
let channelType = "channelType_example"; // String | 
let channelUrl = "channelUrl_example"; // String | 
let messageId = "messageId_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'reportMessageByIdData': new SendbirdPlatformSdk.ReportMessageByIdData() // ReportMessageByIdData | 
};
apiInstance.reportMessageById(channelType, channelUrl, messageId, opts, (error, data, response) => {
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
 **channelType** | **String**|  | 
 **channelUrl** | **String**|  | 
 **messageId** | **String**|  | 
 **apiToken** | **String**|  | [optional] 
 **reportMessageByIdData** | [**ReportMessageByIdData**](ReportMessageByIdData.md)|  | [optional] 

### Return type

[**InlineResponse20072ReportLogs**](InlineResponse20072ReportLogs.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## reportUserById

> InlineResponse20072ReportLogs reportUserById(offendingUserId, opts)

Report a user

## Report a user  Reports a user who sends an offensive message in a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/report-content-and-subject#2-report-a-user ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.ReportContentSubjectApi();
let offendingUserId = "offendingUserId_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'reportUserByIdData': new SendbirdPlatformSdk.ReportUserByIdData() // ReportUserByIdData | 
};
apiInstance.reportUserById(offendingUserId, opts, (error, data, response) => {
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
 **offendingUserId** | **String**|  | 
 **apiToken** | **String**|  | [optional] 
 **reportUserByIdData** | [**ReportUserByIdData**](ReportUserByIdData.md)|  | [optional] 

### Return type

[**InlineResponse20072ReportLogs**](InlineResponse20072ReportLogs.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## viewModeratedMessageById

> {String: String} viewModeratedMessageById(channelType, channelUrl, messageId, opts)

View a moderated message

## View a moderated message  Retrieves information on a message that has been moderated by the [profanity filter](https://sendbird.com/docs/chat/v3/platform-api/guides/filter-and-moderation#2-profanity-filter).  https://sendbird.com/docs/chat/v3/platform-api/guides/report-content-and-subject#2-view-a-moderated-message ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.ReportContentSubjectApi();
let channelType = "channelType_example"; // String | 
let channelUrl = "channelUrl_example"; // String | 
let messageId = "messageId_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}} // String | 
};
apiInstance.viewModeratedMessageById(channelType, channelUrl, messageId, opts, (error, data, response) => {
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
 **channelType** | **String**|  | 
 **channelUrl** | **String**|  | 
 **messageId** | **String**|  | 
 **apiToken** | **String**|  | [optional] 

### Return type

**{String: String}**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

