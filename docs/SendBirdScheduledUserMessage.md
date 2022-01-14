# SendbirdPlatformSdk.SendBirdScheduledUserMessage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**appleCriticalAlertOptions** | [**SendBirdAppleCriticalAlertOptions**](SendBirdAppleCriticalAlertOptions.md) |  | [optional] 
**channelUrl** | **String** |  | [optional] 
**createdAt** | **Number** |  | [optional] 
**customType** | **String** |  | [optional] 
**data** | **String** |  | [optional] 
**errorCode** | **Number** |  | [optional] 
**errorMessage** | **String** |  | [optional] 
**mentionType** | **String** |  | [optional] 
**mentionedUsers** | [**[SendBirdUser]**](SendBirdUser.md) |  | [optional] 
**message** | **String** |  | [optional] 
**metaArray** | [**ModelObject**](ModelObject.md) |  | [optional] 
**metaArrays** | [**[SendBirdMessageMetaArray]**](SendBirdMessageMetaArray.md) |  | [optional] 
**pushNotificationDeliveryOption** | **String** |  | [optional] 
**scheduledDateTimeString** | **String** |  | [optional] 
**scheduledId** | **Number** |  | [optional] 
**scheduledTimezone** | **String** |  | [optional] 
**sender** | [**SendBirdUser**](SendBirdUser.md) |  | [optional] 
**status** | **String** |  | [optional] 
**translationTargetLanguages** | **[String]** |  | [optional] 
**updatedAt** | **Number** |  | [optional] 



## Enum: MentionTypeEnum


* `channel` (value: `"channel"`)

* `users` (value: `"users"`)





## Enum: PushNotificationDeliveryOptionEnum


* `default` (value: `"default"`)

* `suppress` (value: `"suppress"`)





## Enum: StatusEnum


* `canceled` (value: `"canceled"`)

* `failed` (value: `"failed"`)

* `scheduled` (value: `"scheduled"`)

* `sent` (value: `"sent"`)




