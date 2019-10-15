module.exports = {
    name: 'service-worker-prefetch-example',
    preset: '../../jest.config.js',
    coverageDirectory: '../../coverage/apps/service-worker-prefetch-example',
    snapshotSerializers: [
        'jest-preset-angular/AngularSnapshotSerializer.js',
        'jest-preset-angular/HTMLCommentSerializer.js',
    ],
};
