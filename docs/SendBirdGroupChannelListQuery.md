# SendbirdPlatformSdk.SendBirdGroupChannelListQuery

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channelNameContainsFilter** | **String** |  | [optional] 
**channelUrlsFilter** | **[String]** |  | [optional] 
**customTypeFilter** | **String** |  | [optional] 
**customTypeStartsWithFilter** | **String** |  | [optional] 
**customTypesFilter** | **[String]** |  | [optional] 
**hasNext** | **Boolean** |  | [optional] 
**hiddenChannelFilter** | **String** |  | [optional] 
**includeEmpty** | **Boolean** |  | [optional] 
**includeFrozen** | **Boolean** |  | [optional] 
**isLoading** | **Boolean** |  | [optional] 
**limit** | **Number** |  | [optional] 
**memberStateFilter** | **String** |  | [optional] 
**metadataKey** | **String** |  | [optional] 
**metadataOrderKeyFilter** | **String** |  | [optional] 
**metadataValueStartsWith** | **String** |  | [optional] 
**metadataValues** | **[String]** |  | [optional] 
**nicknameContainsFilter** | **String** |  | [optional] 
**order** | **String** |  | [optional] 
**publicChannelFilter** | **String** |  | [optional] 
**queryType** | **String** |  | [optional] 
**superChannelFilter** | **String** |  | [optional] 
**unreadChannelFilter** | **String** |  | [optional] 
**userIdsExactFilter** | **[String]** |  | [optional] 
**userIdsFilter** | **[String]** |  | [optional] 
**userIdsFilterExactMatch** | **Boolean** |  | [optional] 
**userIdsIncludeFilter** | **[String]** |  | [optional] 
**userIdsIncludeFilterQueryType** | **String** |  | [optional] 



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





## Enum: OrderEnum


* `channel_name_alphabetical` (value: `"channel_name_alphabetical"`)

* `chronological` (value: `"chronological"`)

* `latest_last_message` (value: `"latest_last_message"`)

* `metadata_value_alphabetical` (value: `"metadata_value_alphabetical"`)





## Enum: PublicChannelFilterEnum


* `all` (value: `"all"`)

* `private` (value: `"private"`)

* `public` (value: `"public"`)





## Enum: QueryTypeEnum


* `AND` (value: `"AND"`)

* `OR` (value: `"OR"`)





## Enum: SuperChannelFilterEnum


* `all` (value: `"all"`)

* `broadcast_only` (value: `"broadcast_only"`)

* `nonsuper` (value: `"nonsuper"`)

* `super` (value: `"super"`)





## Enum: UnreadChannelFilterEnum


* `all` (value: `"all"`)

* `unread_message` (value: `"unread_message"`)





## Enum: UserIdsIncludeFilterQueryTypeEnum


* `AND` (value: `"AND"`)

* `OR` (value: `"OR"`)




