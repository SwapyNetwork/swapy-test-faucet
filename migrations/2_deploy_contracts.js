const Faucet = artifacts.require('./Faucet.sol');
const BigNumber = web3.BigNumber;

module.exports = function(deployer, network, accounts) {
  const rate = new BigNumber(300);
  deployer.deploy(Faucet, rate).then((deployed) => {
    Faucet.deployed().then(deployed => {
      deployed.token.call().then(token => {
        console.log(`Faucet: ${Faucet.address}`)
        console.log(`Token: ${token}`)
        console.log(`Deploy Owner: ${accounts[0]}`)
      });
    });  
  });
};
