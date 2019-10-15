module.exports = {
    name: 'service-worker-workbox-example',
    preset: '../../jest.config.js',
    coverageDirectory: '../../coverage/apps/service-worker-workbox-example',
    snapshotSerializers: [
        'jest-preset-angular/AngularSnapshotSerializer.js',
        'jest-preset-angular/HTMLCommentSerializer.js',
    ],
};
