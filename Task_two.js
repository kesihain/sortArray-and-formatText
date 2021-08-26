function sortArray(array) {
    let even = [];
    let odd = []
    array.forEach(item => {
        if (item % 2 == 0) {
            even.push(item)
        } else {
            odd.push(item)
        }
    });
    return {
        even: even,
        odd: odd
    }
}
let length = 50
let intArray = Array.from({ length: length }, () => Math.floor(Math.random() * length))
console.log(sortArray(intArray))