![Sendbird banner image](http://ww1.prweb.com/prfiles/2021/09/14/18371217/Sendbird_Logo_RGB_lg.png)

# [Sendbird JavaScript Platform SDK](https://sendbird.com/docs/chat/v3/platform-api/getting-started/prepare-to-use-api)


[![link to docs](https://img.shields.io/badge/SDK-docs-green)](/docs)

This is a Node.js package that makes talking to the [Sendbird Platform API](https://sendbird.com/docs/chat/v3/platform-api/getting-started/prepare-to-use-api) easier. With this library you can extend your Sendbird integration to include advanced features like channel automation and user management.

# 🔥 Quick start

```javascript  
import SendbirdPlatformSdk from 'sendbird_platform_sdk';

const userId = "1234";
const name = "bob";
const profileUrl = "https://picsum.photos/200";

const opts = {
    'apiToken': 'YOUR_MASTER_API_KEY',
    'createUserData': new SendbirdPlatformSdk.CreateUserData(userId, name, profileUrl),
};

async function createUser() {
    const userApiInstance = new SendbirdPlatformSdk.UserApi();
    userApiInstance.apiClient.basePath = `https://api-${"YOUR_APP_ID"}.sendbird.com`;
    try {
        const data = await userApiInstance.createUser(opts);
        console.log(data);
    } catch (e) {
        console.log(e);
    }
}

createUser();

```

# ⚠️ Warnings
 1. This package is not currently in npm. Please see  the Local development section for installation instructions. 


 2. This library is intended for server to server requests. **Do not use in a browser environment**. This SDK uses the Master API Token, which should never be exposed to the outside world like in a webpage or app.

# ⚒️ Prerequisite
In order to make requests with this SDK you will need you master API token. This can be found through the [Sendbird dashboard](https://dashboard.sendbird.com/).  Each app you create in Sendbird has its own master api token. These tokens can be found in Settings > Application > General.

![how to find you api token](https://i.imgur.com/0YMKtpX.png)

# 💻 Requirements 
You will need [Node.js](https://nodejs.org/en/download/) installed. This has been developed and tested with NodeJS 17+.

# ⚙️ Installation 
🚨 Package not yet in npm 🚨
```npm install sendbird_platform_sdk```

# 🤓 Local Development
To run locally we need to make use of the [npm link](https://docs.npmjs.com/cli/v8/commands/npm-link) command. You will require two terminal tabs. 

Please follow these steps:
##### Terminal 1
1. Clone this repo to your machine  ```git clone git@github.com:sendbird/sendbird-platform-sdk```
2. Move into the newly cloned repo  ```cd sendbird-platform-sdk```
3. Install node modules  ```npm install```
4. Build the bundled JS   ```npm run build```
5. Link the package   ```npm link```

##### Terminal 2
1. Create a new npm package or move into and existing one  ```mkdir app-using-sendbird-chat```
```npm init -y```
2. Link package to sendbird-platform-sdk ```npm link path/to/sdk/sendbird-platform-sdk```

The linking step is demonstrated visually here.

![npm link walkthrough](https://i.imgur.com/897SxfC.gif)


# 🗃️ Documentation 
All the documentation for this project lives in the /docs directory of this repo. 

##### Helpful links

|       | Documentation |
| ----------- | ----------- |
| Announcements   | docs/AnnouncementsApi.md|
| Application | docs/ApplicationApi.md  |
| BotInterface | docs/BotInterfaceApi.md  |
| GroupChannel | docs/GroupChannelApi.md  |
| Messages | docs/MessagesApi.md  |
| OpenChannel | docs/OpenChannelApi.md  |
| User | docs/UserApi.md  |
| Webhooks | docs/WebhooksApi.md  |


# 👀 Examples
### User Management 
TODO
### Authentication
TODO
### Authentication
TODO
### Unread counts
TODO
### Scheduling Announcements
TODO
### Channel Automation
TODO
### Automatic Message
TODO
 
# 🙄 Gotchas
