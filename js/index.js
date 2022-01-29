let arr1 = ['js', 'css', 'html'];
let firstEl = arr1[0];
alert(`Первый элемент: ${firstEl}`);

let arr2 = [0, 1, false, 2, undefined, '', 3, null];
let filteredList = arr2.filter(function(currentEl) {
    return currentEl !== false && currentEl !== 0 && currentEl !== undefined && currentEl !== null && currentEl !== '';
});

alert(filteredList);