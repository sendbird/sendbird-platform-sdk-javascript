# SendbirdPlatformSdk.LeaveAChannelRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**userIds** | **[String]** | Specifies an array of one or more IDs of the users to leave the channel. | 
**shouldLeaveAll** | **Boolean** | Determines whether to make all members leave the channel. (Default: false) | [optional] 
**shouldRemoveOperatorStatus** | **Boolean** | Determines whether to remove a user from the channel&#39;s operator list if the user who is leaving the channel is an operator. (Default: false) | [optional] 
**reason** | **String** | Specifies the reason for leaving a channel. Acceptable values are admin_removed, admin_deleted, admin_deactivated, left_by_own_choice, and channel_operator_removed. | [optional] 



## Enum: ReasonEnum


* `LEFT_BY_OWN_CHOICE` (value: `"LEFT_BY_OWN_CHOICE"`)

* `CHANNEL_OPERATOR_REMOVED` (value: `"CHANNEL_OPERATOR_REMOVED"`)

* `ADMIN_REMOVED` (value: `"ADMIN_REMOVED"`)

* `ADMIN_DELETED` (value: `"ADMIN_DELETED"`)

* `ADMIN_DEACTIVATED` (value: `"ADMIN_DEACTIVATED"`)




