'use strict';
const fs = require('fs');
const faker = require('faker');
let files = process.argv[2];
// console.log(files);
// if( ! (files instanceof Array && files.length) ) {
//   throw new Error('Invalid Args');
// }

// fileReader(files, (err,data) => {
//   if ( err ) { throw err; }
//   console.log('From Callback:', data);
// });

//


// console.log(process.argv.slice(2));

fs.readFile(files, function(err,data){
  if (err) { throw err;}
  console.log(data.toString().trim());
})
// append puts the files to the end while writefile erase everything and write into that file
let fakerContent = faker.random.word();
fs.appendFile(files, fakerContent, (err) =>{
  if (err) { throw err;}
  console.log(`New content added:  ${fakerContent}`);
});
