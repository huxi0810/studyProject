/**
 * 千位分隔符
 * @param {*} initNuber - 需要格式哈的数据，如果为非数字，则将原始值返回
 * @param {*} toFixed - 保留小数位数，默认两位
 * @return {*} 返回值String类型
 */
export function Func(initNuber, toFixed = 2) {
    let number = parseFloat(initNuber)
    if (isNaN(number)) {
        return initNuber
    }
    if (!isNaN(toFixed)) {
        number = number.toFixed(parseInt(toFixed, 10))
    }
    return number && number.toString().replace(/(\d)(?=(\d{3})+\.)/g, ($0, $1) => `${$1},`)
}

const a = Func(34.3353)
console.log(a, '打印a值')


/**
 * 功能：节流器，在指定时间内只执行一次
 * @param {*} fn -需执行的函数
 * @param {*} delay 延迟执行时间
 */
export function _throttle(fn, delay) {
    let [start, timer, arg] = [0, null, null]

    function later() { //通过定时器延迟执行，延迟时间通过delay决定
        let sub = new Date() - start
        if (sub >= delay) {
            fn(...arg);
            [start, timer, arg] = [0, null, null]
        } else { //每次连续滚动会有一个偏差值，将偏差的时间继续执行定时器
            timer = setTimeout(later, delay - sub)
        }
    }
    return function (...args) { //滚动触发
        arg = args
        start = new Date() - 0
        if (!timer) {
            timer = setTimeout(later, delay);
        }
    }
}