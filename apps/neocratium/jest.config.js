module.exports = {
  name: 'neocratium',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/neocratium',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
