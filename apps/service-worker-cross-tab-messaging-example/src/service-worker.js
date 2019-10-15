

setInterval(() => {
    self.clients.matchAll().then(function(clients) {
        clients.forEach(function(client) {
          client.postMessage('Hello from Service Worker');
        });
    });
}, 5000);


self.onmessage = (event) => {
    console.log('message from client', event.data);
}