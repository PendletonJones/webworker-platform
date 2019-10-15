export async function getPayloadHandler(event, context, callback) {
    const response = {
        statusCode: 200,
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify({ hello: 'world' }),
    };
    return response;
}
