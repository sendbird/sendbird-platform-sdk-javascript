# SendbirdPlatformSdk.CreateUserData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**userId** | **String** | Specifies a user&#39;s unique ID, which is used to sign into the Sendbird service. The length is limited to 80 characters.&lt;br /&gt;&lt;br /&gt; Do not use PII (Personally Identifiable Information) of your service, such as user email address, legal name or phone number. | 
**nickname** | **String** | Specifies a nickname for a new user. The length is limited to 80 characters. | 
**profileUrl** | **String** | Specifies the URL of the user&#39;s profile image. If left empty, no profile image is set for the user. The length is limited to 2,048 characters.&lt;br /&gt;&lt;br /&gt; The [domain filter](/docs/chat/v3/platform-api/guides/filter-and-moderation#2-domain-filter) filters out the request if the value of this property matches the filter&#39;s domain set. | 
**profileFile** | **File** | Uploads the file of the user&#39;s profile image. An acceptable image is limited to &#x60;JPG&#x60; (.jpg), &#x60;JPEG&#x60; (.jpeg), or &#x60;PNG&#x60; (.png) file of up to 25 MB. | 
**issueAccessToken** | **Boolean** | Determines whether to create an access token for the user. If true, an opaque string token is issued and provided upon creation, which should be passed whenever the user logs in. If false, an access token is not required when the user logs in. (Default: false) | 
**issueSessionToken** | **Boolean** | Determines whether to create a session token for the user. If true, an opaque string token is issued and provided upon creation, which should be passed whenever the user logs in. If false, a session token is not required when the user logs in. (Default: false) | 
**sessionTokenExpiresAt** | **Number** | Specifies the time for the issued session token to expire in [Unix milliseconds](/docs/chat/v3/platform-api/guides/miscellaneous#2-timestamps) format. The length should be 13. If not specified and the issue_session_token property above is true, the value of this property is set to the sum of the current timestamp and 604800000 by default, which indicates that the token will be valid for the next 7 days starting from the current timestamp. | 
**discoveryKeys** | **[String]** | Specifies an array of unique keys of the user which is provided to Sendbird server for discovering friends. By using the keys, the server can identify and match the user with other users. | 
**metadata** | **String** | Specifies a &#x60;JSON&#x60; object to store key-value items for additional user information such as phone number, email or a long description of the user. The key must not have a comma (,) and its length is limited to 128 characters. The value must be a string and its length is limited to 190 characters. This property can have up to 5 items. | 


