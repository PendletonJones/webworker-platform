import { Lambda } from 'aws-sdk';

const lambda = new Lambda({
    region: 'us-east-1'
});
const params = {
    FunctionName: 'mylambda',
    Publish: true,
    S3Bucket: 'front-end-deploy-bucket',
    S3Key: 'express-push-notification-example/bundle.zip',
};

lambda.updateFunctionCode(params, function(err, data) {
    if (err) console.log(err, err.stack);
    else console.log(data);
});

process.stdin.resume();