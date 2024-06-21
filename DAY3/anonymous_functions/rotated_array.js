const rotateArray = function(arr, k) {
    k = k % arr.length; 
    const rotatedArray = arr.slice(-k).concat(arr.slice(0, arr.length - k));
    console.log(rotatedArray);
};

rotateArray([1,2,3,4,5],2);