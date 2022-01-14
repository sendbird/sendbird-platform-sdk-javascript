# SendbirdPlatformSdk.SendBirdBaseMessageInstance

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**appleCriticalAlertOptions** | [**SendBirdAppleCriticalAlertOptions**](SendBirdAppleCriticalAlertOptions.md) |  | [optional] 
**channelType** | **String** |  | [optional] 
**channelUrl** | **String** |  | [optional] 
**createdAt** | **Number** |  | [optional] 
**customType** | **String** |  | [optional] 
**data** | **String** |  | [optional] 
**isReplyToChannel** | **Boolean** |  | [optional] 
**mentionType** | **String** |  | [optional] 
**mentionedUsers** | [**[SendBirdUser]**](SendBirdUser.md) |  | [optional] 
**messageId** | **Number** |  | [optional] 
**messageType** | **String** |  | [optional] 
**metaArray** | [**ModelObject**](ModelObject.md) |  | [optional] 
**metaArrays** | [**[SendBirdMessageMetaArray]**](SendBirdMessageMetaArray.md) |  | [optional] 
**ogMetaData** | [**SendBirdOGMetaData**](SendBirdOGMetaData.md) |  | [optional] 
**parentMessage** | [**AnyOfSendBirdAdminMessageSendBirdUserMessageSendBirdFileMessage**](AnyOfSendBirdAdminMessageSendBirdUserMessageSendBirdFileMessage.md) |  | [optional] 
**parentMessageId** | **Number** |  | [optional] 
**parentMessageText** | **String** |  | [optional] 
**reactions** | [**[SendBirdReaction]**](SendBirdReaction.md) |  | [optional] 
**sendingStatus** | **String** |  | [optional] 
**silent** | **Boolean** |  | [optional] 
**threadInfo** | [**SendBirdThreadInfo**](SendBirdThreadInfo.md) |  | [optional] 
**updatedAt** | **Number** |  | [optional] 



## Enum: MessageTypeEnum


* `admin` (value: `"admin"`)

* `base` (value: `"base"`)

* `file` (value: `"file"`)

* `user` (value: `"user"`)





## Enum: SendingStatusEnum


* `canceled` (value: `"canceled"`)

* `failed` (value: `"failed"`)

* `none` (value: `"none"`)

* `pending` (value: `"pending"`)

* `succeeded` (value: `"succeeded"`)




