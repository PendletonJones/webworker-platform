module.exports = {
    name: 'service-worker-multiple-scopes-example',
    preset: '../../jest.config.js',
    coverageDirectory:
        '../../coverage/apps/service-worker-multiple-scopes-example',
    snapshotSerializers: [
        'jest-preset-angular/AngularSnapshotSerializer.js',
        'jest-preset-angular/HTMLCommentSerializer.js',
    ],
};
