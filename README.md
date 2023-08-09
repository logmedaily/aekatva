<h1 align="center">Welcome to @logmedaily/aekatva 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <img src="https://img.shields.io/badge/node-%3E%3D18.16.0-blue.svg" />
  <img src="https://img.shields.io/badge/npm-%3E%3D9.5.1-blue.svg" />
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
  <a href="https://twitter.com/logmedaily" target="_blank">
    <img alt="Twitter: logmedaily" src="https://img.shields.io/twitter/follow/logmedaily.svg?style=social" />
  </a>
</p>

> custom utilities such generating uuid{v1,v2,v3,v4,v5}, unique random number, unique random string, unique alpha numeric for some specific needs

### 🏠 [Homepage](https://github.com/logmedaily/aekatva)

## Prerequisites

- node >=18.16.0
- npm >=9.5.1

## Install

```sh
npm install @logmedaily/aekatva
```
## Usage

### Generate UUIDs (v1, v2, v3, v4, v5)

#### UUID v1

```javascript
const aekatva = require('@logmedaily/aekatva');



const aekatva = require('@logmedaily/aekatva');
const uuid_v1 = aekatva.uuid_v1();
console.log(uuid_v1); // Output will be a valid UUID v1

```

#### UUID v2

```javascript
const domain = 0xa;
const identifier = 1;
const uuid_v2 = aekatva.uuid_v2(domain, identifier);
console.log(uuid_v2); // Output will be a valid UUID v2

```


#### UUID v3

```javascript
const name = 'example.com';
const namespace = aekatva.uuid_v1(); // or another UUID
const uuid_v3 = aekatva.uuid_v3(name, namespace);
console.log(uuid_v3); // Output will be a valid UUID v3

```

#### UUID v4

```javascript
const uuid_v4 = aekatva.uuid_v4();
console.log(uuid_v4); // Output will be a valid UUID v4

```


#### UUID v5

```javascript
const name = 'example.com';
const namespace = aekatva.uuid_v1(); // or another UUID
const uuid_v5 = aekatva.uuid_v5(name, namespace);
console.log(uuid_v5); // Output will be a valid UUID v5

```

### Generate Unique Random Numbers (one time codes)

```javascript
const length = 10;
const randomNumericCode = aekatva.random_code_numeric(length);
console.log(randomNumericCode); // Output will be a unique numeric code of the given length

```

### Generate Unique Random Strings (One time code)
```javascript
const length = 10;
const randomStringCode = aekatva.random_code_strings(length);
console.log(randomStringCode); // Output will be a unique string of letters of the given length

```

### Generate Unique Alphanumeric Codes

```javascript
const length = 10;
const randomAlphanumericCode = aekatva.random_code_alphanumeric(length);
console.log(randomAlphanumericCode); // Output will be a unique alphanumeric code of the given length

```

## Run tests

```sh
npm run test
```

## Author

👤 **logmedaily**

* Website: https://github.com/logmedaily
* Twitter: [@logmedaily](https://twitter.com/logmedaily)
* Github: [@logmedaily](https://github.com/logmedaily)
* LinkedIn: [@logmedaily](https://linkedin.com/in/logmedaily)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/logmedaily/aekatva/issues). 

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_