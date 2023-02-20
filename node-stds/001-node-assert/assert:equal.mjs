import assert from 'node:assert/strict'

/**
 * 作者: 蒋乐兴
 * 时间: 2023-02-20
 * 断言两个值理否相等
 * assert.equal(actual, expected, 'message')
 * 
 * 1 如果断言为真，这个函数会直接静默
 * 2 如果断言为假，这个函数会报异常
 */

/**
 * 静默
 */
assert.equal(1,1)


/**
 * node:internal/process/esm_loader:108
    internalBinding('errors').triggerUncaughtException(
                              ^

AssertionError [ERR_ASSERTION]: 这里是 message，它会被打包到异常字符串里面
    at file:///Users/jianglexing/data/repos/node-es/node-stds/001-node-assert/001.mjs:23:8
    at ModuleJob.run (node:internal/modules/esm/module_job:194:25) {
  generatedMessage: false,
  code: 'ERR_ASSERTION',
  actual: 1,
  expected: 2,
  operator: 'strictEqual'
}

Node.js v19.1.0
 */
assert.equal(1,2 , '这里是 message，它会被打包到异常字符串里面')