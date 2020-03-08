module.exports = {
  name: 'colombia-feature-politicos',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/colombia/feature-politicos',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
