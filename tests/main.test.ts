import dirToObj from 'dir-contents-object';
import * as assert from 'assert';
import copy from '..';

it('Main', async () => {
  const src = './tests/data';
  const dest = await copy(src);
  assert.notEqual(src, dest);
  assert.deepEqual(await dirToObj(dest), {
    a: {
      b: {
        'b.txt': 'B',
      },
    },
    'a.txt': 'A',
  });
});
