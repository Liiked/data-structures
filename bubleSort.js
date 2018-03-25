function bubbleSort(arr) {
    let len = arr.length;
    let temp;
    for (let outer = len; outer >= 2; --outer) {
        for (let inner = 0; inner <= outer - 1; ++inner) {
            if (arr[inner] > arr[inner + 1]) {
                swap(arr, inner, inner + 1)
            }
        }
    }
}

function swap(arr, index1, index2) {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]]
}
// 对数据做前后比较，将最大值向右输送，每一轮都能至少固定一个最大值
// average 5.68ms for 1000 data