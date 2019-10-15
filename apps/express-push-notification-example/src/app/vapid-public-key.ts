import webPush from 'web-push';

function getVapidKeys() {
    const keys = webPush.generateVAPIDKeys();

    const VAPID_PUBLIC_KEY = process.env.VAPID_PUBLIC_KEY || keys.publicKey;
    const VAPID_PRIVATE_KEY = process.env.VAPID_PRIVATE_KEY || keys.privateKey;

    if (!process.env.VAPID_PUBLIC_KEY || !process.env.VAPID_PRIVATE_KEY) {
        console.log(
            'You must set the VAPID_PUBLIC_KEY and VAPID_PRIVATE_KEY ' +
                'environment variables. You can use the following ones:',
            {
                VAPID_PRIVATE_KEY,
                VAPID_PUBLIC_KEY,
            },
        );
    }

    return {
        VAPID_PUBLIC_KEY,
        VAPID_PRIVATE_KEY,
    };
}

const { VAPID_PRIVATE_KEY, VAPID_PUBLIC_KEY } = getVapidKeys();

webPush.setVapidDetails(
    'https://webworker.rocks/',
    VAPID_PUBLIC_KEY,
    VAPID_PRIVATE_KEY,
);

export async function vapidPublicKeyHandler() {
    const response = {
        statusCode: 201,
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify({ VAPID_PUBLIC_KEY }),
    };

    return response;
}
