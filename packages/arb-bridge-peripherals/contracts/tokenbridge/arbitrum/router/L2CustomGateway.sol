// SPDX-License-Identifier: Apache-2.0

/*
 * Copyright 2020, Offchain Labs, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

pragma solidity ^0.6.11;

import "./L2Gateway.sol";

contract L2CustomGateway is L2ArbitrumGateway {
    // stores addresses of L2 tokens to be used
    mapping(address => address) public l1ToL2Token;

    function initialize(address _l1Counterpart) public virtual override {
        super.initialize(_l1Counterpart);
    }

    /**
     * @notice internal utility function used to handle when no contract is deployed at expected address
     * @param l1ERC20 L1 address of ERC20
     * @param expectedL2Address L2 address of ERC20
     * @param deployData encoded symbol/name/decimal data for initial deploy
     */
    function handleNoContract(
        address l1ERC20,
        address expectedL2Address,
        bytes memory deployData
    ) internal virtual override returns (bool shouldHalt) {
        shouldHalt = false;
        // L1 gateway shouldn't allow this codepath to be triggered
        // TODO: trigger withdrawal instead of reverting
        revert("NO_CUSTOM_TOKEN");
    }

    function calculateL2TokenAddress(address l1ERC20)
        public
        view
        virtual
        override
        returns (address)
    {
        return l1ToL2Token[l1ERC20];
    }
}