module.exports = {
  name: 'shared-data-politicians',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/shared/data-politicians',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
