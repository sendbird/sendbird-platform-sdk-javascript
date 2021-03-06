# SendbirdPlatformSdk.PrivacyApi

All URIs are relative to *https://api-APP_ID.sendbird.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelTheRegistrationOfGdprRequestById**](PrivacyApi.md#cancelTheRegistrationOfGdprRequestById) | **DELETE** /v3/privacy/gdpr/{request_id} | Cancel the registration of a GDPR request
[**listGdprRequests**](PrivacyApi.md#listGdprRequests) | **GET** /v3/privacy/gdpr | List GDPR requests
[**registerGdprRequest**](PrivacyApi.md#registerGdprRequest) | **POST** /v3/privacy/gdpr | Register a GDPR request
[**viewGdprRequestById**](PrivacyApi.md#viewGdprRequestById) | **GET** /v3/privacy/gdpr/{request_id} | View a GDPR request



## cancelTheRegistrationOfGdprRequestById

> cancelTheRegistrationOfGdprRequestById(apiToken, requestId)

Cancel the registration of a GDPR request

## Cancel the registration of a GDPR request  Cancels the registration of a specific GDPR request.  https://sendbird.com/docs/chat/v3/platform-api/guides/data-privacy#2-cancel-the-registration-of-a-gdpr-request ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.PrivacyApi();
let apiToken = {{API_TOKEN}}; // String | 
let requestId = "requestId_example"; // String | 
apiInstance.cancelTheRegistrationOfGdprRequestById(apiToken, requestId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | **String**|  | 
 **requestId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## listGdprRequests

> ListGdprRequestsResponse listGdprRequests(apiToken, opts)

List GDPR requests

## List GDPR requests  Retrieves a list of GDPR requests of all types.  https://sendbird.com/docs/chat/v3/platform-api/guides/data-privacy#2-list-gdpr-requests ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.PrivacyApi();
let apiToken = {{API_TOKEN}}; // String | 
let opts = {
  'token': "token_example", // String | 
  'limit': 56 // Number | 
};
apiInstance.listGdprRequests(apiToken, opts).then((data) => {
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

[**ListGdprRequestsResponse**](ListGdprRequestsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## registerGdprRequest

> RegisterGdprRequestResponse registerGdprRequest(apiToken, opts)

Register a GDPR request

## Register a GDPR request  Registers a specific type of GDPR request to meet the GDPR&#39;s requirements.  &gt; __Note__: Currently, only delete and access of the user data are supported. The features for the [right to restriction of processing](https://gdpr-info.eu/art-18-gdpr/) and [right to object](https://gdpr-info.eu/art-21-gdpr/) will be available soon.  https://sendbird.com/docs/chat/v3/platform-api/guides/data-privacy#2-register-a-gdpr-request

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.PrivacyApi();
let apiToken = {{API_TOKEN}}; // String | 
let opts = {
  'registerGdprRequestData': new SendbirdPlatformSdk.RegisterGdprRequestData() // RegisterGdprRequestData | 
};
apiInstance.registerGdprRequest(apiToken, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | **String**|  | 
 **registerGdprRequestData** | [**RegisterGdprRequestData**](RegisterGdprRequestData.md)|  | [optional] 

### Return type

[**RegisterGdprRequestResponse**](RegisterGdprRequestResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## viewGdprRequestById

> ViewGdprRequestByIdResponse viewGdprRequestById(apiToken, requestId)

View a GDPR request

## View a GDPR request  Retrieves a specific GDPR request.  https://sendbird.com/docs/chat/v3/platform-api/guides/data-privacy#2-view-a-gdpr-request ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.PrivacyApi();
let apiToken = {{API_TOKEN}}; // String | 
let requestId = "requestId_example"; // String | 
apiInstance.viewGdprRequestById(apiToken, requestId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | **String**|  | 
 **requestId** | **String**|  | 

### Return type

[**ViewGdprRequestByIdResponse**](ViewGdprRequestByIdResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

