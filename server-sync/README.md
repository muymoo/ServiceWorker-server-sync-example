# Server Sync
There are many apps where a user will use some content (possibly when they are offline), and some details of this useage will need to be sent back to a server when the server is available. For example, a newspaper app with a subscription allowance would want to know how many articles a user has consumed whilst offline. 

The test app could cache some content which a user has not yet accessed with ServiceWorker (the content could be articles they are likely to read). Once a user has consumed the content (offline or online) then the data should be sent to a server (for billing, for example). 

## To Run

```
npm install connect
node server.js
```
Go to http://localhost:3000
TODO: This should be https://localhost:3000. You can use openssl to create a self signed certificate. The code is currently commented out. 