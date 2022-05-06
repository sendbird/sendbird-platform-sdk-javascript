# SendbirdPlatformSdk.DataExportApi

All URIs are relative to *https://api-APP_ID.sendbird.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listDataExportsByMessageChannelOrUser**](DataExportApi.md#listDataExportsByMessageChannelOrUser) | **GET** /v3/export/{data_type} | List data exports by message, channel, or user
[**registerAndScheduleDataExport**](DataExportApi.md#registerAndScheduleDataExport) | **POST** /v3/export/{data_type} | Register and schedule a data export
[**viewDataExportById**](DataExportApi.md#viewDataExportById) | **GET** /v3/export/{data_type}/{request_id} | View a data export



## listDataExportsByMessageChannelOrUser

> ListDataExportsByMessageChannelOrUserResponse listDataExportsByMessageChannelOrUser(apiToken, dataType, opts)

List data exports by message, channel, or user

## List data exports by message, channel, or user  Retrieves a list of message, channel or user data exports  https://sendbird.com/docs/chat/v3/platform-api/guides/data-export#2-list-data-exports-by-message,-channel,-or-user ----------------------------   &#x60;data_type&#x60;      Type: string      Description: Specifies the type of a data export to retrieve. Acceptable values are messages, channels, users, and failed_webhooks.

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.DataExportApi();
let apiToken = {{API_TOKEN}}; // String | 
let dataType = "dataType_example"; // String | 
let opts = {
  'token': "token_example", // String | 
  'limit': 56 // Number | 
};
apiInstance.listDataExportsByMessageChannelOrUser(apiToken, dataType, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | **String**|  | 
 **dataType** | **String**|  | 
 **token** | **String**|  | [optional] 
 **limit** | **Number**|  | [optional] 

### Return type

[**ListDataExportsByMessageChannelOrUserResponse**](ListDataExportsByMessageChannelOrUserResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## registerAndScheduleDataExport

> RegisterAndScheduleDataExportResponse registerAndScheduleDataExport(apiToken, dataType, opts)

Register and schedule a data export

## Register and schedule a data export  Registers and schedules a message, channel, or user data export.  https://sendbird.com/docs/chat/v3/platform-api/guides/data-export#2-register-and-schedule-a-data-export ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.DataExportApi();
let apiToken = {{API_TOKEN}}; // String | 
let dataType = "dataType_example"; // String | 
let opts = {
  'registerAndScheduleDataExportData': new SendbirdPlatformSdk.RegisterAndScheduleDataExportData() // RegisterAndScheduleDataExportData | 
};
apiInstance.registerAndScheduleDataExport(apiToken, dataType, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | **String**|  | 
 **dataType** | **String**|  | 
 **registerAndScheduleDataExportData** | [**RegisterAndScheduleDataExportData**](RegisterAndScheduleDataExportData.md)|  | [optional] 

### Return type

[**RegisterAndScheduleDataExportResponse**](RegisterAndScheduleDataExportResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## viewDataExportById

> ViewDataExportByIdResponse viewDataExportById(apiToken, dataType, requestId)

View a data export

## View a data export  Retrieves information on a message, channel or user data export.  https://sendbird.com/docs/chat/v3/platform-api/guides/data-export#2-view-a-data-export ----------------------------   &#x60;data_type&#x60;      Type: string      Description: Specifies the type of a targeted data export. Acceptable values are messages, channels,  users, and failed_webhooks.  &#x60;request_id&#x60;      Type: string      Description: Specifies the unique ID of a data export to retrieve.

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.DataExportApi();
let apiToken = {{API_TOKEN}}; // String | 
let dataType = "dataType_example"; // String | 
let requestId = "requestId_example"; // String | 
apiInstance.viewDataExportById(apiToken, dataType, requestId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | **String**|  | 
 **dataType** | **String**|  | 
 **requestId** | **String**|  | 

### Return type

[**ViewDataExportByIdResponse**](ViewDataExportByIdResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

