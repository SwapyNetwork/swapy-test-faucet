const ether = require('./helpers/ether.js');

const BigNumber = web3.BigNumber;

// helpers
const should = require('chai')
    .use(require('chai-as-promised'))
    .should()
const expect = require('chai').expect;

// --- Handled contracts
const Faucet = artifacts.require("./Faucet.sol");
const Token = artifacts.require("./token/Token.sol");

// --- Test variables
let token = null;
let faucet = null;
// agents
let Swapy = null;
let user = null;

contract('Faucet', accounts => {

    const rate = new BigNumber(300);
    const value = ether(40);
    
    const expectedTokenAmount = rate.mul(value)
     
    before( async () => {
        Swapy = accounts[0];
        user = accounts[1];
        faucet = await Faucet.new(rate, { from: Swapy });
        let tokenAddress = await faucet.token.call();
        token = await Token.at(tokenAddress);
    })
    
    it("should be token owner", async() => {
        const owner = await token.owner.call();
        owner.should.equal(faucet.address);
    })

})
