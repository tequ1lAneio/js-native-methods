// call
Function.prototype.call = function(context, ...args) {
    context.fn = this
    let res = context.fn(...args)
    delete context.fn
    return res
}

// apply
Function.prototype.apply = function(context, paramArr) {
    context.fn = this
    let res = context.fn(...paramArr)
    delete context.fn
    return res
}

// bind
Function.prototype.bind = function(context, ...args) {
    context.fn = this
    let res = context.fn(...args)
    delete context.fn
}

// bind
// Function.prototype.