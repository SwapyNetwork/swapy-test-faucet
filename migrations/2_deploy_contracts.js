const Faucet = artifacts.require('./Faucet.sol');
const Token = artifacts.require('./Token.sol');
const BigNumber = web3.BigNumber;

module.exports = function(deployer) {
  const rate = new BigNumber(300);
  deployer.deploy(Token).then(deployed => {
    return deployer.deploy(Faucet,rate, Token.address).then((deployed) => {
      console.log(`Token: ${Token.address}`);
      console.log(`Faucet: ${Faucet.address}`);
    }); 
  })
};
