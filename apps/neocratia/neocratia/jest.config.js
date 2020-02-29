module.exports = {
  name: 'neocratia-neocratia',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/apps/neocratia/neocratia',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
