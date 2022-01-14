# SendbirdPlatformSdk.SendMessageData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channelType** | **String** | Specifies the type of the channel. Either open_channels or group_channels. | 
**channelUrl** | **String** | Specifies the URL of the channel to send a message to. | 
**messageType** | **String** | Specifies the type of the message as ADMM. | 
**message** | **String** | Specifies the content of the message. | 
**customType** | **String** | Specifies a custom message type which is used for message grouping. The length is limited to 128 characters.&lt;br /&gt;&lt;br /&gt; Custom types are also used within Sendbird&#39;s [Advanced analytics](/docs/chat/v3/platform-api/guides/advanced-analytics) to segment metrics, which enables the sub-classification of data views. | 
**data** | **String** | Specifies additional message information such as custom font size, font type or &#x60;JSON&#x60; formatted string. | 
**sendPush** | **Boolean** | Determines whether to send a push notification for the message to the members of the channel (applicable to group channels only). Unlike text and file messages, a push notification for an admin message is not sent by default. (Default: false) | 
**mentionType** | **String** | Specifies the mentioning type which indicates the user scope who will get a notification for the message. Acceptable values are users and channel. If set to users, only the specified users with the mentioned_users property below will get notified. If set to channel, all users in the channel will get notified. (Default: users) | 
**mentionedUserIds** | **[Number]** | Specifies an array of one or more IDs of the users who will get a notification for the message. | 
**isSilent** | **Boolean** | Determines whether to send a message without updating some of the channel properties. If a message is sent in a channel, with this property set to true, the channel&#39;s last_message is updated only for the sender while its unread_message_count remains unchanged for all channel members. Also, the message doesn&#39;t send a push notification to message receivers. If the message is sent to a hidden channel, the channel still remains hidden. (Default: false)&lt;/br&gt;&lt;/br&gt;  Once the value of this property is set, it can&#39;t be reverted. | 
**sortedMetaarray** | **String** | Specifies a &#x60;JSON&#x60; object of one or more key-values items which store additional message information. Each item consists of a key and the values in an array. Items are saved and will be returned in the exact order they&#39;ve been specified. | 
**createdAt** | **Number** | Specifies the time that the message was sent, in [Unix milliseconds](/docs/chat/v3/platform-api/guides/miscellaneous#2-timestamps) format. This property can be used when migrating the messages of other system to Sendbird server. If specified, the server sets the message&#39;s creation time as the property value. | 
**dedupId** | **String** | Specifies the unique message ID created by other system. In general, this property is used to prevent the same message data from getting inserted when migrating the messages of the other system to Sendbird server. If specified, the server performs a duplicate check using the property value. | 
**metaarray** | **String** | (Deprecated) Specifies a &#x60;JSON&#x60; object of one or more key-values items which store additional message information. The item consists of a key and the values in an array. | 


