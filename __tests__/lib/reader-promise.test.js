'use strict';

jest.mock('fs');

const reader = require('../../lib/reader-promise.js');

describe('File Reader Module', () => {

  it('when given a bad file, returns an error', done => {
    let files = ['bad.txt'];
    // In jest, throwing errors obviously kills the app, so if you're
    // going to throw one in a test, have the expect execute your code as a
    // function so that you can trap it.
    reader(files, (err,data) => {
      expect(err).toBeDefined();
      done();
    });
  });


  it('reads 3 files', done => {
    let files = ['file1.txt', 'file2.txt', 'file3.txt'];
    reader(files, (err,data) => {
      expect(err).toBeNull();
      expect(data instanceof Array ).toBeTruthy();
      expect(files.length ).toBe(3);
      done();
    });
  });

  // it('can read more than 3 files', done =>{
  //   let files = ['file1.txt', 'file2.txt', 'file3.txt', 'file4.txt'];
  //   reader(files, (err,data) => {
  //     expect(data instanceof Array ).toBeTruthy();
  //     expect(data.length ).toBe(4);
  //     done();
  //   });
  it('testing file order', done =>{
    // let files = ['file1.txt', 'file2.txt', 'file3.txt', 'file4.txt'];
    let files = ['/Users/haile/codefellows/401/lab_assignments/lab-03/files/1.txt','/Users/haile/codefellows/401/lab_assignments/lab-03/files/2.txt','/Users/haile/codefellows/401/lab_assignments/lab-03/files/3.txt'];
    reader(files, (err,data) => {
      expect(data instanceof Array ).toBeTruthy();
      expect(data).toEqual(['File Contents']);
      done();
    });

  });
});
