var builder = require('junit-report-builder');

// Create a test suite
var suite = builder.testSuite().name('My suite');

// Create a test case
var testCase = suite.testCase()
  .className('my.test.Class')
  .name('My first test');

// Create another test case which is marked as failed
var testCase = suite.testCase()
  .className('my.test.Class')
  .name('My second test')
  .failure();

builder.writeTo('test-report.xml');