export function analyzeArray(arr) {
    return {
        average: getAverage(arr),
        min: getMin(arr),
        max: getMax(arr),
        length: getLength(arr),
    }
}

function getAverage(arr) {
    const sum = arr.reduce((prev, curr) => prev + curr, 0);

    return sum / getLength(arr);
}

function getMin(arr) {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    return min;
}

function getMax(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
}

function getLength(arr) {
    return arr.length;
}


