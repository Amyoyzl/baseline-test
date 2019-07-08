'use strict';

function collectSameElements(collectionA, objectB) {
    // var n = 0;
    // var array = new Array();
    // for (var i = 0; i < collectionA.length; i++) {
    //     for (var j = 0; j < objectB.value.length; j++) {
    //         if (collectionA[i] == objectB.value[j]) {
    //             array[n++] = objectB.value[j];
    //         }
    //     }
    // }
    let n = 0;
    let array = [];
    collectionA.forEach(e => {
        objectB.value.forEach(item => {
            if (e == item) array.push(item);
        })
    })
    return array;
}