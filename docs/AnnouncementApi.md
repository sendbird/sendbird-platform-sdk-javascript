# SendbirdPlatformSdk.AnnouncementApi

All URIs are relative to *https://api-APP_ID.sendbird.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getDetailedOpenRateOfAnnouncementGroup**](AnnouncementApi.md#getDetailedOpenRateOfAnnouncementGroup) | **GET** /v3/announcement_open_rate_by_group/{announcement_group} | Get detailed open rate of an announcement group
[**getStatistics**](AnnouncementApi.md#getStatistics) | **GET** /v3/announcement_stats/weekly | Get statistics - weekly
[**getStatisticsDaily**](AnnouncementApi.md#getStatisticsDaily) | **GET** /v3/announcement_stats/daily | Get statistics - daily
[**getStatisticsMonthly**](AnnouncementApi.md#getStatisticsMonthly) | **GET** /v3/announcement_stats/monthly | Get statistics - monthly
[**listAnnouncementGroups**](AnnouncementApi.md#listAnnouncementGroups) | **GET** /v3/announcement_group | List announcement groups
[**scheduleAnnouncement**](AnnouncementApi.md#scheduleAnnouncement) | **POST** /v3/announcements | Schedule an announcement
[**updateAnnouncementById**](AnnouncementApi.md#updateAnnouncementById) | **PUT** /v3/announcements/{unique_id} | Update an announcement
[**viewAnnouncementById**](AnnouncementApi.md#viewAnnouncementById) | **GET** /v3/announcements/{unique_id} | View an announcement



## getDetailedOpenRateOfAnnouncementGroup

> GetDetailedOpenRateOfAnnouncementGroupResponse getDetailedOpenRateOfAnnouncementGroup(apiToken, announcementGroup)

Get detailed open rate of an announcement group

## Get detailed open rate of an announcement group  Retrieves the detailed open rate information of an announcement group.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-get-detailed-open-rate-of-an-announcement-group ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.AnnouncementApi();
let apiToken = {{API_TOKEN}}; // String | 
let announcementGroup = "announcementGroup_example"; // String | 
apiInstance.getDetailedOpenRateOfAnnouncementGroup(apiToken, announcementGroup).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | **String**|  | 
 **announcementGroup** | **String**|  | 

### Return type

[**GetDetailedOpenRateOfAnnouncementGroupResponse**](GetDetailedOpenRateOfAnnouncementGroupResponse.md)

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

let apiInstance = new SendbirdPlatformSdk.AnnouncementApi();
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

let apiInstance = new SendbirdPlatformSdk.AnnouncementApi();
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

let apiInstance = new SendbirdPlatformSdk.AnnouncementApi();
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


## listAnnouncementGroups

> ListAnnouncementGroupsResponse listAnnouncementGroups(apiToken, opts)

List announcement groups

## List announcement groups  Retrieves a list of announcement groups.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-list-announcement-groups ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.AnnouncementApi();
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


## scheduleAnnouncement

> ScheduleAnnouncementResponse scheduleAnnouncement(apiToken, opts)

Schedule an announcement

## Schedule an announcement  Schedules a new announcement. You can also schedule an announcement in the [Sendbird Dashboard](https://dashboard.sendbird.com).  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-schedule-an-announcement

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.AnnouncementApi();
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


## updateAnnouncementById

> UpdateAnnouncementByIdResponse updateAnnouncementById(apiToken, uniqueId, opts)

Update an announcement

## Update an announcement  Updates information of a specific announcement before it starts or changes the status of a specific announcement after it starts. For the 2 different applications, refer to the request body below.  &gt;__Note__: Updating information of an announcement is possible only when the announcement status is scheduled, indicating it hasn&#39;t started yet.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-update-an-announcement ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.AnnouncementApi();
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


## viewAnnouncementById

> ViewAnnouncementByIdResponse viewAnnouncementById(apiToken, uniqueId)

View an announcement

## View an announcement  Retrieves information on a specific announcement.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-view-an-announcement ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.AnnouncementApi();
let apiToken = {{API_TOKEN}}; // String | 
let uniqueId = "uniqueId_example"; // String | 
apiInstance.viewAnnouncementById(apiToken, uniqueId).then((data) => {
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

### Return type

[**ViewAnnouncementByIdResponse**](ViewAnnouncementByIdResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

