pragma solidity ^0.4.15;

import './token/Token.sol';
import 'zeppelin-solidity/contracts/math/SafeMath.sol';

contract Faucet {
  
  using SafeMath for uint256;

  address public owner;
  uint256 public rate = 10000; 
  Token public token;

  event TokenDistribution(address beneficiary, uint256 amount);

  function Faucet () {
      owner = msg.sender;
      token = createToken();
  }

  function () payable {
      transferTokens(msg.sender);
  }

  function transferTokens(address beneficiary) payable
    public
    returns(bool)
  {
    uint256 weiAmount = msg.value;
    // calculate token amount to be created
    uint256 tokens = weiAmount.mul(rate);
    token.mint(beneficiary, tokens);
    TokenDistribution(beneficiary, tokens);
    return true;
  }
 
  // creates the token to be sold.
  function createToken() internal returns (Token) {
    return new Token();
  }

}