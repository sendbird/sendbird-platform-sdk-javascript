# SendbirdPlatformSdk.EmojisApi

All URIs are relative to *https://api-APP_ID.sendbird.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addEmojiCategories**](EmojisApi.md#addEmojiCategories) | **POST** /v3/emoji_categories | Add emoji categories
[**addEmojis**](EmojisApi.md#addEmojis) | **POST** /v3/emojis | Add emojis
[**deleteEmojiByKey**](EmojisApi.md#deleteEmojiByKey) | **DELETE** /v3/emojis/{emoji_key} | Delete an emoji
[**deleteEmojiCategoryById**](EmojisApi.md#deleteEmojiCategoryById) | **DELETE** /v3/emoji_categories/{emoji_category_id} | Delete an emoji category
[**enableReactions**](EmojisApi.md#enableReactions) | **PUT** /v3/applications/settings/reactions | Enable reactions
[**getEmojiByKey**](EmojisApi.md#getEmojiByKey) | **GET** /v3/emojis/{emoji_key} | Get an emoji
[**getEmojiCategoryById**](EmojisApi.md#getEmojiCategoryById) | **GET** /v3/emoji_categories/{emoji_category_id} | Get an emoji category
[**listAllEmojisAndEmojiCategories**](EmojisApi.md#listAllEmojisAndEmojiCategories) | **GET** /v3/emoji_categories | List all emojis and emoji categories
[**listEmojis**](EmojisApi.md#listEmojis) | **GET** /v3/emojis | List emojis
[**updateEmojiCategoryUrlById**](EmojisApi.md#updateEmojiCategoryUrlById) | **PUT** /v3/emoji_categories/{emoji_category_id} | Update an emoji category URL
[**updateEmojiUrlByKey**](EmojisApi.md#updateEmojiUrlByKey) | **PUT** /v3/emojis/{emoji_key} | Update an emoji URL
[**useDefaultEmojis**](EmojisApi.md#useDefaultEmojis) | **PUT** /v3/applications/settings/use_default_emoji | Use default emojis



## addEmojiCategories

> AddEmojiCategoriesResponse addEmojiCategories(apiToken, opts)

Add emoji categories

## Add emoji categories  Adds a list of one or more new emoji categories to the application.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-add-emoji-categories

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.EmojisApi();
let apiToken = {{API_TOKEN}}; // String | 
let opts = {
  'body': {key: null} // Object | 
};
apiInstance.addEmojiCategories(apiToken, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | **String**|  | 
 **body** | **Object**|  | [optional] 

### Return type

[**AddEmojiCategoriesResponse**](AddEmojiCategoriesResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## addEmojis

> AddEmojisResponse addEmojis(apiToken, opts)

Add emojis

## Add emojis  Adds a list of one or more new emojis to the application.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-add-emojis

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.EmojisApi();
let apiToken = {{API_TOKEN}}; // String | 
let opts = {
  'addEmojisData': new SendbirdPlatformSdk.AddEmojisData() // AddEmojisData | 
};
apiInstance.addEmojis(apiToken, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | **String**|  | 
 **addEmojisData** | [**AddEmojisData**](AddEmojisData.md)|  | [optional] 

### Return type

[**AddEmojisResponse**](AddEmojisResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteEmojiByKey

> deleteEmojiByKey(apiToken, emojiKey)

Delete an emoji

## Delete an emoji  Deletes an emoji from the application.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-delete-an-emoji ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.EmojisApi();
let apiToken = {{API_TOKEN}}; // String | 
let emojiKey = "emojiKey_example"; // String | 
apiInstance.deleteEmojiByKey(apiToken, emojiKey).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | **String**|  | 
 **emojiKey** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteEmojiCategoryById

> Object deleteEmojiCategoryById(apiToken, emojiCategoryId)

Delete an emoji category

## Delete an emoji category  Deletes an emoji category with the specified ID.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-delete-an-emoji-category ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.EmojisApi();
let apiToken = {{API_TOKEN}}; // String | 
let emojiCategoryId = "emojiCategoryId_example"; // String | 
apiInstance.deleteEmojiCategoryById(apiToken, emojiCategoryId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | **String**|  | 
 **emojiCategoryId** | **String**|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## enableReactions

> EnableReactionsResponse enableReactions(apiToken, opts)

Enable reactions

## Enable reactions  Turn on or off reactions in a Sendbird application.  &gt; __Note__: This action also allows reactions in UIKit.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-enable-reactions

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.EmojisApi();
let apiToken = {{API_TOKEN}}; // String | 
let opts = {
  'enableReactionsData': new SendbirdPlatformSdk.EnableReactionsData() // EnableReactionsData | 
};
apiInstance.enableReactions(apiToken, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | **String**|  | 
 **enableReactionsData** | [**EnableReactionsData**](EnableReactionsData.md)|  | [optional] 

### Return type

[**EnableReactionsResponse**](EnableReactionsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getEmojiByKey

> SendBirdEmoji getEmojiByKey(apiToken, emojiKey)

Get an emoji

## Get an emoji  Retrieves an emoji with the specified key.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-get-an-emoji ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.EmojisApi();
let apiToken = {{API_TOKEN}}; // String | 
let emojiKey = "emojiKey_example"; // String | 
apiInstance.getEmojiByKey(apiToken, emojiKey).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | **String**|  | 
 **emojiKey** | **String**|  | 

### Return type

[**SendBirdEmoji**](SendBirdEmoji.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEmojiCategoryById

> SendBirdEmojiCategory getEmojiCategoryById(apiToken, emojiCategoryId)

Get an emoji category

## Get an emoji category  Retrieves an emoji category with the specified ID, including its emojis.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-get-an-emoji-category ----------------------------   &#x60;emoji_category_id&#x60;      Type: int      Description: Specifies the unique ID of the emoji category to retrieve.

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.EmojisApi();
let apiToken = {{API_TOKEN}}; // String | 
let emojiCategoryId = "emojiCategoryId_example"; // String | 
apiInstance.getEmojiCategoryById(apiToken, emojiCategoryId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | **String**|  | 
 **emojiCategoryId** | **String**|  | 

### Return type

[**SendBirdEmojiCategory**](SendBirdEmojiCategory.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listAllEmojisAndEmojiCategories

> ListAllEmojisAndEmojiCategoriesResponse listAllEmojisAndEmojiCategories(apiToken)

List all emojis and emoji categories

## List all emojis and emoji categories  Retrieves a list of all emoji categories registered to the application, including their emojis.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-list-all-emojis-and-emoji-categories

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.EmojisApi();
let apiToken = {{API_TOKEN}}; // String | 
apiInstance.listAllEmojisAndEmojiCategories(apiToken).then((data) => {
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

[**ListAllEmojisAndEmojiCategoriesResponse**](ListAllEmojisAndEmojiCategoriesResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listEmojis

> ListEmojisResponse listEmojis(apiToken)

List emojis

## List emojis  Retrieves a list of all emojis registered to the application.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-list-emojis

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.EmojisApi();
let apiToken = {{API_TOKEN}}; // String | 
apiInstance.listEmojis(apiToken).then((data) => {
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

[**ListEmojisResponse**](ListEmojisResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateEmojiCategoryUrlById

> SendBirdEmojiCategory updateEmojiCategoryUrlById(apiToken, emojiCategoryId, opts)

Update an emoji category URL

## Update an emoji category URL  Updates the URL of an emoji category with the specified ID.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-update-an-emoji-category-url ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.EmojisApi();
let apiToken = {{API_TOKEN}}; // String | 
let emojiCategoryId = "emojiCategoryId_example"; // String | 
let opts = {
  'updateEmojiCategoryUrlByIdData': new SendbirdPlatformSdk.UpdateEmojiCategoryUrlByIdData() // UpdateEmojiCategoryUrlByIdData | 
};
apiInstance.updateEmojiCategoryUrlById(apiToken, emojiCategoryId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | **String**|  | 
 **emojiCategoryId** | **String**|  | 
 **updateEmojiCategoryUrlByIdData** | [**UpdateEmojiCategoryUrlByIdData**](UpdateEmojiCategoryUrlByIdData.md)|  | [optional] 

### Return type

[**SendBirdEmojiCategory**](SendBirdEmojiCategory.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateEmojiUrlByKey

> SendBirdEmoji updateEmojiUrlByKey(apiToken, emojiKey, opts)

Update an emoji URL

## Update an emoji URL  Updates the image URL of an emoji with the specified key.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-update-an-emoji-url ----------------------------

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.EmojisApi();
let apiToken = {{API_TOKEN}}; // String | 
let emojiKey = "emojiKey_example"; // String | 
let opts = {
  'updateEmojiUrlByKeyData': new SendbirdPlatformSdk.UpdateEmojiUrlByKeyData() // UpdateEmojiUrlByKeyData | 
};
apiInstance.updateEmojiUrlByKey(apiToken, emojiKey, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | **String**|  | 
 **emojiKey** | **String**|  | 
 **updateEmojiUrlByKeyData** | [**UpdateEmojiUrlByKeyData**](UpdateEmojiUrlByKeyData.md)|  | [optional] 

### Return type

[**SendBirdEmoji**](SendBirdEmoji.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## useDefaultEmojis

> UseDefaultEmojisResponse useDefaultEmojis(apiToken, opts)

Use default emojis

## Use default emojis  Determines whether to use the 7 default emojis initially provided.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-use-default-emojis

### Example

```javascript
import SendbirdPlatformSdk from 'sendbird-platform-sdk';

let apiInstance = new SendbirdPlatformSdk.EmojisApi();
let apiToken = {{API_TOKEN}}; // String | 
let opts = {
  'useDefaultEmojisData': new SendbirdPlatformSdk.UseDefaultEmojisData() // UseDefaultEmojisData | 
};
apiInstance.useDefaultEmojis(apiToken, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | **String**|  | 
 **useDefaultEmojisData** | [**UseDefaultEmojisData**](UseDefaultEmojisData.md)|  | [optional] 

### Return type

[**UseDefaultEmojisResponse**](UseDefaultEmojisResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

