# SendbirdPlatformSdk.SendBirdGroupChannelFilter

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channelNameContainsFilter** | **String** |  | [optional] 
**channelUrlsFilter** | **[String]** |  | [optional] 
**customTypeStartsWithFilter** | **String** |  | [optional] 
**customTypesFilter** | **[String]** |  | [optional] 
**hiddenChannelFilter** | **String** |  | [optional] 
**includeEmpty** | **Boolean** |  | [optional] 
**includeFrozen** | **Boolean** |  | [optional] 
**includeMetaData** | **Boolean** |  | [optional] 
**memberStateFilter** | **String** |  | [optional] 
**nicknameContainsFilter** | **String** |  | [optional] 
**publicChannelFilter** | **String** |  | [optional] 
**searchFilter** | [**SendBirdGroupChannelFilterSearchFilter**](SendBirdGroupChannelFilterSearchFilter.md) |  | [optional] 
**superChannelFilter** | **String** |  | [optional] 
**unreadChannelFilter** | **String** |  | [optional] 
**userIdsFilter** | [**SendBirdGroupChannelFilterUserIdsFilter**](SendBirdGroupChannelFilterUserIdsFilter.md) |  | [optional] 



## Enum: HiddenChannelFilterEnum


* `hidden_allow_auto_unhide` (value: `"hidden_allow_auto_unhide"`)

* `hidden_only` (value: `"hidden_only"`)

* `hidden_prevent_auto_unhide` (value: `"hidden_prevent_auto_unhide"`)

* `unhidden_only` (value: `"unhidden_only"`)





## Enum: MemberStateFilterEnum


* `all` (value: `"all"`)

* `invited_by_friend` (value: `"invited_by_friend"`)

* `invited_by_non_friend` (value: `"invited_by_non_friend"`)

* `invited_only` (value: `"invited_only"`)

* `joined_only` (value: `"joined_only"`)





## Enum: PublicChannelFilterEnum


* `all` (value: `"all"`)

* `private` (value: `"private"`)

* `public` (value: `"public"`)





## Enum: SuperChannelFilterEnum


* `all` (value: `"all"`)

* `nonsuper` (value: `"nonsuper"`)

* `super` (value: `"super"`)





## Enum: UnreadChannelFilterEnum


* `all` (value: `"all"`)

* `unread_message` (value: `"unread_message"`)




