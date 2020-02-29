module.exports = {
  name: 'shared-themes',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/shared/themes',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
