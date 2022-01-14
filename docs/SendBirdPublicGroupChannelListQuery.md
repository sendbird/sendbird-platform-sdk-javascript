# SendbirdPlatformSdk.SendBirdPublicGroupChannelListQuery

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channelNameContainsFilter** | **String** |  | [optional] 
**channelUrlsFilter** | **[String]** |  | [optional] 
**customTypeStartsWithFilter** | **String** |  | [optional] 
**customTypesFilter** | **[String]** |  | [optional] 
**hasNext** | **Boolean** |  | [optional] 
**includeEmpty** | **Boolean** |  | [optional] 
**includeFrozen** | **Boolean** |  | [optional] 
**isLoading** | **Boolean** |  | [optional] 
**limit** | **Number** |  | [optional] 
**membershipFilter** | **String** |  | [optional] 
**metadataKey** | **String** |  | [optional] 
**metadataOrderKeyFilter** | **String** |  | [optional] 
**metadataValueStartsWith** | **String** |  | [optional] 
**metadataValues** | **[String]** |  | [optional] 
**order** | **String** |  | [optional] 
**superChannelFilter** | **String** |  | [optional] 



## Enum: MembershipFilterEnum


* `all` (value: `"all"`)

* `joined` (value: `"joined"`)





## Enum: OrderEnum


* `channel_name_alphabetical` (value: `"channel_name_alphabetical"`)

* `chronological` (value: `"chronological"`)

* `metadata_value_alphabetical` (value: `"metadata_value_alphabetical"`)





## Enum: SuperChannelFilterEnum


* `all` (value: `"all"`)

* `broadcast_only` (value: `"broadcast_only"`)

* `nonsuper` (value: `"nonsuper"`)

* `super` (value: `"super"`)




