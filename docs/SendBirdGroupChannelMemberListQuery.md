# SendbirdPlatformSdk.SendBirdGroupChannelMemberListQuery

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hasNext** | **Boolean** |  | [optional] 
**isLoading** | **Boolean** |  | [optional] 
**limit** | **Number** |  | [optional] 
**memberStateFilter** | **String** |  | [optional] 
**mutedMemberFilter** | **String** |  | [optional] 
**nicknameStartsWithFilter** | **String** |  | [optional] 
**operatorFilter** | **String** |  | [optional] 
**order** | **String** |  | [optional] 



## Enum: MemberStateFilterEnum


* `all` (value: `"all"`)

* `invited_by_friend` (value: `"invited_by_friend"`)

* `invited_by_non_friend` (value: `"invited_by_non_friend"`)

* `invited_only` (value: `"invited_only"`)

* `joined_only` (value: `"joined_only"`)





## Enum: MutedMemberFilterEnum


* `all` (value: `"all"`)

* `muted` (value: `"muted"`)

* `unmuted` (value: `"unmuted"`)





## Enum: OperatorFilterEnum


* `all` (value: `"all"`)

* `nonoperator` (value: `"nonoperator"`)

* `operator` (value: `"operator"`)





## Enum: OrderEnum


* `member_nickname_alphabetical` (value: `"member_nickname_alphabetical"`)

* `operator_then_member_alphabetical` (value: `"operator_then_member_alphabetical"`)




