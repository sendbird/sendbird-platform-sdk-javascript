# SendbirdPlatformSdk.HideAChannelRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowAutoUnhide** | **Boolean** | Determines the state and operating behavior of the channel in a channel list. If set to true, the channel is hidden from a user&#39;s channel list but it will reappear when there is a new message. If set to false, the channel is hidden from a user&#39;s channel list and it will remain hidden unless the value of the property changes to true through [unarchiving](#2-unhide-or-unarchive-a-channel). (Default: true)&lt;br /&gt;&lt;br /&gt; When a user who has hidden the channel sends a message in that channel through the [Platform API](/docs/chat/v3/platform-api/guides/messages#2-send-a-message), the &#x60;allow_auto_unhide&#x60; property is changed to true, making the channel reappear in the channel list. | [optional] 
**hidePreviousMessages** | **Boolean** | When the channel gets appeared back in either the list of the user in the user_id property or the lists of all channel members (should_hide_all &#x3D; true), determines whether to conceal the messages sent and received before hiding or archiving the channel. (Default: false)&lt;br /&gt;&lt;br /&gt; This property is effective only when the value of the [global application settings resource](/docs/chat/v3/platform-api/guides/global-application-settings#-3-resource-representation)&#39;s display_past_message property is false. | [optional] 
**shouldHideAll** | **Boolean** | Determines whether to make the specified channel disappear from the channel list of all channel members. When this is set to true, the user_id property isn&#39;t effective and doesn&#39;t need to be specified in the request. (Default: false) | [optional] 
**userId** | **String** | Specifies the unique ID of the user whose channel will be hidden or archived from the list. This property is required when should_hide_all is set to false, which is the default value. However, when should_hide_all is set to true, this property isn&#39;t effective. | 


