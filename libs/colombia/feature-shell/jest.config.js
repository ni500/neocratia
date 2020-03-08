module.exports = {
  name: 'colombia-feature-shell',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/colombia/feature-shell',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
