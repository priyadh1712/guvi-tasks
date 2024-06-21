const calculateSum = function(arr) {
    let sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum);
};

calculateSum([1,2,3,4,5]);