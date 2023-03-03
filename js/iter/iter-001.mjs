#!/usr/bin/env node
/**
 * 实现 JS 的迭代算法
 */

class Color {
    values = []

    constructor(r, g, b) {
        this.values = [r, g, b]
    }

    [Symbol.iterator]() {
        let current = 0
        let that = this
        return {
            next() {
                    if (current < that.values.length) {
                        current = current + 1
                        return {value: that.values[current - 1], done:false}
                    }
                    return {value: undefined, done:true}
            }
        }
    }
}

let color = new Color(255, 255, 0)
for(let p of color) {
    console.log(p)
}