# SendbirdPlatformSdk.DataExportApi

All URIs are relative to *https://api-APP_ID.sendbird.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listDataExportsByMessageChannelOrUser**](DataExportApi.md#listDataExportsByMessageChannelOrUser) | **GET** /v3/export/{data_type} | List data exports by message, channel, or user
[**registerAndScheduleDataExport**](DataExportApi.md#registerAndScheduleDataExport) | **POST** /v3/export/{data_type} | Register and schedule a data export
[**viewDataExportById**](DataExportApi.md#viewDataExportById) | **GET** /v3/export/{data_type}/{request_id} | View a data export



## listDataExportsByMessageChannelOrUser

> InlineResponse20063 listDataExportsByMessageChannelOrUser(dataType, opts)

List data exports by message, channel, or user

## List data exports by message, channel, or user  Retrieves a list of message, channel or user data exports  https://sendbird.com/docs/chat/v3/platform-api/guides/data-export#2-list-data-exports-by-message,-channel,-or-user ----------------------------   &#x60;data_type&#x60;      Type: string      Description: Specifies the type of a data export to retrieve. Acceptable values are messages, channels, users, and failed_webhooks.

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.DataExportApi();
let dataType = "dataType_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'token': "token_example", // String | 
  'limit': 56 // Number | 
};
apiInstance.listDataExportsByMessageChannelOrUser(dataType, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dataType** | **String**|  | 
 **apiToken** | **String**|  | [optional] 
 **token** | **String**|  | [optional] 
 **limit** | **Number**|  | [optional] 

### Return type

[**InlineResponse20063**](InlineResponse20063.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## registerAndScheduleDataExport

> InlineResponse20063ExportedData registerAndScheduleDataExport(dataType, opts)

Register and schedule a data export

## Register and schedule a data export  Registers and schedules a message, channel, or user data export.  https://sendbird.com/docs/chat/v3/platform-api/guides/data-export#2-register-and-schedule-a-data-export ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.DataExportApi();
let dataType = "dataType_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'registerAndScheduleDataExportData': new SendbirdPlatformSdk.RegisterAndScheduleDataExportData() // RegisterAndScheduleDataExportData | 
};
apiInstance.registerAndScheduleDataExport(dataType, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dataType** | **String**|  | 
 **apiToken** | **String**|  | [optional] 
 **registerAndScheduleDataExportData** | [**RegisterAndScheduleDataExportData**](RegisterAndScheduleDataExportData.md)|  | [optional] 

### Return type

[**InlineResponse20063ExportedData**](InlineResponse20063ExportedData.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## viewDataExportById

> InlineResponse20064 viewDataExportById(dataType, requestId, opts)

View a data export

## View a data export  Retrieves information on a message, channel or user data export.  https://sendbird.com/docs/chat/v3/platform-api/guides/data-export#2-view-a-data-export ----------------------------   &#x60;data_type&#x60;      Type: string      Description: Specifies the type of a targeted data export. Acceptable values are messages, channels,  users, and failed_webhooks.  &#x60;request_id&#x60;      Type: string      Description: Specifies the unique ID of a data export to retrieve.

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.DataExportApi();
let dataType = "dataType_example"; // String | 
let requestId = "requestId_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}} // String | 
};
apiInstance.viewDataExportById(dataType, requestId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dataType** | **String**|  | 
 **requestId** | **String**|  | 
 **apiToken** | **String**|  | [optional] 

### Return type

[**InlineResponse20064**](InlineResponse20064.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

