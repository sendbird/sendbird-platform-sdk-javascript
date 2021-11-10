# SendbirdPlatformSdk.OrganizationAPIApi

All URIs are relative to *https://api-.sendbird.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createApplication**](OrganizationAPIApi.md#createApplication) | **POST** /api/v2/applications | Create an application
[**deleteApplicationById**](OrganizationAPIApi.md#deleteApplicationById) | **DELETE** /api/v2/applications/{app_id} | Delete an application
[**listApplications**](OrganizationAPIApi.md#listApplications) | **GET** /api/v2/applications | List applications
[**viewApplicationById**](OrganizationAPIApi.md#viewApplicationById) | **GET** /api/v2/applications/{app_id} | View an application



## createApplication

> createApplication(opts)

Create an application

## Create an application  Creates a new application under your organization.  https://sendbird.com/docs/chat/v3/platform-api/guides/organization-api#2-create-an-application

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.OrganizationAPIApi();
let opts = {
  'SENDBIRDORGANIZATIONAPITOKEN': {{ORG_API_TOKEN}}, // String | 
  'body': null // Object | 
};
apiInstance.createApplication(opts, (error, data, response) => {
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
 **SENDBIRDORGANIZATIONAPITOKEN** | **String**|  | [optional] 
 **body** | **Object**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteApplicationById

> deleteApplicationById(appId, opts)

Delete an application

## Delete an application  Deletes the specified application.  https://sendbird.com/docs/chat/v3/platform-api/guides/organization-api#2-delete-an-application ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.OrganizationAPIApi();
let appId = "appId_example"; // String | 
let opts = {
  'SENDBIRDORGANIZATIONAPITOKEN': {{ORG_API_TOKEN}} // String | 
};
apiInstance.deleteApplicationById(appId, opts, (error, data, response) => {
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
 **appId** | **String**|  | 
 **SENDBIRDORGANIZATIONAPITOKEN** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listApplications

> listApplications(opts)

List applications

## List applications  Retrieves a list of applications of your organization.  https://sendbird.com/docs/chat/v3/platform-api/guides/organization-api#2-list-applications ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.OrganizationAPIApi();
let opts = {
  'SENDBIRDORGANIZATIONAPITOKEN': {{ORG_API_TOKEN}} // String | 
};
apiInstance.listApplications(opts, (error, data, response) => {
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
 **SENDBIRDORGANIZATIONAPITOKEN** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## viewApplicationById

> viewApplicationById(appId, opts)

View an application

## View an application  Retrieves information about an application with a specified application ID.  https://sendbird.com/docs/chat/v3/platform-api/guides/organization-api#2-view-an-application ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.OrganizationAPIApi();
let appId = "appId_example"; // String | 
let opts = {
  'SENDBIRDORGANIZATIONAPITOKEN': {{ORG_API_TOKEN}} // String | 
};
apiInstance.viewApplicationById(appId, opts, (error, data, response) => {
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
 **appId** | **String**|  | 
 **SENDBIRDORGANIZATIONAPITOKEN** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

