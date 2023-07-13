const path = require('path')

const filePath ="C:\Users\iansh\OneDrive\Documents\Internship-Project\Netflix\script.js"

//console.log('separater  ',path.sep)
//console.log('path of the process ',process.env.PATH)
//console.log('delimilater ',path.delimiter)

const currFilePath = __filename;
//console.log('current path of the file ',currFilePath)


//console.log('base name of the current file ',path.basename(currFilePath))
//console.log('base name of the current file without extension ',path.basename(currFilePath , '.js'))
//console.log('path directory name of the current file ',path.dirname(currFilePath))


const pathToFile = path.format({
    dir : ' C:\Program Files (x86)\Common Files\Oracle\Java\javapath',
    base : 'app.js'
})
//console.log(pathToFile)



console.log('is current file path is absolute or not ',path.isAbsolute(currFilePath))
console.log('is current file path is absolute or not ',path.isAbsolute('/etc/config/'))
console.log('is current file path is absolute or not ',path.isAbsolute('./index.js'))
console.log('is current file path is absolute or not ',path.isAbsolute('../js/index.js'))

console.log('using join ',path.join('/home','js','dist','app.js'))
console.log('separate each word ',path.parse(currFilePath))

console.log('relative ',path.relative('C:\Users\iansh\OneDrive\Documents\NodeJS-Project\Path-module\path\app.js','C:\Users\iansh\OneDrive\Documents\path\app.js'))


console.log('resolve ',path.resolve(),__dirname)
console.log('normalize ',path.normalize('//home;/filr//@we'))