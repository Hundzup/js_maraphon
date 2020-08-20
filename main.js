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

// второе

function formattedPhone(phone) {
    return phone.charAt(0) + phone.charAt(1) + ' ' +'('+phone.charAt(2)+phone.charAt(3) +phone.charAt(4) + ')'+' '+phone.charAt(5) + phone.charAt(6) + phone.charAt(7) + '-' + phone.charAt(8) + phone.charAt(9)+'-'+phone.charAt(10)+phone.charAt(11)
}

console.log(formattedPhone('+71234567890')); // +7 (123) 456-78-90