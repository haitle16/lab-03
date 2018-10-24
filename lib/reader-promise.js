'use strict';

const fs = require('fs');
// const readFile = util.promisy(fs.readFile);
let contents = [];
/**
 * Our module exports a single function that expects an array of files
 * @type {function(*=)}
 */
module.exports = exports = (files, callback) => {
  readAll([...files],callback);
  contents = [];
};

/**
 * This wraps the fs module, primarily so that we can more easily write tests around it.
 * @param file
 * @param callback
 */
const readOne = (file, callback) => {
  fs.readFile( file, (err, data) => {
    if(err) { callback(err); }
    else { callback(undefined, data); }
  });
};

//const readOne = (file) => {
//  return readFile(file);
//};

/**
 * Reads and returns the contents of 3 files
 * Requires 3 paths, otherwise, it'll fail with aggression
 * @param paths
 */
const readAll = (paths, callback) => {

  let contents = [];
  const promise = new Promise(function(resolve) {
    readOne(paths[0], (err, data) => {
      if (err) {
        console.log(callback(err));
        callback(err);
      }
      else {
        console.log('Read File 1');
        contents.push(data.toString().trim());
      }
      resolve('Success');
    });
  })
    .then(() =>{
      readOne(paths[1], (err, data) => {
        if (err) {
          console.log(callback(err));
          callback(err);
        }
        else {
          console.log('Read File 2');
          contents.push(data.toString().trim());
        }
        // console.log(result);
      });
    })
    .then(() => {
      readOne(paths[2], (err, data) => {
        if (err) {
          console.log(callback(err));
          callback(err);
        }
        else {
          console.log('Read File 3');
          contents.push(data.toString().trim());
        }
        // console.log(contents);
        // uncomment the line above to see the array of informations within the .txt files
      });
    });

  callback(null,contents);

};

