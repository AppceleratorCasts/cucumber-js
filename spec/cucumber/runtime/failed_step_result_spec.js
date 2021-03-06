require('../../support/spec_helper');

describe("Cucumber.Runtime.FailedStepResult", function() {
  var Cucumber = requireLib('cucumber');
  var stepResult, failureException;

  beforeEach(function() {
    failureException = createSpy("failure exception");
    stepResult       = Cucumber.Runtime.FailedStepResult(failureException);
  });

  describe("isFailed()", function() {
    it("is truthy", function() {
      expect(stepResult.isFailed()).toBeTruthy();
    });
  });

  describe("isPending()", function() {
    it("is falsy", function() {
      expect(stepResult.isPending()).toBeFalsy();
    });
  });

  describe("isSkipped()", function() {
    it("is falsy", function() {
      expect(stepResult.isSkipped()).toBeFalsy();
    });
  });

  describe("isSuccessful()", function() {
    it("is falsy", function() {
      expect(stepResult.isSuccessful()).toBeFalsy();
    });
  });

  describe("isUndefined()", function() {
    it("is falsy", function() {
      expect(stepResult.isUndefined()).toBeFalsy();
    });
  });

  describe("getFailureException()", function() {
    it("returns the exception passed to the constructor", function() {
      expect(stepResult.getFailureException()).toBe(failureException);
    });
  });
});
