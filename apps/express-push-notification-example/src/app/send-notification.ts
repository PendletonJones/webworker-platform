import webPush from 'web-push';
import {} from 'aws-lambda';

export async function sendNotificationHandler(event, context, callback) {
    const body = event.body;
    const response = {
        statusCode: 201,
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify({ hello: 'world' }),
    };

    const subscription = body.subscription;
    const options = {
        TTL: body.ttl,
    };

    await webPush.sendNotification(subscription, null, options);

    return response;
}
