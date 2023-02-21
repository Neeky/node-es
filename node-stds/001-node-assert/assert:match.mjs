import assert from 'node:assert'

const message = "hello world"

/**
 * assert.match(string, regexp[, message])
 * 断言 string 与 regexp 匹配
 */
assert.match(message, /hello/)


/**
 * assert.doesNotMatch(string, regexp[, message])
 * 
 * 断言 string 与 regexp 不匹配
 * 
 * 
 * node:internal/process/esm_loader:108
    internalBinding('errors').triggerUncaughtException(
                              ^

AssertionError [ERR_ASSERTION]: The input did not match the regular expression /foo/. Input:

'hello world'

    at file:///Users/jianglexing/data/repos/node-es/node-stds/001-node-assert/assert:match.mjs:18:8
    at ModuleJob.run (node:internal/modules/esm/module_job:194:25) {
  generatedMessage: true,
  code: 'ERR_ASSERTION',
  actual: 'hello world',
  expected: /foo/,
  operator: 'match'
}

Node.js v19.1.0
 */

assert.match(message, /foo/)