# SendbirdPlatformSdk.DataPrivacyApi

All URIs are relative to *https://api-.sendbird.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelTheRegistrationOfGdprRequestById**](DataPrivacyApi.md#cancelTheRegistrationOfGdprRequestById) | **DELETE** /v3/privacy/gdpr/{request_id} | Cancel the registration of a GDPR request
[**listGdprRequests**](DataPrivacyApi.md#listGdprRequests) | **GET** /v3/privacy/gdpr | List GDPR requests
[**registerGdprRequest**](DataPrivacyApi.md#registerGdprRequest) | **POST** /v3/privacy/gdpr | Register a GDPR request
[**viewGdprRequestById**](DataPrivacyApi.md#viewGdprRequestById) | **GET** /v3/privacy/gdpr/{request_id} | View a GDPR request



## cancelTheRegistrationOfGdprRequestById

> cancelTheRegistrationOfGdprRequestById(requestId, opts)

Cancel the registration of a GDPR request

## Cancel the registration of a GDPR request  Cancels the registration of a specific GDPR request.  https://sendbird.com/docs/chat/v3/platform-api/guides/data-privacy#2-cancel-the-registration-of-a-gdpr-request ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.DataPrivacyApi();
let requestId = "requestId_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}} // String | 
};
apiInstance.cancelTheRegistrationOfGdprRequestById(requestId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestId** | **String**|  | 
 **apiToken** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listGdprRequests

> listGdprRequests(opts)

List GDPR requests

## List GDPR requests  Retrieves a list of GDPR requests of all types.  https://sendbird.com/docs/chat/v3/platform-api/guides/data-privacy#2-list-gdpr-requests ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.DataPrivacyApi();
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'token': "token_example", // String | 
  'limit': 56 // Number | 
};
apiInstance.listGdprRequests(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | **String**|  | [optional] 
 **token** | **String**|  | [optional] 
 **limit** | **Number**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## registerGdprRequest

> registerGdprRequest(opts)

Register a GDPR request

## Register a GDPR request  Registers a specific type of GDPR request to meet the GDPR&#39;s requirements.  &gt; __Note__: Currently, only delete and access of the user data are supported. The features for the [right to restriction of processing](https://gdpr-info.eu/art-18-gdpr/) and [right to object](https://gdpr-info.eu/art-21-gdpr/) will be available soon.  https://sendbird.com/docs/chat/v3/platform-api/guides/data-privacy#2-register-a-gdpr-request

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.DataPrivacyApi();
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'registerGdprRequestData': new SendbirdPlatformSdk.RegisterGdprRequestData() // RegisterGdprRequestData | 
};
apiInstance.registerGdprRequest(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | **String**|  | [optional] 
 **registerGdprRequestData** | [**RegisterGdprRequestData**](RegisterGdprRequestData.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## viewGdprRequestById

> viewGdprRequestById(requestId, opts)

View a GDPR request

## View a GDPR request  Retrieves a specific GDPR request.  https://sendbird.com/docs/chat/v3/platform-api/guides/data-privacy#2-view-a-gdpr-request ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.DataPrivacyApi();
let requestId = "requestId_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}} // String | 
};
apiInstance.viewGdprRequestById(requestId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestId** | **String**|  | 
 **apiToken** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

