function insertionSort(array) {
    for (let later = 1; later < array.length; later++) {
        let key = array[later];
        let former = later - 1;
        while (array[former] > key) {
            array[former + 1] = array[former];　
            former--;
        }
        array[former + 1] = key;
    }
    return array;
}

// 自己实现的版本

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let outer = arr[i];
        for (var j = i; j > 0;) {
            let inner = arr[j];
            let former = arr[j - 1];
            if (former > outer) {
                arr[j] = former;
            } else {
                break;
            }
            j--;
        }
        arr[j] = outer;
    }
    return arr;
}

// 每次遍历将最小值插入到数据区间的最前面
// 将最大值放在数据区间的最后面

// average 5.15ms for 1000 data