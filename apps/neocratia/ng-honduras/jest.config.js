module.exports = {
  name: 'neocratia-ng-honduras',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/apps/neocratia/ng-honduras',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
