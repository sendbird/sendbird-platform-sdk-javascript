# SendbirdPlatformSdk.SendBirdChannelResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channelUrl** | **String** |  | [optional] 
**coverUrl** | **String** |  | [optional] 
**createdAt** | **Number** |  | [optional] 
**createdBy** | [**SendBirdGroupChannelCreatedBy**](SendBirdGroupChannelCreatedBy.md) |  | [optional] 
**creator** | [**SendBirdUser**](SendBirdUser.md) |  | [optional] 
**customType** | **String** |  | [optional] 
**data** | **String** |  | [optional] 
**disappearingMessage** | [**SendBirdGroupChannelDisappearingMessage**](SendBirdGroupChannelDisappearingMessage.md) |  | [optional] 
**freeze** | **Boolean** |  | [optional] 
**ignoreProfanityFilter** | **Boolean** |  | [optional] 
**hiddenState** | **String** |  | [optional] 
**invitedAt** | **Number** |  | [optional] 
**inviter** | [**SendBirdGroupChannelInviter**](SendBirdGroupChannelInviter.md) |  | [optional] 
**isAccessCodeRequired** | **Boolean** |  | [optional] 
**isBroadcast** | **Boolean** |  | [optional] 
**isCreated** | **Boolean** |  | [optional] 
**isDiscoverable** | **Boolean** |  | [optional] 
**isDistinct** | **Boolean** |  | [optional] 
**isEphemeral** | **Boolean** |  | [optional] 
**isFrozen** | **Boolean** |  | [optional] 
**isHidden** | **Boolean** |  | [optional] 
**isPublic** | **Boolean** |  | [optional] 
**isPushEnabled** | **Boolean** |  | [optional] 
**isSuper** | **Boolean** |  | [optional] 
**joinedAt** | **Number** |  | [optional] 
**joinedMemberCount** | **Number** |  | [optional] 
**lastMessage** | [**SendBirdGroupChannelLastMessage**](SendBirdGroupChannelLastMessage.md) |  | [optional] 
**maxLengthMessage** | **Number** |  | [optional] 
**memberCount** | **Number** |  | [optional] 
**members** | [**[SendBirdMember]**](SendBirdMember.md) |  | [optional] 
**messageOffsetTimestamp** | **Number** |  | [optional] 
**messageSurvivalSeconds** | **Number** |  | [optional] 
**myCountPreference** | **String** |  | [optional] 
**myLastRead** | **Number** |  | [optional] 
**myMemberState** | **String** |  | [optional] 
**myMutedState** | **String** |  | [optional] 
**myPushTriggerOption** | **String** |  | [optional] 
**myRole** | **String** |  | [optional] 
**name** | **String** |  | [optional] 
**operators** | [**[SendBirdUser]**](SendBirdUser.md) |  | [optional] 
**smsFallback** | [**SendBirdGroupChannelSmsFallback**](SendBirdGroupChannelSmsFallback.md) |  | [optional] 
**unreadMentionCount** | **Number** |  | [optional] 
**unreadMessageCount** | **Number** |  | [optional] 
**channel** | [**SendBirdGroupChannelChannel**](SendBirdGroupChannelChannel.md) |  | [optional] 
**isDynamicPartitioned** | **Boolean** |  | [optional] 
**participantCount** | **Number** |  | [optional] 



## Enum: HiddenStateEnum


* `hidden_allow_auto_unhide` (value: `"hidden_allow_auto_unhide"`)

* `hidden_prevent_auto_unhide` (value: `"hidden_prevent_auto_unhide"`)

* `unhidden` (value: `"unhidden"`)





## Enum: MyMemberStateEnum


* `invited` (value: `"invited"`)

* `joined` (value: `"joined"`)

* `none` (value: `"none"`)





## Enum: MyMutedStateEnum


* `muted` (value: `"muted"`)

* `unmuted` (value: `"unmuted"`)





## Enum: MyPushTriggerOptionEnum


* `all` (value: `"all"`)

* `default` (value: `"default"`)

* `mention_only` (value: `"mention_only"`)

* `false` (value: `"false"`)





## Enum: MyRoleEnum


* `empty` (value: `""`)

* `none` (value: `"none"`)

* `operator` (value: `"operator"`)




