'use strict';

function collectSameElements(collectionA, collectionB) {
    // var n = 0;
    // var array = new Array();
    // for (var i = 0; i < collectionA.length; i++) {
    //     for (var j = 0; j < collectionB.length; j++) {
    //         for (var k = 0; k < collectionB[j].length; k++) {
    //             if (collectionA[i] == collectionB[j][k]) {
    //                 array[n++] = collectionB[j][k];
    //             }
    //         }
    //     }
    // }
    let n = 0;
    let array = [];
    collectionA.forEach(e => {
        collectionB.forEach(item => {
            item.forEach(i => {
                if (e == i) array.push(i);
            })
        })
    })
    return array;
}