'use strict';

// function collectSameElements(collectionA, collectionB) {
//     var k = 0;
//     var array = new Array();
//     for (var i = 0; i < collectionA.length; i++) {
//         for (var j = 0; j < collectionB.length; j++) {
//             if (collectionA[i] == collectionB[j]) {
//                 array[k++] = collectionB[j];
//             }
//         }
//     }
//     return array;
// }

function collectSameElements(collectionA, collectionB) {
    let k = 0;
    let array = new Array();
    collectionA.forEach(e => {
        collectionB.forEach(item => {
            if (e == item) array.push(item);
        })
    })
    return array;
}