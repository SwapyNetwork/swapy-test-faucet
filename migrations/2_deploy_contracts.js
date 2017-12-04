const Faucet = artifacts.require('./Faucet.sol');
const BigNumber = web3.BigNumber;

module.exports = function(deployer) {
  const rate = new BigNumber(300);
  deployer.deploy(Faucet, rate).then((deployed) => {
    Faucet.deployed().then(deployed => {
      deployed.token.call().then(token => {
        console.log(`Token: ${token}`);
      });
    });  
  });
};
