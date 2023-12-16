// interacting with the filesystem
// synchronously or blocking code

const { readFileSync, writeFileSync } = require('fs');
console.log('Start');

const first = readFileSync('./content/first.txt', 'ascii')
const second = readFileSync('./content/second.txt', 'ascii')
//console.log(first, second)
writeFileSync(
    './content/result-sync.txt', `Here is the result: ${first}, ${second}`,{flag:'a'} //flag is one of the option of filewrite sync
    )
console.log('Done with this task');
console.log('Starting the next one');

/*              ---------- Why not Syncronous functions--? ?-----------
 *      the code is read line by line
 *      reading one file, then the second one and writing to the third one
 *      this takes good amount of time for one person accessing the files
 *      LET ALONE Billions of users !!!! APP GOES DOWN
 */