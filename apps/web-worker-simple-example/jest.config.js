module.exports = {
    name: 'web-worker-simple-example',
    preset: '../../jest.config.js',
    coverageDirectory: '../../coverage/apps/web-worker-simple-example',
    snapshotSerializers: [
        'jest-preset-angular/AngularSnapshotSerializer.js',
        'jest-preset-angular/HTMLCommentSerializer.js',
    ],
};
