const assert = require("assert");

const { doesNotThrow, isModuleInstalled } = require("./utils");

describe("package.json", () => {
  // 1.1.
  it('should have "typescript" installed', async () => {
    assert.ok(
      await doesNotThrow(() =>
        isModuleInstalled({
          name: "typescript",
          type: "dependency"
        })
      )
    );
  });
});