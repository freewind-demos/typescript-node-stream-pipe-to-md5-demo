import fs from 'fs';
import crypto from 'crypto';

const md5Stream = fs.createReadStream('./package.json')
  .on('error', console.error)
  .pipe(crypto.createHash('md5').setEncoding('hex'));

md5Stream.once('finish', () => {
  const md5 = md5Stream.read()
  console.log('### md5', md5)
})
