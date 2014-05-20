# Prefetch Content

Many apps (e.g. news and blogging) will need to get fresh content from a server. In this use case:

* the app 'shell' is held within a ServiceWorker cache
* some content is also held in a ServiceWorker cache or LocalStorage (this content was originally pulled from a server and displayed to the user on a previous session)
* the app would first try to pull new content from the server
** if succesful display to the user
** if unsuccessful the app takes the last piece of content from another ServiceWorker cache ''or'' from LocalStorage and displays this instead.

The user may benefit from some message to say "you have the most up to date content" (or something similar and less wordy!).