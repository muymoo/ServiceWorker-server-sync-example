 # Page online, async from cache

 User visits page while online and gets an online copy of the page. The train then goes into tunnel, at this point the user triggers an async request, and the request comes from offline cache if present (as the user no longer is connected to the network whilst in the tunnel). A good way of doing this might be the below:

 * User views TV shedule which also contains now+next. Page caches with the exception of now+next which is too time sensitive.