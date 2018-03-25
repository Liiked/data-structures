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

// 每次遍历将最小值插入到数据区间的最前面
// 将最大值放在数据区间的最后面

// average 5.15ms for 1000 data