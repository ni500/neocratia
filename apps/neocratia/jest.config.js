module.exports = {
  name: 'neocratia',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/neocratia',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
