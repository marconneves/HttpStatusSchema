## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/).

Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```bash
$ npm install http-status-schema
```

## Features

- Declarations Types of name status error for functions

## Examples

First you need import the package for your project:

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


## License

  [MIT](LICENSE)
