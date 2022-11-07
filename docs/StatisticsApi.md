# SendbirdPlatformSdk.StatisticsApi

All URIs are relative to *https://api-APP_ID.sendbird.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getDetailedOpenRateOfAnnouncementById**](StatisticsApi.md#getDetailedOpenRateOfAnnouncementById) | **GET** /v3/announcement_open_rate/{unique_id} | Get detailed open rate of an announcement
[**getDetailedOpenStatusOfAnnouncementById**](StatisticsApi.md#getDetailedOpenStatusOfAnnouncementById) | **GET** /v3/announcement_open_status/{unique_id} | Get detailed open status of an announcement
[**retrieveAdvancedAnalyticsMetrics**](StatisticsApi.md#retrieveAdvancedAnalyticsMetrics) | **GET** /v3/statistics/metric | Retrieve Advanced analytics metrics
[**viewNumberOfConcurrentConnections**](StatisticsApi.md#viewNumberOfConcurrentConnections) | **GET** /v3/applications/ccu | View number of concurrent connections
[**viewNumberOfDailyActiveUsers**](StatisticsApi.md#viewNumberOfDailyActiveUsers) | **GET** /v3/applications/dau | View number of daily active users
[**viewNumberOfMonthlyActiveUsers**](StatisticsApi.md#viewNumberOfMonthlyActiveUsers) | **GET** /v3/applications/mau | View number of monthly active users
[**viewNumberOfPeakConnections**](StatisticsApi.md#viewNumberOfPeakConnections) | **GET** /v3/applications/peak_connections | View number of peak connections



## getDetailedOpenRateOfAnnouncementById

> GetDetailedOpenRateOfAnnouncementByIdResponse getDetailedOpenRateOfAnnouncementById(apiToken, uniqueId)

Get detailed open rate of an announcement

## Get detailed open rate of an announcement  Retrieves the detailed open rate information of an announcement.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-get-detailed-open-rate-of-an-announcement ----------------------------   &#x60;unique_id&#x60;      Type: string      Description: Specifies the unique ID of the announcement to get its open rate.

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.StatisticsApi();
let apiToken = {{API_TOKEN}}; // String | 
let uniqueId = "uniqueId_example"; // String | 
apiInstance.getDetailedOpenRateOfAnnouncementById(apiToken, uniqueId).then((data) => {
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

[**GetDetailedOpenRateOfAnnouncementByIdResponse**](GetDetailedOpenRateOfAnnouncementByIdResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getDetailedOpenStatusOfAnnouncementById

> GetDetailedOpenStatusOfAnnouncementByIdResponse getDetailedOpenStatusOfAnnouncementById(apiToken, uniqueId, opts)

Get detailed open status of an announcement

## Get detailed open status of an announcement  Retrieves the detailed open status information of a specific announcement.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-get-detailed-open-status-of-an-announcement ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.StatisticsApi();
let apiToken = {{API_TOKEN}}; // String | 
let uniqueId = "uniqueId_example"; // String | 
let opts = {
  'limit': 56, // Number | 
  'next': "next_example", // String | 
  'uniqueIds': ["null"], // [String] | 
  'channelUrls': ["null"], // [String] | 
  'hasOpened': true // Boolean | 
};
apiInstance.getDetailedOpenStatusOfAnnouncementById(apiToken, uniqueId, opts).then((data) => {
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
 **limit** | **Number**|  | [optional] 
 **next** | **String**|  | [optional] 
 **uniqueIds** | [**[String]**](String.md)|  | [optional] 
 **channelUrls** | [**[String]**](String.md)|  | [optional] 
 **hasOpened** | **Boolean**|  | [optional] 

### Return type

[**GetDetailedOpenStatusOfAnnouncementByIdResponse**](GetDetailedOpenStatusOfAnnouncementByIdResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## retrieveAdvancedAnalyticsMetrics

> RetrieveAdvancedAnalyticsMetricsResponse retrieveAdvancedAnalyticsMetrics(apiToken)

Retrieve Advanced analytics metrics

## Retrieve Advanced analytics metrics  Retrieves Advanced analytics metrics based on the specified parameters. You can retrieve either daily or monthly metrics using the time_dimension parameter.  &gt;__Note__: Daily metrics are calculated and updated every three hours, starting at 1 a.m. in UTC. Meanwhile, monthly metrics are calculated after the last day of the month.  https://sendbird.com/docs/chat/v3/platform-api/guides/advanced-analytics#2-retrieve-advanced-analytics-metrics ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.StatisticsApi();
let apiToken = {{API_TOKEN}}; // String | 
apiInstance.retrieveAdvancedAnalyticsMetrics(apiToken).then((data) => {
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

[**RetrieveAdvancedAnalyticsMetricsResponse**](RetrieveAdvancedAnalyticsMetricsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## viewNumberOfConcurrentConnections

> ViewNumberOfConcurrentConnectionsResponse viewNumberOfConcurrentConnections(apiToken)

View number of concurrent connections

## View number of concurrent connections  Retrieves the number of devices and opened browser tabs which are currently connected to Sendbird server.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-view-number-of-concurrent-connections

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.StatisticsApi();
let apiToken = {{API_TOKEN}}; // String | 
apiInstance.viewNumberOfConcurrentConnections(apiToken).then((data) => {
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

[**ViewNumberOfConcurrentConnectionsResponse**](ViewNumberOfConcurrentConnectionsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## viewNumberOfDailyActiveUsers

> ViewNumberOfDailyActiveUsersResponse viewNumberOfDailyActiveUsers(apiToken, opts)

View number of daily active users

## View number of daily active users  Retrieves the number of daily active users of the application (DAU).  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-view-number-of-daily-active-users ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.StatisticsApi();
let apiToken = {{API_TOKEN}}; // String | 
let opts = {
  'date': "date_example" // String | 
};
apiInstance.viewNumberOfDailyActiveUsers(apiToken, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | **String**|  | 
 **date** | **String**|  | [optional] 

### Return type

[**ViewNumberOfDailyActiveUsersResponse**](ViewNumberOfDailyActiveUsersResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## viewNumberOfMonthlyActiveUsers

> ViewNumberOfMonthlyActiveUsersResponse viewNumberOfMonthlyActiveUsers(apiToken, opts)

View number of monthly active users

## View number of monthly active users  Retrieves the number of monthly active users of the application (MAU).  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-view-number-of-monthly-active-users ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.StatisticsApi();
let apiToken = {{API_TOKEN}}; // String | 
let opts = {
  'date': "date_example" // String | 
};
apiInstance.viewNumberOfMonthlyActiveUsers(apiToken, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | **String**|  | 
 **date** | **String**|  | [optional] 

### Return type

[**ViewNumberOfMonthlyActiveUsersResponse**](ViewNumberOfMonthlyActiveUsersResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## viewNumberOfPeakConnections

> ViewNumberOfPeakConnectionsResponse viewNumberOfPeakConnections(apiToken, timeDimension, startYear, startMonth, endYear, endMonth, opts)

View number of peak connections

## View number of peak connections  Retrieves the number of concurrently connected devices to Sendbird server during the requested time period.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-view-number-of-peak-connections ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.StatisticsApi();
let apiToken = {{API_TOKEN}}; // String | 
let timeDimension = "timeDimension_example"; // String | 
let startYear = 56; // Number | 
let startMonth = 56; // Number | 
let endYear = 56; // Number | 
let endMonth = 56; // Number | 
let opts = {
  'startDay': 56, // Number | 
  'endDay': 56 // Number | 
};
apiInstance.viewNumberOfPeakConnections(apiToken, timeDimension, startYear, startMonth, endYear, endMonth, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | **String**|  | 
 **timeDimension** | **String**|  | 
 **startYear** | **Number**|  | 
 **startMonth** | **Number**|  | 
 **endYear** | **Number**|  | 
 **endMonth** | **Number**|  | 
 **startDay** | **Number**|  | [optional] 
 **endDay** | **Number**|  | [optional] 

### Return type

[**ViewNumberOfPeakConnectionsResponse**](ViewNumberOfPeakConnectionsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

