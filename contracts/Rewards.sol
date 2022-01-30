// SPDX-License-Identifier: MIT

pragma solidity 0.6.11;
pragma experimental ABIEncoderV2;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/cryptography/ECDSA.sol";
import "@openzeppelin/contracts/math/Math.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/SafeERC20.sol";
import "./interfaces/IRewards.sol";

abstract contract Rewards is Ownable, IRewards {
    using SafeMath for uint256;
    using ECDSA for bytes32;
    using SafeERC20 for IERC20;

    uint256 public claimableAmount;

    IERC20 public immutable override tokeToken;

    constructor(IERC20 token, address signerAddress) public {
        tokeToken = token;
    }

    function getClaimableAmount(Recipient calldata recipient)
        external
        view
        override
        returns (uint256)
    {
        return claimableAmount;
    }

    function setClaimableAmount(uint256 _claimableAmount)
        external
        returns (uint256)
    {
      claimableAmount = _claimableAmount;
    }

    function claim(
        Recipient calldata recipient,
        uint8 v,
        bytes32 r,
        bytes32 s // bytes calldata signature
    ) external override {
        require(claimableAmount > 0, "Invalid claimable amount");
        require(tokeToken.balanceOf(address(this)) >= claimableAmount, "Insufficient Funds");

        tokeToken.safeTransfer(recipient.wallet, claimableAmount);

        emit Claimed(recipient.cycle, recipient.wallet, claimableAmount);
    }
}

