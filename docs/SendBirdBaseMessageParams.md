# SendbirdPlatformSdk.SendBirdBaseMessageParams

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**appleCriticalAlertOptions** | [**SendBirdAppleCriticalAlertOptions**](SendBirdAppleCriticalAlertOptions.md) |  | [optional] 
**customType** | **String** |  | [optional] 
**data** | **String** |  | [optional] 
**isReplyToChannel** | **Boolean** |  | [optional] 
**mentionType** | **String** |  | [optional] 
**mentionedUserIds** | **[String]** |  | [optional] 
**mentionedUsers** | [**[SendBirdUser]**](SendBirdUser.md) |  | [optional] 
**metaArrayKeys** | **[String]** |  | [optional] 
**metaArrays** | [**[SendBirdMessageMetaArray]**](SendBirdMessageMetaArray.md) |  | [optional] 
**parentMessageId** | **Number** |  | [optional] 
**pushNotificationDeliveryOption** | **String** |  | [optional] 



## Enum: MentionTypeEnum


* `channel` (value: `"channel"`)

* `users` (value: `"users"`)





## Enum: PushNotificationDeliveryOptionEnum


* `default` (value: `"default"`)

* `suppress` (value: `"suppress"`)




