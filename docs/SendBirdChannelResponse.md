# SendbirdPlatformSdk.SendBirdChannelResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**coverUrl** | **String** |  | [optional] 
**createdAt** | **Number** |  | [optional] 
**creator** | [**SendBirdUser**](SendBirdUser.md) |  | [optional] 
**customType** | **String** |  | [optional] 
**data** | **String** |  | [optional] 
**hiddenState** | **String** |  | [optional] 
**invitedAt** | **Number** |  | [optional] 
**inviter** | [**SendBirdUser**](SendBirdUser.md) |  | [optional] 
**isAccessCodeRequired** | **Boolean** |  | [optional] 
**isBroadcast** | **Boolean** |  | [optional] 
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
**lastMessage** | [**SendBirdMessageResponse**](SendBirdMessageResponse.md) |  | [optional] 
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
**unreadMentionCount** | **Number** |  | [optional] 
**unreadMessageCount** | **Number** |  | [optional] 
**url** | **String** |  | [optional] 
**operators** | [**[SendBirdUser]**](SendBirdUser.md) |  | [optional] 
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


* `none` (value: `"none"`)

* `operator` (value: `"operator"`)




