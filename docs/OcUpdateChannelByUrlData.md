# SendbirdPlatformSdk.OcUpdateChannelByUrlData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channelUrl** | **String** | Specifies the URL of the channel to update. | 
**name** | **String** | Specifies the channel topic, or the name of the channel. The length is limited to 191 characters. | 
**coverUrl** | **String** | Specifies the URL of the cover image. The length is limited to 2,048 characters. | 
**coverFile** | **File** | Uploads the file for the channel cover image. | 
**customType** | **String** | Specifies the custom channel type which is used for channel grouping. The length is limited to 128 characters.&lt;br /&gt;&lt;br /&gt; Custom types are also used within Sendbird&#39;s [Advanced analytics](/docs/chat/v3/platform-api/guides/advanced-analytics) to segment metrics, which enables the sub-classification of data views. | 
**data** | **String** | Specifies additional channel information such as a long description of the channel or &#x60;JSON&#x60; formatted string. | 
**operatorIds** | **[String]** | Specifies an array of one or more user IDs to register as operators of the channel. The maximum allowed number of operators per channel is 100. Operators can delete any messages in the channel, and can also receive all messages that have been throttled.&lt;br/&gt;&lt;br/&gt;  Operators cannot view messages that have been [moderated by](/docs/chat/v3/platform-api/guides/filter-and-moderation) the domain filter or profanity filter. Only the sender will be notified that the message has been blocked. | 
**operators** | **[String]** | (Deprecated) Specifies the string IDs of the users registered as channel operators. Operators can delete any messages in the channel, and can also receive all messages that have been throttled. | 


