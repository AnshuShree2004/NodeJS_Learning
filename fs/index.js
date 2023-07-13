const fs = require('fs'); // built in method to use file system modulenin node js

// Topic 1 - read the file
// there are two ways through which it can be done :-
// 1. asynchronusly     2.synchronously

//read file by asynchronous way

/*console.log("...started reading file")
fs.readFile('index.txt',function(err,data){
    if(err){
        console.log('error in reading file',err)
    }
    else{
        console.log('data in the index.txt ',data.toString())
        console.log('successful !!!')
    }
}) */


// synchronous way
/*const data = fs.readFileSync('index.txt');
console.log('data',data.toString())*/

// read the file = open + read
/*const buf = new Buffer(1024);
fs.open('index.txt','r+',function(err,fd){
    if(err){
        console.log('error in opening file...')
    } else {
        console.log('success in opening file')
    }

    fs.read(fd, buf, 0, buf.length, 0, function(error,bytes){
        if(error){
            console.log('error in reading file..')
        }
        console.log('success in reading file')
        console.log('Data : ', buf.slice(0, bytes).toString())
    })

    // closing file
    fs.close(fd, function(err){
        if(err){
            console.log('error in closing file')
        } else {
            console.log('closed file successfully')
        }
    })
})*/

// writing file -- async
/*fs.writeFile('index.txt','Hello! developers....',function(err){
    if(err){
        console.log('error in writing file')
    } else {
        console.log('success in writing file..')
    }
})*/

// -- sync
//fs.writeFileSync('index.txt','...Anshu Shree');

//appending file
fs.appendFile('index.txt','Hello from developers...','utf-8',function(err){
if(err){
    console.log('error in appending file..')

}else{
    console.log('success in appending file')
}
})

fs.appendFileSync('index.txt','--Pw skills')


// delete the file
fs.unlink('index.txt1',function(err){
    if(err){
        console.log('error in deleting file',err)
    } else{
        console.log('success in deleting')
    }
})