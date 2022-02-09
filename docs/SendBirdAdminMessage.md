# SendbirdPlatformSdk.SendBirdAdminMessage

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
**message** | **String** |  | [optional] 
**messageId** | **Number** |  | [optional] 
**messageType** | **String** |  | [optional] 
**metaArray** | [**SBObject**](SBObject.md) |  | [optional] 
**metaArrays** | [**[SendBirdMessageMetaArray]**](SendBirdMessageMetaArray.md) |  | [optional] 
**ogMetaData** | [**SendBirdOGMetaData**](SendBirdOGMetaData.md) |  | [optional] 
**parentMessage** | [**SendBirdMessageResponse**](SendBirdMessageResponse.md) |  | [optional] 
**parentMessageId** | **Number** |  | [optional] 
**parentMessageText** | **String** |  | [optional] 
**reactions** | [**[SendBirdReaction]**](SendBirdReaction.md) |  | [optional] 
**sendingStatus** | **String** |  | [optional] 
**silent** | **Boolean** |  | [optional] 
**threadInfo** | [**SendBirdThreadInfo**](SendBirdThreadInfo.md) |  | [optional] 
**translations** | [**SBObject**](SBObject.md) |  | [optional] 
**updatedAt** | **Number** |  | [optional] 



## Enum: MessageTypeEnum


* `MESG` (value: `"MESG"`)

* `ADMM` (value: `"ADMM"`)

* `FILE` (value: `"FILE"`)





## Enum: SendingStatusEnum


* `canceled` (value: `"canceled"`)

* `failed` (value: `"failed"`)

* `none` (value: `"none"`)

* `pending` (value: `"pending"`)

* `succeeded` (value: `"succeeded"`)




