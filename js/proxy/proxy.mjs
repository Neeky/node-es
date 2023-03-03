#!/usr/bin/env node

/**
 * proxy 入门
 */
const handler = {
    /**
     * 
     * @param {*} target 实例名
     * @param {*} name   实例的属性名
     * @returns 
     */
    get(target, name) {
        console.log(`进入 get 沟子: target = ${target} name = ${name} .`)
        return 100
    }
}

const p = new Proxy({}, handler)
console.log(p.name)