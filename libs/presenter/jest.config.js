module.exports = {
    name: 'presenter',
    preset: '../../jest.config.js',
    coverageDirectory: '../../coverage/libs/presenter',
    snapshotSerializers: [
        'jest-preset-angular/AngularSnapshotSerializer.js',
        'jest-preset-angular/HTMLCommentSerializer.js',
    ],
};
