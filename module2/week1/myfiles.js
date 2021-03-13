const fs = require('fs');

const name = 'Asif'
console.log(`Hallo ${name}`)


fs.writeFile('greetins.txt', 'name: ' + name,  (err) => {
    if (err) {
        console.log(err);
        return ''
    }
    console.log('Write data')
});
