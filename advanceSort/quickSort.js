function quickSort (arr) {
    if (arr.length  === 0) {
        return []
    }
    let lesser = [];
    let greater = [];
    let pivot = arr.shift();
    arr.forEach(d => {
        if (d < pivot) {
            lesser.push(d)
        } else {
            greater.push(d)
        }
    })
    return quickSort(lesser).concat(pivot, quickSort(greater));
}

// 增加空间，将数据根据基准值分成两组，小组和大组，通过递归传递又分别将两个组拆分，最终得到一个排序好的序列
// average 2.5ms for 1000 data