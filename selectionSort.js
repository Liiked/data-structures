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

// 自己实现的版本
function selectSort (arr) {
    for (let i = 0; i < arr.length; i++) {
        let outter = arr[i];
        let min;
        let position;
        for (let j = i; j < arr.length; j++) {
            const inner = arr[j];
            if (!min || inner < min) {
                min = inner;
                position = j;
            }
        }
        if (outter > min) {
            swap(arr, i, position)
        }
    }
    return arr;
}


function swap(arr, index1, index2) {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]]
}

// 将最小值不断向左输送
// average 7.22ms for 1000 data