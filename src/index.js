exports.min = function min(array) {
    if (Array.isArray(array) && array.length) {
        let min = 0;
        array.forEach(element => {
            min = element < min ? element : min
        })
        return min;
    } else {
        return 0;
    }
}

exports.max = function max(array) {
    if (Array.isArray(array) && array.length) {
        let max = 0;
        array.forEach(element => {
            max = element > max ? element : max
        })
        return max;
    } else {
        return 0;
    }
}

exports.avg = function avg(array) {
    if (Array.isArray(array) && array.length) {
        let summ = 0;
        array.forEach(Element => {
            summ += Element
        })
        return summ / array.length
    } else {
        return 0;
    }
}
