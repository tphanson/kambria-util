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

  * toBigNumber(): convert hex string to big number.

    ```
    Params:

    * hexString: <string> hex string

    Returns:

    * bigNumber: <BigNumber> big number
    ```

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

  * isAddress(): validate address format.

    ```
    Params:

    * address: <string> address

    Returns:

    * isValid: <boolean> is valid?
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

  * wei2ETH(): convert WEI to ETH.

    ```
    Params:

    * wei: <number/string> the number of WEI

    Returns:

    * eth: <string> the number of ETH
    ```

  * eth2WEI(): convert ETH to WEI.

    ```
    Params:

    * eth: <number/string> the number of ETH

    Returns:

    * wei: <string> the number of WEI
    ```

  * jager2BNB(): convert JAGER to BNB.

    ```
    Params:

    * jager: <number/string> the number of JAGER

    Returns:

    * bnb: <string> the number of BNB
    ```

  * bnb2JAGER(): convert BNB to JAGER.

    ```
    Params:

    * bnb: <number/string> the number of BNB

    Returns:

    * jager: <string> the number of JAGER
    ```

  * wkat2KAT(): convert Wei KAT (WKAT) to KAT.

    ```
    Params:

    * wkat: <number/string> the number of WKAT

    Returns:

    * kat: <string> the number of KAT
    ```

  * kat2WKAT(): convert KAT to WKAT.

    ```
    Params:

    * kat: <number/string> the number of KAT

    Returns:

    * wkat: <string> the number of WKAT
    ```

  * jbkat2BKAT(): convert Jager Binance KAT (JBKAT) to Binance KAT (BKAT).

    ```
    Params:

    * jbkat: <number/string> the number of JBKAT

    Returns:

    * bkat: <string> the number of BKAT
    ```

  * bkat2JBKAT(): convert BKAT to JBKAT.

    ```
    Params:

    * bkat: <number/string> the number of BKAT

    Returns:

    * jbkat: <string> the number of JBKAT
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