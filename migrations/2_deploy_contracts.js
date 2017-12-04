const Faucet = artifacts.require('./Faucet.sol');

module.exports = function(deployer) {
  deployer.deployed(Faucet);
};
