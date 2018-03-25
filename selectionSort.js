function selectionSort(arr) {
    for (let outer = 0; outer <= arr.length -2; ++outer) {
        let min;
        let temp = null;
        for (let inner = outer; inner <= arr.length - 1; ++inner) {
            if (!temp && temp !== 0) {
                temp = arr[inner]
                min = inner;
            }
            if (temp > arr[inner + 1]) {
                temp = arr[inner + 1];
                min = inner + 1;
            }
        }
        swap(arr, outer, min)
    }
}


function swap(arr, index1, index2) {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]]
}

// 将最小值不断向左输送
// average 7.22ms for 1000 data