import {randomBytesAsync} from './crypto';
import {Keypair} from 'digitalbits-sdk';

Keypair.randomAsync = function randomAsync() {
    return randomBytesAsync(32)
        .then(secret => Keypair.fromRawEd25519Seed(secret));
};

Keypair.random = function random() {
    throw new Error('Use DigitalBits.Keypair.randomAsync for React Native');
};

export * from 'digitalbits-sdk';
export default module.exports;
