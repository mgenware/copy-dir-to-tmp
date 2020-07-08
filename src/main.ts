import * as tempy from 'tempy';
import { ncp } from 'ncp';

export default function copyToTmp(dirPath: string): Promise<string> {
  const tmpDir = tempy.directory();

  return new Promise<string>((resolve, reject) => {
    ncp(dirPath, tmpDir, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve(tmpDir);
      }
    });
  });
}
