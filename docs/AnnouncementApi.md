# SendbirdPlatformSdk.AnnouncementApi

All URIs are relative to *https://api-APP_ID.sendbird.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**scheduleAnAnnouncement**](AnnouncementApi.md#scheduleAnAnnouncement) | **POST** /v3/announcements | Schedule an announcement



## scheduleAnAnnouncement

> ScheduleAnAnnouncementResponse scheduleAnAnnouncement(opts)

Schedule an announcement

## Schedule an announcement  Creates an announcement. You can also schedule an announcement in the [Sendbird Dashboard](https://dashboard.sendbird.com).  [https://sendbird.com/docs/chat/platform-api/v3/message/announcements/create-an-announcement#1-create-an-announcement](https://sendbird.com/docs/chat/platform-api/v3/message/announcements/create-an-announcement#1-create-an-announcement)

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.AnnouncementApi();
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'scheduleAnAnnouncementRequest': new SendbirdPlatformSdk.ScheduleAnAnnouncementRequest() // ScheduleAnAnnouncementRequest | 
};
apiInstance.scheduleAnAnnouncement(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | **String**|  | [optional] 
 **scheduleAnAnnouncementRequest** | [**ScheduleAnAnnouncementRequest**](ScheduleAnAnnouncementRequest.md)|  | [optional] 

### Return type

[**ScheduleAnAnnouncementResponse**](ScheduleAnAnnouncementResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

