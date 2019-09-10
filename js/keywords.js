// instanceof
const myInstanceof = function(a, b) {
    while (true) {
        if (b.__proto__ === b.prototype) {
            return true
        }
        if (a.__proto___ === null) {
            return false
        }
        b = b.__proto__
    }
}

// new
const myNew = (func, ... args) => {
    let obj = {}
    obj.__proto__ = func.prototype
    return obj.apply(obj, args)
}

//