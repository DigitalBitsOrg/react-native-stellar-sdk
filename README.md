# react-native-digitalbits-sdk

This package polyfills the [digitalbits-sdk](https://github.com/DigitalBitsOrg/js-digitalbits-sdk) for React Native.

It includes native randomBytes for iOS and Android via [react-native-randombytes](https://github.com/mvayngrib/react-native-randombytes).

Due to the asynchronous nature of React Native's native bridge, this package adds a new asynchronous method to the DigitalBits Keypair utility `randomAsync` which returns a promise that resolves to the new randomly generated Keypair.

## Installation

```shell
yarn add git+ssh://git@github.com/DigitalBitsOrg/react-native-digitalbits-sdk.git
```

Link native randomBytes module:

```shell
react-native link react-native-randombytes
```

## Usage

```javascript
import {Keypair} from 'react-native-digitalbits-sdk';

const keypair = Keypair.randomAsync().then(keypair => {
    const publicKey = keypair.publicKey();
    const secretKey = keypair.secret();
});
```
