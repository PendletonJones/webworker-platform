module.exports = {
    name: 'slideshow',
    preset: '../../jest.config.js',
    coverageDirectory: '../../coverage/libs/slideshow',
    snapshotSerializers: [
        'jest-preset-angular/AngularSnapshotSerializer.js',
        'jest-preset-angular/HTMLCommentSerializer.js',
    ],
};
