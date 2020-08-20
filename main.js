//первое
const firstRow = 'мама мыла раму';
const secondRow = 'собака друг человека';
let first = 0
let second = 0
function getRow(firstRow, secondRow) {
    let i = firstRow.length
    if (i > secondRow.length) {
        i = secondRow.length
    }
    for (let k = 0; k<=i; k++) {
        if (firstRow.charAt(k) == 'а') {
            first++
        }
        if (secondRow.charAt(k) == 'а') {
            second++
        }
    }
    if (first > second) {
        return firstRow
    } else {
        return secondRow
    }
}

console.log(getRow(firstRow, secondRow)); // мама мыла раму
