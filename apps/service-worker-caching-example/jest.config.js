module.exports = {
    name: 'service-worker-caching-example',
    preset: '../../jest.config.js',
    coverageDirectory: '../../coverage/apps/service-worker-caching-example',
    snapshotSerializers: [
        'jest-preset-angular/AngularSnapshotSerializer.js',
        'jest-preset-angular/HTMLCommentSerializer.js',
    ],
};
