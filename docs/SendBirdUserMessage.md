# SendbirdPlatformSdk.SendBirdUserMessage

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
**message** | **String** |  | [optional] 
**messageId** | **Number** |  | [optional] 
**messageParams** | [**SendBirdUserMessageParams**](SendBirdUserMessageParams.md) |  | [optional] 
**messageSurvivalSeconds** | **Number** |  | [optional] 
**messageType** | **String** |  | [optional] 
**metaArray** | [**ModelObject**](ModelObject.md) |  | [optional] 
**metaArrays** | [**[SendBirdMessageMetaArray]**](SendBirdMessageMetaArray.md) |  | [optional] 
**ogMetaData** | [**SendBirdOGMetaData**](SendBirdOGMetaData.md) |  | [optional] 
**parentMessage** | [**SendBirdMessageResponse**](SendBirdMessageResponse.md) |  | [optional] 
**parentMessageId** | **Number** |  | [optional] 
**parentMessageText** | **String** |  | [optional] 
**plugins** | [**[SendBirdPlugin]**](SendBirdPlugin.md) |  | [optional] 
**reactions** | [**[SendBirdReaction]**](SendBirdReaction.md) |  | [optional] 
**reqId** | **String** |  | [optional] 
**requestState** | **String** |  | [optional] 
**requestedMentionUserIds** | **[String]** |  | [optional] 
**sender** | [**SendBirdSender**](SendBirdSender.md) |  | [optional] 
**sendingStatus** | **String** |  | [optional] 
**silent** | **Boolean** |  | [optional] 
**threadInfo** | [**SendBirdThreadInfo**](SendBirdThreadInfo.md) |  | [optional] 
**translations** | [**ModelObject**](ModelObject.md) |  | [optional] 
**updatedAt** | **Number** |  | [optional] 



## Enum: MessageTypeEnum


* `user` (value: `"user"`)





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




