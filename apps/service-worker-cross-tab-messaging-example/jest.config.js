module.exports = {
    name: 'service-worker-cross-tab-messaging-example',
    preset: '../../jest.config.js',
    coverageDirectory:
        '../../coverage/apps/service-worker-cross-tab-messaging-example',
    snapshotSerializers: [
        'jest-preset-angular/AngularSnapshotSerializer.js',
        'jest-preset-angular/HTMLCommentSerializer.js',
    ],
};
