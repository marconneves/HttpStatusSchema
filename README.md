# HTTP Status Code

## Introduction

This lib is for abstract errors code from Status Code, lib for transcode a string to status code. <br/>
Implement errors from **[HTTP Status Code](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)**.


## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/package/http-status-schema).

Use npm:
```bash
$ npm install http-status-schema
```

Use yarn:
```bash
$ yarn add http-status-schema
```

## Features

- Declarations Types of name status error for functions

## Examples

First you need import the package for your project:

Convert string to status code:
```typescript
import { selectStatus, StatusName } from 'http-status-schema';

const numberError =  selectStatus('201 Created'); // Convert the name of status to number
// Return 201
```


Create an interface for the status code:
```typescript
import { selectStatus, StatusName } from 'http-status-schema';


class AppError {
  status: number;

  message: string;

  constructor(status: StatusName , message: string){
    this.status = selectStatus(status); // Convert the name of status to number
    this.message = message;
  }
}

```


****
This project is under the MIT license. See the [LICENSE][license-link] file for more details.

<!-- Markdown link & img's -->
[license-link]: /LICENSE
