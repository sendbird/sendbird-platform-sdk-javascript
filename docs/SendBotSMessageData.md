# SendbirdPlatformSdk.SendBotSMessageData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **String** | Specifies the content of the message sent by the bot. | 
**channelUrl** | **String** | Specifies the URL of the channel where the message is sent to. | 
**customType** | **String** | Specifies a custom message type which is used for message grouping. The length is limited to 128 characters. | 
**data** | **String** | Specifies additional message information such as custom font size, font type or &#x60;JSON&#x60; formatted string. | 
**sendPush** | **Boolean** | Determines whether to send a push notification for the message to the members of the channel (Default: true) | 
**mentioned** | **[Number]** | Specifies an array of one or more IDs of the users who get a notification for the message. | 
**markAsRead** | **Boolean** | Determines whether to mark the message as read for the bot. If set to false, the bot&#39;s unread_count and read_receipt remain unchanged after the message is sent. (Default: true) | 
**dedupId** | **String** | Specifies the unique ID for the message to prevent the same message data from getting sent to the channel. | 
**createdAt** | **Number** | Specifies the time that the message was sent, in [Unix milliseconds](/docs/chat/v3/platform-api/guides/miscellaneous#2-timestamps) format. | 


