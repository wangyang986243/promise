/*
 * @Description: Promise 实现
 * @Author: wangyang
 * @Date: 2022-03-25 14:11:51
 * @LastEditors: wangyang
 * @LastEditTime: 2022-03-25 14:21:08
 */

class Promise {
    constructor(executor) {
        let resolve = () => {
            console.log('将状态改成成功，记录成功的信息')
        }
        let reject = () => {
            console.log('将状态改成失败，记录失败的信息')
        }
        executor(resolve, reject)
    }

}

//promise 里面的回调叫 executor函数
const p = new Promise((resolve, reject) => {
    //这里的代码是立即执行的
    console.log('resolve', resolve)
    console.log('reject', reject)
    console.log('立即执行')
})

console.log(p)