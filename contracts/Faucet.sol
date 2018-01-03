pragma solidity ^0.4.18;

import './token/Token.sol';
import "zeppelin-solidity/contracts/math/SafeMath.sol";

contract Faucet {

  using SafeMath for uint256;

  address public owner;
  uint256 public rate;
  Token public token;

  event TokenDistribution(address beneficiary, uint256 amount);

  function Faucet (uint256 _rate) {
      owner = msg.sender;
      rate = _rate;
      token = createToken();
  }

  function () payable public {
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
