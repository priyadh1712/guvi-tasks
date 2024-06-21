const printOddNumbers = function(arr) {
    for (var i = 0; i < arr.length; i++) {
        if ((arr[i] % 2) != 0) {
            console.log(arr[i]);
        }
    }
};

printOddNumbers([1,2,3,4,5]);