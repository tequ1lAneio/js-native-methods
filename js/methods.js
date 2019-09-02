// map
Array.prototype.map = function(fn) {
    let newArr = []
    for (let i = 0; i < this.length; i++) {
        newArr.push(fn(this[i], i)) 
    }
    return newArr
}

// forEach
Array.prototype.map = function(fn) {
    for (let i = 0; i < this.length; i++) {
        newArr.push(fn(this[i], i, this))
    }
}

// filter
Array.prototype.map = function(fn) {
    let newArr = []
    for (let i = 0; i < this.length; i++) {
        if (fn(this[i], i, this)) {
            newArr.push(this[i])
        }
    }
    return newArr
}

// every
Array.prototype.every = function(fn) {
    let flag = true
    for (let i = 0; i < this.length; i++) {
        if (!fn(this[i], i , this)) {
            flag = false
            break
        }   
    }
    return flag
}

// some
Array.prototype.some = function(fn) {
    let flag = false
    for (let i = 0; i < this.length; i++) {
        if (fn(this[i], i, this)) {
            flag = true
            break
        }
    }
    return flag
}

// find
Array.prototype.find = function(fn) {
    for (let i = 0; i < this.length; i++) {
        if (fn(this[i], i, this)) {
            return this[i]
        }
    }
}

// findIndex
Array.prototype.findIndex = function(fn) {
    for (let i = 0; i < this.length; i++) {
        if (fn(this[i], i, this)) {
            return i
        }
    }
}

  
