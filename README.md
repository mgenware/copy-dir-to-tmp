# copy-dir-to-tmp

[![Build Status](https://github.com/mgenware/copy-dir-to-tmp/workflows/Build/badge.svg)](https://github.com/mgenware/copy-dir-to-tmp/actions)
[![npm version](https://img.shields.io/npm/v/copy-dir-to-tmp.svg?style=flat-square)](https://npmjs.com/package/copy-dir-to-tmp)
[![Node.js Version](http://img.shields.io/node/v/copy-dir-to-tmp.svg?style=flat-square)](https://nodejs.org/en/)

Copy a directory to a temporary directory

## Installation

```sh
yarn add copy-dir-to-tmp
```

## Usage

```ts
import copyDirToTmp from 'copy-dir-to-tmp';

const dest = await copyDirToTmp('./src');
// `./src` is now copied to a temporary directory stored in `dest`.
```
