# SendbirdPlatformSdk.ApplicationApi

All URIs are relative to *https://api-APP_ID.sendbird.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addApnsPushConfiguration**](ApplicationApi.md#addApnsPushConfiguration) | **POST** /v3/applications/push/apns | Add an APNs push configuration
[**addFcmPushConfiguration**](ApplicationApi.md#addFcmPushConfiguration) | **POST** /v3/applications/push/fcm | Add a FCM push configuration
[**addHmsPushConfiguration**](ApplicationApi.md#addHmsPushConfiguration) | **POST** /v3/applications/push/hms | Add an HMS push configuration
[**addIpToWhitelist**](ApplicationApi.md#addIpToWhitelist) | **PUT** /v3/applications/settings/ip_whitelist | Add an IP to a whitelist
[**banUsersInChannelsWithCustomChannelType**](ApplicationApi.md#banUsersInChannelsWithCustomChannelType) | **POST** /v3/applications/settings_by_channel_custom_type/{custom_type}/ban | Ban users in channels with a custom channel type
[**deleteAllowedIpsFromWhitelist**](ApplicationApi.md#deleteAllowedIpsFromWhitelist) | **DELETE** /v3/applications/settings/ip_whitelist | Delete allowed IPs from a whitelist
[**deleteApnsCertificateById**](ApplicationApi.md#deleteApnsCertificateById) | **DELETE** /v3/applications/push/apns/cert/{provider_id} | Delete an APNs certificate
[**generateSecondaryApiToken**](ApplicationApi.md#generateSecondaryApiToken) | **POST** /v3/applications/api_tokens | Generate a secondary API token
[**listBannedUsersInChannelsWithCustomChannelType**](ApplicationApi.md#listBannedUsersInChannelsWithCustomChannelType) | **GET** /v3/applications/settings_by_channel_custom_type/{custom_type}/ban | List banned users in channels with a custom channel type
[**listMutedUsersInChannelsWithCustomChannelType**](ApplicationApi.md#listMutedUsersInChannelsWithCustomChannelType) | **GET** /v3/applications/settings_by_channel_custom_type/{custom_type}/mute | List muted users in channels with a custom channel type
[**listPushConfigurations**](ApplicationApi.md#listPushConfigurations) | **GET** /v3/applications/push/{push_type} | List push configurations
[**listPushNotificationContentTemplates**](ApplicationApi.md#listPushNotificationContentTemplates) | **GET** /v3/applications/push/message_templates | List push notification content templates
[**listSecondaryApiTokens**](ApplicationApi.md#listSecondaryApiTokens) | **GET** /v3/applications/api_tokens | List secondary API tokens
[**muteUsersInChannelsWithCustomChannelType**](ApplicationApi.md#muteUsersInChannelsWithCustomChannelType) | **POST** /v3/applications/settings_by_channel_custom_type/{custom_type}/mute | Mute users in channels with a custom channel type
[**removePushConfigurationById**](ApplicationApi.md#removePushConfigurationById) | **DELETE** /v3/applications/push/{push_type}/{provider_id} | Remove a push configuration
[**retrieveIpWhitelist**](ApplicationApi.md#retrieveIpWhitelist) | **GET** /v3/applications/settings/ip_whitelist | Retrieve an IP whitelist
[**revokeSecondaryApiTokenByToken**](ApplicationApi.md#revokeSecondaryApiTokenByToken) | **DELETE** /v3/applications/api_tokens/{api_token} | Revoke a secondary API token
[**setDomainFilter**](ApplicationApi.md#setDomainFilter) | **PUT** /v3/applications/settings_global/{custom_type} | Message moderation
[**unbanUsersInChannelsWithCustomChannelType**](ApplicationApi.md#unbanUsersInChannelsWithCustomChannelType) | **DELETE** /v3/applications/settings_by_channel_custom_type/{custom_type}/ban | Unban users in channels with a custom channel type
[**unmuteUsersInChannelsWithCustomChannelType**](ApplicationApi.md#unmuteUsersInChannelsWithCustomChannelType) | **DELETE** /v3/applications/settings_by_channel_custom_type/{custom_type}/mute | Unmute users in channels with a custom channel type
[**updateApnsPushConfigurationById**](ApplicationApi.md#updateApnsPushConfigurationById) | **PUT** /v3/applications/push/apns/{provider_id} | Update an APNs push configuration
[**updateDefaultChannelInvitationPreference**](ApplicationApi.md#updateDefaultChannelInvitationPreference) | **PUT** /v3/applications/default_channel_invitation_preference | Update default channel invitation preference
[**updateFcmPushConfigurationById**](ApplicationApi.md#updateFcmPushConfigurationById) | **PUT** /v3/applications/push/fcm/{provider_id} | Update a FCM push configuration
[**updateHmsPushConfigurationById**](ApplicationApi.md#updateHmsPushConfigurationById) | **PUT** /v3/applications/push/hms/{provider_id} | Update an HMS push configuration
[**updatePushNotificationContentTemplate**](ApplicationApi.md#updatePushNotificationContentTemplate) | **PUT** /v3/applications/push/message_templates/{template_name} | Update a push notification content template
[**viewDefaultChannelInvitationPreference**](ApplicationApi.md#viewDefaultChannelInvitationPreference) | **GET** /v3/applications/default_channel_invitation_preference | View default channel invitation preference
[**viewPushConfigurationById**](ApplicationApi.md#viewPushConfigurationById) | **GET** /v3/applications/push/{push_type}/{provider_id} | View a push configuration
[**viewPushNotificationContentTemplate**](ApplicationApi.md#viewPushNotificationContentTemplate) | **GET** /v3/applications/push/message_templates/{template_name} | View a push notification content template
[**viewSecondaryApiTokenByToken**](ApplicationApi.md#viewSecondaryApiTokenByToken) | **GET** /v3/applications/api_tokens/{api_token} | View a secondary API token



## addApnsPushConfiguration

> AddApnsPushConfigurationResponse addApnsPushConfiguration(apiToken, opts)

Add an APNs push configuration

## Add an APNs push configuration  Registers an APNs (Apple Push Notification service) push configuration for your client app. To send push notifications to iOS devices, your should first register the APNs push configuration. You can also register the configurations in your [dashboard](https://dashboard.sendbird.com) under Settings &gt; Application &gt; Notifications.  &gt; __Note__: To upload a [.p12](https://sendbird.com/docs/chat/v3/ios/guides/push-notifications#2-step-3-export-a-p12-file-and-upload-to-sendbird-dashboard) certificate file to Sendbird server, you should send a [Multipart request](https://sendbird.com/docs/chat/v3/platform-api/getting-started/prepare-to-use-api#2-headers-3-multipart-requests).  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-add-an-apns-push-configuration

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.ApplicationApi();
let apiToken = {{API_TOKEN}}; // String | 
let opts = {
  'addApnsPushConfigurationData': new SendbirdPlatformSdk.AddApnsPushConfigurationData() // AddApnsPushConfigurationData | 
};
apiInstance.addApnsPushConfiguration(apiToken, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | **String**|  | 
 **addApnsPushConfigurationData** | [**AddApnsPushConfigurationData**](AddApnsPushConfigurationData.md)|  | [optional] 

### Return type

[**AddApnsPushConfigurationResponse**](AddApnsPushConfigurationResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## addFcmPushConfiguration

> AddFcmPushConfigurationResponse addFcmPushConfiguration(apiToken, opts)

Add a FCM push configuration

## Add a FCM push configuration  Registers a FCM (Firebase Cloud Messaging) push configuration for your client app. To send push notifications to Android devices, you should first register the FCM push configuration. You can also register the configurations in your [dashboard](https://dashboard.sendbird.com) under Settings &gt; Application &gt; Notifications.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-add-a-fcm-push-configuration

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.ApplicationApi();
let apiToken = {{API_TOKEN}}; // String | 
let opts = {
  'addFcmPushConfigurationData': new SendbirdPlatformSdk.AddFcmPushConfigurationData() // AddFcmPushConfigurationData | 
};
apiInstance.addFcmPushConfiguration(apiToken, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | **String**|  | 
 **addFcmPushConfigurationData** | [**AddFcmPushConfigurationData**](AddFcmPushConfigurationData.md)|  | [optional] 

### Return type

[**AddFcmPushConfigurationResponse**](AddFcmPushConfigurationResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## addHmsPushConfiguration

> AddHmsPushConfigurationResponse addHmsPushConfiguration(apiToken, opts)

Add an HMS push configuration

## Add an HMS push configuration  Registers an HMS (Huawei Mobile Services) push configuration for your client app. To send push notifications to Android devices for HMS, you should first register the HMS push configuration. You can also register the configurations in your [dashboard](https://dashboard.sendbird.com) under Settings &gt; Application &gt; Notifications.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-add-an-hms-push-configuration

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.ApplicationApi();
let apiToken = {{API_TOKEN}}; // String | 
let opts = {
  'addHmsPushConfigurationData': new SendbirdPlatformSdk.AddHmsPushConfigurationData() // AddHmsPushConfigurationData | 
};
apiInstance.addHmsPushConfiguration(apiToken, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | **String**|  | 
 **addHmsPushConfigurationData** | [**AddHmsPushConfigurationData**](AddHmsPushConfigurationData.md)|  | [optional] 

### Return type

[**AddHmsPushConfigurationResponse**](AddHmsPushConfigurationResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## addIpToWhitelist

> AddIpToWhitelistResponse addIpToWhitelist(apiToken, opts)

Add an IP to a whitelist

## Add an IP to a whitelist  Adds IP addresses and ranges to your Sendbird application settings. Both currently added and any previously added IPs are granted API access. You can configure the IP whitelist under Settings &gt; Security &gt; Allowed IPs in the [Sendbird Dashboard](https://dashboard.sendbird.com).  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-add-an-ip-to-a-whitelist

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.ApplicationApi();
let apiToken = {{API_TOKEN}}; // String | 
let opts = {
  'addIpToWhitelistData': new SendbirdPlatformSdk.AddIpToWhitelistData() // AddIpToWhitelistData | 
};
apiInstance.addIpToWhitelist(apiToken, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | **String**|  | 
 **addIpToWhitelistData** | [**AddIpToWhitelistData**](AddIpToWhitelistData.md)|  | [optional] 

### Return type

[**AddIpToWhitelistResponse**](AddIpToWhitelistResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## banUsersInChannelsWithCustomChannelType

> Object banUsersInChannelsWithCustomChannelType(apiToken, customType, opts)

Ban users in channels with a custom channel type

## Ban specified users in channels with a custom channel type at once.

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.ApplicationApi();
let apiToken = {{API_TOKEN}}; // String | 
let customType = "customType_example"; // String | 
let opts = {
  'banUsersInChannelsWithCustomChannelTypeData': new SendbirdPlatformSdk.BanUsersInChannelsWithCustomChannelTypeData() // BanUsersInChannelsWithCustomChannelTypeData | 
};
apiInstance.banUsersInChannelsWithCustomChannelType(apiToken, customType, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | **String**|  | 
 **customType** | **String**|  | 
 **banUsersInChannelsWithCustomChannelTypeData** | [**BanUsersInChannelsWithCustomChannelTypeData**](BanUsersInChannelsWithCustomChannelTypeData.md)|  | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteAllowedIpsFromWhitelist

> DeleteAllowedIpsFromWhitelistResponse deleteAllowedIpsFromWhitelist(apiToken, ipWhitelistAddresses)

Delete allowed IPs from a whitelist

## Delete allowed IPs from a whitelist  Deletes allowed IPs from the whitelist by specifying their IP addresses or ranges. You can configure the IP whitelist under Settings &gt; Security &gt; Allowed IPs in the [Sendbird Dashboard](https://dashboard.sendbird.com).  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-delete-allowed-ips-from-a-whitelist

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.ApplicationApi();
let apiToken = {{API_TOKEN}}; // String | 
let ipWhitelistAddresses = ["null"]; // [String] | 
apiInstance.deleteAllowedIpsFromWhitelist(apiToken, ipWhitelistAddresses).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | **String**|  | 
 **ipWhitelistAddresses** | [**[String]**](String.md)|  | 

### Return type

[**DeleteAllowedIpsFromWhitelistResponse**](DeleteAllowedIpsFromWhitelistResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteApnsCertificateById

> DeleteApnsCertificateByIdResponse deleteApnsCertificateById(apiToken, providerId)

Delete an APNs certificate

## Delete an APNs certificate  Deletes a specific APNs certificate.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-delete-an-apns-certificate ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.ApplicationApi();
let apiToken = {{API_TOKEN}}; // String | 
let providerId = "providerId_example"; // String | 
apiInstance.deleteApnsCertificateById(apiToken, providerId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | **String**|  | 
 **providerId** | **String**|  | 

### Return type

[**DeleteApnsCertificateByIdResponse**](DeleteApnsCertificateByIdResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## generateSecondaryApiToken

> GenerateSecondaryApiTokenResponse generateSecondaryApiToken(apiToken, opts)

Generate a secondary API token

## Generate a secondary API token  Generates a new secondary API token.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-generate-a-secondary-api-token

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.ApplicationApi();
let apiToken = {{API_TOKEN}}; // String | 
let opts = {
  'generateSecondaryApiTokenData': new SendbirdPlatformSdk.GenerateSecondaryApiTokenData() // GenerateSecondaryApiTokenData | 
};
apiInstance.generateSecondaryApiToken(apiToken, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | **String**|  | 
 **generateSecondaryApiTokenData** | [**GenerateSecondaryApiTokenData**](GenerateSecondaryApiTokenData.md)|  | [optional] 

### Return type

[**GenerateSecondaryApiTokenResponse**](GenerateSecondaryApiTokenResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## listBannedUsersInChannelsWithCustomChannelType

> CustomTypeListBannedUsersResponse listBannedUsersInChannelsWithCustomChannelType(apiToken, customType, opts)

List banned users in channels with a custom channel type

## Retrieves a list of users banned from channels with the specified custom channel type.

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.ApplicationApi();
let apiToken = {{API_TOKEN}}; // String | 
let customType = "customType_example"; // String | 
let opts = {
  'token': "token_example", // String | 
  'limit': 56 // Number | 
};
apiInstance.listBannedUsersInChannelsWithCustomChannelType(apiToken, customType, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | **String**|  | 
 **customType** | **String**|  | 
 **token** | **String**|  | [optional] 
 **limit** | **Number**|  | [optional] 

### Return type

[**CustomTypeListBannedUsersResponse**](CustomTypeListBannedUsersResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listMutedUsersInChannelsWithCustomChannelType

> InlineResponse200 listMutedUsersInChannelsWithCustomChannelType(apiToken, customType, opts)

List muted users in channels with a custom channel type

## Retrieves a list of the muted users in channels with a custom channel type.

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.ApplicationApi();
let apiToken = {{API_TOKEN}}; // String | 
let customType = "customType_example"; // String | 
let opts = {
  'token': "token_example", // String | 
  'limit': 56 // Number | 
};
apiInstance.listMutedUsersInChannelsWithCustomChannelType(apiToken, customType, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | **String**|  | 
 **customType** | **String**|  | 
 **token** | **String**|  | [optional] 
 **limit** | **Number**|  | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listPushConfigurations

> ListPushConfigurationsResponse listPushConfigurations(apiToken, pushType)

List push configurations

## List push configurations  Retrieves a list of an application&#39;s registered push configurations.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-list-push-configurations ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.ApplicationApi();
let apiToken = {{API_TOKEN}}; // String | 
let pushType = "pushType_example"; // String | 
apiInstance.listPushConfigurations(apiToken, pushType).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | **String**|  | 
 **pushType** | **String**|  | 

### Return type

[**ListPushConfigurationsResponse**](ListPushConfigurationsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listPushNotificationContentTemplates

> ListPushNotificationContentTemplatesResponse listPushNotificationContentTemplates(apiToken)

List push notification content templates

## List push notification content templates  Retrieves a list of push notification content templates of an application.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-list-push-notification-content-templates

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.ApplicationApi();
let apiToken = {{API_TOKEN}}; // String | 
apiInstance.listPushNotificationContentTemplates(apiToken).then((data) => {
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

[**ListPushNotificationContentTemplatesResponse**](ListPushNotificationContentTemplatesResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listSecondaryApiTokens

> ListSecondaryApiTokensResponse listSecondaryApiTokens(apiToken)

List secondary API tokens

## List secondary API tokens  Retrieves a list of secondary API tokens.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-list-secondary-api-tokens

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.ApplicationApi();
let apiToken = {{API_TOKEN}}; // String | 
apiInstance.listSecondaryApiTokens(apiToken).then((data) => {
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

[**ListSecondaryApiTokensResponse**](ListSecondaryApiTokensResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## muteUsersInChannelsWithCustomChannelType

> Object muteUsersInChannelsWithCustomChannelType(apiToken, customType, opts)

Mute users in channels with a custom channel type

## Mutes specified users in channels with a custom channel type at once.

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.ApplicationApi();
let apiToken = {{API_TOKEN}}; // String | 
let customType = "customType_example"; // String | 
let opts = {
  'muteUsersInChannelsWithCustomChannelTypeData': new SendbirdPlatformSdk.MuteUsersInChannelsWithCustomChannelTypeData() // MuteUsersInChannelsWithCustomChannelTypeData | 
};
apiInstance.muteUsersInChannelsWithCustomChannelType(apiToken, customType, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | **String**|  | 
 **customType** | **String**|  | 
 **muteUsersInChannelsWithCustomChannelTypeData** | [**MuteUsersInChannelsWithCustomChannelTypeData**](MuteUsersInChannelsWithCustomChannelTypeData.md)|  | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## removePushConfigurationById

> RemovePushConfigurationByIdResponse removePushConfigurationById(apiToken, pushType, providerId)

Remove a push configuration

## Remove a push configuration  Removes a specific push configuration from an application. The type of a push configuration is either &#x60;fcm&#x60;, &#x60;huawei&#x60;, or &#x60;apns&#x60;.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-remove-a-push-configuration ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.ApplicationApi();
let apiToken = {{API_TOKEN}}; // String | 
let pushType = "pushType_example"; // String | 
let providerId = "providerId_example"; // String | 
apiInstance.removePushConfigurationById(apiToken, pushType, providerId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | **String**|  | 
 **pushType** | **String**|  | 
 **providerId** | **String**|  | 

### Return type

[**RemovePushConfigurationByIdResponse**](RemovePushConfigurationByIdResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## retrieveIpWhitelist

> RetrieveIpWhitelistResponse retrieveIpWhitelist(apiToken)

Retrieve an IP whitelist

## Retrieve an IP whitelist  Retrieves a list of all the IP ranges and addresses that have access to your Sendbird application. This list is called an IP whitelist and its addresses are granted API access when the IP whitelist API enables [CIDR](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notations.  If you specify which IP addresses or ranges to include in the whitelist, any unlisted foreign IP addresses will be denied access. If you don&#39;t specify any IP address or range to include in the whitelist, all IP addresses will be granted API access. You can configure the IP whitelist under Settings &gt; Security &gt; Allowed IPs in the [Sendbird Dashboard](https://dashboard.sendbird.com).  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-retrieve-an-ip-whitelist

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.ApplicationApi();
let apiToken = {{API_TOKEN}}; // String | 
apiInstance.retrieveIpWhitelist(apiToken).then((data) => {
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

[**RetrieveIpWhitelistResponse**](RetrieveIpWhitelistResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## revokeSecondaryApiTokenByToken

> RevokeSecondaryApiTokenByTokenResponse revokeSecondaryApiTokenByToken(apiToken, apiToken2)

Revoke a secondary API token

## Revoke a secondary API token  Revokes a secondary API token.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-revoke-a-secondary-api-token

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.ApplicationApi();
let apiToken = {{API_TOKEN}}; // String | 
let apiToken2 = "apiToken_example"; // String | 
apiInstance.revokeSecondaryApiTokenByToken(apiToken, apiToken2).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | **String**|  | 
 **apiToken2** | **String**|  | 

### Return type

[**RevokeSecondaryApiTokenByTokenResponse**](RevokeSecondaryApiTokenByTokenResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## setDomainFilter

> SendBirdChannelResponse setDomainFilter(apiToken, customType, opts)

Message moderation

## 

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.ApplicationApi();
let apiToken = {{API_TOKEN}}; // String | 
let customType = "customType_example"; // String | 
let opts = {
  'setDomainFilterData': new SendbirdPlatformSdk.SetDomainFilterData() // SetDomainFilterData | 
};
apiInstance.setDomainFilter(apiToken, customType, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | **String**|  | 
 **customType** | **String**|  | 
 **setDomainFilterData** | [**SetDomainFilterData**](SetDomainFilterData.md)|  | [optional] 

### Return type

[**SendBirdChannelResponse**](SendBirdChannelResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## unbanUsersInChannelsWithCustomChannelType

> Object unbanUsersInChannelsWithCustomChannelType(apiToken, customType, userIds)

Unban users in channels with a custom channel type

## Unban specified users in channels with a custom channel type at once.

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.ApplicationApi();
let apiToken = {{API_TOKEN}}; // String | 
let customType = "customType_example"; // String | 
let userIds = ["null"]; // [String] | 
apiInstance.unbanUsersInChannelsWithCustomChannelType(apiToken, customType, userIds).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | **String**|  | 
 **customType** | **String**|  | 
 **userIds** | [**[String]**](String.md)|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## unmuteUsersInChannelsWithCustomChannelType

> Object unmuteUsersInChannelsWithCustomChannelType(apiToken, customType, userIds)

Unmute users in channels with a custom channel type

## Unmute specified users in channels with a custom channel type at once.

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.ApplicationApi();
let apiToken = {{API_TOKEN}}; // String | 
let customType = "customType_example"; // String | 
let userIds = ["null"]; // [String] | 
apiInstance.unmuteUsersInChannelsWithCustomChannelType(apiToken, customType, userIds).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | **String**|  | 
 **customType** | **String**|  | 
 **userIds** | [**[String]**](String.md)|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateApnsPushConfigurationById

> UpdateApnsPushConfigurationByIdResponse updateApnsPushConfigurationById(apiToken, providerId, opts)

Update an APNs push configuration

## Update an APNs push configuration  Updates a specific APNs (Apple Push Notification service) push configuration for your client app. You can also register the configurations in your [dashboard](https://dashboard.sendbird.com) under Settings &gt; Application &gt; Notifications.  &gt; __Note__: If your HTTP request body contains a [.p12](https://sendbird.com/docs/chat/v3/ios/guides/push-notifications#2-step-3-export-a-p12-file-and-upload-to-sendbird-dashboard) certificate file to upload to Sendbird server, you should send a [Multipart request](https://sendbird.com/docs/chat/v3/platform-api/getting-started/prepare-to-use-api#2-headers-3-multipart-requests) .  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-update-an-apns-push-configuration ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.ApplicationApi();
let apiToken = {{API_TOKEN}}; // String | 
let providerId = "providerId_example"; // String | 
let opts = {
  'updateApnsPushConfigurationByIdData': new SendbirdPlatformSdk.UpdateApnsPushConfigurationByIdData() // UpdateApnsPushConfigurationByIdData | 
};
apiInstance.updateApnsPushConfigurationById(apiToken, providerId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | **String**|  | 
 **providerId** | **String**|  | 
 **updateApnsPushConfigurationByIdData** | [**UpdateApnsPushConfigurationByIdData**](UpdateApnsPushConfigurationByIdData.md)|  | [optional] 

### Return type

[**UpdateApnsPushConfigurationByIdResponse**](UpdateApnsPushConfigurationByIdResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateDefaultChannelInvitationPreference

> UpdateDefaultChannelInvitationPreferenceResponse updateDefaultChannelInvitationPreference(apiToken, opts)

Update default channel invitation preference

## Update default channel invitation preference  Updates the default channel invitation preference of an application.  &gt; __Note__: Using the [update channel invitation preference](https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-update-channel-invitation-preference) action, you can update the value of a specific user&#39;s channel invitation preference, which can be set individually by user.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-update-default-channel-invitation-preference

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.ApplicationApi();
let apiToken = {{API_TOKEN}}; // String | 
let opts = {
  'updateDefaultChannelInvitationPreferenceData': new SendbirdPlatformSdk.UpdateDefaultChannelInvitationPreferenceData() // UpdateDefaultChannelInvitationPreferenceData | 
};
apiInstance.updateDefaultChannelInvitationPreference(apiToken, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | **String**|  | 
 **updateDefaultChannelInvitationPreferenceData** | [**UpdateDefaultChannelInvitationPreferenceData**](UpdateDefaultChannelInvitationPreferenceData.md)|  | [optional] 

### Return type

[**UpdateDefaultChannelInvitationPreferenceResponse**](UpdateDefaultChannelInvitationPreferenceResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateFcmPushConfigurationById

> UpdateFcmPushConfigurationByIdResponse updateFcmPushConfigurationById(apiToken, providerId, opts)

Update a FCM push configuration

## Update a FCM push configuration  Updates a specific FCM (Firebase Cloud Messaging) push configuration for your client app. You can also update the configurations in your [dashboard](https://dashboard.sendbird.com) under Settings &gt; Application &gt; Notifications.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-update-a-fcm-push-configuration ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.ApplicationApi();
let apiToken = {{API_TOKEN}}; // String | 
let providerId = "providerId_example"; // String | 
let opts = {
  'updateFcmPushConfigurationByIdData': new SendbirdPlatformSdk.UpdateFcmPushConfigurationByIdData() // UpdateFcmPushConfigurationByIdData | 
};
apiInstance.updateFcmPushConfigurationById(apiToken, providerId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | **String**|  | 
 **providerId** | **String**|  | 
 **updateFcmPushConfigurationByIdData** | [**UpdateFcmPushConfigurationByIdData**](UpdateFcmPushConfigurationByIdData.md)|  | [optional] 

### Return type

[**UpdateFcmPushConfigurationByIdResponse**](UpdateFcmPushConfigurationByIdResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateHmsPushConfigurationById

> UpdateHmsPushConfigurationByIdResponse updateHmsPushConfigurationById(apiToken, providerId, opts)

Update an HMS push configuration

## Update an HMS push configuration  Updates a specific HMS (Huawei Mobile Services) push configuration for your client app. You can also update the configurations in your [dashboard](https://dashboard.sendbird.com) under Settings &gt; Application &gt; Notifications.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-update-an-hms-push-configuration ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.ApplicationApi();
let apiToken = {{API_TOKEN}}; // String | 
let providerId = "providerId_example"; // String | 
let opts = {
  'updateHmsPushConfigurationByIdData': new SendbirdPlatformSdk.UpdateHmsPushConfigurationByIdData() // UpdateHmsPushConfigurationByIdData | 
};
apiInstance.updateHmsPushConfigurationById(apiToken, providerId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | **String**|  | 
 **providerId** | **String**|  | 
 **updateHmsPushConfigurationByIdData** | [**UpdateHmsPushConfigurationByIdData**](UpdateHmsPushConfigurationByIdData.md)|  | [optional] 

### Return type

[**UpdateHmsPushConfigurationByIdResponse**](UpdateHmsPushConfigurationByIdResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updatePushNotificationContentTemplate

> UpdatePushNotificationContentTemplateResponse updatePushNotificationContentTemplate(apiToken, templateName, opts)

Update a push notification content template

## Update a push notification content template  Updates a specific push notification content template of an application. The name of a content template is either &#x60;default&#x60; or &#x60;alternative&#x60;.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-update-a-push-notification-content-template ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.ApplicationApi();
let apiToken = {{API_TOKEN}}; // String | 
let templateName = "templateName_example"; // String | 
let opts = {
  'updatePushNotificationContentTemplateData': new SendbirdPlatformSdk.UpdatePushNotificationContentTemplateData() // UpdatePushNotificationContentTemplateData | 
};
apiInstance.updatePushNotificationContentTemplate(apiToken, templateName, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | **String**|  | 
 **templateName** | **String**|  | 
 **updatePushNotificationContentTemplateData** | [**UpdatePushNotificationContentTemplateData**](UpdatePushNotificationContentTemplateData.md)|  | [optional] 

### Return type

[**UpdatePushNotificationContentTemplateResponse**](UpdatePushNotificationContentTemplateResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## viewDefaultChannelInvitationPreference

> ViewDefaultChannelInvitationPreferenceResponse viewDefaultChannelInvitationPreference(apiToken)

View default channel invitation preference

## View default channel invitation preference  Retrieves the default channel invitation preference of an application.  &gt; __Note__: Using the [view channel invitation preference](https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-view-channel-invitation-preference) action, you can retrieve the value of a specific user&#39;s channel invitation preference, which can be set individually by user.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-view-default-channel-invitation-preference

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.ApplicationApi();
let apiToken = {{API_TOKEN}}; // String | 
apiInstance.viewDefaultChannelInvitationPreference(apiToken).then((data) => {
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

[**ViewDefaultChannelInvitationPreferenceResponse**](ViewDefaultChannelInvitationPreferenceResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## viewPushConfigurationById

> ViewPushConfigurationByIdResponse viewPushConfigurationById(apiToken, pushType, providerId)

View a push configuration

## View a push configuration  Retrieves a specific push configuration of an application. The type of a push configuration is either &#x60;fcm&#x60;, &#x60;huawei&#x60;, or &#x60;apns&#x60;.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-view-a-push-configuration ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.ApplicationApi();
let apiToken = {{API_TOKEN}}; // String | 
let pushType = "pushType_example"; // String | 
let providerId = "providerId_example"; // String | 
apiInstance.viewPushConfigurationById(apiToken, pushType, providerId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | **String**|  | 
 **pushType** | **String**|  | 
 **providerId** | **String**|  | 

### Return type

[**ViewPushConfigurationByIdResponse**](ViewPushConfigurationByIdResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## viewPushNotificationContentTemplate

> ViewPushNotificationContentTemplateResponse viewPushNotificationContentTemplate(apiToken, templateName)

View a push notification content template

## View a push notification content template  Retrieves information on a specific push notification content templates of an application. The name of a content template is either &#x60;default&#x60; or &#x60;alternative&#x60;.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-view-a-push-notification-content-template ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.ApplicationApi();
let apiToken = {{API_TOKEN}}; // String | 
let templateName = "templateName_example"; // String | 
apiInstance.viewPushNotificationContentTemplate(apiToken, templateName).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | **String**|  | 
 **templateName** | **String**|  | 

### Return type

[**ViewPushNotificationContentTemplateResponse**](ViewPushNotificationContentTemplateResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## viewSecondaryApiTokenByToken

> ViewSecondaryApiTokenByTokenResponse viewSecondaryApiTokenByToken(apiToken, apiToken2)

View a secondary API token

## View a secondary API token  Retrieves the information on a secondary API token.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-view-a-secondary-api-token

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.ApplicationApi();
let apiToken = {{API_TOKEN}}; // String | 
let apiToken2 = "apiToken_example"; // String | 
apiInstance.viewSecondaryApiTokenByToken(apiToken, apiToken2).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | **String**|  | 
 **apiToken2** | **String**|  | 

### Return type

[**ViewSecondaryApiTokenByTokenResponse**](ViewSecondaryApiTokenByTokenResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

