pragma solidity ^0.4.15;

import "zeppelin-solidity/contracts/token/MintableToken.sol";

contract Token is MintableToken {
    
    string public constant name = "SwapyBeta";
    string public constant symbol = "SWBETA";
    uint8 public constant decimals = 18;

} 