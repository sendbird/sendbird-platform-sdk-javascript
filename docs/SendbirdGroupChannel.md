# SendbirdPlatformSdk.SendbirdGroupChannel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channelUrl** | **String** |  | 
**countPreference** | **String** |  | [optional] 
**coverUrl** | **String** |  | [optional] 
**createdAt** | **Number** |  | [optional] 
**createdBy** | [**SendbirdBasicUserInfo**](SendbirdBasicUserInfo.md) |  | [optional] 
**customType** | **String** |  | [optional] 
**data** | **String** |  | [optional] 
**deliveryReceipt** | **Object** |  | [optional] 
**disappearingMessage** | [**SendbirdDisappearingMessage**](SendbirdDisappearingMessage.md) |  | [optional] 
**freeze** | **Boolean** |  | [optional] 
**hasAiBot** | **Boolean** |  | [optional] 
**hasBot** | **Boolean** |  | [optional] 
**hiddenState** | **String** |  | [optional] 
**ignoreProfanityFilter** | **Boolean** |  | [optional] 
**invitedAt** | **Number** |  | [optional] 
**inviter** | [**SendbirdBasicUserInfo**](SendbirdBasicUserInfo.md) |  | [optional] 
**isAccessCodeRequired** | **Boolean** |  | [optional] 
**isBroadcast** | **Boolean** |  | [optional] 
**isDiscoverable** | **Boolean** |  | [optional] 
**isDistinct** | **Boolean** |  | [optional] 
**isEphemeral** | **Boolean** |  | [optional] 
**isExclusive** | **Boolean** |  | [optional] 
**isHidden** | **Boolean** |  | [optional] 
**isMuted** | **Boolean** |  | [optional] 
**isPublic** | **Boolean** |  | [optional] 
**isPushEnabled** | **Boolean** |  | [optional] 
**isSuper** | **Boolean** |  | [optional] 
**joinedMemberCount** | **Number** |  | [optional] 
**joinedTs** | **Number** |  | [optional] 
**lastMessage** | [**SendbirdMessageResponse**](SendbirdMessageResponse.md) |  | [optional] 
**maxLengthMessage** | **Number** |  | [optional] 
**memberCount** | **Number** |  | [optional] 
**memberState** | **String** |  | [optional] 
**members** | [**[SendbirdMember]**](SendbirdMember.md) |  | [optional] 
**messageSurvivalSeconds** | **Number** |  | [optional] 
**metadata** | **Object** |  | [optional] 
**myRole** | **String** |  | [optional] 
**name** | **String** |  | [optional] 
**pushTriggerOption** | [**SendbirdPushTriggerOption**](SendbirdPushTriggerOption.md) |  | [optional] 
**readReceipt** | **{String: Number}** |  | [optional] 
**smsFallback** | [**SendbirdSmsFallback**](SendbirdSmsFallback.md) |  | [optional] 
**tsMessageOffset** | **Number** |  | [optional] 
**unreadMentionCount** | **Number** |  | [optional] 
**unreadMessageCount** | **Number** |  | [optional] 
**userLastRead** | **Number** |  | [optional] 



## Enum: CountPreferenceEnum


* `false` (value: `"false"`)

* `all` (value: `"all"`)

* `unread_message_count_only` (value: `"unread_message_count_only"`)

* `unread_mentioned_count_only` (value: `"unread_mentioned_count_only"`)





## Enum: HiddenStateEnum


* `hidden_allow_auto_unhide` (value: `"hidden_allow_auto_unhide"`)

* `hidden_prevent_auto_unhide` (value: `"hidden_prevent_auto_unhide"`)

* `unhidden` (value: `"unhidden"`)





## Enum: MemberStateEnum


* `invited` (value: `"invited"`)

* `joined` (value: `"joined"`)

* `none` (value: `"none"`)





## Enum: MyRoleEnum


* `empty` (value: `""`)

* `none` (value: `"none"`)

* `operator` (value: `"operator"`)




