(function(arr) {
    const Array = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (Array.indexOf(arr[i]) === -1) {
            Array.push(arr[i]);
        }
    }
    
    console.log(Array);
})([1, 2, 2, 3, 4, 4, 5]);
