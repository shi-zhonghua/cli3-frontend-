// 根据身份证号码判断男女
let sexIdcardFilter = value => {
    if (!value) {
        return ''
    } else {
        let data = value.substr(16, 1) % 2 === 1 ? '男' : '女'
        return data
    }
}

// 身份证号脱敏('331082199708094687' 转换成 '33108219********87') 第8位开始替换8个
let IDcardHide = num => {
    let data = num.replace(/(\d{8})\d{8}(\d*)/, '$1********$2')
    return data
}

// 手机号脱敏('13912345678' 转换成 '139****5678') 第3位开始替换4个
let telHide = num => {
    let data = num.replace(/(\d{3})\d{4}(\d*)/, '$1****$2')
    return data
}

// 姓名脱敏(小明 转换成 *明   李小明 转换成 李*明   欧阳小明 转换成 欧**明)
let nameHide = name => {
    if (name.length === 2) {
        return new Array(name.length).join('*') + name.substr(-1)
    } else {
        return (
            name.substr(0, 1) + new Array(name.length - 1).join('*') + name.substr(-1)
        )
    }
}

/**
 *  @description 格式化金额
 * @param value：要格式化的数字
 */

let formatMoney = (value) => {
    if (value) {
        value = Number(value);
        return '￥ ' + value.toFixed(2);
    }
}


let formatNumber = (num) => {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1).replace(/.0$/, '') + 'w';
    }
    if (num >= 1000) {
        return (num / 1000).toFixed(1).replace(/.0$/, '') + 'k';
    }
    return num;
}

/**
 * @description 格式化金额
 * @param number：要格式化的数字
 * @param decimals：保留几位小数 默认0位
 * @param decPoint：小数点符号 默认.
 * @param thousandsSep：千分位符号 默认为,
 */

let formatMicrometer = (number, decimals = 2, decPoint = '.', thousandsSep = ',') => {
    number = (number + '').replace(/[^0-9+-Ee.]/g, '')
    let n = !isFinite(+number) ? 0 : +number
    let prec = !isFinite(+decimals) ? 0 : Math.abs(decimals)
    let sep = (typeof thousandsSep === 'undefined') ? ',' : thousandsSep
    let dec = (typeof decPoint === 'undefined') ? '.' : decPoint
    let s = ''
    let toFixedFix = function(n, prec) {
        let k = Math.pow(10, prec)
        return '' + Math.ceil(n * k) / k
    }
    s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.')
    let re = /(-?\d+)(\d{3})/
    while (re.test(s[0])) {
        s[0] = s[0].replace(re, '$1' + sep + '$2')
    }
    if ((s[1] || '').length < prec) {
        s[1] = s[1] || ''
        s[1] += new Array(prec - s[1].length + 1).join('0')
    }
    return s.join(dec)
}

/**
 * @description 首字符大写
 * @param number:要格式化的字符
 */

let formatToLowerCase = (number) => {
    if (number) {
        var i, ss = number.toLowerCase().split(/\s+/);
        for (i = 0; i < ss.length; i++) {
            ss[i] = ss[i].slice(0, 1).toUpperCase() + ss[i].slice(1);
        }
        return ss.join(' ');
    }
}

/**
 * @description 字符转换成大写
 * @param number:要格式化的字符
 */

let formatToLowerCaseAll = (number) => {
    if (number) {
        var i, ss = number.toLowerCase().split(/\s+/);
        for (i = 0; i < ss.length; i++) {
            ss[i] = ss[i].slice(0).toUpperCase();
        }
        return ss.join(' ');
    }
}

export default {
    sexIdcardFilter,
    IDcardHide,
    telHide,
    nameHide,
    formatMoney,
    formatNumber,
    formatMicrometer,
    formatToLowerCase,
    formatToLowerCaseAll
}