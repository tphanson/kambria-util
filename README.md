## Introduction

This lib supports for Kambria dev

## Prerequisite

Install node modules

```
npm install --save @kambria/kambria-util
```

## How to test?

Stay at root folder and run this command:

```
npm test
```

## How to use for production?

### Using in Nodejs:

```
var generator = require('@kambria/kambria-util');
```


### Using in React:

```
import generator from '@kambria/kambria-util';
```

### Methods

* Hex lib: `kamUtil.hex`

  * padHex(): add prefix `0x` to hex string.

    ```
    Params:

    * hexString: <string> hex string

    Returns:

    * hexStringWithPrefix: <string> hex string with prefix added
    ```

  * unpadHex(): remove prefix `0x` to hex string.

    ```
    Params:

    * hexString: <string> hex string

    Outputs:

    * hexStringWithoutPrefix: <string> hex string without prefix
    ```

  * mergeHex(): merge hex strings into one hex string.

    ```
    Params:

    * hexString: <string> hex string

    * ...otherHexString: <string> hex string

    Outputs:

    * concatenatedHexString: <string> concatenated hex string with prefix
    ```

* Net lib: `kamUtil.net`

  * getNetName(): get network name.

    ```
    Params:

    * chainId: <string/number> chain id

    Returns:

    * name: <string> lowercase network name
    ```

  * formalizeAddress(): validate and return address.

    ```
    Params:

    * address: <string> address

    Returns:

    * returnedAddress: <string> valid-lowercase address
    ```

* Secure lib: `kamUtil.secure`

  * rand(): generate a securely random number.

    ```
    Params:

    * bits: <number> the number of bits

    Returns:

    * randNumber: <string> a random number
    ```

* Unit lib: `kamUtil.unit`

  * wkat2KAT(): convert WKAT to KAT.

    ```
    Params:

    * wkat: <number/string> the number of wei KAT

    Returns:

    * kat: <string> the number of KAT
    ```

  * kat2WKAT(): convert KAT to WKAT.

    ```
    Params:

    * kat: <number/string> the number of KAT

    Returns:

    * wkat: <string> the number of wei KAT
    ```

### Examples

```
var kamUtil = require('@kambria/kambria-util');

const wkat = '1000000000000000000';

var kat = kamUtil.unit.wkat2KAT(wkat);
console.log(kat); // 1 KAT

```

## Cheatsheet

| # | Commands | Descriptions |
| :-: | - | - |
| 1 | `npm install` | Install module packages |
| 5 | `npm run build` | Build javascript libraries for contracts |
| 6 | `npm test` | Run mocha unit tests |