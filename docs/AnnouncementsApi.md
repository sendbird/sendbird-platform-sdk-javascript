# SendbirdPlatformSdk.AnnouncementsApi

All URIs are relative to *https://api-APP_ID.sendbird.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getDetailedOpenRateOfAnnouncementById**](AnnouncementsApi.md#getDetailedOpenRateOfAnnouncementById) | **GET** /v3/announcement_open_rate/{unique_id} | Get detailed open rate of an announcement
[**getDetailedOpenRateOfAnnouncementGroup**](AnnouncementsApi.md#getDetailedOpenRateOfAnnouncementGroup) | **GET** /v3/announcement_open_rate_by_group/{announcement_group} | Get detailed open rate of an announcement group
[**getDetailedOpenStatusOfAnnouncementById**](AnnouncementsApi.md#getDetailedOpenStatusOfAnnouncementById) | **GET** /v3/announcement_open_status/{unique_id} | Get detailed open status of an announcement
[**getStatistics**](AnnouncementsApi.md#getStatistics) | **GET** /v3/announcement_stats/weekly | Get statistics - weekly
[**getStatisticsDaily**](AnnouncementsApi.md#getStatisticsDaily) | **GET** /v3/announcement_stats/daily | Get statistics - daily
[**getStatisticsMonthly**](AnnouncementsApi.md#getStatisticsMonthly) | **GET** /v3/announcement_stats/monthly | Get statistics - monthly
[**listAnnouncementGroups**](AnnouncementsApi.md#listAnnouncementGroups) | **GET** /v3/announcement_group | List announcement groups
[**listAnnouncements**](AnnouncementsApi.md#listAnnouncements) | **GET** /v3/announcements | List announcements
[**scheduleAnnouncement**](AnnouncementsApi.md#scheduleAnnouncement) | **POST** /v3/announcements | Schedule an announcement
[**updateAnnouncementById**](AnnouncementsApi.md#updateAnnouncementById) | **PUT** /v3/announcements/{unique_id} | Update an announcement
[**viewAnnouncementById**](AnnouncementsApi.md#viewAnnouncementById) | **GET** /v3/announcements/{unique_id} | View an announcement



## getDetailedOpenRateOfAnnouncementById

> InlineResponse20042 getDetailedOpenRateOfAnnouncementById(uniqueId, opts)

Get detailed open rate of an announcement

## Get detailed open rate of an announcement  Retrieves the detailed open rate information of an announcement.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-get-detailed-open-rate-of-an-announcement ----------------------------   &#x60;unique_id&#x60;      Type: string      Description: Specifies the unique ID of the announcement to get its open rate.

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.AnnouncementsApi();
let uniqueId = "uniqueId_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}} // String | 
};
apiInstance.getDetailedOpenRateOfAnnouncementById(uniqueId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uniqueId** | **String**|  | 
 **apiToken** | **String**|  | [optional] 

### Return type

[**InlineResponse20042**](InlineResponse20042.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getDetailedOpenRateOfAnnouncementGroup

> InlineResponse20046 getDetailedOpenRateOfAnnouncementGroup(announcementGroup, opts)

Get detailed open rate of an announcement group

## Get detailed open rate of an announcement group  Retrieves the detailed open rate information of an announcement group.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-get-detailed-open-rate-of-an-announcement-group ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.AnnouncementsApi();
let announcementGroup = "announcementGroup_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}} // String | 
};
apiInstance.getDetailedOpenRateOfAnnouncementGroup(announcementGroup, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **announcementGroup** | **String**|  | 
 **apiToken** | **String**|  | [optional] 

### Return type

[**InlineResponse20046**](InlineResponse20046.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getDetailedOpenStatusOfAnnouncementById

> InlineResponse20043 getDetailedOpenStatusOfAnnouncementById(uniqueId, opts)

Get detailed open status of an announcement

## Get detailed open status of an announcement  Retrieves the detailed open status information of a specific announcement.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-get-detailed-open-status-of-an-announcement ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.AnnouncementsApi();
let uniqueId = "uniqueId_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'limit': 56, // Number | 
  'next': "next_example", // String | 
  'uniqueIds': ["null"], // [String] | 
  'channelUrls': ["null"], // [String] | 
  'hasOpened': true // Boolean | 
};
apiInstance.getDetailedOpenStatusOfAnnouncementById(uniqueId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uniqueId** | **String**|  | 
 **apiToken** | **String**|  | [optional] 
 **limit** | **Number**|  | [optional] 
 **next** | **String**|  | [optional] 
 **uniqueIds** | [**[String]**](String.md)|  | [optional] 
 **channelUrls** | [**[String]**](String.md)|  | [optional] 
 **hasOpened** | **Boolean**|  | [optional] 

### Return type

[**InlineResponse20043**](InlineResponse20043.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getStatistics

> InlineResponse20044 getStatistics(opts)

Get statistics - weekly

## Get statistics  Retrieves the daily, weekly or monthly statistics of an announcement or an announcement group.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-get-statistics ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.AnnouncementsApi();
let opts = {
  'apiToken': {{API_TOKEN}} // String | 
};
apiInstance.getStatistics(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | **String**|  | [optional] 

### Return type

[**InlineResponse20044**](InlineResponse20044.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getStatisticsDaily

> InlineResponse20044 getStatisticsDaily(startDate, endDate, startWeek, endWeek, startMonth, endMonth, opts)

Get statistics - daily

## Get statistics  Retrieves the daily, weekly or monthly statistics of an announcement or an announcement group.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-get-statistics ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.AnnouncementsApi();
let startDate = "startDate_example"; // String | 
let endDate = "endDate_example"; // String | 
let startWeek = "startWeek_example"; // String | 
let endWeek = "endWeek_example"; // String | 
let startMonth = "startMonth_example"; // String | 
let endMonth = "endMonth_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'announcementGroup': "announcementGroup_example" // String | 
};
apiInstance.getStatisticsDaily(startDate, endDate, startWeek, endWeek, startMonth, endMonth, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startDate** | **String**|  | 
 **endDate** | **String**|  | 
 **startWeek** | **String**|  | 
 **endWeek** | **String**|  | 
 **startMonth** | **String**|  | 
 **endMonth** | **String**|  | 
 **apiToken** | **String**|  | [optional] 
 **announcementGroup** | **String**|  | [optional] 

### Return type

[**InlineResponse20044**](InlineResponse20044.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getStatisticsMonthly

> InlineResponse20044 getStatisticsMonthly(opts)

Get statistics - monthly

## Get statistics  Retrieves the daily, weekly or monthly statistics of an announcement or an announcement group.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-get-statistics ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.AnnouncementsApi();
let opts = {
  'apiToken': {{API_TOKEN}} // String | 
};
apiInstance.getStatisticsMonthly(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | **String**|  | [optional] 

### Return type

[**InlineResponse20044**](InlineResponse20044.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listAnnouncementGroups

> InlineResponse20045 listAnnouncementGroups(opts)

List announcement groups

## List announcement groups  Retrieves a list of announcement groups.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-list-announcement-groups ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.AnnouncementsApi();
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'token': "token_example", // String | 
  'limit': 56 // Number | 
};
apiInstance.listAnnouncementGroups(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | **String**|  | [optional] 
 **token** | **String**|  | [optional] 
 **limit** | **Number**|  | [optional] 

### Return type

[**InlineResponse20045**](InlineResponse20045.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listAnnouncements

> InlineResponse20039 listAnnouncements(opts)

List announcements

## List announcements  Retrieves a list of announcements.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-list-announcements ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.AnnouncementsApi();
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'token': "token_example", // String | 
  'limit': 56, // Number | 
  'order': "order_example", // String | 
  'status': "status_example", // String | 
  'announcementGroup': "announcementGroup_example" // String | 
};
apiInstance.listAnnouncements(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | **String**|  | [optional] 
 **token** | **String**|  | [optional] 
 **limit** | **Number**|  | [optional] 
 **order** | **String**|  | [optional] 
 **status** | **String**|  | [optional] 
 **announcementGroup** | **String**|  | [optional] 

### Return type

[**InlineResponse20039**](InlineResponse20039.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## scheduleAnnouncement

> InlineResponse20040 scheduleAnnouncement(opts)

Schedule an announcement

## Schedule an announcement  Schedules a new announcement. You can also schedule an announcement in the [Sendbird Dashboard](https://dashboard.sendbird.com).  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-schedule-an-announcement

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.AnnouncementsApi();
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'scheduleAnnouncementData': new SendbirdPlatformSdk.ScheduleAnnouncementData() // ScheduleAnnouncementData | 
};
apiInstance.scheduleAnnouncement(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | **String**|  | [optional] 
 **scheduleAnnouncementData** | [**ScheduleAnnouncementData**](ScheduleAnnouncementData.md)|  | [optional] 

### Return type

[**InlineResponse20040**](InlineResponse20040.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateAnnouncementById

> InlineResponse20041 updateAnnouncementById(uniqueId, opts)

Update an announcement

## Update an announcement  Updates information of a specific announcement before it starts or changes the status of a specific announcement after it starts. For the 2 different applications, refer to the request body below.  &gt;__Note__: Updating information of an announcement is possible only when the announcement status is scheduled, indicating it hasn&#39;t started yet.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-update-an-announcement ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.AnnouncementsApi();
let uniqueId = "uniqueId_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'updateAnnouncementByIdData': new SendbirdPlatformSdk.UpdateAnnouncementByIdData() // UpdateAnnouncementByIdData | 
};
apiInstance.updateAnnouncementById(uniqueId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uniqueId** | **String**|  | 
 **apiToken** | **String**|  | [optional] 
 **updateAnnouncementByIdData** | [**UpdateAnnouncementByIdData**](UpdateAnnouncementByIdData.md)|  | [optional] 

### Return type

[**InlineResponse20041**](InlineResponse20041.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## viewAnnouncementById

> InlineResponse20039Announcements viewAnnouncementById(uniqueId, opts)

View an announcement

## View an announcement  Retrieves information on a specific announcement.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-view-an-announcement ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.AnnouncementsApi();
let uniqueId = "uniqueId_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}} // String | 
};
apiInstance.viewAnnouncementById(uniqueId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uniqueId** | **String**|  | 
 **apiToken** | **String**|  | [optional] 

### Return type

[**InlineResponse20039Announcements**](InlineResponse20039Announcements.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

