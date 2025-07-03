# SendbirdPlatformSdk.SendAdminMessageRequestBody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apnsBundleId** | **String** |  | [optional] 
**customType** | **String** |  | [optional] 
**data** | **String** |  | [optional] 
**dedupId** | **String** |  | [optional] 
**isSilent** | **Boolean** |  | [optional] 
**mentionType** | **String** |  | [optional] 
**mentionedUserIds** | **[String]** |  | [optional] 
**message** | **String** |  | 
**messageType** | **String** | Specifies the type of the message. The value of ADMM represents an admin message. | 
**pushMessageTemplate** | [**SendTextMessageRequestBodyPushMessageTemplate**](SendTextMessageRequestBodyPushMessageTemplate.md) |  | [optional] 
**sendPush** | **Boolean** |  | [optional] 
**sortedMetaarray** | [**[SendbirdSortedMetaarrayInner]**](SendbirdSortedMetaarrayInner.md) |  | [optional] 



## Enum: MentionTypeEnum


* `users` (value: `"users"`)

* `channel` (value: `"channel"`)





## Enum: MessageTypeEnum


* `ADMM` (value: `"ADMM"`)




