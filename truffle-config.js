/*
 * NB: since truffle-hdwallet-provider 0.0.5 you must wrap HDWallet providers in a 
 * function when declaring them. Failure to do so will cause commands to hang. ex:
 * ```
 * mainnet: {
 *     provider: function() { 
 *       return new HDWalletProvider(mnemonic, 'https://mainnet.infura.io/<infura-key>') 
 *     },
 *     network_id: '1',
 *     gas: 4500000,
 *     gasPrice: 10000000000,
 *   },
 */

/* module.exports = {
    networks: {
        ganache: {
            host: "127.0.0.1",
            port: 7545,
            network_id: "*"
        },
        privatebc: {
            host: "127.0.0.1",
            port: 8545,
            network_id: "4224"
        },
    }
}; */


let ropstenProvider, mainNetProvider;

module.exports = {
  networks: {
    development: { host: "localhost", port: 7545, 
                   network_id: "*", gas: 4465030 },    
    ropsten: { provider: ropstenProvider, 
                   network_id: "3", gas: 4465030 },
    mainnet: { provider: mainNetProvider, 
                   network_id: "1", gas: 7500000 }
  }
};

