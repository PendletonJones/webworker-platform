export async function registerHandler(event, context, callback) {
    const response = {
        statusCode: 201,
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify({ hello: 'world' }),
    };

    return response;
}
