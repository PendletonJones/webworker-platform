module.exports = {
    name: 'service-worker-angular-pwa-example',
    preset: '../../jest.config.js',
    coverageDirectory: '../../coverage/apps/service-worker-angular-pwa-example',
    snapshotSerializers: [
        'jest-preset-angular/AngularSnapshotSerializer.js',
        'jest-preset-angular/HTMLCommentSerializer.js',
    ],
};
