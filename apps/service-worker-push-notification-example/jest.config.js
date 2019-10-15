module.exports = {
    name: 'service-worker-push-notification-example',
    preset: '../../jest.config.js',
    coverageDirectory:
        '../../coverage/apps/service-worker-push-notification-example',
    snapshotSerializers: [
        'jest-preset-angular/AngularSnapshotSerializer.js',
        'jest-preset-angular/HTMLCommentSerializer.js',
    ],
};
