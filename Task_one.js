
// function readTextFile() {
//     fetch('testing.txt')
//         .then(response => response.text())
//         .then(text => console.log(text))
//         .catch(error => console.log(error))
// }
// readTextFile()
const fs = require('fs')

fs.readFile('./raw_data.txt', 'utf8', (err, string) => {
    let result = '';
    let data = string.replace(/id=|name=|address=|gender=/g, '').split('\r\n')
    // console.log(data)
    data.forEach(item => {
        if (item.length > 1) {
            // console.log('trigger')
            let row = item.split(";")
            let addressString = row[2]
            let houseNo = addressString.split(/,| /g)[0]
            let postcode = addressString.match(/\b\d{5}\b/g)[0]
            let state = addressString.split(/,|\b\d{5}\b/g)[addressString.split(/,|\b\d{5}\b/g).length - 2]
            // console.log(state)
            result += `Student:${row[0]}\nName:${row[1]}\nHouse number:${houseNo}\nPostCode:${postcode}\nState:${state}\nGender:${row[3]}\n\n`
        }
    })

    fs.writeFile('formatted.txt', result, (err) => {

        // In case of a error throw err. 
        if (err) throw err;
    })
    console.log(result)
})



// Data which will write in a file. 
// let data = "Learning how to write in a file."
