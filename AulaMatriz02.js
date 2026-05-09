// ELEMENTOS DA DIAGONAL: 7, 5, 8

// [7, 5, 8]
// [6, 5, 7]
// [10, 9, 8]

let m = [   
 [4, 5, 11],
 [5, 9, 1],
 [8, 7, 3]
];

let somaDiagonal = 0;

for (let i=0; i<m.length; i++) {
    
    //i === j > diagonal
    somaDiagonal += m[i][i];
    
    console.log("Diagonal [" + i +"] [" + i + "] = " + m[i][i]);

}

console.log("soma da diagonal: " + somaDiagonal);