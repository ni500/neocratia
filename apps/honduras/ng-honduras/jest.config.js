module.exports = {
  name: 'honduras-ng-honduras',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/apps/honduras/ng-honduras',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
