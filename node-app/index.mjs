import fs from 'fs'

fs.appendFile('my-file.txt', 'File has been created Node.js', (err) => {
if (err) throw err
console.log('File saved!')
})

setTimeout(() => console.log('The end'), 10000)