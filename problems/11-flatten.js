/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Do not use the built in Array.flat.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/

function flatten(arr) {
    debugger;
    const result = [];
    arr.forEach((item) => {
        if (Array.isArray(item)) {
            result.push(...flatten(item));
        } else {
            result.push(item);
        }
    });
    return result;
}

// function flatten(arr) {
//     let flattened = [];

//     if (arr.length === 0) {
//         return flattened;
//     }

//     for (let element of arr) {
//         if (Array.isArray(element)) {
//             flattened = flattened.concat(flatten(element));
//         } else {
//             flattened.push(element);
//         }
//     }
//     return flattened;
// }

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = flatten;
