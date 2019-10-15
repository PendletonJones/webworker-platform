
// enhancement should be progressive
if ('serviceWorker' in navigator) {
    /**
     * Wait for the window to load, then register the service worker.
     * This prevents occupying bandwidth that could be used to load the page
     */
    window.addEventListener('load', async function() {
        /**
         * Wait for the registration to complete, then you can use your
         * service worker
         */
        const registration = await navigator.serviceWorker.register(
            '/service-worker.js',
            { scope: '/' },
        );
        console.log(
            'ServiceWorker registration successful with scope: ',
            registration.scope,
        );

        if(registration.installing){
            registration.installing.onstatechange = function(event) {
                console.log(event);
                console.log(navigator.serviceWorker);
                if (this.state === 'installed') {
                    console.log("new sw is activated now.");
                    createServiceWorkerChannel();
                    return;
                }
            };
        } else {
            if(!navigator.serviceWorker.controller){
                console.info("controller is still none for some reason.");
                // return;
            }
            if(registration.waiting){
                console.log("worker was waiting");
                // return;
            }
            if(registration.active){
                createServiceWorkerChannel();
                return;
            }
        }

        console.log(navigator.serviceWorker.controller, 'controller');

    });
}

const clientId = Math.random();


function createServiceWorkerChannel() {

    navigator.serviceWorker.addEventListener('message', function(event){
        console.log(`Client ${clientId} Received Message: `,  event.data);
        navigator.serviceWorker.controller.postMessage(`Hello from client ${clientId}`);
    });

}


