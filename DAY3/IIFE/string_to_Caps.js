(function(arr) {
    function toTitleCase(str) {
        return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
    }

    const titleCasedArray = arr.map(toTitleCase);
    console.log(titleCasedArray);
})([
    "hello world"
])