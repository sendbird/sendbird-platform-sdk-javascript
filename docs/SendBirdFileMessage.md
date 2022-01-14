# SendbirdPlatformSdk.SendBirdFileMessage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**appleCriticalAlertOptions** | [**SendBirdAppleCriticalAlertOptions**](SendBirdAppleCriticalAlertOptions.md) |  | [optional] 
**channelType** | **String** |  | [optional] 
**channelUrl** | **String** |  | [optional] 
**createdAt** | **Number** |  | [optional] 
**customType** | **String** |  | [optional] 
**data** | **String** |  | [optional] 
**errorCode** | **Number** |  | [optional] 
**isReplyToChannel** | **Boolean** |  | [optional] 
**mentionType** | **String** |  | [optional] 
**mentionedUsers** | [**[SendBirdUser]**](SendBirdUser.md) |  | [optional] 
**messageId** | **Number** |  | [optional] 
**messageParams** | [**SendBirdFileMessageParams**](SendBirdFileMessageParams.md) |  | [optional] 
**messageSurvivalSeconds** | **Number** |  | [optional] 
**messageType** | **String** |  | [optional] 
**metaArray** | [**ModelObject**](ModelObject.md) |  | [optional] 
**metaArrays** | [**[SendBirdMessageMetaArray]**](SendBirdMessageMetaArray.md) |  | [optional] 
**name** | **String** |  | [optional] 
**ogMetaData** | [**SendBirdOGMetaData**](SendBirdOGMetaData.md) |  | [optional] 
**parentMessage** | [**AnyOfSendBirdAdminMessageSendBirdUserMessageSendBirdFileMessage**](AnyOfSendBirdAdminMessageSendBirdUserMessageSendBirdFileMessage.md) |  | [optional] 
**parentMessageId** | **Number** |  | [optional] 
**parentMessageText** | **String** |  | [optional] 
**plainUrl** | **String** |  | [optional] 
**reactions** | [**[SendBirdReaction]**](SendBirdReaction.md) |  | [optional] 
**reqId** | **String** |  | [optional] 
**requestState** | **String** |  | [optional] 
**requestedMentionUserIds** | **[String]** |  | [optional] 
**sender** | [**SendBirdSender**](SendBirdSender.md) |  | [optional] 
**sendingStatus** | **String** |  | [optional] 
**silent** | **Boolean** |  | [optional] 
**size** | **Number** |  | [optional] 
**threadInfo** | [**SendBirdThreadInfo**](SendBirdThreadInfo.md) |  | [optional] 
**thumbnails** | [**[SendBirdThumbnailObject]**](SendBirdThumbnailObject.md) |  | [optional] 
**type** | **String** |  | [optional] 
**updatedAt** | **Number** |  | [optional] 
**url** | **String** |  | [optional] 



## Enum: MessageTypeEnum


* `file` (value: `"file"`)





## Enum: RequestStateEnum


* `failed` (value: `"failed"`)

* `none` (value: `"none"`)

* `pending` (value: `"pending"`)

* `succeeded` (value: `"succeeded"`)





## Enum: SendingStatusEnum


* `canceled` (value: `"canceled"`)

* `failed` (value: `"failed"`)

* `none` (value: `"none"`)

* `pending` (value: `"pending"`)

* `succeeded` (value: `"succeeded"`)




