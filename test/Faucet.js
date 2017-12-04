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
    const value = ether(1);
    
    const expectedTokenAmount = rate.mul(value)
     
    before( async () => {
        Swapy = accounts[0];
        user = accounts[1];
        faucet = await Faucet.new(rate, { from: Swapy });
        const tokenAddress = await faucet.token.call();
        token = await Token.at(tokenAddress);
    })
    
    it("should be token owner", async() => {
        const owner = await token.owner.call();
        owner.should.equal(faucet.address);
    })

    it(`should transfer tokens by a rate of ${rate} tokens per eth`, async () => {
        const {logs} = await faucet.sendTransaction({ from: user, value });
        const event = logs.find(e => e.event === 'TokenDistribution')
        const args = event.args;
        expect(args).to.include.all.keys([
            'beneficiary',
            'amount'
        ]);
        const beneficiary = args.beneficiary;
        const amount = args.amount;
        beneficiary.should.equal(user);
        amount.toNumber().should.equal(expectedTokenAmount.toNumber());
    })

})
