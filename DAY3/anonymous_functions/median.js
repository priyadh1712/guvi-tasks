const findMedian = function(arr1, arr2) {
    const mergedArray = [...arr1, ...arr2].sort((a, b) => a - b);
    const len = mergedArray.length;
    let median;

    if (len % 2 === 0) {
        median = (mergedArray[len / 2 - 1] + mergedArray[len / 2]) / 2;
    } else {
        median = mergedArray[Math.floor(len / 2)];
    }
    console.log(median);
};

findMedian([1,3,5],[2,4,6]);