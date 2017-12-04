const Faucet = artifacts.require('./Faucet.sol');

module.exports = function(deployer) {
  deployer.deploy(Faucet).then((deployed) => {
    Faucet.deployed().then(deployed => {
      deployed.token.call().then(token => {
        console.log(`Token: ${token}`);
      });
    });  
  });
};
