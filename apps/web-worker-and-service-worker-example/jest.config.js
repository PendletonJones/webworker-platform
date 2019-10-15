module.exports = {
    name: 'web-worker-and-service-worker-example',
    preset: '../../jest.config.js',
    coverageDirectory:
        '../../coverage/apps/web-worker-and-service-worker-example',
    snapshotSerializers: [
        'jest-preset-angular/AngularSnapshotSerializer.js',
        'jest-preset-angular/HTMLCommentSerializer.js',
    ],
};
