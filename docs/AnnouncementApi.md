# SendbirdPlatformSdk.AnnouncementApi

All URIs are relative to *https://api-APP_ID.sendbird.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getDetailedOpenRateOfAnnouncementById**](AnnouncementApi.md#getDetailedOpenRateOfAnnouncementById) | **GET** /v3/announcement_open_rate/{unique_id} | Get detailed open rate of an announcement
[**getDetailedOpenRateOfAnnouncementGroup**](AnnouncementApi.md#getDetailedOpenRateOfAnnouncementGroup) | **GET** /v3/announcement_open_rate_by_group/{announcement_group} | Get detailed open rate of an announcement group
[**getDetailedOpenStatusOfAnnouncementById**](AnnouncementApi.md#getDetailedOpenStatusOfAnnouncementById) | **GET** /v3/announcement_open_status/{unique_id} | Get detailed open status of an announcement
[**viewAnnouncementById**](AnnouncementApi.md#viewAnnouncementById) | **GET** /v3/announcements/{unique_id} | View an announcement



## getDetailedOpenRateOfAnnouncementById

> GetDetailedOpenRateOfAnnouncementByIdResponse getDetailedOpenRateOfAnnouncementById(apiToken, uniqueId)

Get detailed open rate of an announcement

## Get detailed open rate of an announcement  Retrieves the detailed open rate information of an announcement.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-get-detailed-open-rate-of-an-announcement ----------------------------   &#x60;unique_id&#x60;      Type: string      Description: Specifies the unique ID of the announcement to get its open rate.

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.AnnouncementApi();
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


## getDetailedOpenStatusOfAnnouncementById

> GetDetailedOpenStatusOfAnnouncementByIdResponse getDetailedOpenStatusOfAnnouncementById(apiToken, uniqueId, opts)

Get detailed open status of an announcement

## Get detailed open status of an announcement  Retrieves the detailed open status information of a specific announcement.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-get-detailed-open-status-of-an-announcement ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.AnnouncementApi();
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

