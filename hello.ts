import fs from 'fs';

const stream = fs.createReadStream('./bigfile.bin',)

stream.on('open', (fd) => {
  console.log('### open', fd);
})

// - Buffer: no encoding passed
// - string: encoding passed
stream.on('data', (data: Buffer) => {
  console.log('### data', data);
})

stream.on('end', () => {
  console.log('### end')
})
