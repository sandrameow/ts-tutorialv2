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


//second test
const fs = require('fs')
const path = require('path')
const util = require('util')

const readdir = util.promisify(fs.readdir)
const getRootDir = async (dir = process.cwd()) => {
  const pathToRoot = path.join(dir, '..')
  const rootDir = await readdir(pathToRoot)

  if (!rootDir) {
    throw new Error(`Could not find folder ${pathToRoot}`)
  }

  return rootDir
}

describe('ts-tutorialv2 folder', () => {
  let rootDir
  before(async () => {
    rootDir = await getRootDir()
  })

  it('should have an app.ts file', async () => {
    assert(rootDir.indexOf('app.ts') >= 0)
  })
})