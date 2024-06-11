// SPDX-License-Identifier: GPL-3-or-later
pragma solidity ^0.6.0;

contract HelloWorld {

    string saySomething;

    constructor() public {
        saySomething = "Hello World!";
    }

    function speak() public view returns(string memory) {
        return saySomething;
    }
}
