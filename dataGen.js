function genData(numElement) {
    this.storage = [];
    this.pos = 0;
    this.numElement = numElement;
    this.insert = insert;
    this.toString = toString;
    this.clear = clear;
    this.setData = setData;
    this.swap = swap;

    for (let index = 0; index < numElement; index++) {
        this.storage[index] = index;
    }

    function setData() {
        for (let index = 0; index < numElement; index++) {
            this.storage[index] = Math.floor(Math.random() * (this.numElement + 1));
        }
    }

    function clear() {
        this.storage.forEach(d => {
            d = 0;
        })
    }

    function insert(el) {
        this.storage[this.pos++] = el;
    }

    function toString() {
        let restr = '';
        this.storage.forEach((d, i) => {
            restr += d + ' ';
            if (i > 0 & i % 10 == 0) {
                restr += '\n'
            }
        })
        return restr;
    }
}

var nums = new genData(100)
nums.setData()
console.log(nums)