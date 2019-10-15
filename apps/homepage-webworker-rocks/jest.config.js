module.exports = {
    name: 'homepage-webworker-rocks',
    preset: '../../jest.config.js',
    coverageDirectory: '../../coverage/apps/homepage-webworker-rocks',
    snapshotSerializers: [
        'jest-preset-angular/AngularSnapshotSerializer.js',
        'jest-preset-angular/HTMLCommentSerializer.js',
    ],
};
