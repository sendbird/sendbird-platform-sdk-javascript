# SendbirdPlatformSdk.ApplicationApi

All URIs are relative to *https://api-APP_ID.sendbird.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addApnsPushConfiguration**](ApplicationApi.md#addApnsPushConfiguration) | **POST** /v3/applications/push/apns | Add an APNs push configuration
[**addFcmPushConfiguration**](ApplicationApi.md#addFcmPushConfiguration) | **POST** /v3/applications/push/fcm | Add a FCM push configuration
[**addHmsPushConfiguration**](ApplicationApi.md#addHmsPushConfiguration) | **POST** /v3/applications/push/hms | Add an HMS push configuration
[**addIpToWhitelist**](ApplicationApi.md#addIpToWhitelist) | **PUT** /v3/applications/settings/ip_whitelist | Add an IP to a whitelist
[**deleteAllowedIpsFromWhitelist**](ApplicationApi.md#deleteAllowedIpsFromWhitelist) | **DELETE** /v3/applications/settings/ip_whitelist | Delete allowed IPs from a whitelist
[**deleteApnsCertificateById**](ApplicationApi.md#deleteApnsCertificateById) | **DELETE** /v3/applications/push/apns/cert/{provider_id} | Delete an APNs certificate
[**generateSecondaryApiToken**](ApplicationApi.md#generateSecondaryApiToken) | **POST** /v3/applications/api_tokens | Generate a secondary API token
[**listPushConfigurations**](ApplicationApi.md#listPushConfigurations) | **GET** /v3/applications/push/{push_type} | List push configurations
[**listPushNotificationContentTemplates**](ApplicationApi.md#listPushNotificationContentTemplates) | **GET** /v3/applications/push/message_templates | List push notification content templates
[**listSecondaryApiTokens**](ApplicationApi.md#listSecondaryApiTokens) | **GET** /v3/applications/api_tokens | List secondary API tokens
[**removePushConfigurationById**](ApplicationApi.md#removePushConfigurationById) | **DELETE** /v3/applications/push/{push_type}/{provider_id} | Remove a push configuration
[**retrieveIpWhitelist**](ApplicationApi.md#retrieveIpWhitelist) | **GET** /v3/applications/settings/ip_whitelist | Retrieve an IP whitelist
[**revokeSecondaryApiTokenByToken**](ApplicationApi.md#revokeSecondaryApiTokenByToken) | **DELETE** /v3/applications/api_tokens/{api_token} | Revoke a secondary API token
[**updateApnsPushConfigurationById**](ApplicationApi.md#updateApnsPushConfigurationById) | **PUT** /v3/applications/push/apns/{provider_id} | Update an APNs push configuration
[**updateDefaultChannelInvitationPreference**](ApplicationApi.md#updateDefaultChannelInvitationPreference) | **PUT** /v3/applications/default_channel_invitation_preference | Update default channel invitation preference
[**updateFcmPushConfigurationById**](ApplicationApi.md#updateFcmPushConfigurationById) | **PUT** /v3/applications/push/fcm/{provider_id} | Update a FCM push configuration
[**updateHmsPushConfigurationById**](ApplicationApi.md#updateHmsPushConfigurationById) | **PUT** /v3/applications/push/hms/{provider_id} | Update an HMS push configuration
[**updatePushNotificationContentTemplate**](ApplicationApi.md#updatePushNotificationContentTemplate) | **PUT** /v3/applications/push/message_templates/{template_name} | Update a push notification content template
[**viewDefaultChannelInvitationPreference**](ApplicationApi.md#viewDefaultChannelInvitationPreference) | **GET** /v3/applications/default_channel_invitation_preference | View default channel invitation preference
[**viewNumberOfConcurrentConnections**](ApplicationApi.md#viewNumberOfConcurrentConnections) | **GET** /v3/applications/ccu | View number of concurrent connections
[**viewNumberOfDailyActiveUsers**](ApplicationApi.md#viewNumberOfDailyActiveUsers) | **GET** /v3/applications/dau | View number of daily active users
[**viewNumberOfMonthlyActiveUsers**](ApplicationApi.md#viewNumberOfMonthlyActiveUsers) | **GET** /v3/applications/mau | View number of monthly active users
[**viewNumberOfPeakConnections**](ApplicationApi.md#viewNumberOfPeakConnections) | **GET** /v3/applications/peak_connections | View number of peak connections
[**viewPushConfigurationById**](ApplicationApi.md#viewPushConfigurationById) | **GET** /v3/applications/push/{push_type}/{provider_id} | View a push configuration
[**viewPushNotificationContentTemplate**](ApplicationApi.md#viewPushNotificationContentTemplate) | **GET** /v3/applications/push/message_templates/{template_name} | View a push notification content template
[**viewSecondaryApiTokenByToken**](ApplicationApi.md#viewSecondaryApiTokenByToken) | **GET** /v3/applications/api_tokens/{api_token} | View a secondary API token



## addApnsPushConfiguration

> AddApnsPushConfigurationResponse addApnsPushConfiguration(opts)

Add an APNs push configuration

## Add an APNs push configuration  Registers an APNs (Apple Push Notification service) push configuration for your client app. To send push notifications to iOS devices, your should first register the APNs push configuration. You can also register the configurations in your [dashboard](https://dashboard.sendbird.com) under Settings &gt; Application &gt; Notifications.  &gt; __Note__: To upload a [.p12](https://sendbird.com/docs/chat/v3/ios/guides/push-notifications#2-step-3-export-a-p12-file-and-upload-to-sendbird-dashboard) certificate file to Sendbird server, you should send a [Multipart request](https://sendbird.com/docs/chat/v3/platform-api/getting-started/prepare-to-use-api#2-headers-3-multipart-requests).  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-add-an-apns-push-configuration

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.ApplicationApi();
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'addApnsPushConfigurationData': new SendbirdPlatformSdk.AddApnsPushConfigurationData() // AddApnsPushConfigurationData | 
};
apiInstance.addApnsPushConfiguration(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | **String**|  | [optional] 
 **addApnsPushConfigurationData** | [**AddApnsPushConfigurationData**](AddApnsPushConfigurationData.md)|  | [optional] 

### Return type

[**AddApnsPushConfigurationResponse**](AddApnsPushConfigurationResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## addFcmPushConfiguration

> AddFcmPushConfigurationResponse addFcmPushConfiguration(opts)

Add a FCM push configuration

## Add a FCM push configuration  Registers a FCM (Firebase Cloud Messaging) push configuration for your client app. To send push notifications to Android devices, you should first register the FCM push configuration. You can also register the configurations in your [dashboard](https://dashboard.sendbird.com) under Settings &gt; Application &gt; Notifications.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-add-a-fcm-push-configuration

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.ApplicationApi();
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'addFcmPushConfigurationData': new SendbirdPlatformSdk.AddFcmPushConfigurationData() // AddFcmPushConfigurationData | 
};
apiInstance.addFcmPushConfiguration(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | **String**|  | [optional] 
 **addFcmPushConfigurationData** | [**AddFcmPushConfigurationData**](AddFcmPushConfigurationData.md)|  | [optional] 

### Return type

[**AddFcmPushConfigurationResponse**](AddFcmPushConfigurationResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## addHmsPushConfiguration

> AddHmsPushConfigurationResponse addHmsPushConfiguration(opts)

Add an HMS push configuration

## Add an HMS push configuration  Registers an HMS (Huawei Mobile Services) push configuration for your client app. To send push notifications to Android devices for HMS, you should first register the HMS push configuration. You can also register the configurations in your [dashboard](https://dashboard.sendbird.com) under Settings &gt; Application &gt; Notifications.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-add-an-hms-push-configuration

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.ApplicationApi();
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'addHmsPushConfigurationData': new SendbirdPlatformSdk.AddHmsPushConfigurationData() // AddHmsPushConfigurationData | 
};
apiInstance.addHmsPushConfiguration(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | **String**|  | [optional] 
 **addHmsPushConfigurationData** | [**AddHmsPushConfigurationData**](AddHmsPushConfigurationData.md)|  | [optional] 

### Return type

[**AddHmsPushConfigurationResponse**](AddHmsPushConfigurationResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## addIpToWhitelist

> AddIpToWhitelistResponse addIpToWhitelist(opts)

Add an IP to a whitelist

## Add an IP to a whitelist  Adds IP addresses and ranges to your Sendbird application settings. Both currently added and any previously added IPs are granted API access. You can configure the IP whitelist under Settings &gt; Security &gt; Allowed IPs in the [Sendbird Dashboard](https://dashboard.sendbird.com).  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-add-an-ip-to-a-whitelist

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.ApplicationApi();
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'addIpToWhitelistData': new SendbirdPlatformSdk.AddIpToWhitelistData() // AddIpToWhitelistData | 
};
apiInstance.addIpToWhitelist(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | **String**|  | [optional] 
 **addIpToWhitelistData** | [**AddIpToWhitelistData**](AddIpToWhitelistData.md)|  | [optional] 

### Return type

[**AddIpToWhitelistResponse**](AddIpToWhitelistResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteAllowedIpsFromWhitelist

> DeleteAllowedIpsFromWhitelistResponse deleteAllowedIpsFromWhitelist(ipWhitelistAddresses, opts)

Delete allowed IPs from a whitelist

## Delete allowed IPs from a whitelist  Deletes allowed IPs from the whitelist by specifying their IP addresses or ranges. You can configure the IP whitelist under Settings &gt; Security &gt; Allowed IPs in the [Sendbird Dashboard](https://dashboard.sendbird.com).  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-delete-allowed-ips-from-a-whitelist

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.ApplicationApi();
let ipWhitelistAddresses = ["null"]; // [String] | 
let opts = {
  'apiToken': {{API_TOKEN}} // String | 
};
apiInstance.deleteAllowedIpsFromWhitelist(ipWhitelistAddresses, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ipWhitelistAddresses** | [**[String]**](String.md)|  | 
 **apiToken** | **String**|  | [optional] 

### Return type

[**DeleteAllowedIpsFromWhitelistResponse**](DeleteAllowedIpsFromWhitelistResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteApnsCertificateById

> DeleteApnsCertificateByIdResponse deleteApnsCertificateById(providerId, opts)

Delete an APNs certificate

## Delete an APNs certificate  Deletes a specific APNs certificate.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-delete-an-apns-certificate ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.ApplicationApi();
let providerId = "providerId_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}} // String | 
};
apiInstance.deleteApnsCertificateById(providerId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **providerId** | **String**|  | 
 **apiToken** | **String**|  | [optional] 

### Return type

[**DeleteApnsCertificateByIdResponse**](DeleteApnsCertificateByIdResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## generateSecondaryApiToken

> GenerateSecondaryApiTokenResponse generateSecondaryApiToken(opts)

Generate a secondary API token

## Generate a secondary API token  Generates a new secondary API token.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-generate-a-secondary-api-token

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.ApplicationApi();
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'generateSecondaryApiTokenData': new SendbirdPlatformSdk.GenerateSecondaryApiTokenData() // GenerateSecondaryApiTokenData | 
};
apiInstance.generateSecondaryApiToken(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | **String**|  | [optional] 
 **generateSecondaryApiTokenData** | [**GenerateSecondaryApiTokenData**](GenerateSecondaryApiTokenData.md)|  | [optional] 

### Return type

[**GenerateSecondaryApiTokenResponse**](GenerateSecondaryApiTokenResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## listPushConfigurations

> ListPushConfigurationsResponse listPushConfigurations(pushType, opts)

List push configurations

## List push configurations  Retrieves a list of an application&#39;s registered push configurations.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-list-push-configurations ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.ApplicationApi();
let pushType = "pushType_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}} // String | 
};
apiInstance.listPushConfigurations(pushType, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pushType** | **String**|  | 
 **apiToken** | **String**|  | [optional] 

### Return type

[**ListPushConfigurationsResponse**](ListPushConfigurationsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listPushNotificationContentTemplates

> ListPushNotificationContentTemplatesResponse listPushNotificationContentTemplates(opts)

List push notification content templates

## List push notification content templates  Retrieves a list of push notification content templates of an application.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-list-push-notification-content-templates

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.ApplicationApi();
let opts = {
  'apiToken': {{API_TOKEN}} // String | 
};
apiInstance.listPushNotificationContentTemplates(opts).then((data) => {
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

[**ListPushNotificationContentTemplatesResponse**](ListPushNotificationContentTemplatesResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listSecondaryApiTokens

> ListSecondaryApiTokensResponse listSecondaryApiTokens(opts)

List secondary API tokens

## List secondary API tokens  Retrieves a list of secondary API tokens.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-list-secondary-api-tokens

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.ApplicationApi();
let opts = {
  'apiToken': {{API_TOKEN}} // String | 
};
apiInstance.listSecondaryApiTokens(opts).then((data) => {
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

[**ListSecondaryApiTokensResponse**](ListSecondaryApiTokensResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## removePushConfigurationById

> RemovePushConfigurationByIdResponse removePushConfigurationById(pushType, providerId, opts)

Remove a push configuration

## Remove a push configuration  Removes a specific push configuration from an application. The type of a push configuration is either &#x60;fcm&#x60;, &#x60;huawei&#x60;, or &#x60;apns&#x60;.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-remove-a-push-configuration ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.ApplicationApi();
let pushType = "pushType_example"; // String | 
let providerId = "providerId_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}} // String | 
};
apiInstance.removePushConfigurationById(pushType, providerId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pushType** | **String**|  | 
 **providerId** | **String**|  | 
 **apiToken** | **String**|  | [optional] 

### Return type

[**RemovePushConfigurationByIdResponse**](RemovePushConfigurationByIdResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## retrieveIpWhitelist

> RetrieveIpWhitelistResponse retrieveIpWhitelist(opts)

Retrieve an IP whitelist

## Retrieve an IP whitelist  Retrieves a list of all the IP ranges and addresses that have access to your Sendbird application. This list is called an IP whitelist and its addresses are granted API access when the IP whitelist API enables [CIDR](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notations.  If you specify which IP addresses or ranges to include in the whitelist, any unlisted foreign IP addresses will be denied access. If you don&#39;t specify any IP address or range to include in the whitelist, all IP addresses will be granted API access. You can configure the IP whitelist under Settings &gt; Security &gt; Allowed IPs in the [Sendbird Dashboard](https://dashboard.sendbird.com).  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-retrieve-an-ip-whitelist

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.ApplicationApi();
let opts = {
  'apiToken': {{API_TOKEN}} // String | 
};
apiInstance.retrieveIpWhitelist(opts).then((data) => {
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

[**RetrieveIpWhitelistResponse**](RetrieveIpWhitelistResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## revokeSecondaryApiTokenByToken

> RevokeSecondaryApiTokenByTokenResponse revokeSecondaryApiTokenByToken(apiToken2, opts)

Revoke a secondary API token

## Revoke a secondary API token  Revokes a secondary API token.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-revoke-a-secondary-api-token

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.ApplicationApi();
let apiToken2 = "apiToken_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}} // String | 
};
apiInstance.revokeSecondaryApiTokenByToken(apiToken2, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken2** | **String**|  | 
 **apiToken** | **String**|  | [optional] 

### Return type

[**RevokeSecondaryApiTokenByTokenResponse**](RevokeSecondaryApiTokenByTokenResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateApnsPushConfigurationById

> UpdateApnsPushConfigurationByIdResponse updateApnsPushConfigurationById(providerId, opts)

Update an APNs push configuration

## Update an APNs push configuration  Updates a specific APNs (Apple Push Notification service) push configuration for your client app. You can also register the configurations in your [dashboard](https://dashboard.sendbird.com) under Settings &gt; Application &gt; Notifications.  &gt; __Note__: If your HTTP request body contains a [.p12](https://sendbird.com/docs/chat/v3/ios/guides/push-notifications#2-step-3-export-a-p12-file-and-upload-to-sendbird-dashboard) certificate file to upload to Sendbird server, you should send a [Multipart request](https://sendbird.com/docs/chat/v3/platform-api/getting-started/prepare-to-use-api#2-headers-3-multipart-requests) .  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-update-an-apns-push-configuration ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.ApplicationApi();
let providerId = "providerId_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'updateApnsPushConfigurationByIdData': new SendbirdPlatformSdk.UpdateApnsPushConfigurationByIdData() // UpdateApnsPushConfigurationByIdData | 
};
apiInstance.updateApnsPushConfigurationById(providerId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **providerId** | **String**|  | 
 **apiToken** | **String**|  | [optional] 
 **updateApnsPushConfigurationByIdData** | [**UpdateApnsPushConfigurationByIdData**](UpdateApnsPushConfigurationByIdData.md)|  | [optional] 

### Return type

[**UpdateApnsPushConfigurationByIdResponse**](UpdateApnsPushConfigurationByIdResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateDefaultChannelInvitationPreference

> UpdateDefaultChannelInvitationPreferenceResponse updateDefaultChannelInvitationPreference(opts)

Update default channel invitation preference

## Update default channel invitation preference  Updates the default channel invitation preference of an application.  &gt; __Note__: Using the [update channel invitation preference](https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-update-channel-invitation-preference) action, you can update the value of a specific user&#39;s channel invitation preference, which can be set individually by user.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-update-default-channel-invitation-preference

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.ApplicationApi();
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'updateDefaultChannelInvitationPreferenceData': new SendbirdPlatformSdk.UpdateDefaultChannelInvitationPreferenceData() // UpdateDefaultChannelInvitationPreferenceData | 
};
apiInstance.updateDefaultChannelInvitationPreference(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | **String**|  | [optional] 
 **updateDefaultChannelInvitationPreferenceData** | [**UpdateDefaultChannelInvitationPreferenceData**](UpdateDefaultChannelInvitationPreferenceData.md)|  | [optional] 

### Return type

[**UpdateDefaultChannelInvitationPreferenceResponse**](UpdateDefaultChannelInvitationPreferenceResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateFcmPushConfigurationById

> UpdateFcmPushConfigurationByIdResponse updateFcmPushConfigurationById(providerId, opts)

Update a FCM push configuration

## Update a FCM push configuration  Updates a specific FCM (Firebase Cloud Messaging) push configuration for your client app. You can also update the configurations in your [dashboard](https://dashboard.sendbird.com) under Settings &gt; Application &gt; Notifications.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-update-a-fcm-push-configuration ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.ApplicationApi();
let providerId = "providerId_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'updateFcmPushConfigurationByIdData': new SendbirdPlatformSdk.UpdateFcmPushConfigurationByIdData() // UpdateFcmPushConfigurationByIdData | 
};
apiInstance.updateFcmPushConfigurationById(providerId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **providerId** | **String**|  | 
 **apiToken** | **String**|  | [optional] 
 **updateFcmPushConfigurationByIdData** | [**UpdateFcmPushConfigurationByIdData**](UpdateFcmPushConfigurationByIdData.md)|  | [optional] 

### Return type

[**UpdateFcmPushConfigurationByIdResponse**](UpdateFcmPushConfigurationByIdResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateHmsPushConfigurationById

> UpdateHmsPushConfigurationByIdResponse updateHmsPushConfigurationById(providerId, opts)

Update an HMS push configuration

## Update an HMS push configuration  Updates a specific HMS (Huawei Mobile Services) push configuration for your client app. You can also update the configurations in your [dashboard](https://dashboard.sendbird.com) under Settings &gt; Application &gt; Notifications.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-update-an-hms-push-configuration ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.ApplicationApi();
let providerId = "providerId_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'updateHmsPushConfigurationByIdData': new SendbirdPlatformSdk.UpdateHmsPushConfigurationByIdData() // UpdateHmsPushConfigurationByIdData | 
};
apiInstance.updateHmsPushConfigurationById(providerId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **providerId** | **String**|  | 
 **apiToken** | **String**|  | [optional] 
 **updateHmsPushConfigurationByIdData** | [**UpdateHmsPushConfigurationByIdData**](UpdateHmsPushConfigurationByIdData.md)|  | [optional] 

### Return type

[**UpdateHmsPushConfigurationByIdResponse**](UpdateHmsPushConfigurationByIdResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updatePushNotificationContentTemplate

> UpdatePushNotificationContentTemplateResponse updatePushNotificationContentTemplate(templateName, opts)

Update a push notification content template

## Update a push notification content template  Updates a specific push notification content template of an application. The name of a content template is either &#x60;default&#x60; or &#x60;alternative&#x60;.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-update-a-push-notification-content-template ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.ApplicationApi();
let templateName = "templateName_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'updatePushNotificationContentTemplateData': new SendbirdPlatformSdk.UpdatePushNotificationContentTemplateData() // UpdatePushNotificationContentTemplateData | 
};
apiInstance.updatePushNotificationContentTemplate(templateName, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **templateName** | **String**|  | 
 **apiToken** | **String**|  | [optional] 
 **updatePushNotificationContentTemplateData** | [**UpdatePushNotificationContentTemplateData**](UpdatePushNotificationContentTemplateData.md)|  | [optional] 

### Return type

[**UpdatePushNotificationContentTemplateResponse**](UpdatePushNotificationContentTemplateResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## viewDefaultChannelInvitationPreference

> ViewDefaultChannelInvitationPreferenceResponse viewDefaultChannelInvitationPreference(opts)

View default channel invitation preference

## View default channel invitation preference  Retrieves the default channel invitation preference of an application.  &gt; __Note__: Using the [view channel invitation preference](https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-view-channel-invitation-preference) action, you can retrieve the value of a specific user&#39;s channel invitation preference, which can be set individually by user.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-view-default-channel-invitation-preference

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.ApplicationApi();
let opts = {
  'apiToken': {{API_TOKEN}} // String | 
};
apiInstance.viewDefaultChannelInvitationPreference(opts).then((data) => {
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

[**ViewDefaultChannelInvitationPreferenceResponse**](ViewDefaultChannelInvitationPreferenceResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## viewNumberOfConcurrentConnections

> ViewNumberOfConcurrentConnectionsResponse viewNumberOfConcurrentConnections(opts)

View number of concurrent connections

## View number of concurrent connections  Retrieves the number of devices and opened browser tabs which are currently connected to Sendbird server.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-view-number-of-concurrent-connections

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.ApplicationApi();
let opts = {
  'apiToken': {{API_TOKEN}} // String | 
};
apiInstance.viewNumberOfConcurrentConnections(opts).then((data) => {
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

[**ViewNumberOfConcurrentConnectionsResponse**](ViewNumberOfConcurrentConnectionsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## viewNumberOfDailyActiveUsers

> ViewNumberOfDailyActiveUsersResponse viewNumberOfDailyActiveUsers(opts)

View number of daily active users

## View number of daily active users  Retrieves the number of daily active users of the application (DAU).  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-view-number-of-daily-active-users ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.ApplicationApi();
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'date': "date_example" // String | 
};
apiInstance.viewNumberOfDailyActiveUsers(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | **String**|  | [optional] 
 **date** | **String**|  | [optional] 

### Return type

[**ViewNumberOfDailyActiveUsersResponse**](ViewNumberOfDailyActiveUsersResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## viewNumberOfMonthlyActiveUsers

> ViewNumberOfMonthlyActiveUsersResponse viewNumberOfMonthlyActiveUsers(opts)

View number of monthly active users

## View number of monthly active users  Retrieves the number of monthly active users of the application (MAU).  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-view-number-of-monthly-active-users ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.ApplicationApi();
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'date': "date_example" // String | 
};
apiInstance.viewNumberOfMonthlyActiveUsers(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | **String**|  | [optional] 
 **date** | **String**|  | [optional] 

### Return type

[**ViewNumberOfMonthlyActiveUsersResponse**](ViewNumberOfMonthlyActiveUsersResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## viewNumberOfPeakConnections

> ViewNumberOfPeakConnectionsResponse viewNumberOfPeakConnections(timeDimension, startYear, startMonth, endYear, endMonth, opts)

View number of peak connections

## View number of peak connections  Retrieves the number of concurrently connected devices to Sendbird server during the requested time period.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-view-number-of-peak-connections ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.ApplicationApi();
let timeDimension = "timeDimension_example"; // String | 
let startYear = 56; // Number | 
let startMonth = 56; // Number | 
let endYear = 56; // Number | 
let endMonth = 56; // Number | 
let opts = {
  'apiToken': {{API_TOKEN}}, // String | 
  'startDay': 56, // Number | 
  'endDay': 56 // Number | 
};
apiInstance.viewNumberOfPeakConnections(timeDimension, startYear, startMonth, endYear, endMonth, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **timeDimension** | **String**|  | 
 **startYear** | **Number**|  | 
 **startMonth** | **Number**|  | 
 **endYear** | **Number**|  | 
 **endMonth** | **Number**|  | 
 **apiToken** | **String**|  | [optional] 
 **startDay** | **Number**|  | [optional] 
 **endDay** | **Number**|  | [optional] 

### Return type

[**ViewNumberOfPeakConnectionsResponse**](ViewNumberOfPeakConnectionsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## viewPushConfigurationById

> ViewPushConfigurationByIdResponse viewPushConfigurationById(pushType, providerId, opts)

View a push configuration

## View a push configuration  Retrieves a specific push configuration of an application. The type of a push configuration is either &#x60;fcm&#x60;, &#x60;huawei&#x60;, or &#x60;apns&#x60;.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-view-a-push-configuration ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.ApplicationApi();
let pushType = "pushType_example"; // String | 
let providerId = "providerId_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}} // String | 
};
apiInstance.viewPushConfigurationById(pushType, providerId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pushType** | **String**|  | 
 **providerId** | **String**|  | 
 **apiToken** | **String**|  | [optional] 

### Return type

[**ViewPushConfigurationByIdResponse**](ViewPushConfigurationByIdResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## viewPushNotificationContentTemplate

> ViewPushNotificationContentTemplateResponse viewPushNotificationContentTemplate(templateName, opts)

View a push notification content template

## View a push notification content template  Retrieves information on a specific push notification content templates of an application. The name of a content template is either &#x60;default&#x60; or &#x60;alternative&#x60;.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-view-a-push-notification-content-template ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.ApplicationApi();
let templateName = "templateName_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}} // String | 
};
apiInstance.viewPushNotificationContentTemplate(templateName, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **templateName** | **String**|  | 
 **apiToken** | **String**|  | [optional] 

### Return type

[**ViewPushNotificationContentTemplateResponse**](ViewPushNotificationContentTemplateResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## viewSecondaryApiTokenByToken

> ViewSecondaryApiTokenByTokenResponse viewSecondaryApiTokenByToken(apiToken2, opts)

View a secondary API token

## View a secondary API token  Retrieves the information on a secondary API token.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-view-a-secondary-api-token

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

let apiInstance = new SendbirdPlatformSdk.ApplicationApi();
let apiToken2 = "apiToken_example"; // String | 
let opts = {
  'apiToken': {{API_TOKEN}} // String | 
};
apiInstance.viewSecondaryApiTokenByToken(apiToken2, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken2** | **String**|  | 
 **apiToken** | **String**|  | [optional] 

### Return type

[**ViewSecondaryApiTokenByTokenResponse**](ViewSecondaryApiTokenByTokenResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

