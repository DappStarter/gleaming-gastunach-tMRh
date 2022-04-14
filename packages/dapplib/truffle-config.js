require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess glimpse flame suspect notice crime remain umbrella inflict photo fortune sentence'; 
let testAccounts = [
"0x01ff9da3bcf7b1c034ad4ebc36252ad0339689aa8963e12cee4d35845a1e9d9f",
"0x06f2c7990bab0e2ab22ad2015117c320bbdeb1fedff5bb094ed0f7e3161555a9",
"0x0755f54c4ed01153b6b692fa24cc1dfd9a132a4736ff93d1afd556ed39fac332",
"0xd42dafe4cc471ec4b507f69453f4d9fc8a44b2351db5c595a7dbdb599ef30eda",
"0x46fe44cd5def4b43202d1be4edfd5eb01e6dc4528674cd07695cff6effe3944a",
"0xe1323be4b5ad8b3f64edebe127418152daa3900b4b93910382837f431f4dbb54",
"0x2641e68a0386fe4cdd78abf5ef18063e23847856c2f2a9652cdb10ae2ab74103",
"0xd46d4c6aed9743928776c23af6f82a12c76299aabc44b53c371aa3a1a65db88f",
"0x67d74d59e9a8e3398d3c8f73caf7fd753d8c518fbebe15bb01a852ae04165cfe",
"0xc65002d3b1296fd1114f2a84d8bd8d387d6ac0a325c03e17cd70455a96166b0b"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


