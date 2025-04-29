# SendbirdPlatformSdk.SendTextMessageRequestBody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apnsBundleId** | **String** |  | [optional] 
**appleCriticalAlertOptions** | **Object** |  | [optional] 
**createdAt** | **Number** |  | [optional] 
**customType** | **String** |  | [optional] 
**data** | **String** |  | [optional] 
**dedupId** | **String** |  | [optional] 
**includePollDetails** | **Boolean** |  | [optional] 
**isSilent** | **Boolean** |  | [optional] 
**markAsRead** | **Boolean** |  | [optional] 
**mentionType** | **String** |  | [optional] 
**mentionedUserIds** | **[String]** |  | [optional] 
**message** | **String** |  | 
**messageType** | **String** | Specifies the type of the message. The value of MESG represents a text message. | 
**pollId** | **Number** |  | [optional] 
**pushMessageTemplate** | [**SendTextMessageRequestBodyPushMessageTemplate**](SendTextMessageRequestBodyPushMessageTemplate.md) |  | [optional] 
**sendPush** | **Boolean** |  | [optional] 
**sortedMetaarray** | [**[SendbirdSortedMetaarrayInner]**](SendbirdSortedMetaarrayInner.md) |  | [optional] 
**sound** | **String** |  | [optional] 
**volume** | **Number** |  | [optional] 



## Enum: MentionTypeEnum


* `users` (value: `"users"`)

* `channel` (value: `"channel"`)





## Enum: MessageTypeEnum


* `MESG` (value: `"MESG"`)




