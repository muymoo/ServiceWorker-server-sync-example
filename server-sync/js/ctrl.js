// Install process
this.oninstalled = function(event) {
  // Create a new cache to store the high score
  caches.set('highScore', new Cache());
};

// Request handling
this.addEventListener('fetch', function(event) {
  // TODO: Is there a way to listen for update/create events? Or do we only have GET events?
  // Somthing like cache.set(event.request.body);
  // TODO: Capture outgoing request and store highScore if backend is not available.
  // TODO: Once backend is availble (poll/ping it? wait for next successful request?), send updated high score.
});
