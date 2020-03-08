module.exports = {
  name: 'colombia-trabajen-vagos',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/apps/colombia/trabajen-vagos',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
