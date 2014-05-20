# Installed Apps
The code for packaged web apps lives on the device rather then on a central web server (for example;[ FirefoxOS Packaged Apps](https://developer.mozilla.org/en-US/Marketplace/Publishing/Packaged_apps)). Normally when a developer wishes to add content to their web app they can just do this by pushing the update to the web server. In packaged apps this is harder. We have two use cases here related to downloading (or 'caching') of new / updated content on installed apps. 

* The app should be able to know (or be told) when there’s new content, and request that the new content be downloaded to the app (or, added to the cache).
* The app should be able to know (or be told) when there’s a new update, and request that the user downloads the new update.