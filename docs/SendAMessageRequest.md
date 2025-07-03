# SendbirdPlatformSdk.SendAMessageRequest

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
**messageType** | **String** | Specifies the type of the message. The value of ADMM represents an admin message. | 
**pollId** | **Number** |  | [optional] 
**pushMessageTemplate** | [**SendTextMessageRequestBodyPushMessageTemplate**](SendTextMessageRequestBodyPushMessageTemplate.md) |  | [optional] 
**sendPush** | **Boolean** |  | [optional] 
**sortedMetaarray** | [**[SendbirdSortedMetaarrayInner]**](SendbirdSortedMetaarrayInner.md) |  | [optional] 
**sound** | **String** |  | [optional] 
**volume** | **Number** |  | [optional] 
**files** | [**SendbirdFile**](SendbirdFile.md) |  | 
**requireAuth** | **Boolean** | Determines whether to require an authentication key to verify if the file is being properly accessed. Only the user who uploaded the file or users who are in the channel where the file was uploaded should have access. The authentication key managed internally by the Sendbird system is generated every time a user logs in to the Sendbird server and is valid for three days starting from the last login. If set to false, Sendbird tries to access a file without any key. To access encrypted files, such as the files in the Sendbird server which are by default encrypted, the property must be set to true. (Default: false) The require_auth parameter only works if the file or URL is managed by Sendbird, which means that when you upload files using multipart format or provide URLs that point to the files hosted on the Sendbird server. However, if the file is hosted on a server or service that is not managed by Sendbird, access control and authentication for the file should be handled by the respective server or service hosting the file. | [optional] 
**thumbnail1** | **String** |  | [optional] 
**thumbnail2** | **String** |  | [optional] 
**thumbnail3** | **String** |  | [optional] 
**thumbnails** | **[String]** |  | [optional] 



## Enum: MentionTypeEnum


* `users` (value: `"users"`)

* `channel` (value: `"channel"`)





## Enum: MessageTypeEnum


* `ADMM` (value: `"ADMM"`)




