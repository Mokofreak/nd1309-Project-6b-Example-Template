const HDWalletProvider = require("@truffle/hdwallet-provider");
const MNEMONIC = "spirit supply whale amount human item harsh scare congress discover talent hamster";


module.exports = {
  networks: {
    ropsten: {
      provider: function() {
        return new HDWalletProvider(MNEMONIC, "https://ropsten.infura.io/v3/b0e16ae297d6475a9c493662e9e8ce1f")
      },
      network_id: 3,
      gas: 4000000,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    }
  }
};
