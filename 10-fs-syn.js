const { readFileSync, writeFileSync } = require('fs')

console.log('start')

const first = readFileSync('./content/file.txt','utf8')
const second = readFileSync('./content/file2.txt','utf8')

//console.log(first, second)

writeFileSync("./content/result-syn.txt",
`here is the result: ${first}, ${second}`, {flag: 'a'}
)

console.log('done with this task')
console.log('starting new task')
