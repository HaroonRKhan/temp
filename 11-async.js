const { readFile, writeFile } = require('fs')

console.log('start')

readFile('./content/file.txt','utf8', (err, result) => {
    if(err) {
        console.log(err);
        return
    }
    const first = result;
    readFile("./content/file2.txt","utf8", (err, result) => {
        if(err) {
        console.log(err);
        return
    }
    const second = result;
    writeFile("./content/result-asyn.txt", 
    `here is the result: ${first}, ${second}`, {flag: 'a'}, (err, result) => {
        if(err) {
            console.log(err)
            return;
        }
        console.log("done with this task")
    })
    })
})
console.log('starting  a new task')
