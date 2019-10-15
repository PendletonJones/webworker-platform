module.exports = {
    name: 'web-worker-multiple-workers-example',
    preset: '../../jest.config.js',
    coverageDirectory:
        '../../coverage/apps/web-worker-multiple-workers-example',
    snapshotSerializers: [
        'jest-preset-angular/AngularSnapshotSerializer.js',
        'jest-preset-angular/HTMLCommentSerializer.js',
    ],
};
